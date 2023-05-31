import React, { useState } from 'react';
import DetailsAddCart from './singleProductComponents/DetailsAddCart';

function SingleProduct({ product }) {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="container mx-auto mt-6">
      <DetailsAddCart activeTab={activeTab} onTabClick={handleTabClick} />
      <div className="flex">
        <div className="w-3/4 bg-color1 px-48 pb-10 pt-4">
          <p className="text-m my-sm capitalize">{product.category}</p>
          <h3 className="my-5 text-2xl">{product.name}</h3>
          {activeTab === 'about' && (
            <p className=" w-[30rem] text-sm">{product.aboutProduct}</p>
          )}
          {activeTab === 'details' && (
            <ul className="list-disc text-sm">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
          {activeTab === 'specs' && (
            <ul className="text-sm capitalize">
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key}>{`${key}: ${value}`}</li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex justify-between text-xs">
            <p>
              Have a Question?{' '}
              <button className="ml-2 text-color3">Contact Us</button>
            </p>
            <p>{product.productId}</p>
          </div>
        </div>
        <div className="mb-5 ml-10">
          <img className="h-64 w-64 " src={selectedImage} alt={product.name} />
          <div className="mt-2 flex w-1/5 gap-2">
            <img
              className="hover:cursor-pointer"
              src={product.thumbnail}
              alt="thumbnail"
              onClick={() => handleImageClick(product.thumbnail)}
            />
            <img
              className="hover:cursor-pointer"
              src="../../public/images/productImagesSample/1.jpg"
              alt="1"
              onClick={() =>
                handleImageClick(
                  '../../public/images/productImagesSample/1.jpg',
                )
              }
            />
            <img
              className="hover:cursor-pointer"
              src="../../public/images/productImagesSample/2.jpg"
              alt="2"
              onClick={() =>
                handleImageClick(
                  '../../public/images/productImagesSample/2.jpg',
                )
              }
            />
            <img
              className="hover:cursor-pointer"
              src="../../public/images/productImagesSample/3.jpg"
              alt="3"
              onClick={() =>
                handleImageClick(
                  '../../public/images/productImagesSample/3.jpg',
                )
              }
            />
            <img
              className="hover:cursor-pointer"
              src="../../public/images/productImagesSample/4.jpg"
              alt="4"
              onClick={() =>
                handleImageClick(
                  '../../public/images/productImagesSample/4.jpg',
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
