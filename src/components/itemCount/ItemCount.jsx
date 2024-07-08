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
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text counter-symbol" onClick={decrement} disabled={count === 0}>
            -
          </span>
        </div>
        <input
          type="number"
          className="form-control text-center ml-2"
          value={count}
          readOnly
        />
        <div className="input-group-append">
          <span className="input-group-text counter-symbol" onClick={increment}>
           +
          </span>
        </div>
      </div>
      <button className="btn btn-primary ml-2" onClick={increment}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount
