import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Navbar />
      <div className='blank'>
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
