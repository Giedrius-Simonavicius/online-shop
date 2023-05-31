import React, { useState } from 'react';
import DetailsAddCart from './singleProductComponents/DetailsAddCart';

function SingleProduct({ product }) {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto mt-6">
      <DetailsAddCart activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="flex">
        <div className="w-2/3 bg-color1">
          <h3 className="text-2xl">{product.name}</h3>
          {activeTab === 'about' && <p>{product.aboutProduct}</p>}
          {activeTab === 'details' && <p>Details</p>}
          {activeTab === 'specs' && <p>Specs</p>}
        </div>
        <img src={product.thumbnail} alt={product.name} />
      </div>
    </div>
  );
}

export default SingleProduct;
