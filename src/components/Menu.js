import React, { Fragment } from 'react';

const Menu = ({ menu }) => {
  return (
    <Fragment>
      <div>
        <button type="button" name="Desayuno" onClick={menu}>Desayuno</button>
        <button type="button" name="Comida" onClick={menu}>Almuerzo</button>
        <button type="button" name="Bebidas" onClick={menu}>Bebidas</button>
        <button type="button" name="Extras" onClick={menu}>Extras</button>
      </div>
    </Fragment>

  );
};

export default Menu;