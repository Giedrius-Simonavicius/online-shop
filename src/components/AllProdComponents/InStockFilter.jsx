import { Disclosure, Transition } from '@headlessui/react';
import { useAuthCtx } from '../../store/AuthProvider';

function InStockFilter() {
  const { filterArr, setFilterArr } = useAuthCtx();

  function newFilter(event) {
    const isChecked = event.currentTarget.checked;

    if (isChecked) {
      setFilterArr((prevFilterArr) => [...prevFilterArr, 'in stock']);
    } else {
      setFilterArr((prevFilterArr) =>
        prevFilterArr.filter((filter) => filter !== 'in stock'),
      );
    }
  }
  function ArrowUpDown({ open }) {
    return (
      <div className="pb-2">
        {open ? (
          <img
            loading="lazy"
            src="../../../public/icons/ui/arrowUp.svg"
            alt="arrowUp"
          />
        ) : (
          <img
            loading="lazy"
            src="../../../public/icons/ui/arrowDownBc.svg"
            alt="arrowDown"
          />
        )}
      </div>
    );
  }
  return (
    <div>
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="mb-3 flex items-end gap-[4.95rem] font-bold">
              <h2 className="text-sm font-bold">In Stock</h2>
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
                <div className="mb-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        onChange={newFilter}
                        checked={filterArr.includes('in stock')}
                      />
                      In Stock
                    </label>
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

export default InStockFilter;
