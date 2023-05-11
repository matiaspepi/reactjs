import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import celular from "./assets/celulares.jpg"
import tablets from "./assets/tablets.jpg"
import notebooks from "./assets/notebooks.jpg"
import Card from 'react-bootstrap/Card';
const NavBar = () => {
    return (
        <nav>
            <h1 className = "tittle">
                Ecomerce
            </h1>
            <CartWidget />
        <div className ="content-main">
          <Card data-aos="zoom-in-up" className= "cards" style={{ width: '18rem',height: '400px' }}>
                <Card.Img variant="top" src= {celular} style= {{height: '195px'}}/>
                   <Card.Body>
                  <Card.Title>Celulares</Card.Title>
                  <Card.Text>
                     Encontrá lo que buscás en Celulares. Todo lo que necesitás lo conseguís en un solo lugar.
                  </Card.Text>
                  <Button variant="primary">Comprar</Button>
                </Card.Body>
              </Card>

              <Card data-aos="zoom-in-up" className= "cards"  style={{ width: '18rem', height: '400px'}}>
                <Card.Img variant="top" src= {tablets}  />
                   <Card.Body>
                  <Card.Title>Tablets</Card.Title>
                  <Card.Text>
                        Encontrá Tablets de todo tipo y aprovechá las Ofertas en marcas de primer nivel.
                  </Card.Text>
                  <Button variant="primary">Comprar</Button>
                </Card.Body>
              </Card>

              <Card data-aos="zoom-in-up" className= "cards" style={{ width: '18rem'}}>
                <Card.Img variant="top" src= {notebooks}/>
                   <Card.Body>
                  <Card.Title>Notebooks</Card.Title>
                  <Card.Text>
                      Descubrí los productos más buscados que no te podés perder en Notebooks ✓ Con Envío Gratis y Rápido
                  </Card.Text>
                  <Button variant="primary">Comprar</Button>
                </Card.Body>
              </Card>
              </div>  
       
        </nav>
    )
}
export default NavBar