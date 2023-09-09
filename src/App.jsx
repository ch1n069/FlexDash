import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./shared/Root";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "contacts", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
