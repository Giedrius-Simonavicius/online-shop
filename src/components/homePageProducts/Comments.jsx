import React, { useState } from 'react';
import Carousel from 'nuka-carousel';
import LeaveReviewForm from '../forms/LeaveReviewForm';
import { comments } from '../../data/data';

function Comments() {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };
  return (
    <div
      className="container mx-auto w-[60%] bg-color1 p-10 px-12"
      style={{ marginTop: '50px' }}
    >
      <Carousel
        renderBottomRightControls={({ currentSlide, slideCount }) => (
          <div
            className="mt-2 flex justify-end gap-1"
            style={{ marginBottom: '-15px' }}
          >
            {Array.from({ length: slideCount }).map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full bg-gray-300 ${
                  index === currentSlide ? 'bg-gray-800' : ''
                }`}
                style={{ marginTop: '10px' }}
              />
            ))}
          </div>
        )}
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
            <div className="flex">
              <p className="mr-3 align-top text-7xl font-normal italic">"</p>
              <p className="align-bottom text-xs">{comment.comment}</p>
            </div>
            <p className="text-right text-xs">- {comment.author}</p>
          </div>
        ))}
      </Carousel>
      <button
        className="rounded-full border-2 border-color3 p-1 pl-5 pr-5 text-xs text-color3 duration-300 hover:border-color3 hover:bg-color3 hover:text-white"
        onClick={toggleReviewForm}
      >
        Leave Us A Review
      </button>

      {showReviewForm && (
        <div>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-75" />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <LeaveReviewForm onClose={toggleReviewForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Comments;
