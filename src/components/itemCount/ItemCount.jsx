import React, { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  return (
    <div className="counter-container">
      <div className='row justify-content-center'>
        <div className='col-4'>  
          <div className="input-group">
              <span className="input-group-text counter-symbol" onClick={decrement} disabled={count === 0}>-</span>
              <input
                type="number"
                className="form-control text-center"
                value={count}
                readOnly
              />
              <span className="input-group-text counter-symbol" onClick={increment}>+</span>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={increment}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount
