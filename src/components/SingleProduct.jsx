import React, { useEffect, useState } from 'react';
import DetailsAddCart from './singleProductComponents/DetailsAddCart';
import { NavLink } from 'react-router-dom';
import { useAuthCtx } from '../store/AuthProvider';

function SingleProduct({ product }) {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);
  const { setCartArr, cartArr } = useAuthCtx();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  function addToCart() {
    if (!product.inStock) {
      console.warn('Cannot add item. Product is out of stock.');
      return;
    }

    setCartArr((prevCartArr) => [...prevCartArr, product]);
  }

  useEffect(() => {
    console.log(cartArr);
  }, [cartArr]);

  return (
    <div>
      <DetailsAddCart
        activeTab={activeTab}
        onTabClick={handleTabClick}
        onAddToCart={addToCart}
      />

      <div className="container mx-auto">
        <div className="flex ">
          <div className="w-3/4 bg-color1 px-48 pb-10 pt-4">
            <p className="text-m my-sm capitalize">{product.category}</p>
            <h3 className="my-5 text-2xl">{product.name}</h3>
            <div className="flex w-[30rem]">
              {activeTab === 'about' && (
                <p className="  text-sm">{product.aboutProduct}</p>
              )}
              {activeTab === 'details' && (
                <ul className=" list-disc text-sm">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
              {activeTab === 'specs' && (
                <ul className=" text-sm capitalize">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <li key={key}>{`${key}: ${value}`}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-4 flex justify-between text-xs">
              <div className="flex">
                <p>Have a Question? </p>
                <NavLink
                  className="ml-2 text-color3 duration-200 hover:scale-110"
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </div>
              <p>{product.productId}</p>
            </div>
            {product.inStock ? (
              <p className="mt-6 text-color9">Item available</p>
            ) : (
              <p className="mt-6 text-color8">Out of stock</p>
            )}
          </div>
          <div className="mb-5 ml-10">
            <img
              loading="lazy"
              className="h-64 w-64 "
              src={selectedImage}
              alt={product.name}
            />
            <div className="mt-2 flex w-1/5 gap-2">
              <img
                loading="lazy"
                className="hover:cursor-pointer"
                src={product.thumbnail}
                alt="thumbnail"
                onClick={() => handleImageClick(product.thumbnail)}
              />
              <img
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
    </div>
  );
}

export default SingleProduct;
