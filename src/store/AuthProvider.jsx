import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  filterArr: [],
});
AuthContext.displayName = 'Authtentification';

function AuthProvider({ children }) {
  const [filterArr, setFilterArr] = useState([]);

  const authCtx = {
    filterArr,
    setFilterArr,
  };

  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
