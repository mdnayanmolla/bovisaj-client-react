
import { createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Explore from "../pages/Explore/Explore";

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
          }
        ]
      },
])

export default router;