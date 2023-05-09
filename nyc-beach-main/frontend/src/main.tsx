import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Background from "./Background.tsx";
import HomePage from "./pages/HomePage.tsx";
import IntroductionPage from "./pages/IntroductionPage.tsx";
import SelectionPage from "./pages/SelectionPage.tsx";
import BeachPage from "./pages/BeachPage.tsx";

const Router = createBrowserRouter(
  [
    {
      path: "/",
      Component: HomePage,
    },
    { path: "/introduction", Component: IntroductionPage },
    { path: "/selection", Component: SelectionPage },
    { path: "/beaches/:beachName", Component: BeachPage },
  ],
  { basename: REMOTE_DIR }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Background>
      <RouterProvider router={Router} />
    </Background>
  </React.StrictMode>
);
