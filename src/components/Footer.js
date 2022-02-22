import React from 'react';
import styled from 'styled-components';
import { Button, Text ,Image} from '../elements';
const Footer = props => {
	return (
		<FooterContainer>
            <InnerFooter>
			
					<InnerLeft >
						<Text 
                        is_size="20px" 
                        is_margin="0px 0px 22px 0px" 
                        is_bold>
							고객행복센터
						</Text>
                        <LeftDiv>
                            <div width="140px" line-height= "36px" >
						<Text 
                        is_bold 
                        is_size="28px" 
                        is_margin="0px 16px 0px 8px" 
                        is_padding="4px 0px 0px" 
                        is_color="#333333">
							1644-1107
						</Text>
                        </div>
                        <div>
                        <Text is_size="14px" is_color="#333333">365고객센터</Text>
                        <Text is_size="14px" is_color="grey">오전7시 - 오후7시</Text>
                        </div>
                        </LeftDiv>  
                        <LeftDiv>
						<Button
							is_padding="4px 0px 0px"
							is_width="140px"
							is_height="40px"
							is_margin="0px 16px 0px 0px"
							is_color="#333333"
							is_bold
							is_border="1px solid #e3e3e3"
							is_background="#ffffff"
						>
							카카오톡 문의
						</Button>
                        <div>
                        <Text is_size="14px" is_color="#333333">365고객센터</Text>
							<Text is_size="14px" is_color="grey">오전7시 - 오후7시</Text>
                            </div>
                        </LeftDiv>
                        
                        <LeftDiv>
						<Button
							is_padding="4px 0px 0px"
							is_width="140px"
							is_height="40px"
                            is_margin="0px 16px 0px 0px"
							is_color="#333333"
							is_bold
							is_border="1px solid #e3e3e3"
							is_background="#ffffff"
						>
							1:1 문의
						</Button>
                        <div>
                        <Text is_size="14px" is_color="#333333">24시간 접수 가능</Text>
							<Text is_size="14px" is_color="grey">고객센터 운영시간에 순차적으로 답변해드리게습니다.</Text>
                            </div>
                        </LeftDiv>
                        
                        <LeftDiv>
						<Button
							is_padding="4px 0px 0px"
							is_width="140px"
							is_height="40px"
                            is_margin="0px 16px 0px 0px"
							is_color="#333333"
							is_bold
							is_border="1px solid #e3e3e3"
							is_background="#ffffff"
						>
							대량주문 문의
						</Button>
                        <div>
                        <Text is_size="14px" is_color="grey">비회원의 경우 메일로 문의 바랍니다.</Text>
                        </div>
                        </LeftDiv>
					</InnerLeft>
		
				<InnerRight>
					<KurlyMenu>
						<Text 
                        is_size="14px" 
                        is_padding="0px 16px 0px 0px" 
                        is_color="#333333"
                        >컬리소개</Text>
						<Text 
                        is_size="14px" 
                        is_padding="0px 16px 0px 0px" 
                        is_color="#333333"
                        >컬리소개영상</Text>
						<Text 
                        is_size="14px" 
                        is_padding="0px 16px 0px 0px" 
                        is_color="#333333"
                        >인재채용</Text>
						<Text 
                        is_size="14px" 
                        is_padding="0px 16px 0px 0px" 
                        is_color="#333333"
                        >이용약관</Text>
						<Text 
                        is_size="14px" 
                        is_padding="0px 16px 0px 0px" 
                        is_color="#333333"
                        >개인정보처리방침</Text>
						<Text 
                        is_size="14px" 
                        s_padding="0px 16px 0px 0px" 
                        is_color="#333333"
                        >이용안내</Text>
					</KurlyMenu>

					<div>
						<Text is_size="12px" is_color="#999999" >
							법인명 (상호)&nbsp;:&nbsp;주식회사 컬리  |  사업자등록번호:261-81-23567{' '}
							<span style={{color: "#5f0080"}}>사업자정보 확인</span>
						</Text>
						<Text is_size="12px" is_color="#999999">통신판매업&nbsp;:&nbsp;제2018-서울강남-01646 호 |  개인정보보호책임자 : 이원준</Text>

						<Text is_size="12px" is_color="#999999">주소:서울시 도산대로 16길 20,이래빌딩 B1~4F |  대표이사 : 김슬아</Text>
						<Text is_size="12px" is_color="#999999">
							입점문의&nbsp;:&nbsp;<span style={{color: "#5f0080"}}>입점문의하기</span> |   마케팅제휴: <span style={{color: "#5f0080"}}> business@kurlycorp.com </span>
						</Text>
						<Text is_size="12px" is_color="#999999">
							채용문의&nbsp;:&nbsp;<span style={{color: "#5f0080"}}> recruit@kurlycorp.com</span>
						</Text>
						<Text is_size="12px" is_color="#999999">
							팩스&nbsp;:&nbsp;070 - 7500 - 6098 | 이메일 : <span style={{color: "#5f0080"}}> help@kurlycorp.com</span>
						</Text>
						<Text is_size="12px" is_color="#999999"> 대량주문 문의 &nbsp;:&nbsp;<span style={{color: "#5f0080"}}> kurlygift@kurlycorp.com </span></Text>
					</div>
                    <ButtonWrap>
                    <a href='https://fatchoi.tistory.com/manage/posts' ><Image src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" is_width="30px" is_height="30px"/></a>
                    &nbsp;&nbsp;&nbsp;
                    <a href='https://fatchoi.tistory.com/manage/posts' ><Image src="https://res.kurly.com/pc/ico/1810/ico_fb.png" is_width="30px" is_height="30px"/></a>
                    &nbsp;&nbsp;&nbsp;
                    <a href='https://fatchoi.tistory.com/manage/posts' ><Image src="https://res.kurly.com/pc/ico/1810/ico_blog.png" is_width="30px" is_height="30px"/></a>
                    &nbsp;&nbsp;&nbsp;
                    <a href='https://fatchoi.tistory.com/manage/posts' ><Image src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" is_width="30px" is_height="30px"/></a>
                    &nbsp;&nbsp;&nbsp;
                    <a href='https://fatchoi.tistory.com/manage/posts' ><Image src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" is_width="30px" is_height="30px"/></a>
                    </ButtonWrap>
				</InnerRight>
            </InnerFooter>
				<OutterFooter>
					<Flex>
						<img
							src="https://res.kurly.com/pc/ico/2001/logo_isms.png"
							alt="isms 로고"
							width="35px"
						/>
						<Text is_margin="0px 10px" is_size="10px">
							[인증범위]마켓컬리 쇼핑몰 서비스 개발 · 운영
							<br />
							[유효기간]2019.04.01~2022.03.31
						</Text>
					</Flex>
					<Flex>
						<img
							src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png"
							alt="eprivacy plus 로고"
							width="35px"
						/>
						<Text is_margin="0px 10px" is_size="10px">
							개인정보보호 우수 웹사이트 ·<br />
							개인정보처리시스템인증 (ePRIVACY PLUS)
						</Text>
					</Flex>
					<Flex2>
						<img
							src="https://res.kurly.com/pc/service/main/2009/logo_payments.png"
							alt="payments 로고"
							width="100px"
						/>
						<Text is_margin="0px 10px" is_size="10px">
							고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한
							<br />
							토스 페이먼츠 구매안전(에스크로)서비스를 이용하실 수 있습니다.
						</Text>
					</Flex2>
				</OutterFooter>
            <FooterFooter>

           <Text is_size="12px" is_color="#999999"> 마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.</Text>
           <Text is_size="12px" is_color="#999999">마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.</Text>
           <Text is_size="12px" is_color="#999999"> © KURLY CORP. ALL RIGHTS RESERVED</Text>
            </FooterFooter>
		</FooterContainer>
	);
};

export default Footer;
const ButtonWrap = styled.div`
display:flex;
padding: 45px 0px 0px;
`
const FooterFooter = styled.div`
background-color: #f7f7f7;
text-align: center;
    padding: 19px 0 27px;


`
const InnerLeft = styled.div`

`;
const InnerRight = styled.div`

`
const LeftDiv = styled.div`
display : flex;
padding : 16px 0px 0px;
`
const KurlyMenu = styled.ul`
	display: flex;
    padding: 0px 0px 29px;
	
`;
const OutterFooter = styled.div`
	margin: 0px auto;
    display: flex;
	font-size: 10px;
	color: #999999;
    width: 1050px;
    height: 82px;
    padding : 20px 0px 24px;
`;
const Flex = styled.div`
	display: flex;
     width: 267px;
     height: 34px;
	 
`;
const FooterContainer = styled.div`
width: 100%;
min-width: 1050px;
height: 507px;
margin: 0px auto;
`
const InnerFooter = styled.div`
width: 1050px;
height: 322px;
display: flex;
justify-content: space-between;
margin: 0px auto;
`;
const Flex2 = styled.div`
	display: flex;
     width: 428px;
     height: 34px;
`;