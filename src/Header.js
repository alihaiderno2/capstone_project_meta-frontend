import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="\icons_assets\Logo .svg" alt="Little Lemon Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;