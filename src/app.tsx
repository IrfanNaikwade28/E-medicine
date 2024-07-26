import { StickyNav } from "./components/stickyNav";
import { Home } from "./components/Home/home";
import { Health } from "./components/Health/health";
import { Care } from "./components/Care/care";
import { Lab } from "./components/Lab/lab";
import { Profile } from "./components//Profile/profile";

import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const Layout = () => (
  <div>
    <Outlet />
    <StickyNav />
  </div>
);
export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
    element: <Layout />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Health",
        element:<Health/>
      },
      {
        path:"/Care",
        element:<Care/>
      },
      {
        path:"/Lab",
        element:<Lab/>
      },
      {
        path:"/Profile",
        element:<Profile/>
      }
    ]
    }
  ]);
  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}
