import foodLogo from "../../foo-logo.jpg";

const Title = () => (
  <a href="/">
    <img
      src={foodLogo}
      className="logo"
      alt="Logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
