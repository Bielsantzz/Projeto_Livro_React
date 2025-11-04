import estilo from './Autor.module.css'
import autor from '../assets/autor.jpg'

export function Autor() {
    return (
        <div className={estilo.fundo}>
            <section className={estilo.container}>
                <h1 className={estilo.autor}>Masami Kurumada</h1>
                <figure className={estilo.imgContainer}>
                    <img src={autor} alt="Autor: Masami Kurumada" />
                </figure>

                <div className={estilo.bio}>
                    <p>
                        Masami Kurumada nasceu na cidade de Tóquio, capital do Japão, no dia 6 de dezembro de 1953.
                        É autor de vários mangás, sendo sua obra mais famosa a série: Os Cavaleiros do Zodíaco.
                    </p>

                    <p>
                        O primeiro trabalho de Kurumada foi Otoko Raku, que lhe rendeu um prêmio num concurso de mangá
                        para mangaka aspirante. Logo depois, se tornou assistente de mangakas profissionais.
                        Iniciou carreira profissional em 1974 com Sukeban Arashi, e conseguiu o primeiro sucesso 3 anos
                        depois quando começou a escrever e desenhar Ring ni Kakero, que trouxe a ele reconhecimento
                        como autor, série essa que durou 5 anos e que ele considera como sua obra favorita.
                        É importante mencionar também que o fato de ser praticante de artes marciais desde a juventude
                        teve grande influência em suas obras.
                    </p>
                    
                         <br />

                    <p>
                        Além de seu trabalho em mangá, Kurumada também escreveu roteiros para animações e supervisionou algumas adaptações de suas obras. 
                        Ele é conhecido por seu estilo de desenho dinâmico e cenas de luta detalhadas, influenciando muitos mangakás que vieram depois.
                    </p>

                        <br />

                    <p>
                        Apesar de seu sucesso, Kurumada é uma figura reservada e pouco midiática, preferindo manter seu foco na criação de histórias e desenhos.
                         Hoje, ele é considerado um dos grandes nomes do mangá shōnen clássico, com uma carreira que atravessa décadas.
                    </p>

                 
                </div>
            </section>
        </div>
    )
}
