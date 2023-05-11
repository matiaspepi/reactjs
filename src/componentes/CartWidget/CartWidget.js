import cart from "./assets/cart.svg"
import "./CartWidget.css"
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
    return (
      <div className="content-cart">
         <Button className="button-cart" variant="primary">
           <img className="cart-img" src={cart} alt="cart-widget"/>
           0
        </Button>{' '}     
      </div>
    )
    
}
export default CartWidget