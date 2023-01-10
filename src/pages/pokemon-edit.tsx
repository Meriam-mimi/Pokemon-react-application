import React, { FunctionComponent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/loader';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
//import POKEMONS from '../models/mock-pokemon';
import PokemonService from '../services/pokemon-service';
 
type Params = { id: string };
  
const PokemonEdit: FunctionComponent = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState<Pokemon|null>(null);
  
  useEffect(() => {
    // POKEMONS.forEach(pokemon => {
    //   if (params.id === pokemon.id.toString()) {
    //     setPokemon(pokemon);
    //   }
    // })
    // fetch(`http://localhost:3001/pokemons/${params.id}`)
    // .then(response => response.json())
    // .then(pokemon => { if(pokemon.id) setPokemon(pokemon); });
    
    PokemonService.getPokemon(Number(params.id)).then(pokemon=> setPokemon(pokemon));
  }, [params.id]);
    
  return (
    <div>
      { pokemon ? (
        <div className="row">
            <h2 className="header center">Éditer { pokemon.name }</h2>
            <PokemonForm pokemon={pokemon} isEditForm={true} ></PokemonForm>
        </div>
      ) : (
        <h4 className="center"><Loader/></h4>
      )}
    </div>
  );
}
  
export default PokemonEdit;