import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const itemCount = 5; // Número hardcodeado

  return (
    <>
      <div className="cart-widget ">
        <FaShoppingCart size={24} />
        <span className="badge bg-primary">{itemCount}</span>
      </div>
    </>
  );
};

export default CartWidget
