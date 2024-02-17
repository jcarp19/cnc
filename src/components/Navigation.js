import { Link } from "react-router-dom";

const Navigation = () => {
  const hideNav = () => {
    document.getElementById("nav-toggle").click();
  };
  return (
    <>
      <nav className='nav'>
        <input
          type='checkbox'
          id='nav-toggle'
          className='nav__checkbox'
          title='navigation toggle'
        />
        <label htmlFor='nav-toggle' className='nav__button'>
          <span className='nav__icon'>&nbsp;</span>
        </label>
        <div className='nav__background'>&nbsp;</div>
        <div className='nav__nav'>
          <ul className='nav__list'>
            <li className='nav__item' onClick={hideNav}>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav__item' onClick={hideNav}>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li className='nav__item' onClick={hideNav}>
              <Link to='line-card'>Line Card</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
