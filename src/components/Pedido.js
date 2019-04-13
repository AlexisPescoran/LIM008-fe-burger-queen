import React from 'react';
import './css/Pedido.css';

export default function Pedido(props) {
    return(        
        <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Costo</th>
                  <th>Menú</th>
                </tr>
              </thead>
              <tbody>
                {props.data.length > 0 ? (
                  props.data.map(user => (
                    <tr key={user.item}>
                      <td>{user.item}</td>
                      <td>{user.value}</td>
                      <td>{user.option}</td>                      
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>No users</td>
                  </tr>
                )}
              </tbody>
            </table>

    );
}