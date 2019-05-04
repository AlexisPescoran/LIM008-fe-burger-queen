import React, { Fragment } from 'react';

const Total = ({ pedido }) => {
  return (
    <Fragment>
      <div>
        <p>Total</p>
        {pedido.length
          ? <p>{pedido.reduce((acumulador, { value, cantidad }) => acumulador + (value * cantidad), 0)}</p>
          : <p>calculando</p>
        }
      </div>
    </Fragment>
    
  );
};

export default Total;
// {/* <p>{totalCount}</p> */}
{/* <button type="button" name="Desayuno" onClick={totalCount}>ver cuenta</button> */}