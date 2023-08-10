import React from 'react';
import PropTypes from 'prop-types';
function DetailsSpecs({ activeTab, onTabClick }) {
  return (
    <div className="items-center px-3 py-3 text-xs sm:flex sm:justify-center">
      <div className="flex gap-9 px-10">
        <button
          className={`mr-2 ${
            activeTab === 'about' ? 'border-b-2 border-color3 font-bold' : ''
          }`}
          onClick={() => onTabClick('about')}
        >
          About Product
        </button>
        <button
          className={`mr-2 ${
            activeTab === 'details'
              ? 'border-b-2 border-color3 font-bold  '
              : ''
          }`}
          onClick={() => onTabClick('details')}
        >
          Details
        </button>
        <button
          className={`mr-2 ${
            activeTab === 'specs' ? 'border-b-2 border-color3 font-bold  ' : ''
          }`}
          onClick={() => onTabClick('specs')}
        >
          Specs
        </button>
      </div>
    </div>
  );
}
DetailsSpecs.propTypes = {
  activeTab: PropTypes.string,
  onTabClick: PropTypes.func,
};
export default DetailsSpecs;
