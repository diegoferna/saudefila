import { Routes, Route} from 'react-router-dom';
import { Home } from './page/home';
import CadastroDeAtendimento from './page/CadastroDeAtendimento';

export function Router() {
    return ( 
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Cadastro' element={<CadastroDeAtendimento />}/>
        </Routes>
    );
}

