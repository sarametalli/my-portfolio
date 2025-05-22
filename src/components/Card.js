import './Card.css';

function Card({ index, image, title, category, description }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`card ${isEven ? 'card--even' : 'card--odd'}`}>
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
