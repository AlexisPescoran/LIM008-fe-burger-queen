import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'
import Pedido from './components/Pedido'

const App = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AlexisPescoran/LIM008-fe-burger-queen/developer/src/dataJson/carta.json')
      .then(res => res.json())
      .then((json) => {
        setData(json);
      });
  });

  

  return (
    <div className="col-12">
      <Header />
      <div className="row">
        <div className="col-6">
          <Navbar />
        </div>
        <div className="col-6">
          <Pedido data = {data}/>
        </div>
      </div>
    </div>
  );
}
export default App;