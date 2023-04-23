import React from "react";
import { createRoot } from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Clock from "./routes/clock/Clock";
import Home from "./routes/home/Home";
import Dice from "./routes/dice/Dice";
import Color from "./routes/color/Color"
import Navbar from "./components/Navbar";
import "./App.css";



const AppLayout = () => (
  <>
    <div className="navbar-container">
      <Navbar /> 
    </div>
    
    <Outlet />
  </>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/reports" element={<Reports />} />
//     </Route>
//   )
// );

const router = createHashRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "clock",
        element: <Clock />,
      },
      {
        path: "dice",
        element: <Dice />,
      },
      {
        path: "color",
        element: <Color />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);





/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/