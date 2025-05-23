import './Navbar.css';
import logo from '../logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const handleClick = (page) => {
    navigate(page);
  };


  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar__logo" onClick={() => handleClick('/')}
 />
      <div className='navbar__links'>
        <div><p>HOME</p></div>
        <div><p>ABOUT ME</p></div>
        <div><p>CONTACTS</p></div>
      </div>
    </div>
  );
}

export default Navbar;
