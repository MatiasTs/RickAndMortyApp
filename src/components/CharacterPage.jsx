import React from "react";
import { useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";

export default function Info(){

    const params = useParams();

    const [character, setCharacter] = useState(null);


    useEffect(()=> {
        fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
            .then(res => res.json())
            .then(data => setCharacter(data))
    }, []);

    


    return(
        <div>
            <h1 className="mb-5">{`Hola ${character ? character.name : 'Cargando...' }`}</h1>
            {character && <img width="100%" height="auto" src={character.image}></img>}
            <Link to='/'><h4 className="mt-4">Volver</h4></Link>

        </div>
    )
}