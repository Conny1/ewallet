import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import PrivateRoutes from "./components/PrivateRoute";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Darshboard />} path="/dashboard" />
            <Route element={<Crypto />} path="/crypto" />
            <Route element={<ProfilePage />} path="/pofile" />
            <Route element={<Admin />} path="/admin" />
            <Route element={<SendRequest />} path="/sendandrequest">
              <Route element={<Send />} path="send" />
              <Route element={<Request />} path="request" />
              <Route element={<Pending />} path="pending" />
            </Route>
          </Route>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
