import { Routes, Route} from 'react-router-dom';
import { Home } from './page/home';
import { Eventos } from './page/Eventos';

export function Router() {
    return ( 
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Eventos' element={<Eventos />}/>
        </Routes>
    );
}

