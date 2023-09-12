import React from 'react';
import LoaderData from '../../components/LoaderData';
import { getProductsJSON } from '../../api';
import ViewProducts from '../../components/ViewProducts';

const ProductsBlock = () => {
  return (
    <>
      <h2>Products:</h2>
      <LoaderData
        loadData={getProductsJSON}
        render={(state) => <ViewProducts state={state} />}
      />
    </>
  );
};

export default ProductsBlock;
