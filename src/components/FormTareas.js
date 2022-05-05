import React, { useState, Fragment, useEffect } from "react";
import ListaTarea from "./ListaTarea";

const FormTareas = () => {
  let tareasLS = JSON.parse(localStorage.getItem("tareasKey"));
  const [tareas, setTareas] = useState(tareasLS);
  const [tarea, setTarea] = useState("");

  useEffect(() => {
    if (tareasLS) {
        localStorage.setItem('tareasKey', JSON.stringify(tareas));
    } else {
        localStorage.setItem('tareasKey', JSON.stringify([]));
    }
  }, [tarea, tareas]); // se ejecuta solo cuando el componente sea montado

  const guardarTarea = (e) => {
    setTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let arreglo = tareas;
    arreglo.push(tarea);
    setTareas(arreglo);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    let listTareaModificado = tareas.filter(
      (unaTarea) => unaTarea !== nombreTarea
    );
    setTareas(listTareaModificado);
  };

  return (
    <Fragment>
      <div className="container my-5 d-flex justify-content-center">
        <form className="w-75" onSubmit={handleSubmit}>
          <div className="mb-3 d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Agregar una tarea"
              value={tarea}
              onChange={guardarTarea}
              // onChange={(e) => setTarea(e.target.value)}
            />
            <button className="btn btn-outline-dark" type="submit">
              Agregar
            </button>
          </div>
        </form>
      </div>
      <section className="container w-50 my-5">
        <ListaTarea tareas={tareas} borrarTarea={borrarTarea}></ListaTarea>
      </section>
      <section></section>
    </Fragment>
  );
};

export default FormTareas;
