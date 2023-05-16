import React from 'react';
import Carousel from 'flat-carousel';
import './Featuring.css';
import feat1 from '.././../../public/images/featuring/featuring1.jpeg';
import feat2 from '.././../../public/images/featuring/featuring2.jpeg';
import feat3 from '.././../../public/images/featuring/featuring3.jpeg';

function Featuring() {
  const images = [feat1, feat2, feat3];

  return (
    <Carousel>
      {images.map((image, index) => (
        <img className="object-cover" key={index} src={image} alt={image} />
      ))}
    </Carousel>
  );
}
export default Featuring;
