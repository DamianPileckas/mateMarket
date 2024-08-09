import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);
  const itemCount = 5; // Número hardcodeado

  if(totalProducts() > 0){
    return (
      <Link to={"/cart"}>
        <div className="cart-widget rounded">
          <FaShoppingCart size={24} />
          <span className="badge bg-primary">{totalProducts()}</span>
        </div>
     </Link>
    );
  }
};

export default CartWidget
