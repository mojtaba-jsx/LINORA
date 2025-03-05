import Home from "./pages/Home/Home";
import UserAccount from "./components/UserAccount/UserAccount";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Basket from "./components/Basket/Basket";
import CheckOut from "./components/CheckOut/CheckOut";
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Store from "./pages/Store/Store";
import Blog from "./pages/Blog/Blog";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/user", element: <UserAccount /> },
  { path: "/auth/signup", element: <SignUp /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/store", element: <Store /> },
  { path: "/blog", element: <Blog /> },
  { path: "/products/productinfo", element: <ProductInfo /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/products/basket", element: <Basket /> },
  { path: "/products/basket/checkout", element: <CheckOut /> },
  { path: "/notfound", element: <NotFound /> },
];

export default routes;
