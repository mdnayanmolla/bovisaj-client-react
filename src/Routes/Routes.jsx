
import { createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Explore from "../pages/Explore/Explore";
import Coaching from "../pages/Coaching/Coaching";
import Priching from "../pages/Priching/Priching";
import AboutPage from "../pages/AboutPage/AboutPage";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>,
          },
          {
            path:'/parallax',
            element: <Explore></Explore>
          },
          {
            path:'/coaching',
            element: <Coaching></Coaching>
          },
          {
            path: '/priching',
            element: <Priching></Priching>
          },
          {
            path: '/about',
            element: <AboutPage></AboutPage>
          }
        ]
      },
])

export default router;