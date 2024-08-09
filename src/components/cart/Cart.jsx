import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import  trash  from "../../assets/trash.svg";
import bag from "../../assets/bag.svg";
import { Link } from "react-router-dom";

const Cart = () => {

    const {carrito, removeItem, clear, totalProducts,sumProducts} = useContext(CartContext)


    if(totalProducts() == 0){
        return (
            <div className="container my-5 bg-light bg-gradient p-5 rounded">
                <div className="row">
                    <div className="col text-center">
                        <p><img src={bag} alt="Carrito" width={80}/></p>
                        <h1>Tu carrito está vacío</h1>
                        <h4>Te ayudamos a encontrar lo que buscas</h4>
                        <Link to={"/"} className="btn btn-dark rounded-pill mt-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    
                    <div className="table-responsive-xxl  w-100">
                        
                        <table className="table table-striped table-hover  w-100">
                            <tbody>
                                <tr>
                                    <td colSpan={5} className="text-end">
                                        <button className="btn btn-light btn-sm" title="Vacias Carrito"> Vaciar Carrito
                                            <img src={trash} alt="Eliminar Producto" width={25} onClick={() => {clear()}}/>
                                        </button>
                                    </td>
                                </tr>
                            {
                                carrito.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.pictureUrl} alt={item.title} width={100}/></td>
                                        <td className="align-middle">{item.title}</td>
                                        <td className="align-middle text-center">${item.price} X {item.quantity}</td>
                                        <td className="align-middle text-center">${item.price * item.quantity}</td>
                                        <td className="align-middle text-end">
                                            <button className="btn btn-light btn-sm" title="Eliminar Producto">
                                                <img src={trash} alt="Eliminar Producto" width={25} onClick={() => {removeItem(item.id)}}/>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                                <tr>
                                    <td className="align-middle text-center" colSpan={3}>Total a Pagar</td>
                                    <td className="align-middle text-center">${sumProducts()}</td>
                                    <td className="align-middle text-center">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;