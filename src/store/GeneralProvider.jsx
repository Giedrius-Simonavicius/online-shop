import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const GeneralContext = createContext({
  filterArr: [],
  cartArr: [],
  capitalizeFirstLetter() {},
  setFilterArr() {},
  setCartArr() {},
});
GeneralContext.displayName = 'General context';

function GeneralContextProvider({ children }) {
  const [filterArr, setFilterArr] = useState([]);
  const [cartArr, setCartArr] = useState([]);

  const renderStars = (starCount) => {
    const starsArray = Array(5).fill('/icons/StarGray.svg');
    const renderedStars = starsArray.map((starSrc, index) =>
      index < starCount ? (
        <img
          loading="lazy"
          key={index}
          src="/icons/Star.svg"
          alt={`star-${index}`}
        />
      ) : (
        <img loading="lazy" key={index} src={starSrc} alt={`star-${index}`} />
      ),
    );
    return renderedStars;
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const generalCtx = {
    filterArr,
    setFilterArr,
    cartArr,
    setCartArr,
    capitalizeFirstLetter,
    renderStars,
  };

  return (
    <GeneralContext.Provider value={generalCtx}>
      {children}
    </GeneralContext.Provider>
  );
}

export default GeneralContextProvider;

export function useGeneralCtx() {
  return useContext(GeneralContext);
}
GeneralContextProvider.propTypes = {
  children: PropTypes.node,
};
