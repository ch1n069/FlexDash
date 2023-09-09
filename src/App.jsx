import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./shared/Root";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Messages from "./pages/Messages";
import Transactions from "./pages/Transactions";
import Customers from "./pages/Customers";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "contacts", element: <Contact /> },
        { path: "products", element: <Products /> },
        { path: "orders", element: <Orders /> },
        { path: "messages", element: <Messages /> },
        { path: "transactions", elements: <Transactions /> },
        { path: "customers", elements: <Customers /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
