import React from 'react';
import { Link, Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Titulo(props) {
  return (
    <div id="contenedor_titulo" className=" bg-dark w-100 flex-column">
        <h1 id="titulo" className="text-uppercase text-white text-center">{props.nombre}</h1>
        <h3 id="subtitulo">Hop up and try our new offers.</h3>

      <div id="div_social">
        <FontAwesomeIcon className="mx-2" icon={faInstagram} size="2x" color="#7EB62B" />
        <FontAwesomeIcon className="mx-2" icon={faFacebook} size="2x" color="#7EB62B" />
        <FontAwesomeIcon  className="mx-2" icon={faTwitter} size="2x" color="#7EB62B" />
      </div>
      <h4 id="frase_social">Follow us for more information</h4>
      <div id="contenedor_botones_Titulo">
        <button class="btn_titulo" className=" btn_titulo boton_cartel btn btn-success btn_cartel" type="button">
            <Link
                href={route('login')}
                className="font-semibold text-gray-600 hover:text-white-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                Log in
            </Link>
        </button>
        <button class="btn_titulo" className=" btn_titulo boton_cartel btn btn-success btn_cartel" type="button">                            
            <Link
                href={route('register')}
                className="font-semibold text-gray-600 hover:text-white-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        >Register
            </Link>
        </button>
      </div>
    </div>

  );
}

// Exporta el componente para que pueda ser utilizado en otros archivos
export default Titulo;