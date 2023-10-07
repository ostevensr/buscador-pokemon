import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

export default function Pokemones() {
    const { nombre } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        consultaPokemon();
    }, []);

    const consultaPokemon = async () => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`No se cargó la api: ${response.status}`);
            }

            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            console.error("Error al consultar api:", error);
        }

        console.log(pokemon);

        console.log(pokemon.stats);

        console.log(pokemon.types.type)

    };


    return (
        <div className="poke-resultado">
            <h1>{nombre}</h1>

            {pokemon && (
                <div className="cont-cards">
                    <Card className="card-pokemon">
                        <Card.Img className="imagen-card" src={pokemon.sprites.front_default} />
                        <Card.Body>
                            {pokemon.stats.map((stat, index) => (
                                <Card.Text key={index}>
                                    {stat.stat.name}: {stat.base_stat}
                                </Card.Text>
                            ))}
                            <Card.Text>
                                {pokemon.types.map((type) => <Card.Text> {type.type.name} </Card.Text>)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )}
        </div>
    );
}
