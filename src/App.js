import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
