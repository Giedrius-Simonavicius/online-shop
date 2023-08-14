import React from 'react';
import PropTypes from 'prop-types';
function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
  filteredProducts,
}) {
  const pageNumbers = [];
  const activePage =
    'rounded-full border-2 px-3 py-1 border-color1 bg-color1 text-black ';
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="sm:text-xs">
      {itemsPerPage <= totalItems && (
        <ul className="mt-6 flex justify-center gap-2">
          <li
            onClick={() => goToPreviousPage()}
            className="mr-4 rounded-full border-2 border-color5 px-3 py-1 text-color5 duration-200 hover:cursor-pointer hover:border-color1 hover:bg-color1 hover:text-black "
          >
            {`<`}
          </li>
          {pageNumbers.map((number, index) => {
            if (
              pageNumbers.length <= 3 ||
              index === 0 ||
              index === pageNumbers.length - 1 ||
              (number >= currentPage - 2 && number <= currentPage + 2)
            ) {
              return (
                <li
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number
                      ? activePage
                      : 'rounded-full border-2 border-color5 px-3 py-1 text-color5 duration-200 hover:cursor-pointer hover:border-color1 hover:bg-color1 hover:text-black '
                  }`}
                  key={number}
                >
                  {number}
                </li>
              );
            } else if (
              index === 1 &&
              (number - currentPage > 1 || number - currentPage < -1)
            ) {
              return (
                <li className="px-3 py-1 text-color5" key="ellipsisStart">
                  . . .
                </li>
              );
            } else if (
              index === pageNumbers.length - 2 &&
              (number - currentPage > 1 || number - currentPage < -1)
            ) {
              return (
                <li className="px-3 py-1 text-color5" key="ellipsisEnd">
                  . . .
                </li>
              );
            } else {
              return null;
            }
          })}
          <li
            onClick={() => goToNextPage()}
            className="ml-4 rounded-full border-2 border-color5 px-3 py-1 text-color5 duration-200 hover:cursor-pointer hover:border-color1 hover:bg-color1 hover:text-black "
          >
            {`>`}
          </li>
        </ul>
      )}
    </div>
  );
}
Pagination.propTypes = {
  itemsPerPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  filteredProducts: PropTypes.array,
};
export default Pagination;
