import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Cliente from './components/Cliente'
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
    const { name } = event.target
    const { food } = this.state;
    const foodFiltered = food.filter(({ option }) => option === name);
    this.setState({ typesFood: foodFiltered })
    console.log(name, food, foodFiltered)
  }

  updateList = (elem) => {
    const { pedido } = this.state;
    this.setState({ pedido: [...pedido, elem] })
  }

  deleteItem = (idToDelete) => {
    const { pedido } = this.state;
    this.setState({ pedido: pedido.filter(({ id }) => id !== idToDelete) })
  }

  addItem = (idToIncrease) => {
    const { pedido } = this.state;
    pedido.forEach(obj => {
      if (obj.id === idToIncrease) {
        obj.cantidad = obj.cantidad + 1
      }
    })
    this.setState({ pedido })
  }

  componentDidMount() {
    const carta = data.default;
    const filterDefault = carta.filter(({ option }) => option === 'Desayuno');
    this.setState({ food: carta, typesFood: filterDefault })
  }

  render() {
    const { typesFood, pedido } = this.state;

    return (
      <div className="col-12">
        <Header />
        <div className="row">
          <div className="col-6">

            <Menu menu={this.updateTypeFood} />
            <ListaMenu typesFood={typesFood} updateList={this.updateList} />
          </div>
          <div className="col-6">
            <Cliente />
            <Pedido pedido={pedido} deleteItem={this.deleteItem} addItem={this.addItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
