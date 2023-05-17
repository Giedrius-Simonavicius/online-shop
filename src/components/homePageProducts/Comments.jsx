import React from 'react';
import Carousel from 'nuka-carousel';

function Comments({ comments }) {
  const renderBottomRightControls = ({ currentSlide, slideCount }) => (
    <div
      className="flex justify-end mt-2 gap-1"
      style={{ marginBottom: '-15px' }}
    >
      {Array.from({ length: slideCount }).map((_, index) => (
        <span
          key={index}
          className={`h-2 w-2 bg-gray-300 rounded-full ${
            index === currentSlide ? 'bg-gray-800' : ''
          }`}
          style={{ marginTop: '10px' }}
        />
      ))}
    </div>
  );

  return (
    <div
      className="container mx-auto bg-color1 p-10 px-12 w-[60%]"
      style={{ marginTop: '50px' }}
    >
      <Carousel
        renderBottomRightControls={renderBottomRightControls}
        renderBottomCenterControls={false}
        wrapAround={true}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            className="carousel-control-button mt-8"
            onClick={previousSlide}
          >
            {'<'}
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button className="carousel-control-button mt-8" onClick={nextSlide}>
            {'>'}
          </button>
        )}
      >
        {comments.map((comment) => (
          <div key={comment.id}>
            <div className="flex ">
              <p className="text-7xl italic font-normal align-top mr-3">"</p>
              <p className="text-xs align-bottom">{comment.comment}</p>
            </div>
            <p className="text-xs text-right">- {comment.author}</p>
          </div>
        ))}
      </Carousel>
      <button className="text-xs p-1 border-color3 border-2 pl-5 pr-5 rounded-full text-color3">
        Leave Us A Review
      </button>
    </div>
  );
}

export default Comments;
