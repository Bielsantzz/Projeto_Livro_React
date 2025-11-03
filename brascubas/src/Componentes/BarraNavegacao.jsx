import estilo from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

export function BarraNavegacao(){
    return(
        <nav className={estilo.onde}>
            <ul>
                <li><Link to="/">Meu Livro</Link></li>
                <li><Link to="autor">Autor</Link></li>
                <li><Link to="curiosidade">Curiosidades</Link></li>
            </ul>
        </nav>
    )
}