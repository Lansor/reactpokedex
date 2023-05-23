import ElementListPokemon from '../components/ElementListPokemon'
import pokemons from '../data/pokemons.js'

const Pokemons = () => {
    return (
        <>
            <div className='container mt-5'>
                {pokemons.map((data, id) => {
                    return <ElementListPokemon key={data.id} id={data.id} nom={data.nom} types={data.types} />
                })}
            </div>
        </>
    )
}

export default Pokemons
