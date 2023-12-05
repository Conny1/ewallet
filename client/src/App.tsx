import "./App.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Darshboard from "./pages/Darshboard";
import Crypto from "./pages/Crypto";
import SendRequest from "./pages/SendRequest";
import Send from "./pages/Send";
import Request from "./pages/Request";
import ProfilePage from "./pages/Profile";
import Admin from "./pages/Admin";
import Pending from "./pages/Pending";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/dashboard",
    element: <Darshboard />,
  },
  {
    path: "/crypto",
    element: <Crypto />,
  },
  {
    path: "/sendandrequest",
    element: (
      <>
        <SendRequest />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "send",
        element: <Send />,
      },
      {
        path: "request",
        element: <Request />,
      },
      {
        path: "pending",
        element: <Pending />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
