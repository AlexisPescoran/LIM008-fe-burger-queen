import React, { Fragment } from 'react';

const Menu = ({ menu }) => {
    return (
        <Fragment>
            <table>
            <tr>
                <div>
                    <td><button name="Desayuno" onClick={menu}>desayuno</button></td>
                    <td><button name="Comida" onClick={menu}>almuerzo</button></td>
                    <td><button name="Bebidas" onClick={menu}>bebidas</button></td>
                    <td><button name="Extras" onClick={menu}>extras</button></td>
                </div>
            </tr>
        </table>            
        </Fragment>

    )
}

export default Menu;