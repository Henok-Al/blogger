import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/UserProvider.jsx";
import { ToastContainer } from "react-toastify";
import BlogsProvider from "./context/BlogsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <UserProvider>
      <BlogsProvider>
        <App />
      </BlogsProvider>
    </UserProvider>
  </StrictMode>
);
