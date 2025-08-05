import { Link } from "react-router";
import useAuth from "../context/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
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
