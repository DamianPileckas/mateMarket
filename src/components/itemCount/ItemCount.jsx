import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const ItemCount = ({stock, agregar}) => {
  const [count, setCount] = useState(0);
  const [itemStock, setItemStock] = useState(stock);
  const [ visible, setVisible ] = useState(true);
  const increment = () => {
    if(count < itemStock){
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const addToCart = () => {
    if(count <= itemStock){
      setItemStock(itemStock - count);
      agregar(count)
      setCount(1)
      setVisible(false);
      console.log("Agregaste " + count + " productos al carrito!")
    }
    if(itemStock > 1){
      setCount(0)
    }
  }

  useEffect(() => {
    setItemStock(stock)
  }, [stock])

  return (

    <>
      {visible ? 
      <div className="counter-container d-flex justify-content-center">
        <div className='row w-75'>
          <div className='col'>  
            <div className="btn-group p-1">
                <button type="button" className="btn btn-primary rounded-start-pill" onClick={decrement}>-</button>
                <input type="number" className="btn btn-primary w-25" value={count} readOnly />
                <button type="button" className="btn btn-primary rounded-end-pill" onClick={increment}>+</button>
            </div>
            <button className="btn btn-primary" onClick={addToCart}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div> : <Link to={"/cart"} className="btn btn-primary rounded-pill">Terminar Mi Compra</Link> }
    </>
  );
};

export default ItemCount
