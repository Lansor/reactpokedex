import Types from './Types'
import { Link } from "react-router-dom";

const ElementListPokemon = ({ id, nom, types }) => {
    return (
        <>
            <div className='row w-75 m-auto'>
                <div className='col-2'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={nom} />
                </div>
                <div className='col-2 my-auto'>{id}</div>
                <div className='col-5 my-auto'><Link to={`/pokemon/${id}`}>{nom}</Link></div>
                <div className='col-3 my-auto'>
                    <div className='row'>
                        {types.map((data, id) => {
                            return <Types key={id} type={data} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ElementListPokemon
