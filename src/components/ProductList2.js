import React, { useEffect } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as productActions } from "../redux/modules/product";
import { Text } from "../elements";
import Product from "./Product";

const ProductList2 = (props) => {
  const dispatch = useDispatch();

  const product_list = useSelector((state) => state.product.list);

  useEffect(() => {
    dispatch(productActions.getProductDB());
  }, []);

  return (
      <>
      <Text is_margin={"12px auto"} is_width = {"180px"} is_size = {"20px"} is_blod>다른 상품도 구경해요~!</Text>
          <ProductWrap>
          {product_list.map((p, idx) => {
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

export default ProductList2;
