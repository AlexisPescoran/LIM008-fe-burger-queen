import React from 'react'

const Pedido = ({pedido, deleteItem, addItem}) => {
    return(
        <div>
            <label>Cliente</label>
            <input type = "text"></input>
            {pedido.length
            ? pedido.map((elem, i) => {
              const { item, value } = elem;
              return (
                <p key={i}>
                  {item} <br />
                  {value}
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