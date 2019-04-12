import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'
import Pedido from './components/Pedido'

/*function dataFunction(){
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AlexisPescoran/LIM008-fe-burger-queen/developer/src/dataJson/carta.json')
      .then(res => res.json())
      .then((json) => {
        setData(json);
      });
  });
  // const data = [
  //   { id: 1, name: 'Tania', username: 'floppydiskette' },
  //   { id: 2, name: 'Craig', username: 'siliconeidolon' },
  //   { id: 3, name: 'Ben', username: 'benisphere' },
  // ]
  return data;
}*/

const App = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AlexisPescoran/LIM008-fe-burger-queen/developer/src/dataJson/carta.json')
      .then(res => res.json())
      .then((json) => {
        setData(json);
      });
  });

  // const [users, setUsers] = useState(data)

  return (
    <div className="col-12">
      <Header />
      <div className="row">
        <div className="col-6">
          <Navbar data = {data}/>
        </div>
        <div className="col-6">
          <Pedido data = {data}/>
        </div>
      </div>
    </div>
  );
}
export default App;