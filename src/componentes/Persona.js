import React from 'react'

const Persona = (props) => {
    console.log(props.persona);

  return (
    <tr>
        <td>{props.persona.id}</td>
        <td>{props.persona.first_name}</td>
        <td>{props.persona.last_name}</td>
        <td>{props.persona.email}</td>
        <td><img src={props.persona.avatar} alt="" /></td>
    </tr>
  )
}

export default Persona