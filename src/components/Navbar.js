import './Navbar.css';
import logo from '../logo.png';

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar__logo" />
      <div className='navbar__links'>
        <div>HOME</div>
        <div>ABOUT ME</div>
        <div>CONTACTS</div>
      </div>
    </div>
  );
}

export default Navbar;
