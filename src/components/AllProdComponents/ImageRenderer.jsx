import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function ImageRenderer({ mainImg, link, title, smScreen }) {
  if (!mainImg) {
    return null;
  }

  const containerClasses = smScreen
    ? 'mr-10 flex h-[95px] w-full flex-col items-center justify-between bg-cover bg-center bg-no-repeat pl-2'
    : 'mr-10 flex-col rounded bg-cover bg-center bg-no-repeat pl-2';

  const titleClasses = smScreen
    ? 'flex h-full w-full justify-center pt-4 text-xl text-white'
    : 'flex h-full w-40 items-center justify-center text-center text-white';

  const linkClasses = smScreen
    ? 'mb-3 flex text-sm font-normal text-white underline duration-200 hover:scale-110 hover:text-color8'
    : '-mt-12 flex items-end justify-center text-center text-sm text-white underline duration-200 hover:scale-110 hover:text-color8';

  return (
    <div
      className={containerClasses}
      style={{
        backgroundImage: `url(${mainImg})`,
      }}
    >
      <h3 className={titleClasses}>{title}</h3>
      <NavLink to={link} className={linkClasses}>
        See All Products
      </NavLink>
    </div>
  );
}
ImageRenderer.propTypes = {
  mainImg: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  smScreen: PropTypes.bool,
};
export default ImageRenderer;
