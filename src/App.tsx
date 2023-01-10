import React , {FunctionComponent} from 'react';
import PokemonList from './pages/pokemon-list';
//import { Link, Router } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import {  BrowserRouter as Router , Route, Link, Routes } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

  // React.FC = FunctionComponent
const App: FunctionComponent = () => {
 
    return (
      <Router>
     
        <div>
          {/* La barre de navigation commun à toutes les pages */}
          <nav>
            <div  className='nav-wrapper teal'>
              <Link to='/' className="brand-logo center">Pokédex</Link>
            </div>
          </nav>
          {/* Le système de gestion des routes de notre application */}
          <Routes>
            <Route path='/login' element= {<Login/>} />
            <Route path='*' element= {<PageNotFound/>} />
            
            <Route element= {<PrivateRoute/>}>
              
              <Route  path='/' element= {<PokemonList/>} />
              <Route  path='/pokemons' element= {<PokemonList/>}/>
              <Route  path='/pokemons/edit/:id' element= {<PokemonEdit/>} />
              <Route  path='/pokemons/:id' element= {<PokemonsDetail/>} />
              <Route  path='/pokemons/add' element={<PokemonAdd/>} />

            </Route>

          </Routes>
         
        </div>
     
      </Router>
      
      )
}
  
export default App;