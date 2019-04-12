import React from 'react';
import './css/Pedido.css';

export default function Pedido(props) {
    return(        
        <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {props.data.length > 0 ? (
                  props.data.map(user => (
                    <tr key={user.item}>
                      <td>{user.value}</td>
                      <td>{user.option}</td>
                      <td>
                        <button className="button muted-button">Edit</button>
                        <button className="button muted-button">Delete</button>
                      </td>
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