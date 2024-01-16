
import React from 'react';
import PrimaryButton from './PrimaryButton';


export default function FormularioContacto(props) {
  return (

  <div id="contenedor_titulo_form">
    <h3 id='contact_us' className="text-uppercase text-white text-center">Contact us</h3>
    <div id="subcontenedor_titulo_form">
      <div id="formulario">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="text-white form-label">Email:</label>
          <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className=" text-white form-label">Message:</label>
          <textarea className="form-control " id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <PrimaryButton>Send</PrimaryButton>
        
      </div>
    </div>
  </div>

  );
}
