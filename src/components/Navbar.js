import './Navbar.css';
import logo from '../logo.png';
import { useNavigate } from 'react-router-dom';
import Snackbar from '../components/Snackbar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const navigate = useNavigate();
  const handleClick = (page) => {
    navigate(page);
  };
  const handleComingSoon = () => {
      setSnackbarVisible(true);
      setTimeout(() => setSnackbarVisible(false), 2500);
    };

  return (
    <>
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar__logo" onClick={() => handleClick('/')}
 />
      <div className='navbar__links'>
<div className={`${(location.pathname === '/' || location.pathname === '/my-portfolio') ? 'active' : 'inactive'}`} onClick={() => handleClick("/")}>
  <p>HOME</p>
</div>
<div className={`${(location.pathname === '/about-me') ? 'active' : 'inactive'}`} onClick={() => handleClick("/about-me")}>
  <p>ABOUT ME</p>
</div>
        <div className='inactive' onClick={handleComingSoon}><p>ABOUT ME</p></div>
        <div className='inactive' onClick={handleComingSoon}><p>CONTACTS</p></div>
      </div>
    </div>
    <Snackbar message="Coming soon!" visible={snackbarVisible} />
    </>
  );
}

export default Navbar;
