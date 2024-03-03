import YouTubeVideo from '../YouTubeVideo';
import * as React from 'react';
import { Link} from 'react-router-dom';

const Notes = () => {
    return (
        <div>
            <h1> Select your notes</h1>
            <li><Link to='/History'>History</Link></li>
            <li><Link to='/CS'>CS</Link></li>
            <li><Link to='/PokemonNotes'>PokemonNotes</Link></li>
        </div>
        
    )
}
export default Notes;