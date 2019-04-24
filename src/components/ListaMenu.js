import React from 'react';

const ListaMenu = ({ typesFood, updateList }) => (
  <div>
    <p>LISTA_MENU</p>
    {typesFood.length
      ? typesFood.map((elem) => {
        const { item, value } = elem;
        return (
          <p key={elem.id}>
            {item}
            {' '}
            <br />
            {value}
            <button type="button" onClick={() => { updateList(elem); }}>add</button>
          </p>
        );
      })
      : <p>Cargando ...</p>
            }
  </div>

);
export default ListaMenu;
