import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            console.log("Esta el producto! ");
            const product = carrito.find(prod => prod.id == item.id);
            product.quantity += quantity
            
            console.log("Cantidad "+quantity);
            setCarrito([...carrito, product]);
            
        }else{
            setCarrito([...carrito, { ...item, quantity:quantity}])
            carrito.forEach(item => {console.log(item.id + " " + item.title)});
            showList();
        }
    }

    const removeItem = (id) => {
        const items = carrito.filter(item => item.id != id);
        setCarrito([...items]);
    }

    const clear = () => {
        setCarrito([]);
    }

    const isInCart = (id) => {
        return carrito.some(item => item.id == id);
    }

    const totalProducts = (id) => {
        return carrito.reduce((acum, item) => acum += item.quantity, 0);
    }

    const sumProducts = (id) => {
        return carrito.reduce((acum, item) => acum += item.quantity * item.price, 0);
    }

    const showList = () => {
        return carrito.forEach( item => {console.log("TEST SHOWLIST => ID "+item.id+", title "+item.title)})
    }
    return <CartContext.Provider value={{carrito, addItem, removeItem, clear, totalProducts, sumProducts, showList}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider