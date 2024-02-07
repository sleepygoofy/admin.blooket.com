import { createBrowserRouter, RouterProvider } from "react-router-dom";
import views from "./views";

const router = createBrowserRouter([
  {
    id: "root",
    children: [
      {
        path: "/",
        element: <views.Home />
      },
      {
        path: "/login",
        element: <views.Home />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
