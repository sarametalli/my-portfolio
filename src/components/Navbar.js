import './Navbar.css';
import logo from '../logo.png';

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar__logo" />
    </div>
  );
}

export default Navbar;
