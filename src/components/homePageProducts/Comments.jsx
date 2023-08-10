import React, { useEffect, useState } from 'react';
import Carousel from 'nuka-carousel';
import LeaveReviewForm from '../forms/LeaveReviewForm';
import { useGeneralCtx } from '../../context/GeneralProvider';
import { fetchItems, formatTimestamp } from '../../helperFns';

function Comments() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const { mdScreen } = useGeneralCtx();
  const [firebaseComments, setFirebaseComments] = useState([]);

  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const items = await fetchItems('comments');
        const orderedItems = items.sort((a, b) => b.timestamp - a.timestamp);
        setFirebaseComments(orderedItems);
      } catch (error) {
        console.warn('Something went wrong');
      }
    }

    fetchData();
  }, []);

  return (
    <div
      className={`${
        mdScreen ? 'w-[90%]' : 'w-[60%]'
      } container mx-auto mt-12 w-[60%] bg-color1 p-10 px-12 `}
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
        renderCenterLeftControls={({ previousSlide }) =>
          !mdScreen && (
            <button
              className="carousel-control-button mt-8"
              onClick={previousSlide}
            >
              {'<'}
            </button>
          )
        }
        renderCenterRightControls={({ nextSlide }) =>
          !mdScreen && (
            <button
              className="carousel-control-button mt-8"
              onClick={nextSlide}
            >
              {'>'}
            </button>
          )
        }
      >
        {firebaseComments.map((comment) => (
          <div key={comment.uid}>
            <div className="flex ">
              <p className="mr-3 align-top text-7xl  font-normal  italic sm:text-5xl">
                "
              </p>
              <p className="align-bottom text-xs sm:text-xxs">
                {comment.comment}
              </p>
            </div>
            <div className="my-3 flex justify-between text-xs sm:text-xxs">
              <span className="">{formatTimestamp(comment.timestamp)}</span>
              <p className="text-xs sm:text-xxs">- {comment.author}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <button
        className="rounded-full  border-2 border-color3 p-1 pl-5 pr-5 text-xs text-color3 duration-300 hover:border-color3 hover:bg-color3 hover:text-white sm:text-xxs"
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
