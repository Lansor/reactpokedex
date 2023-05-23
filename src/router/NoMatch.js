import { Link, useLocation } from 'react-router-dom'


export default function NoMatch() {
    let location = useLocation()

    return (
        <center>
            <h2>erreur 404</h2>

            <Link to='/' className='btn btn-primary'>
                Retour sur la page princpale
            </Link>
        </center>
    )
}
