import Navigation from "./Navigation";
import logo from "../_images/cnc_tooling_logo.svg";

const Header = () => {
  return (
    <header className='header'>
      <div className='header__brand'>
        <img
          className='header__brand-logo'
          src={logo}
          alt='CNC Tooling Solutions'
        />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
