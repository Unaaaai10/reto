import React from 'react';
import { Link, Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Titulo2(props) {
  return (
    <div id="contenedor_titulo2" className=" bg-dark w-100 flex-column">
        <h1 id="titulo2" className="text-uppercase text-white text-center">HOP UP</h1>
        <h3 id="subtitulo2">{props.nombre}</h3>
    </div>

  );
}

// Exporta el componente para que pueda ser utilizado en otros archivos
export default Titulo2;