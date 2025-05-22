import './Snackbar.css';

function Snackbar({ message, visible }) {
  return (
    <div className={`snackbar ${visible ? 'show' : ''}`}>
      {message}
    </div>
  );
}

export default Snackbar;
