import React, { Fragment } from 'react';

const Menu = ({ menu }) => {
    return (
        <Fragment>
            <div>
                <button name="Desayuno" onClick={menu}>Desayuno</button>
                <button name="Comida" onClick={menu}>Almuerzo</button>
                <button name="Bebidas" onClick={menu}>Bebidas</button>
                <button name="Extras" onClick={menu}>Extras</button>
            </div>
                    
        </Fragment>

    )
}

export default Menu;