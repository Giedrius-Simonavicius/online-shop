import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ setSearchResults, resetFiltArr, mdScreen, tablet }) {
  const [isOpen, setIsOpen] = useState(true);
  function closeNav() {
    setIsOpen(false);
  }

  return (
    <div
      id="myNav"
      className={`${
        tablet ? 'flex  flex-col bg-white px-6 py-3' : 'flex items-center gap-3'
      } ${isOpen ? '' : 'hidden'}`}
    >
      {tablet && (
        <button
          className="-mr-3 -mt-2 text-right text-xl text-red-500"
          onClick={closeNav}
        >
          &times;
        </button>
      )}
      <NavLink
        onClick={() => setSearchResults([])}
        className={`${
          tablet
            ? 'mb-1 w-fit px-2 text-base'
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
            ? 'mb-1 w-fit px-2 text-base'
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
            ? 'mb-1 w-fit px-2 text-base'
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
            ? 'mb-1 w-fit px-2 text-base'
            : 'duration-300 hover:scale-110 hover:text-color3'
        } `}
        to={'all-products/monitors'}
      >
        Monitors
      </NavLink>
      <NavLink
        onClick={() => {
          setSearchResults([]);
          resetFiltArr();
        }}
        to={'/all-products'}
        className={`${
          tablet
            ? 'mb-1 mt-2 w-fit rounded-full border-2 border-color3 px-2 py-1 text-base'
            : 'rounded-full border-2 border-color3 p-1 pl-5 pr-5 text-color3 duration-300 hover:bg-color3 hover:text-white '
        }`}
      >
        Show all
      </NavLink>
    </div>
  );
}

export default NavBar;
