import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Finance Tracker</h1>
      <p>Track your income and expenses easily.</p>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
    </div>
  );
};

export default HomePage;
