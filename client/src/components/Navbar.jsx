import { Link } from "react-router"; // Corrected import for react-router-dom
import useAuth from "../context/useAuth";
import "../styles/navbar.css"; // Assuming this contains your root color variables

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Finance Tracker
      </Link>
      <div className="navbar-links">
        {user ? (
          <>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <span className="user-greeting">Hello, {user.name}</span>
            <button onClick={logout} className="button logout-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="button nav-button primary-button">
              Login
            </Link>
            <Link to="/signup" className="button nav-button green-button">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
