import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as productActions } from "../redux/modules/product";
import { Text } from "../elements";
import Product from "./Product";
import Pagination from "./Pagination";

const ProductList2 = (props) => {
  const dispatch = useDispatch();

  const product_list = useSelector((state) => state.product.list);

  useEffect(() => {
    dispatch(productActions.getProductDB(1));
  }, []);

  return (
    <>
      <ProductTitle>
        <p
          style={{
            margin: 0,
            marginBottom: "27px",
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
        {product_list.map((p, idx) => {
          return <Product key={idx} {...p} />;
        })}
      </ProductWrap>
      <PageButtonWrap>
        <PageButtonUl>
          {[...Array(5)].map((n, index) => {
            return (
            <PageButtonli key={index} onClick={() => {
              dispatch(productActions.getProductDB(index + 1));
            }}>
              {index + 1}
              </PageButtonli>
            );
          })}
        </PageButtonUl>
      </PageButtonWrap>
    </>
  );
};

const ProductWrap = styled.div`
  width: 1050px;
  margin: 0 auto;
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

const PageButtonWrap = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 80px;
  width: 1050px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageButtonUl = styled.ul`

`;

const PageButtonli = styled.li`
  display: inline-block;
  padding: 6px 0px;
  width: 34px;
  height: 34px;
  color: #4c4c4c;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #ddd;
  border-radius: 2px;
  text-align: center;

  &:hover {
    color: #5f0080;
    background-color: #eee;
    cursor: pointer;
  }
  &:focus::after {
    color: #5f0080;
    background-color: #eee;
  }
`;

export default ProductList2;
