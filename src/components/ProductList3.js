import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Products from "./Products";
import Pagination from "./Pagination";
import { actionCreators as productActions } from "../redux/modules/product";
import { useDispatch, useSelector } from "react-redux";

const ProductList3 = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const product_list = useSelector((state) => state.product.list);
  
  
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = parseInt(indexOfLast) - parseInt(postsPerPage);
  
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    
    return currentPosts;
  }

  useEffect(() => {
    dispatch(productActions.getProductDB());
  }, []);

  return (
    <ListWrap>
      <ProdustsWrap>
        <Products posts={currentPosts(product_list)}></Products>
      </ProdustsWrap>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={product_list.length}
        paginate={setCurrentPage}
      ></Pagination>
    </ListWrap>
  );
};

const ListWrap = styled.div`
  width: 1050px;
  margin: 0 auto;
  min-width: 1050px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 18px;
`;

const ProdustsWrap = styled.div`
  height: 100%;
`;

export default ProductList3;
