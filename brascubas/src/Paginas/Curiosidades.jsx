import estilo from './Curiosidades.module.css'
import guardians from '../assets/guardians.jpg'
import pegasu from '../assets/pegasu.jpg'
import mitologia from '../assets/mitologia.jpg'



export function Curiosidades(){
    return(
        <div className={estilo.fundao}>
            <main>
                <h1 className={estilo.titulo}>Curiosidades</h1>


                <h2> Existe uma versão Americana do Anime </h2>
                <figure className={estilo.copia}>
                    <img src={guardians} alt="cavaleiros do zodiaco copia" />
                </figure>

            <p className={estilo.texto}>
                Embora não se tenha muito detalhes da produção, o fato é que a ideia era fazer
                 uma versão completamente americanizada dos Cavaleiros do Zodíaco, seguindo uma pegada que seria mais...
                  confortável para que o público norte-americano já consumia. Nessa história, Seiya é Zack, Ikki é Quinn, Hyoga é Jake, 
                  Shun é Max, Shiryu é Clint, e Saori é Nova.
            </p>

            

            <p className={estilo.texto}>
                A existência dessa animação foi descoberta pela YouTuber Ray Mona, responsável pela 
                série documental Tales of the Lost, enquanto procurava por informações a respeito de outra pérola: StarStorm, a adaptação live-action
                de Cavaleiros do Zodíaco produzida pela Reinassance-Atlantic Film, em 1994. Ambas as produções foram canceladas, mas o poder da internet as tornou públicas.
             </p>

            <br />



                <h2> A razão para o nome “Saint Seiya”</h2>
                <figure className={estilo.pegasu}>
                    <img src={pegasu} alt="pegasus" />
                </figure>

                <p>
                    Kurumada escolheu o título para seu manga como “Saint Seiya” depois de desenvolver o conceito
                     dos defensores de Athena, que são chamados de “Saints” na obra original.
                    Além disso, Kurumada afirmou que uma das primeiras ideias que concebeu 
                    para Saint Seiya foi o Meteoros de Pégaso. Uma vez que seu mangá iria usar constelações como destaque,
                     ele queria que o protagonista tivesse um golpe que seria como uma chuva de meteoros.
                </p>


            <br />

                <h2>Existem referências a mitologia em Cavaleiros do Zodíaco</h2>
                 <figure className={estilo.mitologia}>
                    <img src={mitologia} alt="pegasus" />
                </figure>

                <p>
                    Como ficou claro no título, a série é baseada no zodíaco e cada personagem representa uma constelação.
                    Além disso, muitos dos nomes e temas na série são inspirados na mitologia grega. Por exemplo, o personagem Poseidon é baseado no deus grego do mar,
                    enquanto Hades é baseado no deus grego do submundo. Além disso, as técnicas de luta dos cavaleiros são frequentemente nomeadas após figuras mitológicas, 
                    como o Escudo de Medusa e o Relâmpago de Zeus.
                </p>



            </main>
        </div>
    )
}