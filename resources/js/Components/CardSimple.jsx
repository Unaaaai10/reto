import WarningButton from '@/Components/WarningButton';
import DangerButton from '@/Components/DangerButton';
import SeeMoreButton from '@/Components/SeeMoreButton';
import Modal from '@/Components/Modal';

function Card(props) {


    return (
  <div>
        <div className="cont_cartel">
            <img className="img_principal_cartel" src={props.imagen} alt=""/>
            <h5>{props.titulo}</h5>
            <div className="cont_descripcion_cartel">
              <p id="descripcion_articulos"> <strong>Descripcion </strong>{props.descripcion}</p>
            </div>
            <div className="d-flex justify-content-around cont_precios_valoraciones align-items-center">
              <img className="img_cartel_valoracion" src= {props.imgvaloracion} alt=""/>
              <p className="mt-3 al precio_cartel">Precio: <strong>{props.price}€</strong></p>
            </div>
            <div className="align-items-center d-flex justify-content-around">
              <SeeMoreButton>
                <a className="enlaces_cards_btn" href={route('activity_info', {id: props.id})}>See More</a>
              </SeeMoreButton>
            </div>
          <div id="tags"> 
            <ul>
              <a href="">Sport</a>
              <a href="">Cultural</a>
            </ul>
          </div>
      </div>
    </div>
    
     
    );
  }
  export default Card;