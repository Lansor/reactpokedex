import { useParams } from 'react-router-dom'
import pokemons from '../components/data/pokemon'
const Pokemon=()=>{
    
    const { id } = useParams()

    const pokemon = pokemons.find((projet) => projet.id.toString() === id)

    if (!pokemon) {
        return <h2>Pokemon non trouvé</h2>
    }

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
                    {pokemon.types}
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
        </>
    )
}

export default Pokemon
