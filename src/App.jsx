import React, { useState, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./routes";
import Loader from "./components/Loader/Loader";
import { useLoader, LoaderProvider } from "./Contexts/LoaderContext";
import appContext from "./Contexts/AppContext";

function AppContent() {
  let route = useRoutes(routes);
  const location = useLocation();
  const { loading, setLoading } = useLoader();

  // State برای کنترل نمایش صفحه پس از لود شدن
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setIsPageLoaded(true);  // پس از پایان لود، صفحه را نمایش می‌دهیم
    }, 1200); // زمان لود کردن (۲ ثانیه)

    return () => clearTimeout(timer);
  }, [location.pathname]);

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
      {loading && <Loader />} {/* نمایش Loader */}
      {isPageLoaded && <div>{route}</div>} {/* نمایش صفحه بعد از بارگذاری */}
    </appContext.Provider>
  );
}

function App() {
  return (
    <LoaderProvider>
      <AppContent />
    </LoaderProvider>
  );
}

export default App;
