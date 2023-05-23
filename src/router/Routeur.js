import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Routeur = () => {
    return ( 
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path='/' element=<Pokemons />/>
                        <Route path='/pokemon/:id' element=<Pokemon />/>
                    </Routes>
                </Layout>
            </Router>
        </>
     );
}
 
export default Routeur;
