import React from 'react'

const Pedido = ({pedido, deleteItem, addItem}) => {
    return(
        <div>
            {pedido.length
            ? pedido.map((elem, i) => {
              const { item, value, cantidad } = elem;
              return (
                <p key={i}>
                  {item} <br />
                  {value} <br />
                  {cantidad}
                  <button onClick={() => {deleteItem(elem.id)}}>-</button>
                  <button onClick={() => {addItem(elem.id)}}>+</button>
                </p>
              )
            })
            :<p>Esperando selección de pedido ...</p>
            }
            
        </div>    
            
    )
}
export default Pedido