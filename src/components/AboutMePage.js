import './AboutMePage.css';
import picture from '../fotoprofilo.jpg';

function AboutMePage() {
    return(
        <>
        <div className="container">
            <img src={picture} alt="Girl smiling" />
            <div className="info">
            <div className='top'>
                <h1>Nome e cognome</h1>
                <h4>Qualifica</h4>
                <h4>Città</h4>
            </div>
            <div className='bottom'>
                <h3>Telefono</h3>
                <h2>Email</h2>
            </div>
            
            </div>
        </div>
        <div className='about-me'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat condimentum libero, tincidunt sollicitudin ligula ultricies et. Nam consequat risus ut quam elementum, sit amet facilisis ante sagittis. Nulla ornare mi ac turpis semper pretium. Morbi ut nibh semper, commodo dui a, rutrum elit. Suspendisse ullamcorper leo a gravida luctus. Cras hendrerit urna a volutpat malesuada. Pellentesque at ligula elit.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur quis sodales risus. Nullam tempus dui mollis hendrerit luctus. Cras sit amet facilisis tortor, sit amet gravida enim. Curabitur eget hendrerit mi, non hendrerit tortor. Cras sed sollicitudin purus, eu semper odio. Nulla porttitor nulla vel tellus molestie, ac aliquet odio viverra. Fusce porta maximus velit, nec ultricies libero fermentum quis. Ut vel lacus quam. Duis ut tincidunt magna. Nunc quis lorem et neque ullamcorper pulvinar non at justo. In nisl urna, gravida quis arcu ac, placerat lacinia velit. Fusce congue sem mattis, gravida massa id, iaculis elit.

Integer volutpat luctus turpis eu aliquam. Vivamus porta varius mollis. Ut non nulla sed libero sagittis accumsan in vitae tellus. Phasellus lacinia, ante id volutpat aliquet, risus elit mattis quam, sit amet convallis turpis nunc eu quam. Ut ullamcorper eget lorem nec varius. Nullam molestie lacus facilisis pharetra dictum. Pellentesque id turpis dui. Proin molestie rhoncus nisl. Donec ut interdum ex. Nulla facilisi. Mauris eget est non orci bibendum sodales vel in erat.

Donec molestie metus gravida tellus suscipit volutpat. In ut interdum metus, a tristique erat. Proin egestas rhoncus ultrices. Pellentesque aliquam urna ac nibh ultrices commodo. Mauris dapibus, arcu vel aliquet vestibulum, ex erat varius ante, nec pretium lorem nulla ut massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris odio velit, commodo id ultricies vel, auctor non arcu. Maecenas bibendum commodo ligula. Integer tempus, leo vel aliquam pretium, tellus felis varius nulla, non lobortis felis odio at augue. Curabitur ut nisl nisl. Suspendisse varius nec sem vel blandit. Sed egestas ut mi id eleifend. Duis nec sagittis ex. Vivamus non egestas elit. Fusce porta ex id nisl gravida sodales. Vivamus mattis, mi eget blandit viverra, enim diam dignissim diam, vel pretium mi massa vel orci.

Phasellus vitae magna id sem suscipit varius. Donec auctor varius risus at lobortis. Nulla finibus, leo a ultricies mollis, urna augue vestibulum ante, et luctus metus ipsum at lacus. Mauris at maximus mi. Aliquam vitae leo ut erat pharetra tempor quis et odio. Vestibulum purus nulla, hendrerit sed lacinia vel, pharetra non arcu. Maecenas at auctor metus. Morbi et fermentum ex.
            </p>
        </div>
        </>
    );
}

export default AboutMePage;