import React, { Fragment } from 'react';

const Menu = ({ menu }) => {
    return (
        <Fragment>
            <table>
            <tr>
                <div>
                    <td><button name="Desayuno" onClick={menu}>Desayuno</button></td>
                    <td><button name="Comida" onClick={menu}>Almuerzo</button></td>
                    <td><button name="Bebidas" onClick={menu}>Bebidas</button></td>
                    <td><button name="Extras" onClick={menu}>Extras</button></td>                    
                </div>
            </tr>
        </table>            
        </Fragment>

    )
}

export default Menu;