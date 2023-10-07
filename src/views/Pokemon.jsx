
// importando par de hooks de React
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

export default function Pokemon() {
    const [nombre, setNombre] = useState("");

    const navigate = useNavigate();

    const [nombres, setNombres] = useState([]);

    useEffect(() => {
        consultaApi();
    }, []);

    const consultaApi = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        const response = await fetch(url);
        const data = await response.json();
        const nombres = data.results.map((poke) => poke.name);
        setNombres(nombres);
    };

    //console.log(nombres)


    const irAPersonajes = () => {
        navigate(`/pokemones/${nombre}`)
    };

    return (
        <div className="buscador">
            <h1>Selecciona un Pokemón</h1>

            <Form.Select aria-label="Default select example" onChange={({ target }) => setNombre(target.value)}>
                <option value="">Pokemones</option>
                {nombres.map((name, index) => (
                    <option key={index} value={name}>
                        {name.toUpperCase()}
                    </option>
                ))}
            </Form.Select>

            <button onClick={irAPersonajes}>Ver Detalle</button>

        </div>
    );
}