import React from 'react';
import Carousel from 'nuka-carousel';
import feat1 from '.././../../public/images/featuring/featuring1.jpeg';
import feat2 from '.././../../public/images/featuring/featuring2.jpeg';
import feat3 from '.././../../public/images/featuring/featuring3.jpeg';

function Featuring() {
  const images = [feat1, feat2, feat3];

  return (
    <div className="max-w-90vw container relative -z-20 mx-auto overflow-hidden">
      <Carousel
        renderBottomCenterControls={false}
        autoplay={true}
        wrapAround={true}
        renderCenterRightControls={({ nextSlide }) => false}
        renderCenterLeftControls={({ previousSlide }) => false}
      >
        {images.map((image, index) => (
          <img
            loading="lazy"
            className=""
            key={index}
            src={image}
            alt={image}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Featuring;
