import Card from './Card';
import ecommerce from '../ecommerce.png';

function Home() {
  return (
    // todo: cards are dynamic, so we should use a map to render them
    <div className='container' >
      <Card
        index={1} // todo: pass the index automatically
        image={ecommerce}
        title="E-commerce"
        category="Frontend + Backend"
        description="Un sito di e-commerce responsive con pannello admin, pagamento sicuro, e carrello persistente."
      />

      <Card
        index={2}
        image={ecommerce}
        title="App mobile"
        category="UX + UI"
        description="Prototipo realizzato con Figma per un'app di gestione finanze con onboarding e dark mode."
      />
    </div>
  );
}

export default Home;