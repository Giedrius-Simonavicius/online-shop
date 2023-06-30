import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const GeneralContext = createContext({
  filterArr: [],
  setFilterArr() {},
  searchQuery: [],
  setSearchQuery() {},
  searchResults: [],
  setSearchResults() {},
  mdScreen: [],
  smScreen: [],
});
GeneralContext.displayName = 'General context';

function GeneralContextProvider({ children }) {
  const [filterArr, setFilterArr] = useState([]);

  const [searchResults, setSearchResults] = useState([]);
  const [mdScreen, setMdScreen] = useState(window.innerWidth <= 787);
  const [smScreen, setSmScreen] = useState(window.innerWidth <= 570);

  useEffect(() => {
    const handleResize = () => {
      setMdScreen(window.innerWidth <= 787);
      setSmScreen(window.innerWidth <= 570);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const generalCtx = {
    filterArr,
    setFilterArr,
    renderStars,
    searchResults,
    setSearchResults,
    mdScreen,
    smScreen,
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
