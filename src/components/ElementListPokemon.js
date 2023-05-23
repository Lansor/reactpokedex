import Types from './Types'
import { Link } from 'react-router-dom'

const ElementListPokemon = ({ id, nom, types }) => {
    return (
        <>
            <Link
                to={`/pokemon/${id}`}
                className='row w-75 m-auto'
                style={{ textDecoration: ' none', color: 'white' }}
            >
                <div className='col-2'>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                        alt={nom}
                    />
                </div>
                <div className='col-2 my-auto'>{id}</div>
                <div className='col-5 my-auto'>{nom}</div>
                <div className='col-3 my-auto'>
                    <div className='row'>
                        {types.map((data, id) => {
                            return <Types key={id} type={data} />
                        })}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ElementListPokemon
