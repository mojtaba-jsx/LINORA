import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import appContext from "./Contexts/AppContext";
function App() {
  let route = useRoutes(routes);

  const [isShowSearchModal, setIsShowSearchModal] = useState(false);
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const [isShowSignUpModal, setIsShowSignUpModal] = useState(false);
  const [isShowBasketModal, setIsShowBasketModal] = useState(false);

  return (
    <appContext.Provider
      value={{
        isShowSearchModal,
        setIsShowSearchModal,
        isShowLoginModal,
        setIsShowLoginModal,
        isShowSignUpModal,
        setIsShowSignUpModal,
        isShowBasketModal,
        setIsShowBasketModal,
      }}
    >
      <div>{route}</div>
    </appContext.Provider>
  );
}

export default App;
