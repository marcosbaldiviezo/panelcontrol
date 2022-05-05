import React from "react";

const TareaIndividual = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      {props.nombreTarea}
      <button className="btn btn-outline-danger"
      onClick={() => props.borrarTarea(props.nombreTarea)}
      >Borrar</button>
    </li>
  );
};

export default TareaIndividual;
