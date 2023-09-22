import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './component/Home/Home'
import About from './component/About/About'
import Contacts from './component/Contacts/Contacts'
import Portfolio from './component/Portfolio/Portfolio'



const router = createBrowserRouter([
  { path:"", element:<App /> ,children: [
    { path: "", element:<Home/>},
    { path: "About", element: <About /> },
    { path: "Contacts", element: <Contacts/>}, 
    { path: "Portfolio", element: <Portfolio /> },

  ]},
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router= {router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
