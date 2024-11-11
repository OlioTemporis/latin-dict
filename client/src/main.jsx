import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./routes/root";
import Word, { loader as wordLoader } from "./routes/word";
import New from "./routes/new";
import { action as wordAction } from "./components/new-word";
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
        path: "/new",
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
