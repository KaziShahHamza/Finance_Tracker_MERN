// src/pages/HomePage.jsx
import { Link } from "react-router";
import "../styles/home.css";


const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-card">
        <h1 className="homepage-title">Welcome to Finance Tracker</h1>
        <p className="homepage-subtitle">Take control of your money, effortlessly.</p>

        <section className="feature-section">
          <h3 className="section-heading">Track Everything</h3>
          <p className="section-description">
            Easily add and categorize all your income and expenses. See where your money goes
            and identify areas for improvement.
          </p>
        </section>

        <section className="feature-section">
          <h3 className="section-heading">AI-Powered Insights</h3>
          <p className="section-description">
            Our intelligent AI analyzes your financial data to provide a short,
            actionable summary of your spending habits and financial health.
            Understand your finances at a glance!
          </p>
        </section>

        <section className="cta-section">
          <p className="cta-text">Ready to get started?</p>
          <div className="button-group">
            <Link to="/login" className="button primary-button">
              Login
            </Link>
            <Link to="/signup" className="button green-button">
              Signup
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
