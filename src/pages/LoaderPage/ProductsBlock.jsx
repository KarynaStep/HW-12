import React from 'react';
import LoaderData from '../../components/LoaderData';
import { getProductsJSON } from '../../api';
import ViewProducts from '../../components/ViewProducts';
import ViewEvents from '../../components/ViewEvents';

const ProductsBlock = () => {
  return (
    <>
      <h2>Products:</h2>
      <ViewEvents />
    </>
  );
};

export default ProductsBlock;
