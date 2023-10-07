// importando el hook useParams
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Pokemones() {

    const { nombre } = useParams();

    const [pokemon, setPokemon] = useState("");

    console.log(nombre)

    useEffect(() => {
        consultaApi();
    }, []);

    const consultaApi = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`
        const response = await fetch(url);
        const data = await response.json();
        const pokemon = data;
        setPokemon(pokemon);
    };

    console.log(pokemon)

    return (
        <div className="poke-resultado">
            <h1>Numero Enviado: {nombre}</h1>
        </div>
    );
}