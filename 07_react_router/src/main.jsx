import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";

import "./index.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import User from "./Components/User/User";
import Github, { GithubInfoLoader } from "./Components/Github/Github";

// const router = createBrowserRouter([
// {
//   path:"/",
//   element:<Layout />,
//   children:[
//     {
//       path:"",
//       element:<Home />,
//     },
//     {
//       path:"about",
//       element:<About />
//     },
//     {
//       path:"contact",
//       element:<Contact />
//     }
//   ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={GithubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
