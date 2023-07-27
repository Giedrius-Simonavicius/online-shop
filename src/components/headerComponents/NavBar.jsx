import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavBar({ setSearchResults, resetFilterArr, tablet }) {
  function closeFn() {
    document.getElementById('myNav').style.width = '0%';
    document.getElementById('myNav').style.height = '0%';
    document.getElementById('myNav').style.zIndex = '-1';
    document.getElementById('myNav').style.padding = '0';
  }

  return (
    <div
      id="myNav"
      className={`${
        tablet
          ? 'onTop flex flex-col border-y-2 bg-white '
          : 'flex items-center gap-3'
      } `}
    >
      {tablet && (
        <button
          className="-mr-3 -mt-2 text-right text-3xl text-red-500"
          onClick={closeFn}
        >
          &times;
        </button>
      )}
      <NavLink
        onClick={() => setSearchResults([])}
        className={`${
          tablet
            ? 'mb-1 w-fit px-2 text-xl'
            : 'duration-300 hover:scale-110 hover:text-color3'
        } `}
        to={'all-products/laptops'}
      >
        Laptops
      </NavLink>
      <NavLink
        onClick={() => setSearchResults([])}
        className={`${
          tablet
            ? 'mb-1 w-fit px-2 text-xl'
            : 'duration-300 hover:scale-110 hover:text-color3'
        } `}
        to={'all-products/desktops'}
      >
        Desktop PC's
      </NavLink>
      <NavLink
        onClick={() => setSearchResults([])}
        className={`${
          tablet
            ? 'mb-1 w-fit px-2 text-xl'
            : 'duration-300 hover:scale-110 hover:text-color3'
        } `}
        to={'all-products/custom-pcs'}
      >
        Custom builds
      </NavLink>
      <NavLink
        onClick={() => setSearchResults([])}
        className={`${
          tablet
            ? 'mb-1 w-fit px-2 text-xl'
            : 'duration-300 hover:scale-110 hover:text-color3'
        } `}
        to={'all-products/monitors'}
      >
        Monitors
      </NavLink>
      <NavLink
        onClick={() => {
          setSearchResults([]);
          resetFilterArr();
        }}
        to={'all-products'}
        className={`${
          tablet
            ? 'mb-1 mt-2 w-fit rounded-full border-2 border-color3 px-2 py-1 text-xl'
            : 'rounded-full border-2 border-color3 p-1 pl-5 pr-5 text-color3 duration-300 hover:bg-color3 hover:text-white '
        }`}
      >
        Show all
      </NavLink>
    </div>
  );
}
NavBar.propTypes = {
  setSearchResults: PropTypes.func,
  resetFilterArr: PropTypes.func,
  tablet: PropTypes.bool,
  handleCloseNav: PropTypes.func,
};
export default NavBar;
