 import { Link } from "react-router-dom";
 import  logo  from "../assets/images/logo.png";
 
 const Title = () => (
    <img
      className="logo"
      alt="logo"
      src={logo}
    />
  );
//here we have not used named export for title because we are using the title component in this same file (inside header)

const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
          <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
