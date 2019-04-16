import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Pedido from './components/Pedido'
import ListaMenu from './components/ListaMenu'
import Header from './components/Header'
import * as data from './dataJson/carta.json'

class App extends Component {
  state = {
    food: [],
    typesFood: [],
    pedido: []
  }

  //Actualizar la opción de comida
  updateTypeFood = event => {
    const {name} = event.target 
    const { food } = this.state;
    const foodFiltered = food.filter(({option})=> option === name);
    this.setState({typesFood: foodFiltered})
  }

  prueba = (elem) => {
    const { pedido } = this.state;
    this.setState({ pedido: [...pedido, elem]})
  }

  componentDidMount() {    
    const carta = data.default;
    const filterDefault = carta.filter(({option})=> option === 'Desayuno');
    this.setState({ food:carta, typesFood: filterDefault})
  }

  render() {
    const {typesFood}= this.state;

    return (
      <div className="col-12">
      <Header />
      <div className="row">
        <div className="col-6">

          <Menu menu={this.updateTypeFood} />
          {typesFood.length
            ? typesFood.map((elem, i) => {
              const { item, value } = elem;
              return (
                <p key={i}>
                  {item} <br />
                  {value}
                  <button onClick={() => {this.prueba(elem)}}>add</button>
                </p>
              )
            })
            :<p>Cargando ...</p>
            }
        </div>
        <div className="col-6">
          <Pedido />
        </div>
      </div>
    </div>

      
    );
  }
}

export default App;
