import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Notes from './pages/Notes';
import Submit from './pages/Submit';

const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Landing/>} />
    <Route path='/notes' element={<Notes/>} />
    <Route path='/submit' element={<Submit/>} />
  </Routes>
);
}
export default Main;