import React, { useState } from 'react';

const ItemCount = ({stock}) => {
  const [count, setCount] = useState(0);
  const [itemStock, setItemStock] = useState(stock);

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

  const onAdd = () => {
    console.log(itemStock) 
    if(count <= itemStock){
      setItemStock(itemStock - count);
      setCount(1)
    }
    if(itemStock > 1){
      setCount(0)
    }
  }

  return (
    <div className="counter-container d-flex justify-content-center">
      <div className='row w-75'>
        <div className='col'>  
          <div className="btn-group p-1">
              <button type="button" className="btn btn-primary rounded-start-pill" onClick={decrement}>-</button>
              <input type="number" className="btn btn-primary w-25" value={count} readOnly />
              <button type="button" className="btn btn-primary rounded-end-pill" onClick={increment}>+</button>
          </div>
          <button className="btn btn-primary" onClick={onAdd}>
            Agregar al carrito
          </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default ItemCount
