import './Card.css';
import placeholder from '../ecommerce.png';

function Card() {
  return (
    <div className='card'>
      <div className='left'>
        <img src={placeholder} alt="placeholder" />
      </div>
      <div className='right'>
        <h1>Card name</h1>
        <h4>Category</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper, lorem vitae mollis mollis, ante neque scelerisque mi, nec venenatis justo leo a enim. Donec elementum nulla lorem, vitae lobortis.
        </p>
      </div>
    </div>
  );
}

export default Card;
