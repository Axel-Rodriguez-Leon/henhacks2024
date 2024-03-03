import * as React from 'react';
import { Link} from 'react-router-dom';
import Main from './Main';
export default function App() {
  return (
    <>  
      <div>
      <Main />
        <ul>
          <li><Link to='/'>Landing</Link></li>
          <li><Link to='/Notes'>Notes</Link></li>
          <li><Link to='/Submit'>Submit</Link></li>
        </ul> 
      </div>   
    </>
  )
}
