import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';
import { actionCreators as productActions } from "../redux/modules/product";
import { Text,Button } from "../elements";

const CommentWrite = (props)=>{
    
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const product_list= useSelector((state)=>state.product);

    const preview = useSelector((state) => state.comment.preview);
console.log(product_list)
    const [count, setCount]=React.useState("");
    const _productName = "아직"
    const _productImg = "아직 후기 쓸 물건 사진"
    const [contents, setContents] = React.useState("");
    const [title, setTitle] = React.useState( "");
    const fileInput = React.useRef();
    const disable= (title==="" || contents==="")?true:false;
    

    React.useEffect(()=>{
        dispatch(productActions.getProductDB());
    }, []);


    const addComment = () => {
        if(title == '' || contents == '' ){
            window.alert("게시물을 다 넣어주세요!")
            return;
        };
        dispatch(commentActions.addCommentDB({ 
            title: title,
            contents: contents,
            img:fileInput.current.files[0]
            //fileInput.current.files[0] 
        }));
    };

    const changeTitle = (e) => {
        setTitle(e.target.value);
    };
    const changeContents = (e) => {
        setContents(e.target.value);
        setCount((e.target.value.length));
    };
    const selectFile = (e) => {
        
        const file = fileInput.current.files[0];
        const reader = new FileReader();
        
        reader.readAsDataURL(file);

        reader.onloadend = () => {

           dispatch(commentActions.setPreview(reader.result))

        };
    };

    return(
        <CommentContainer>
        <CommentTitle>
                <CommentTitleText>후기작성</CommentTitleText>
        </CommentTitle>
        <CommentContents>
        <CommentTop>
        {/* <img 
        src={productImg}
        alt="후기 작성하는 제품"
        /> */}
            {_productImg}
            {_productName}
        </CommentTop>
                   <tbody>
                <tr>
                    <CommentTh width="110px">제목</CommentTh>
                    <CommentTitleTd>
                        <CommentTitleInput
                     value={title}
                     onChange={changeTitle}
                     width="710px"
                     height="34px"
                     placeholder="제목을 입력해주세요."
                     />
                     </CommentTitleTd>
                </tr>
                <tr>
                    <CommentTh>후기작성</CommentTh>
                    <CommentTitleTd>
                    <CommentTextAreaWrap fontSize="12px">
                        <CommentTextArea 
                    value={contents}
                    onChange={changeContents}
                    type="text"
                    placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 되며,
                                일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시 검토 후 비공개 조치될 수 있습니다. 
                                반품/환불 문의는 1:1문의로 가능합니다."
                    /> 
                    <CommentCount >글자수 {count}</CommentCount>
                    </CommentTextAreaWrap></CommentTitleTd>
                </tr>
                <tr>
                    <CommentTh>사진등록</CommentTh>
                    <CommentTitleTd>
                        <input
                         className="fileInput"
                        type="file"
                        ref={fileInput}
                        onChange={selectFile}
                        accept="image/"
                    /> <img
                    width="78px"
                    height="78px"
                    className="writeImage"
                    
                    src={preview ? preview : "http://via.placeholder.com/400x300"}
                alt="미리보기"/></CommentTitleTd>
                </tr>
            </tbody>    
        
        </CommentContents>
        <CommentProble>
        혹시 상품에 문제가 있으셨나요? <span>1:1 문의하기</span>
        </CommentProble>
        <CommentButton>
            <Button 
            is_width="200px" 
            is_height="48px" 
            is_margin="0px auto"
            is_disabled={disable}
            _onClick={()=>{
                addComment()
            }}
            >등록하기</Button>
        </CommentButton>
        </CommentContainer>
    );
};
const CommentTitle = styled.div`
    width: 820px;
    height: 75px;
    font-size: 12px;
    padding: 5px 0px 34px;
    
`;
const CommentContents = styled.div`
    width: 820px;
    margin: 0 auto;
`;
const CommentContainer = styled.div`
    width: 820px;
    margin: 0 auto;
    padding: 0px 0px 60px 0px;
`;
const CommentProble =styled.p`
    width: 820px;
    height: 88px;
    padding: 20px 0 50px;
    font-size: 12px;
    color: #949296;
    line-height: 18px;
`;
const CommentButton =styled.div`
    width: 200px;
    height: 48px;
    margin: 0px auto;
`;
const CommentTextArea= styled.textarea`
    overflow: hidden;
    width: 100%;
    min-height: 202px;
    border: 0;
    resize: none;
    font-size: 12px;
    color: #000;
    line-height: 18px;
    outline: none;
    
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
`;
const CommentTitleTd= styled.td`
    border-top: 1px solid #dddfe1;
    padding:10px 0px 10px 10px;
    width: 710px;
`;
const CommentTh= styled.th`
    border-top: 1px solid #dddfe1;
    background-color: #f7f7f7;
    font-size: 12px;
    color: #666;    
`;
const CommentTitleInput=styled.input`
width: 100%;
    height: 34px;
    padding: 0 10px;
    border: 1px solid #dddfe1;
    font-size: 12px;
    color: #000;
    line-height: 18px;
    outline: none;
`;
const CommentTextAreaWrap=styled.div`    
padding: 8px 10px 9px;
border: 1px solid #dddfe1;
`;
const CommentCount=styled.p`
font-size: 12px;
    color: #949296;
    line-height: 18px;
    text-align: right;

`;
const CommentTop=styled.div`
overflow: hidden;
padding: 20px 15px;
border-top: 2px solid #5f0080;
`;
const CommentTitleText=styled.p`
height: 36px;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #333;
letter-spacing: -.5px;
`;
export default CommentWrite;