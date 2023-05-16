import React from 'react';
import Carousel from 'flat-carousel';
import './Featuring.css';
import feat1 from '.././../../public/images/featuring/featuring1.jpeg';
import feat2 from '.././../../public/images/featuring/featuring2.jpeg';
import feat3 from '.././../../public/images/featuring/featuring3.jpeg';

function Featuring() {
  const images = [feat1, feat2, feat3];

  return (
    <div className="container mx-auto max-w-90vw overflow-hidden">
      <Carousel>
        {images.map((image, index) => (
          <img className="" key={index} src={image} alt={image} />
        ))}
      </Carousel>
    </div>
  );
}
export default Featuring;
