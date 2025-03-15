import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Fit Flow</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/members">Members</a>
          </li>
          <li>
            <a href="/subscriptions">Subscriptions</a>
          </li>
          <li>
            <a
              href="/login"
              onClick={() => {
                localStorage.removeItem("userLoggedIn");
                window.location.href = "/login";
              }}
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
