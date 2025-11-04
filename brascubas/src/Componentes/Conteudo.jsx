import estilo from './Conteudo.module.css';
import zodiaco from '../assets/zodiaco.jpg'

export function Conteudo(){
    return(
        <div className={estilo.fundoinicial}>
            <main className= {estilo.container}>
                <h1 className={estilo.titulo}>Cavaleiros do Zodíaco</h1>
                <figure>
                    <img className={estilo.zodiaco} src={zodiaco} alt="cavaleiros do zodiaco" />
                </figure>
            
            <p>
                Cavaleiros do Zodíaco narra a jornada de jovens guerreiros conhecidos como Cavaleiros, 
                indivíduos treinados para despertar e controlar o Cosmo,uma energia interior capaz de ampliar suas capacidades físicas e espirituais.
                Cada Cavaleiro utiliza uma armadura ligada a uma constelação específica, que simboliza sua força e identidade.
            </p>

            <br />

            <p>
               O protagonista, Seiya de Pégaso, une-se a outros Cavaleiros — Shiryu de Dragão, Hyoga de Cisne,
                Shun de Andrômeda e Ikki de Fênix — para proteger a deusa Atena, reencarnada na jovem Saori Kido.
                Juntos, eles enfrentam diversas ameaças que colocam em risco o equilíbrio da Terra, passando por batalhas intensas
                contra poderosos inimigos, como os Cavaleiros de Ouro do Santuário, os guerreiros de Poseidon e, posteriormente, as forças de Hades. 
            </p>
            
            <br />

            <p>
                A obra destaca temas como perseverança, companheirismo, sacrifício e a luta constante pela justiça.
                É marcada por confrontos emocionantes, relações de lealdade e pela ideia de superar limites através da determinação.
            </p>



            </main>
       </div>
       
    )
}