
import React from 'react';


function Footer(props) {
  return (
  <footer className="w-100 py-4 flex-shrink-0">
  <div className="container py-4">
    <div className="row gy-4 gx-5">
      <div className="col-lg-4 col-md-6">
        <h5 className="h1 text-white">HOP-UP</h5>
        <p className="small  text-white">Lorem ipsum dolor sit amet.</p>
        <p className="small  text-white mb-0">&copy; Copyrights. All rights reserved. <a className=" text-white"
            href="#">Hop Up</a></p>
      </div>
      <div className="col-lg-2 col-md-6">
        <h5 className="text-white mb-3">Quick links</h5>
        <ul className="list-unstyled  text-white">
          <li><a href="#">Copyrights</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Cokies policy</a></li>
          <li><a href="#">Other policies</a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-6">
        <h5 className="text-white mb-3">Other links</h5>
        <ul className="list-unstyled  text-white">
          <li><a href="/">Home</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="/contact">Contact us</a></li>
          <li><a href="#">Introduction</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-6">
        <h5 className="text-white mb-3">News</h5>
        <p className="small  text-white">Leave your email to receive news and stay up to date with the latest news.</p>
        <form action="#">
          <div className="input-group mb-3">
            <input className="form-control text-white" type="text" placeholder="Recipient's username"s
              aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-primary" id="button-addon2" type="button"><i
                className="fas fa-paper-plane"></i></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</footer>
  );
}

// Exporta el componente para que pueda ser utilizado en otros archivos
export default Footer;