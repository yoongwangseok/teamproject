import { createContext } from "react";
import { useLocation } from "react-router-dom";

const FooterContext = createContext(false);

export const FooterProvider = ({children}) => {
  const location = useLocation();
  const path = location.pathname;
  const isHidden = path === '/';

  return (
    <FooterContext.Provider value={isHidden}>
      {children}
    </FooterContext.Provider>
  );
};

export default FooterContext;