import React from 'react'

const ListaMenu = ({typesFood, updateList})  => {


    return(
        <div>
            <p>LISTA_MENU</p>
            {typesFood.length
            ? typesFood.map((elem, i) => {
              const { item, value } = elem;
              return (
                <p key={i}>
                  {item} <br />
                  {value}
                  <button onClick={() => {updateList(elem)}}>add</button>
                </p>
              )
            })
            :<p>Cargando ...</p>
            }
        </div>

    )
}
export default ListaMenu;