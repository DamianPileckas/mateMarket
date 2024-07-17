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
    if(count <= itemStock){
      setItemStock(itemStock - count);
      setCount(1)
    }
    if(itemStock > 1){
      setCount(0)
    }
  }

  return (
    <div className="counter-container">
      <div className='row justify-content-center'>
        <div className='col-4'>  
          <div className="btn-group">
              <button type="button" className="btn btn-primary rounded-start-pill" onClick={decrement}>-</button>
              <input
                type="number"
                className="btn btn-primary"
                value={count}
                readOnly 
              />
              <button type="button" className="btn btn-primary rounded-end-pill" onClick={increment}>+</button>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount
