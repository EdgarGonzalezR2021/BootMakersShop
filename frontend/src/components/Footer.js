import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'



const EmailBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();


    if (keyword.trim()) {
      //history.push(`/email/${keyword}`)
    } else {
      //history.push('/')
    }
    
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='email'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='tu_email@ejemplo.com'
        className='form-control'
      ></Form.Control>
      <Button variant='info' className='p-2' onClick={() => alert('Pronto llegarán promociones exclusivas a tu email...')}>
        Enviar
      </Button>
    </Form>
  )



}


const Footer = () => {
  return (

    <footer id="footer" class="footer-1">
      <hr></hr>
      <div class="main-footer widgets-dark typo-light">
        <div class="container">
          <div class="row">

            {/*Address*/}
            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget subscribe no-box">
                <h5 class="widget-title">BootMakers Shop<span></span></h5>
                <p>5 de Febrero # 231
                  Zona Centro, León, Gto. México
                  Tel (52) 477 230 230 43</p>
              </div>
            </div>


            {/*Links a segmentos de la pagina*/}
            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">LINKS<span></span></h5>
                <ul class="thumbnail-widget">
                  <li>
                    <div class="thumb-content"><a href="/">&nbsp;Inicio</a></div>
                  </li>
                  <li>
                    <div class="thumb-content"><a href="/search">&nbsp;Buscar Producto</a></div>
                  </li>
                  <li>
                    <div class="thumb-content"><a href="/cart">&nbsp;Carrito de Compras</a></div>
                  </li>
                  <li>
                    <div class="thumb-content"><a href="/login">&nbsp;Login Usuario</a></div>
                  </li>
                </ul>
              </div>
            </div>


            {/*Link Redes sociales*/}
            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">Próximamente<span></span></h5>
                <a href="https://www.facebook.com"> <i class="fa fa-facebook fa-2x"> </i> </a>
                <a href="https://www.twitter.com"> <i class="fa fa-twitter fa-2x"> </i> </a>
                <a href="https://www.youtube.com"> <i class="fa fa-youtube fa-2x"> </i> </a>
                <a href="https://www.instagram.com"> <i class="fa fa-instagram fa-2x"> </i> </a>
              </div>
            </div>


            {/*Email al contacto*/}
            <div class="col-xs-12 col-sm-6 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">Suscribete!</h5>
                <p>Promociones exclusivas por email</p>
                <div class="emailfield">
                  <EmailBox/>
                  {/*
                  <input type="text" name="email" value="Email"></input>
                  <input name="uri" type="hidden" value="arabiantheme"></input>
                  <input name="loc" type="hidden" value="en_US"></input>
                  <input className="submitbutton ripplelink" type="submit" value="Suscribirse"></input>
                  */}
                  </div>

              </div>
            </div>

          </div>

          <div class="footer-copyright">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <p>Diseñado en BootCamp Fullstack por Edgar Gonzalez. Todos los derechos reservados. Copyright &copy; 2021 </p>
                </div>
              </div>
            </div>
          </div>



        </div>

      </div>
    </footer >
  )
}

export default Footer

