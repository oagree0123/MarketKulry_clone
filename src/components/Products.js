import React from 'react';
import styled from 'styled-components';
import Product from "./Product";
import { Text } from "../elements";

const Products = ({ posts }) => {
  return (
    <>
  <Text is_margin={"12px auto"} is_width = {"180px"} is_size = {"20px"} is_blod>다른 상품도 구경해요~!</Text>
          <ProductWrap>
          {posts.map((p, idx) => {
            return <Product key={idx} {...p} />;
          })}
        </ProductWrap>
  </>
  );
};
const ProductWrap = styled.div`
  width: 1050px;
  margin : 0 auto;
  min-width: 1050px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 18px;
`;
export default Products;