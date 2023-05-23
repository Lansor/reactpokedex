import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/layout';
import Pokemon from '../pages/Pokemon';
import Pokemons from '../pages/Pokemons';

const Routeur = () => {
    return ( 
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Pokemons/>}/>
                        <Route path='/pokemon/:id' element={<Pokemon/>}/>
                    </Routes>
                </Layout>
            </Router>
        </>
     );
}
 
export default Routeur;
