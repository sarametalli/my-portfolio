import './Navbar.css';
import logo from '../logo.png';

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar__logo" />
      <div className='navbar__links'>
        <div><p>HOME</p></div>
        <div><p>ABOUT ME</p></div>
        <div><p>CONTACTS</p></div>
      </div>
    </div>
  );
}

export default Navbar;
