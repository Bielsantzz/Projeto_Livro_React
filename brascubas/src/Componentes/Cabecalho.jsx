import estilo from './Cabecalho.module.css';

export function Cabecalho(){
    return(
        <header className={estilo.cabecalho}>
            <h1>Aplicação em React</h1>
        </header>
    )
}