import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Notes from './pages/Notes';
import Submit from './pages/Submit';
import CS from './pages/CS';
import History from './pages/History';
import PokemonNotes from './pages/PokemonNotes';

const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Landing/>} />
    <Route path='/notes' element={<Notes/>} />
    <Route path='/submit' element={<Submit/>} />
    <Route path='/CS' element={<CS/>} />
    <Route path='/History' element={<History/>} />
    <Route path='/PokemonNotes' element={<PokemonNotes/>} />
  </Routes>
);
}
export default Main;