import { useParams } from 'react-router-dom'
import pokemons from '../data/pokemons'
import Types from '../components/Types'
import { Link } from 'react-router-dom'
const Pokemon=()=>{
    
    const { id } = useParams()

    const pokemon = pokemons.find((p) => p.id.toString() === id)

    if (!pokemon) {
        return <h2>Pokemon non trouvé</h2>
    }
    // const idSuivant = parseInt(id)+1;
    // const pokemonSuivant = pokemons.find((p) => p.id.toString() === idSuivant.toString())
   

    return(
        <>
        <h2>{pokemon.nom}</h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.nom} style={{ width: '200px', height: 'auto' }}/>
        <table>
            <tbody>
            <tr>
                <td>
                    Types
                </td>
                <td>
                <div className='row'>
                        {pokemon.types.map((data, id) => {
                            return <Types key={id} type={data} />
                        })}
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    PV
                </td>
                <td>
                    {pokemon.stats.pv}
                </td>
            </tr>
            <tr>
                <td>
                    Attaque
                </td>
                <td>
                    {pokemon.stats.attaque}
                </td>
            </tr>
            <tr>
                <td>
                    Def
                </td>
                <td>
                    {pokemon.stats.defense}
                </td>
            </tr>
            <tr>
                <td>
                attaque spéciale
                </td>
                <td>
                    {pokemon.stats.atkSpe}
                </td>
            </tr>
            <tr>
                <td>
                defense spéciale
                </td>
                <td>
                    {pokemon.stats.defSpe}
                </td>
            </tr>
            <tr>
                <td>
                    vitesse
                </td>
                <td>
                    {pokemon.stats.vitesse}
                </td>
            </tr>
            </tbody>
        </table>
        {/* <Link to={`/pokemon/${pokemonSuivant.id}`}>
        Pokemon Suivant
    </Link> */}
        
        </>
    )
   
}

export default Pokemon
