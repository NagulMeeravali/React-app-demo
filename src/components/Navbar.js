import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="li">
      <Link to="/signup" className="l">
        Sign Up
      </Link>
      <Link to="/login" className="l">
        Login
      </Link>
    </div>
  );
};
