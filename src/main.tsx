import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root/Root";
import "./index.scss";
import Home from "./Pages/Home/Home";
import Favorites from "./Pages/Favorites/Favorites";
import Completed from "./Pages/Completed/Completed";
import SearchPage from "./Pages/Search/SearchPage";
import BookContextProvider from "./ContextProvider/BookContextProvider";
import Book from "./Pages/Search/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/Completed",
        element: <Completed />,
      },
      {
        path: "/search",
        element: <SearchPage />,
        children: [
          {
            path: "/search/:id",
            element: <Book />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookContextProvider>
      <RouterProvider router={router} />
    </BookContextProvider>
  </React.StrictMode>
);
