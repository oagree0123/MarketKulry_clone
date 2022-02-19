import React from "react";

import { useDispatch } from "react-redux"; 
import { actionCreators as userActions } from "../redux/modules/user";
import{ Button, Input} from "../elements/index"
import styled from "styled-components";


const Login = () =>{
    const dispatch =useDispatch()

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const login = () =>{
        if(username===""||password==""){
            window.alert("어허! 똑바로 입력하지 못 할까!!")
               return;
           }
        dispatch(userActions.logInMK(username,password))
    }

    return(
        <LoginContainer>
        <LoginWrap>
            <div>
            <h3>로그인</h3>
            </div>
            <div>
            <Input 
            placeholder={"아이디를 입력해주세요!"} 
            is_width={'340px'} 
            is_height={'54px'}
            _onChange = {(e)=>{
                setUsername(e.target.value)
            }}
            />
            </div>

            <div>
            <Input 
            placeholder={"비밀번호를 입력해주세요!"} 
            is_width={'340px'} 
            is_height={'54px'}  
            is_margin={"10px 0px 20px 0px"}
            _onChange = {(e)=>{
                setPassword(e.target.value)
            }}/>
            </div>
           
            <div>
                <Button 
                is_width={'340px'} 
                is_height={'54px'} 
                is_margin={"20px 0px 10px 0px"}  
                is_background={"#5f0080"} 
                is_color={"white"} 
                is_radius={"3px"} 
                _onClick={()=>{login()}}
                >로그인</Button>
            </div>
        </LoginWrap>
        <div>
            <Button 
            is_width={'340px'} 
            is_height={'54px'} 
            is_border={"1px solid #5f0080"} 
            is_background={"white"} 
            is_radius={"3px"}>회원가입</Button>
        </div>
        </LoginContainer>
        
    )
}

const LoginContainer = styled.div`
    border: 2px solid none;
    width: 340px;
    margin :0px auto
`
const LoginWrap = styled.div`
text-align: center;
`
export default Login;