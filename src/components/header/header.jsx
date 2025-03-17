import Dumbbell from "../icons/dumbbell";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <h1 className="header-title">
          <span>Fit Flow</span> <Dumbbell />
        </h1>
      </a>
      <nav>
        <ul>
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
