import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="\icons_assets\Logo .svg" alt="Little Lemon Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/menu">Menu</Link></li>
          <li> <Link to="/reservations">Reservations</Link></li>
          <li> <Link to="/order">Order Online</Link></li>
          <li> <Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;