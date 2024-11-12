import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./routes/root";
import Word, { loader as wordLoader } from "./routes/word";
import New from "./routes/new";
import { action as wordAction } from "./components/new-word";
import Edit from "./routes/edit";
import {
  loader as editLoader,
  action as editAction,
} from "./components/edit-word";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "words/:lemma",
        element: <Word />,
        loader: wordLoader,
      },
      {
        path: "edit/:lemma",
        element: <Edit />,
        loader: editLoader,
        action: editAction,
      },
      {
        path: "new",
        element: <New />,
        action: wordAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
