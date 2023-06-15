import React, { useState } from 'react';
import { allPrd } from '../../data/data';
import { Disclosure, Transition } from '@headlessui/react';
import { useGeneralCtx } from '../../context/GeneralProvider';

function RatingFilter() {
  const { filterArr, setFilterArr } = useGeneralCtx();

  function newFilter(event) {
    const stars = event.currentTarget.dataset.stars;
    const starsWithWord = `${stars} ${stars === '1' ? 'star' : 'stars'}`;

    if (filterArr.includes(starsWithWord)) {
      setFilterArr((prevFilterArr) =>
        prevFilterArr.filter((filter) => filter !== starsWithWord),
      );
    } else {
      setFilterArr((prevFilterArr) => [...prevFilterArr, starsWithWord]);
    }
  }

  function ArrowUpDown({ open }) {
    return (
      <div className="pb-2">
        {open ? (
          <img loading="lazy" src="/icons/ui/arrowUp.svg" alt="arrowUp" />
        ) : (
          <img loading="lazy" src="/icons/ui/arrowDownBc.svg" alt="arrowDown" />
        )}
      </div>
    );
  }

  const [starCount, setStarCount] = useState([]);

  useState(() => {
    const stars = [];
    allPrd.forEach((product) => {
      if (!stars.includes(product.stars)) {
        stars.push(product.stars);
      }
    });

    stars.sort((a, b) => a - b);
    setStarCount(stars);
  }, []);

  return (
    <div>
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="mb-3 flex items-end justify-between gap-[3.5rem] font-bold">
              <h2 className="text-sm font-bold">Star Rating</h2>
              <ArrowUpDown open={open} />
            </Disclosure.Button>

            <Transition
              show={open}
              enter="transition duration-300 transform origin-top"
              enterFrom="opacity-0 scale-y-0"
              enterTo="opacity-100 scale-y-100"
              leave="transition duration-300 transform origin-top"
              leaveFrom="opacity-100 scale-y-100"
              leaveTo="opacity-0 scale-y-0"
            >
              <Disclosure.Panel className="text-xs">
                <div className="mb-3 flex">
                  {starCount.map((star, index) => (
                    <div key={index}>
                      <button
                        className="mr-2 hover:text-color3"
                        onClick={newFilter}
                        data-stars={index}
                      >
                        {star}
                      </button>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default RatingFilter;
