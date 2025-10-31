import estilo from './Autor.module.css'
import autor from '../assets/autor.jpg'

export function Autor(){
    return(
        <body className={estilo.body}>
            <div className={estilo.fundo}>
            <main className={estilo.nome}>
                <h1>Masami Kurumada</h1>
                <figure className={estilo.imgContainer}>
                    <img src={autor} alt="autor: Masami Kurumada" />
                </figure>

                <h2 className={estilo.bio}>
                    <p>Masami Kurumada nasceu na cidade de Tóquio, capital do Japão, no dia 6 de dezembro de 1953.</p>
                    É autor de vários mangás, sendo sua obra mais famosa a série: Os Cavaleiros do Zodíaco.

                    <p>O primeiro trabalho de Kurumada foi Otoko Raku, que lhe rendeu um prêmio num concurso de mangá por mangaka aspirante. Logo depois, se tornou assistente de mangakas profissionais. 
                        Iniciou carreira profissional em 1974 com Sukeban Arashi, e conseguiu o primeiro sucesso 3 anos depois quando começou a escrever e desenhar Ring ni Kakero, que trouxe a ele reconhecimento como autor, série essa, que durou 5 anos e que ele considera como sua obra favorita. 
                        É importante mencionar também que o fato de ser praticante de artes marciais desde a juventude teve grande influência em suas obras.</p>
                </h2>
            </main>       
        </div>    
        </body>
        
    )
}
