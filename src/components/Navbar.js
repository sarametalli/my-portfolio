import './Navbar.css';
import logo from '../logo.png';
import { useNavigate } from 'react-router-dom';
import Snackbar from '../components/Snackbar';
import { useState } from 'react';

function Navbar() {
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
        <div onClick={() => {handleClick("/")}}><p>HOME</p></div>
        <div onClick={handleComingSoon}><p>ABOUT ME</p></div>
        <div onClick={handleComingSoon}><p>CONTACTS</p></div>
      </div>
    </div>
    <Snackbar message="Coming soon!" visible={snackbarVisible} />
    </>
  );
}

export default Navbar;
