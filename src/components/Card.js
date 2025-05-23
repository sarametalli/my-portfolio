import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card({ index, image, title, category, description }) {
  const navigate = useNavigate();
  const isEven = index % 2 === 0;
  const handleClick = () => {
      navigate('/project', {
        state: {
          title,
          description,
          images: [image],
          link: 'https://github.com/sarametalli',
        }
      });
    };
  return (
    <div className={`card ${isEven ? 'card--even' : 'card--odd'}`} onClick={handleClick}>
      <div className="left">
        <img src={image} alt={title} />
      </div>
      <div className="right">
        <h1>{title}</h1>
        <h4>{category}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
