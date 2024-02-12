import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav__list-item'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='nav__list-item'>
            <Link to='line-card'>Line Card</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
