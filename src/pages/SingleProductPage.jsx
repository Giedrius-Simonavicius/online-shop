import React from 'react';
import { useParams } from 'react-router-dom';
import SingleProduct from '../components/SingleProduct';
import InfoAtSingleProduct from '../components/singleProductComponents/InfoAtSingleProduct';
import IntelCore from '../components/singleProductComponents/IntelCore';
import FeaturesSingleProd from '../components/singleProductComponents/FeaturesSingleProd';
import { useDataCtx } from '../context/DataProvider';

function SingleProductPage() {
  const { itemId } = useParams();
  const { allPrd } = useDataCtx();

  const foundProductObj = allPrd.find((product) => product.uid === itemId);

  return (
    <div>
      {foundProductObj ? (
        <SingleProduct product={foundProductObj} />
      ) : (
        <p>No information available for this product.</p>
      )}
      <IntelCore />
      <InfoAtSingleProduct />
      <FeaturesSingleProd />
    </div>
  );
}

export default SingleProductPage;
