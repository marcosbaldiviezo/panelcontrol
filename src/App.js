import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import OrderProcessed from "./components/OrderProcessed";
import FormTareas from "./components/FormTareas";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    consultaAPI();
  }, []);

  const consultaAPI = async () => {
    setCargando(true);
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const result = await respuesta.json();

    setTimeout(() => {
      setPersonaje(result[0]);
      setCargando(false);
    }, 1000);
  };

  const mostrarComponente = cargando ? (
    <Spinner></Spinner>
  ) : (
    <Frase propiedadPersonaje={personaje}></Frase>
  );

  return (
    // <div>
    //  {/* <Navigation/>
    //  <OrderProcessed comision='5A' prueba={true}/>
    //  <FormTareas></FormTareas> */}
    // </div>

    <section className="container text-center my-5">
      <article className="d-flex flex-column align-items-center">
        {/* <img
          src={process.env.PUBLIC_URL + "ndway.png"}
          alt="logo"
          className="w-50 mb-5"
        /> */}
        <Button
          variant="warning"
          className="w-50 mb-5"
          onClick={() => consultaAPI()}
        >
          Obtener frase
        </Button>
      </article>
      {mostrarComponente}
    </section>
  );
}

export default App;
