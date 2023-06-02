import React from 'react';
import { Link } from 'react-router-dom';

function Brands() {
  return (
    <div className="container mx-auto my-10 flex flex-wrap justify-between align-middle">
      <Link
        className="duration-200 hover:scale-115"
        to="https://ca.roccat.com/"
      >
        <img src="../../../public/images/brands/roccat.jpg" alt="roccat" />
      </Link>
      <Link
        className="duration-200 hover:scale-115"
        to="https://www.msi.com/index.php"
      >
        <img src="../../../public/images/brands/msi.jpg" alt="msi" />
      </Link>
      <Link
        className="duration-200 hover:scale-115"
        to="https://www.razer.com/"
      >
        <img src="../../../public/images/brands/razer.jpg" alt="razer" />
      </Link>
      <Link
        className="duration-200 hover:scale-115"
        to="https://www.thermaltake.com/"
      >
        <img
          src="../../../public/images/brands/thermaltake.jpg"
          alt="thermaltake"
        />
      </Link>
      <Link
        className="duration-200 hover:scale-115"
        to="https://www.adata.com/en/"
      >
        <img src="../../../public/images/brands/adata.jpg" alt="adata" />
      </Link>
      <Link
        className="duration-200 hover:scale-115"
        to="https://www.hp.com/us-en/home.html"
      >
        <img src="../../../public/images/brands/hp.jpg" alt="hp" />
      </Link>
      <Link
        className="duration-200 hover:scale-115"
        to="https://www.gigabyte.com/"
      >
        <img src="../../../public/images/brands/gigabyte.jpg" alt="gigabyte" />
      </Link>
    </div>
  );
}

export default Brands;
