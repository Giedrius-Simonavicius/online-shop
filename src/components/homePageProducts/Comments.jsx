import React from 'react';
import Carousel from 'nuka-carousel';

function Comments({ comments }) {
  const renderBottomRightControls = ({ currentSlide, slideCount }) => (
    <div className="flex justify-end space-x-2 mt-2">
      {Array.from({ length: slideCount }).map((_, index) => (
        <span
          key={index}
          className={`h-2 w-2 bg-gray-300 rounded-full ${
            index === slideCount - 1 ? 'bg-gray-800' : ''
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="container mx-auto bg-color1 p-10 px-12 w-[60%]">
      <Carousel
        renderBottomRightControls={renderBottomRightControls}
        wrapAround={true}
      >
        {comments.map((comment) => (
          <div key={comment.id}>
            <div className="flex">
              <p className="text-7xl italic font-normal align-top mr-3">"</p>
              <p className="text-xs align-bottom">{comment.comment}</p>
            </div>
            <p className="text-xs text-right">- {comment.author}</p>
            <button className="text-xs p-1 border-color3 border-2 pl-5 pr-5 rounded-full text-color3">
              Leave Us A Review
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Comments;
