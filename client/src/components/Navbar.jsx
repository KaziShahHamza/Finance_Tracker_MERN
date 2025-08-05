import { Link } from "react-router";
import useAuth from "../context/useAuth";
import "../styles/theme.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/">Finance Tracker</Link>
      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <span>Hello, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
