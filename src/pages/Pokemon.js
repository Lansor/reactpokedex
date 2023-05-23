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
        <img src={pokemon.image} alt={pokemon.nom} style={{ width: '200px', height: 'auto' }}/>
        <table>
            <tbody>
            <tr>
                <td>
                    Type
                </td>
                <td>
                    {pokemon.type}
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
                    Atk
                </td>
                <td>
                    {pokemon.stats.atk}
                </td>
            </tr>
            <tr>
                <td>
                    Def
                </td>
                <td>
                    {pokemon.stats.def}
                </td>
            </tr>
            <tr>
                <td>
                    atkSpe
                </td>
                <td>
                    {pokemon.stats.atkSpe}
                </td>
            </tr>
            <tr>
                <td>
                    defSpe
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
                    {pokemon.stats.vit}
                </td>
            </tr>
            </tbody>
        </table>
        </>
    )
}

export default Pokemon;