import React from 'react'

const Cliente = ({dinerName, updateName}) => {
  return (
    <div>
      <label>Cliente</label>
      <input type="text" name="dinerName" defaultValue={dinerName} onChange={updateName}/>
    </div>
  );
}
export default Cliente;