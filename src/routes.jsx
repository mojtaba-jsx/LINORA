import Home from "./pages/Home/Home";
import UserAccount from "./components/UserAccount/UserAccount";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import CheckOut from "./pages/CheckOut/CheckOut";
import NotFound from "./pages/NotFound/NotFound";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Store from "./pages/Store/Store";
import Blog from "./pages/Blog/Blog";
import BlogPostInfo from "./pages/BlogPostInfo/BlogPostInfo";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/user", element: <UserAccount /> },
  { path: "/auth/signup", element: <SignUp /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/products", element: <Store /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/info", element: <BlogPostInfo /> },
  { path: "/products/productinfo", element: <ProductInfo /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/products/basket/checkout", element: <CheckOut /> },
  { path: "/notfound", element: <NotFound /> },
];

export default routes;
