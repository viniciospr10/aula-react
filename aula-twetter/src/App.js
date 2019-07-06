import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button/Button";
import Cabecalho from "./components/Cabecalho"


class App extends Component {
  render() {
    return (
      <fragment>
        <Cabecalho />
        <Button nome="Enviar" classe="cancelar" />
        <Button nome="Tecnogueto" classe="aceitar" />
        <Button nome="Tecnogueto" classe="padrao" />

      </fragment>
    );
  }
}

export default App;
