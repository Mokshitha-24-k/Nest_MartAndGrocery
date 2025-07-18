// router.jsx
import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Loader from "./Components/Common/Loader/Loader"; 

const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

const Layout = lazy(() => import("./Layout"));
const Home2 = lazy(() => import("./Home2/Home2"));
const Home1 = lazy(() => import("./Pages/Home1/Home1"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const BlogDetails = lazy(() => import("./Pages/BlogDetails/BlogDetails"));
const ShopGridRightBar = lazy(() =>
  import("./Pages/Shop/Shop-grid-right-siderber/ShopGridRightBar")
);
const ShopGridLeftBar = lazy(() =>
  import("./Pages/Shop/Shop-grid-left-siderber/ShopGridLefBar")
);
const ListRightSideBar = lazy(() =>
  import("./Pages/Shop/ListRightSiderBar/ListRightSideBar")
);
const ListLeftSideBar = lazy(() =>
  import("./Pages/Shop/ListLeftSiderBar/ListLeftSiderBar")
);
const ShopfullWide = lazy(() =>
  import("./Pages/Shop/ShopFullWide/ShopfullWide")
);
const CartPage = lazy(() => import("./Pages/AddToCart/CartPage"));
const Login = lazy(() => import("./Pages/Login/Login"));
const SignUp = lazy(() => import("./Pages/SignUp/SignUp"));


const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(Layout),
    children: [
      { index: true, element: withSuspense(Home2) },
      { path: "home2", element: withSuspense(Home2) },
      { path: "home1", element: withSuspense(Home1) },
      { path: "about", element: withSuspense(About) },
      { path: "contact", element: withSuspense(Contact) },
      { path: "blog/blog", element: withSuspense(Blog) },
      { path: "blog/blogDetails", element: withSuspense(BlogDetails) },
      {
        path: "shop/ShopGridRightSidebar",
        element: withSuspense(ShopGridRightBar),
      },
      {
        path: "shop/ShhpGridLeftSidebar",
        element: withSuspense(ShopGridLeftBar),
      },
      {
        path: "/shop/ListRightSiderber",
        element: withSuspense(ListRightSideBar),
      },
      {
        path: "/shop/ListLeftSiderber",
        element: withSuspense(ListLeftSideBar),
      },
      { path: "/shop/ShopFullwide", element: withSuspense(ShopfullWide) },
      { path: "cart", element: withSuspense(CartPage) },
      { path: "login", element: withSuspense(Login) },
      { path: "signup", element: withSuspense(SignUp) },
      // { path: 'product/:id', element: withSuspense(SingleProduct) },
    ],
  },
]);

export default router;
