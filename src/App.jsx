import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Vrachi from "./Pages/Vrachi/Vrachi";
import Home from "./Pages/Home/Home";
import Uslugi from "./Pages/Uslugi/Uslugi";
import Diagnostika from "./Pages/Diagnostika/Diagnostika";
import Analizi from "./Pages/Analizi/Analizi";
import Aksi from "./Pages/Aksi/Aksi";
import NotFound from "./Pages/NotFound/NotFound";
import Pasient from "./Pages/Pasient/Pasient";
import Okliniki from "./Pages/OKlinika/Okliniki";
import Otziv from "./Pages/Otziv/Otziv";
import Contact from "./Pages/Contact/Contact";

import "./App.css"

const App = () => {


   let router = createBrowserRouter([
     {
       path: "/",
       element: <Layout />,
       children: [
         {
           index: true,
           element: <Home />,
         },
         {
           path: "/Vrachi",
           element: <Vrachi />,
         },
         {
           path: "/Uslugi",
           element: <Uslugi />,
         },
         {
           path: "/Diagnostika",
           element: <Diagnostika />,
         },
         {
           path: "/Analizi",
           element: <Analizi />,
         },
         {
           path: "/Aksi",
           element: <Aksi />,
         },
         {
           path: "/Pasient",
           element: <Pasient />,
         },
         {
           path: "/OKlinika",
           element: <Okliniki />,
         },
         {
           path: "/Otziv",
           element: <Otziv />,
         },
         {
           path: "/Contact",
           element: <Contact />,
         }
       ],
     },
     {
       path: "*",
       element: <NotFound />,
     }
   ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
