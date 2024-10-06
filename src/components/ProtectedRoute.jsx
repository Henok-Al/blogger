import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User state:", user); // Debugging line
    if (!user) {
      console.log("Redirecting to /login"); // Debugging line
      navigate("/login");
    }
  }, [user, navigate]);

  return <div>{children}</div>;
};

export default ProtectedRoute;
