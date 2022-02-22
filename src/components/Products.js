import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { Text } from "../elements";

const Products = ({ posts }) => {
  return (
    <>
    <ProductTitle>
      <p style={{
        margin: 0,
        padding: "8px",
        marginTop: "32px",
        fontSize: "28px",
        lineHeight: 1.15,
        fontWeight: 500,
      }}
      >
        다른 상품도 구경해요
      </p>
    </ProductTitle>
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
  margin: 0 auto;
  margin-top: 27px;
  min-width: 1050px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 18px;
`;

const ProductTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Products;
