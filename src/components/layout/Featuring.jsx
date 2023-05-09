import React from 'react';
import Carousel from 'flat-carousel';
import './Featuring.css';
import feat1 from '../../img/featuring/featuring1.jpeg';
import feat2 from '../../img/featuring/featuring2.jpeg';
import feat3 from '../../img/featuring/featuring3.jpeg';

function Featuring() {
  const images = [feat1, feat2, feat3];

  return (
    <Carousel>
      {images.map((image, index) => (
        <img key={index} src={image} alt={image} />
      ))}
    </Carousel>
  );
}
export default Featuring;
