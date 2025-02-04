import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import appContext from "./Contexts/AppContext";
function App() {
  let route = useRoutes(routes);

  const [isShowSearchModal, setIsShowSearchModal] = useState(false);
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);

  return (
    <appContext.Provider
      value={{
        isShowSearchModal,
        setIsShowSearchModal,
        isShowLoginModal,
        setIsShowLoginModal,
      }}
    >
      <div>{route}</div>;
    </appContext.Provider>
  );
}

export default App;
