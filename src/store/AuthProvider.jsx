import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  filterArr: [],
  capitalizeFirstLetter() {},
  setFilterArr() {},
});
AuthContext.displayName = 'Authtentification';

function AuthProvider({ children }) {
  const [filterArr, setFilterArr] = useState([]);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const authCtx = {
    filterArr,
    setFilterArr,
    capitalizeFirstLetter,
  };

  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
