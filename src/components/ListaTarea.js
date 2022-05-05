import React from "react";
import TareaIndividual from "./TareaIndividual";

const ListaTarea = (props) => {
  return (
    <ul className="list-group">
      {props.tareas.map((dato, indice) => (
        <TareaIndividual nombreTarea={dato} key={indice} borrarTarea={props.borrarTarea}></TareaIndividual>
      ))}
    </ul>
  );
};

export default ListaTarea;
