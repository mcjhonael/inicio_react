import React from "react";
import Persona from "./Persona";
const Personas = (props) => {
  console.log(props.arreglo);
  console.log(props.fecha);
  return (
    <>
      <h5>Lista de personas a la fecha {props.fecha}</h5>
      <table className="table" border="1px">
        <thead className="table-header">
          <tr>
            <th>
              <strong>ID</strong>
            </th>
            <th>
              <strong>FIRST_NAME</strong>
            </th>
            <th>
              <strong>LAST_NAME</strong>
            </th>
            <th>
              <strong>EMAIL</strong>
            </th>
            <th>
              <strong>AVATAR</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.arreglo.map((objPersona) => {
            return <Persona persona={objPersona} key={objPersona.id}></Persona>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Personas;
