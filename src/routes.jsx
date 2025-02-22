import Home from './pages/Home/Home'
import UserAccount from "./components/UserAccount/UserAccount";
import Products from "./components/Products/Products";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Basket from "./components/Basket/Basket";
import CheckOut from "./components/CheckOut/CheckOut";
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./pages/SignUp/SignUp";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/user", element: <UserAccount /> },
  { path: "/auth/signup", element: <SignUp /> },
  { path: "/products", element: <Products /> },
  { path: "/products/productinfo", element: <ProductInfo /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/products/basket", element: <Basket /> },
  { path: "/products/basket/checkout", element: <CheckOut /> },
  { path: "/notfound", element: <NotFound /> },
];

export default routes;
