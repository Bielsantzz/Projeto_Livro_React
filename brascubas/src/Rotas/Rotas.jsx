import {Routes, Route} from 'react-router-dom';
import { Inicial } from '../Paginas/Inicial';
import { Curiosidades } from '../Paginas/Curiosidades';
import { Autor } from '../Paginas/Autor';
import { Conteudo } from '../Componentes/Conteudo';

export function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Inicial/>}>
                <Route index element={<Conteudo/>}/>
                <Route path='autor' element={<Autor/>}/>
                <Route path='curiosidade' element={<Curiosidades/>}/>

            </Route>
        </Routes>
    )
}
    