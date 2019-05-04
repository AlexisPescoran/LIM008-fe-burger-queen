import React from 'react'

const Pedido = ({pedido, deleteItem, addItem, decreaseItem}) => {
  return (
    <div>
      {pedido.length
        ? pedido.map((elem) => {
          const { item, value, cantidad } = elem;
          return (
            <p key={elem.id}>
              {item}
              <br />
              {value * cantidad}
              <br />
              {cantidad}
              <button type="button" onClick={() => { deleteItem(elem.id)}}>x</button>
              <button type="button" onClick={() => { addItem(elem.id)}}>+</button>
              <button type="button" onClick={() => { decreaseItem(elem.id)}}>-</button>
            </p>
          )
        })
        : <p>Esperando selección de pedido ...</p>
      }

    </div>

  )
}
export default Pedido