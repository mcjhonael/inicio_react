import React, { useState } from "react";
import Header from "./componentes/Header";

const App = () => {
  const titulo = "React - CodiGo";
  const [contador,setContador]=useState(0)


  //cuando yo referencio una funcion tengo la opcion
  const restar = (e) => {
    // console.log(e);
    setContador(contador-1) 
  };
  const sumar = (e) => {
    // console.log(e);
    setContador(contador+1);
  };
  console.log("dibujando react");
  return (
    <div>
      <Header></Header>
      <main>
        <h1>{titulo}</h1>

        <button onClick={restar}>-1</button>
        <span>{contador}</span>
        <button
          onClick={sumar}
        >
          +1
        </button>
      </main>
    </div>
  );
};

export default App;
