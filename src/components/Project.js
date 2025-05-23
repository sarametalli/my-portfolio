import { useLocation } from 'react-router-dom';
import './Project.css';

function Project() {
  const location = useLocation();
  const { title, description, images, link } = location.state || {};

  if (!title) {
    return <div className="project-container">Progetto non trovato.</div>;
  }

  return (
    <>
    <div className="project-container">
      <h1>{title}</h1>
      <div className="project-image">
        {images && images.map((img, i) => (
          <img key={i} src={img} alt={`Screenshot ${i + 1}`} />
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        Provalo qui →
      </a>
      </div>
      
      <p>{description}</p>
    </>
  );
}

export default Project;
