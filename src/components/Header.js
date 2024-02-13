import Navigation from "./Navigation";
import logo from "../_images/cnc_tooling_logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className='header__brand'>
        <Link to='/'>
          <img
            className='header__brand-logo'
            src={logo}
            alt='CNC Tooling Solutions'
          />
        </Link>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
