/* eslint-disable no-unused-expressions */
import React, {useState} from 'react';
import './css/Navbar.css';

// export default function Navbar() {
//   const dataJson = dataFunction();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">Desayuno</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <a className="navbar-brand" href="#">Comida</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <a className="navbar-brand" href="#">Bebidas</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <a className="navbar-brand" href="#">Acompañamiento</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       {/* <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Features</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Pricing</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link disabled" href="#">Disabled</a>
//           </li>
//         </ul>
//       </div> */}
//     </nav>
   
//   );
// }


/*EJEMPLO*/
const Navbar = (props) => {  
  return(
    <div>
      {/* <p>You clicked {count} times</p> */}
      <button onClick={() =><tbody>
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
              </tbody>}>
        Desayuno
      </button>     
      <button onClick={() => alert('prueba Comida')}>
        Comida
      </button>
      <button onClick={() => alert('prueba Bebidas')}>
        Bebidas
      </button>
      <button onClick={() => alert('prueba Acompañamiento')}>
        Acompañamiento
      </button>
    </div>
  )
  
}
export default Navbar