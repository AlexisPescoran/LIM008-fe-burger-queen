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
  }

  updateList = (elem) => {
    const { pedido } = this.state;       
    
    if (pedido.find(({ id }) => id === elem.id)) {
      const newPedido = pedido.map((item) => {
        if (item.id === elem.id) {
          return {
            ...item,
            cantidad: item.cantidad + 1,
            value: (item.cantidad + 1) * elem.value,
          }
        } else {
          return item;
        }
       });
       this.setState({ pedido: newPedido })
    } else {
      pedido.push({...elem, cantidad:1})
      this.setState({ pedido })
    }    
    // console.log('quiero ver la cantidad ', item.cantidad)
  }

  deleteItem = (idToDelete) => {
    const { pedido } = this.state;
    this.setState({ pedido: pedido.filter(({ id }) => id !== idToDelete) })
  }

  decreaseItem = (idToDecrease) => {
    const { pedido } = this.state;
    const newPedido = pedido.map((item) => {
      if (item.id === idToDecrease && item.cantidad > 1) {
        return {
          ...item,
          cantidad: item.cantidad - 1,
        }
      } else {
        return item;
      }
    })
    // this.setState({pedido})
    this.setState({ pedido: newPedido})
  }

  addItem = (idToIncrease) => {
    const { pedido } = this.state;
    const newPedido = pedido.map((item) => {
      if (item.id === idToIncrease) {
        return {
          ...item,
          cantidad: item.cantidad + 1,
          // value: item.cantidad  * item.value,
        }
      } else {
        return item;
      }
    })
    // this.setState({pedido})
    this.setState({ pedido: newPedido}) //is it necessary?porque me sale lo mismo
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
            <Pedido pedido={pedido} deleteItem={this.deleteItem} addItem={this.addItem} decreaseItem={this.decreaseItem}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
