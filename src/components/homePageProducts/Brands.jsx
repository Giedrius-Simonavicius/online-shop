import React from 'react';
import { Link } from 'react-router-dom';

function Brands({ small, container }) {
  return (
    <div
      className={`${
        small
          ? 'nd mx-auto my-3 flex w-[140px] flex-wrap gap-4 bg-white'
          : `${
              container ? 'container' : ''
            }  mx-auto my-10 flex flex-wrap justify-around align-middle`
      } `}
    >
      <h3 className={`${!small ? 'hidden' : 'mx-auto text-sm font-bold'}`}>
        Our friends
      </h3>
      <Link
        className={`${
          small
            ? 'w-[43%] duration-200 hover:scale-115 '
            : 'duration-200 hover:scale-115'
        } `}
        to="https://ca.roccat.com/"
      >
        <img loading="lazy" src="/images/brands/roccat.jpg" alt="roccat" />
      </Link>
      <Link
        className={`${
          small
            ? 'w-[43%] duration-200 hover:scale-115 '
            : 'duration-200 hover:scale-115'
        } `}
        to="https://www.msi.com/index.php"
      >
        <img loading="lazy" src="/images/brands/msi.jpg" alt="msi" />
      </Link>
      <Link
        className={`${
          small
            ? 'hidden  w-[43%] duration-200 hover:scale-115'
            : 'duration-200 hover:scale-115'
        } `}
        to="https://www.razer.com/"
      >
        <img loading="lazy" src="/images/brands/razer.jpg" alt="razer" />
      </Link>
      <Link
        className={`${
          small
            ? 'w-[43%] duration-200 hover:scale-115 '
            : 'duration-200 hover:scale-115'
        } `}
        to="https://www.thermaltake.com/"
      >
        <img
          loading="lazy"
          src="/images/brands/thermaltake.jpg"
          alt="thermaltake"
        />
      </Link>
      <Link
        className={`${
          small
            ? 'w-[43%] duration-200 hover:scale-115 '
            : 'duration-200 hover:scale-115'
        } `}
        to="https://www.adata.com/en/"
      >
        <img loading="lazy" src="/images/brands/adata.jpg" alt="adata" />
      </Link>
      <Link
        className={`${
          small
            ? 'w-[43%] duration-200 hover:scale-115 '
            : 'duration-200 hover:scale-115'
        } `}
        to="https://www.hp.com/us-en/home.html"
      >
        <img loading="lazy" src="/images/brands/hp.jpg" alt="hp" />
      </Link>
      <Link
        className={`${
          small
            ? 'w-[43%] duration-200 hover:scale-115 '
            : 'duration-200 hover:scale-115'
        } `}
        to="https://www.gigabyte.com/"
      >
        <img loading="lazy" src="/images/brands/gigabyte.jpg" alt="gigabyte" />
      </Link>
    </div>
  );
}

export default Brands;
