import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  filterArr: [],
  capitalizeFirstLetter() {},
  setFilterArr() {},
});
AuthContext.displayName = 'Authtentification';

function AuthProvider({ children }) {
  const [filterArr, setFilterArr] = useState([]);

  const renderStars = (starCount) => {
    const starsArray = Array(5).fill('../../../public/icons/StarGray.svg');
    const renderedStars = starsArray.map((starSrc, index) =>
      index < starCount ? (
        <img
          key={index}
          src="../../../public/icons/Star.svg"
          alt={`star-${index}`}
        />
      ) : (
        <img key={index} src={starSrc} alt={`star-${index}`} />
      ),
    );
    return renderedStars;
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const authCtx = {
    filterArr,
    setFilterArr,
    capitalizeFirstLetter,
    renderStars,
  };

  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}