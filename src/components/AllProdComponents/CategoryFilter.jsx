import React from 'react';
import { customPcs, desktops, laptops, monitors } from '../../data/data';
import { Disclosure, Transition } from '@headlessui/react';
import { useAuthCtx } from '../../store/AuthProvider';

function CategoryFilter() {
  const { filterArr, setFilterArr } = useAuthCtx();

  function newFilter(event) {
    const category = event.currentTarget.dataset.category;
    if (!filterArr.includes(category)) {
      setFilterArr((prevFilterArr) => [...prevFilterArr, category]);
    }
    console.log('filterItem ===', category);
  }

  function ArrowUpDown({ open }) {
    return (
      <div className="pb-2">
        {open ? (
          <img src="/public/icons/ui/arrowUp.svg" alt="arrowUp" />
        ) : (
          <img src="/public/icons/ui/arrowDownBc.svg" alt="arrowDown" />
        )}
      </div>
    );
  }

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className=" mb-3 flex items-end gap-[4.25rem] font-bold">
              <h2 className="text-sm font-bold">Category</h2>
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
                <div>
                  <div className="flex justify-between">
                    <button
                      className="hover:text-color3"
                      onClick={newFilter}
                      data-category={customPcs[1].category}
                    >
                      Custom PC's
                    </button>
                    <span>{customPcs.length - 1}</span>
                  </div>

                  <div className="flex justify-between">
                    <button
                      className="hover:text-color3"
                      onClick={newFilter}
                      data-category={laptops[1].category}
                    >
                      Laptops
                    </button>
                    <span>{laptops.length - 1}</span>
                  </div>

                  <div className="flex justify-between">
                    <button
                      className="hover:text-color3"
                      onClick={newFilter}
                      data-category={monitors[1].category}
                    >
                      Monitors
                    </button>
                    <span>{monitors.length - 1}</span>
                  </div>

                  <div className="flex justify-between">
                    <button
                      className="hover:text-color3"
                      onClick={newFilter}
                      data-category={desktops[1].category}
                    >
                      Desktops
                    </button>
                    <span>{desktops.length - 1}</span>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default CategoryFilter;
