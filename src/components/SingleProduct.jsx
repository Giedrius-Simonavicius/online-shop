import React, { useState } from 'react';
import DetailsSpecs from './singleProductComponents/DetailsSpecs';
import { NavLink } from 'react-router-dom';
import { useGeneralCtx } from '../context/GeneralProvider';
import AddToCart from './singleProductComponents/AddToCart';
import PropTypes from 'prop-types';
function SingleProduct({ product }) {
  const { mdScreen, smScreen } = useGeneralCtx();
  const [activeTab, setActiveTab] = useState('about');
  const [selectedImage, setSelectedImage] = useState(product.thumbnailURL);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return smScreen ? (
    <div>
      <div className="mb-5 px-1">
        <img
          loading="lazy"
          className="mx-auto h-64 w-64"
          src={selectedImage}
          alt={product.name}
        />
        <div className="mt-2 flex w-full gap-3 overflow-x-auto">
          <img
            loading="lazy"
            className="h-36 w-36 hover:cursor-pointer"
            src={product.thumbnailURL}
            alt="thumbnailURL"
            onClick={() => handleImageClick(product.thumbnailURL)}
          />
          <img
            loading="lazy"
            className="h-36 w-36 hover:cursor-pointer "
            src="/images/productImagesSample/1.jpg"
            alt="1"
            onClick={() =>
              handleImageClick('/images/productImagesSample/1.jpg')
            }
          />
          <img
            loading="lazy"
            className="h-36 w-36 hover:cursor-pointer "
            src="/images/productImagesSample/2.jpg"
            alt="2"
            onClick={() =>
              handleImageClick('/images/productImagesSample/2.jpg')
            }
          />
          <img
            loading="lazy"
            className="h-36 w-36 hover:cursor-pointer "
            src="/images/productImagesSample/3.jpg"
            alt="3"
            onClick={() =>
              handleImageClick('/images/productImagesSample/3.jpg')
            }
          />
          <img
            loading="lazy"
            className="h-36 w-36 hover:cursor-pointer "
            src="/images/productImagesSample/4.jpg"
            alt="4"
            onClick={() =>
              handleImageClick('/images/productImagesSample/4.jpg')
            }
          />
        </div>
      </div>
      <div className="my-6">
        <DetailsSpecs
          activeTab={activeTab}
          onTabClick={handleTabClick}
          product={product}
        />
        <div className="flex">
          <div className="pb-10 pt-4 sm:px-6 ">
            <p className="text-base capitalize">{product.category}</p>
            <h3 className="my-5 text-2xl lg:text-xl">{product.name}</h3>
            <div className="flex w-fit">
              {activeTab === 'about' && (
                <p className=" text-sm lg:text-xs">{product.aboutProduct}</p>
              )}
              {activeTab === 'details' && (
                <ul className=" list-disc text-sm lg:text-xs">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
              {activeTab === 'specs' && (
                <ul className="text-sm capitalize lg:text-xs">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <li key={key}>{`${key}: ${value}`}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-4 flex justify-between gap-2 text-xs">
              <div className="flex">
                <p>Have a Question? </p>
                <NavLink
                  className="ml-2 text-color3 duration-200 hover:scale-110"
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </div>
              <p className="lg:text-xxs">{product.productId}</p>
            </div>
            {product.inStock ? (
              <p className="mt-6 text-color9 lg:text-sm">Item available</p>
            ) : (
              <p className="mt-6 text-color8 lg:text-sm">Out of stock</p>
            )}
          </div>
        </div>
        <AddToCart product={product} />
      </div>
    </div>
  ) : (
    <div>
      <div className="flex items-center justify-between border-y-2 px-3 py-3 text-xs sm:text-xxs md:my-4">
        <DetailsSpecs
          activeTab={activeTab}
          onTabClick={handleTabClick}
          product={product}
        />

        <AddToCart product={product} />
      </div>

      <div className="container mx-auto">
        <div className="flex">
          <div className="w-3/4 bg-color1 px-48 pb-10 pt-4 md:px-3 lg:px-12 ">
            <p className="my-sm text-base capitalize lg:text-sm">
              {product.category}
            </p>
            <h3 className="my-5 text-2xl lg:text-xl">{product.name}</h3>
            <div className="flex w-fit">
              {activeTab === 'about' && (
                <p className="w-[50vw] text-sm lg:text-xs">
                  {product.aboutProduct}
                </p>
              )}
              {activeTab === 'details' && (
                <ul className=" list-disc text-sm lg:text-xs">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
              {activeTab === 'specs' && (
                <ul className="text-sm capitalize lg:text-xs">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <li key={key}>{`${key}: ${value}`}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-4 flex justify-between gap-2 text-xs lg:text-xxs">
              <div className="flex">
                <p>Have a Question? </p>
                <NavLink
                  className="ml-2 text-color3 duration-200 hover:scale-110"
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </div>
              <p className="lg:text-xxs">{product.productId}</p>
            </div>
            {product.inStock ? (
              <p className="mt-6 text-color9 lg:text-sm">Item available</p>
            ) : (
              <p className="mt-6 text-color8 lg:text-sm">Out of stock</p>
            )}
          </div>
          <div className="mb-5 ml-10 px-3">
            <img
              loading="lazy"
              className="h-64 w-64 "
              src={selectedImage}
              alt={product.name}
            />
            <div
              className={`${
                mdScreen
                  ? 'mt-2 flex w-full  overflow-x-auto'
                  : 'mt-2 grid w-full grid-cols-5 gap-2 lg:grid-cols-3'
              }`}
            >
              <img
                loading="lazy"
                className="hover:cursor-pointer"
                src={product.thumbnailURL}
                alt="thumbnailURL"
                onClick={() => handleImageClick(product.thumbnailURL)}
              />
              <img
                loading="lazy"
                className="hover:cursor-pointer"
                src="/images/productImagesSample/1.jpg"
                alt="1"
                onClick={() =>
                  handleImageClick('/images/productImagesSample/1.jpg')
                }
              />
              <img
                loading="lazy"
                className="hover:cursor-pointer"
                src="/images/productImagesSample/2.jpg"
                alt="2"
                onClick={() =>
                  handleImageClick('/images/productImagesSample/2.jpg')
                }
              />
              <img
                loading="lazy"
                className="hover:cursor-pointer"
                src="/images/productImagesSample/3.jpg"
                alt="3"
                onClick={() =>
                  handleImageClick('/images/productImagesSample/3.jpg')
                }
              />
              <img
                loading="lazy"
                className="hover:cursor-pointer"
                src="/images/productImagesSample/4.jpg"
                alt="4"
                onClick={() =>
                  handleImageClick('/images/productImagesSample/4.jpg')
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
SingleProduct.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    thumbnailURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    aboutProduct: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    specs: PropTypes.object.isRequired,
    productId: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
  }).isRequired,
};
export default SingleProduct;
