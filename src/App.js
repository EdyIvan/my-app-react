import React from 'react';
import C00ComponenteNuevo from './components/C00ComponenteNuevo';
import Saludo from './components/C01Saludo';
import Contador from './components/C02Contador'; //Con o sin extension js
import Operador from './components/C03Operador';
import Matriz from './components/C04Matriz';
import MatrizOperaciones from './components/C05MatrizOperaciones';
//import logo from './logo.svg';
//import './App.css';
/*
import logo from '.logo.svg';
impot './App.css';
*/
function App() {

  return(
    <div>
      <h1>Practicas... React</h1>
      <C00ComponenteNuevo />
      <hr />
      <Saludo />
      <hr />
      <Contador />
      <hr />
      <Operador />
      <hr />
      <Matriz />
      <hr />
      <MatrizOperaciones />
    </div>
  );
/*  return (
    <div className="App">
        <h1>Hola Mundo desde React</h1>
        <Contador />
    </div>
  );
*/
}

export default App;
