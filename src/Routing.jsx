import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home2 from './Home2/Home2';
import Home1 from "./Pages/Home1/Home1";
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/BlogDetails/BlogDetails'; 
import ShopGridRightBar from "./Pages/Shop/Shop-grid-right-siderber/ShopGridRightBar";
import ShopGridLeftBar from "./Pages/Shop/Shop-grid-left-siderber/ShopGridLefBar";
import ListRightSideBar from "./Pages/Shop/ListRightSiderBar/ListRightSideBar";
import ListLeftSideBar from "./Pages/Shop/ListLeftSiderBar/ListLeftSiderBar";
import ShopfullWide from './Pages/Shop/ShopFullWide/ShopfullWide';
const router = createBrowserRouter([
  {

    
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home2 /> },
      { path: 'home2', element: <Home2 /> },
      { path: 'home1', element: <Home1 /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'blog/blog', element: <Blog /> },
      { path: 'blog/blogDetails', element: <BlogDetails /> },
      { path: 'shop/ShopGridRightSidebar', element: <ShopGridRightBar /> },
      { path: 'shop/ShhpGridLeftSidebar', element: <ShopGridLeftBar /> },
      { path: '/shop/ListRightSiderber', element: <ListRightSideBar /> },
      { path: '/shop/ListLeftSiderber', element: <ListLeftSideBar /> },
      { path: '/shop/ShopFullwide', element: <ShopfullWide /> },


   
    ],
  },
]);

export default router;
