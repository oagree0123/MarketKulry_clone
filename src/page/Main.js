import React from "react";

import ProductList from '../components/ProductList';
import Ad from '../components/Ad';
import styled from 'styled-components';
import { useDispatch} from "react-redux"
import { actionCreators } from "../redux/modules/user";
import { Image } from '../elements';
const Main = () => {
  const dispatch = useDispatch();
  
  return (
    <>
      <MainContainer>
        <Ad/>
      <ProductList/>
      </MainContainer>
      <Image 
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYNDB2%2FbtrtHD4Rv9N%2FI5KK3iEwtIac41Mu3Ioktk%2Fimg.png"
        is_width="1050px"
        is_height="140px"
        is_margin="0 auto 40px auto" 
      />
    </>
  );
};
const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  word-break: break-all;
`;

export default Main;