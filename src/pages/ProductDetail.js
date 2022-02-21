import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Detail from '../components/Detail';

import { actionCreators as productActions } from '../redux/modules/product';

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  
  const product_id = props.match.params.id;

  const product_list = useSelector(state => state.product.list);
  const product_idx = product_list.findIndex(p => {
    return parseInt(p.productId) === parseInt(product_id);
  })

  const product = product_list[product_idx];

  useEffect(() => {
    if(product) {
      return;
    }
    dispatch(productActions.getOneProductDB(product_id));
  }, []);

  return (
    <>
      {product &&
        <Detail {...product} />
      }
    </>
  );
};


export default ProductDetail;