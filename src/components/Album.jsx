import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function Album() {


    const [datos, setDatos] = useState([]);

    useEffect(()=> {
        fetch("https://rickandmortyapi.com/api/character")
            .then( res => res.json())
            .then(data => setDatos(data.results))
    }, []);

    console.log("*********************1****************")

    //console.log(datos.map(objeto => objeto.id));

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
