import React from 'react';
import styled from 'styled-components';
import { history } from '../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../shared/Cookie';

import { Button, Text, Image, Input } from '../elements';
import { actionCreators as userActions } from '../redux/modules/user';

const Header = (props) => {
  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.user.userInfo);
  const is_login = useSelector(state => state.user.is_login);

  const clickLogout = () => {
    dispatch(userActions.logOut());
  }

  return (
    <HeaderWrap>
      <HeaderTop>
        <Image
          is_width="121px"
          is_height="22px"
          src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png" 
        />
        {is_login ?
          <UserMenu>
            <UserMenuItem onClick={() => {
              history.push('/login');
            }}>
              {userInfo.name} 님
            </UserMenuItem>
            <UserMenuItem onClick={clickLogout}>
              로그아웃
            </UserMenuItem>
          </UserMenu> :
          <UserMenu>
            <UserMenuItem style={{color:"#5f0080"}}>
                회원가입
            </UserMenuItem>
            <UserMenuItem onClick={() => {
              history.push('/login');
            }}>
              로그인
            </UserMenuItem>
            <UserMenuItem>
              고객센터
            </UserMenuItem>
          </UserMenu>
        }
      </HeaderTop>

        <LogoWrap>
          <Logo>
            <LogoImg 
              onClick={() => {
                history.push('/');
              }}
              alt="logo" 
              src='https://res.kurly.com/images/marketkurly/logo/logo_x2.png' 
            />
          </Logo>
        </LogoWrap>
      <GnbWrap>
        <GnbList>
          <HamberWrap>
            <GnbHamberg/>
            전체 카테고리
          </HamberWrap>
          <GnbItem>
            신상품
          </GnbItem>
          <GnbItem>
            베스트
          </GnbItem>
          <GnbItem>
            알뜰쇼핑
          </GnbItem>
          <GnbItem>
            특가/혜택
          </GnbItem>
          <GnbSearchWrap>
            <GnbInput placeholder='검색어를 입력해주세요.' type="text" />
            <GnbInputImg />
          </GnbSearchWrap>
          <ButtonWrap>
            <Image is_width="36px" is_height="36px" src="https://res.kurly.com/pc/ico/2008/ico_delivery_setting.svg?ver=1" />
            <Image is_margin="0px 16px 0px 16px" is_width="36px" is_height="36px" src="https://res.kurly.com/pc/service/pick/btn-heart-off.svg" />
            <Image 
              is_width="36px" 
              is_height="36px" 
              src="https://res.kurly.com/pc/service/common/2011/ico_cart.svg" 
              _onClick={() => {
                history.push('/cart/ohyes')
              }}
            />
          </ButtonWrap>
        </GnbList>
      </GnbWrap>
      <SpaceDiv />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
 
`;

const HeaderTop = styled.div`
  margin: 0 auto;
  width: 1050px;
  height: 37px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserMenu = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  z-index: 100;
`;

const UserMenuItem = styled.li`
  height: 37px;
  padding: 0 12px;
  color: #333;
  white-space: nowrap;
  font-size: 12px;
  line-height: 35px;
  cursor: pointer;
`;

const LogoWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1050px;
  height: 63px;
`;

const Logo = styled.h1`
  margin: 0px;
  position: absolute;
  left: 0;
  bottom: 6px;
  width: 100%;
  text-align: center;
`;

const LogoImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 103px;
  height: 79px;
  cursor: pointer;
`;

const GnbWrap = styled.div`
  margin: 0 auto;
  width: 1050px;
  height: 55px;
  color: #333;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HamberWrap = styled.div`
  width: 148px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
`;

const GnbHamberg = styled.div`
  float: left;
  width: 16px;
  height: 14px;
  margin: 5px 14px 0 0;
  background: url('https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png') no-repeat;
`;

const GnbList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const GnbItem = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  width: 124px;
  letter-spacing: -0.3px;
`;

const GnbSearchWrap = styled.div`
  position: relative;
`;

const GnbInput = styled.input`
  width: 242px;
  height: 36px;
  margin-right: 12px;
  padding: 0 60px 0 14px;
  border: 1px solid #f7f7f6;
  border-radius: 18px;
  background-color: #f7f7f7;
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 12px;
  color: #666;
  line-height: 16px;
  outline: none;

  &::placeholder {
    color: #e2e2e2;
    font-weight: 700;
  }
`;

const GnbInputImg = styled.div`
  position: absolute;
  right: 20px;
  top: 3px;
  width: 30px;
  height: 30px;
  background-image: url('https://res.kurly.com/pc/service/common/1908/ico_search_x2.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const ButtonWrap = styled.div`
  right: 0;
  display: flex;
  justify-content: flex-end;
  width: 154px;
`;

const SpaceDiv = styled.div`
  position: absolute;
  top: 156px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 9px;
  background: url(https://res.kurly.com/pc/service/common/1902/bg_1x9.png) repeat-x 0 100%;
  z-index: 299;
`;


export default Header;