import { Card } from "../../components/cards";
import { Navbar } from "../../components/navbar"
import logo from "../../images/Rustic_Printed-removebg-preview.png"
import carolina from "../../images/carolina.webp"
import marielle from "../../images/marielle-franco.webp"
import miltom from "../../images/milton_santos.webp"
import machado from "../../images/machado-de-assis.webp"
import dandara from "../../images/capa_dandara.jpeg"
import abdias from "../../images/abdias-do-Nascimento.jpg"
import "./styles.css"




export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="infoHome">
            <p id="textHome">A cada ano, a Câmara Municipal de Campinas tem a honra de conceder o Diploma Zumbi dos Palmares a um destacado membro da comunidade negra. Essa distinção representa uma homenagem merecida àqueles indivíduos que contribuíram significativamente para o progresso da comunidade negra em Campinas. Este site foi criado com o objetivo de exaltar essas pessoas e seu legado.</p>
            <img src={logo} alt="Logo" />
            </div>
            <div className="listCardsHome">
                <h1>Conheça algumas pessoas em destaque</h1>
                <div className="peopleCardsHome">
                   <Card 
                   image={carolina}
                   name="Carolina Maria"
                   description="Carolina Maria de Jesus é uma das figuras mais emblemáticas da literatura brasileira. Seu livro Quarto de Despejo, publicado em 1960, é um retrato fiel e impactante da vida de uma mulher negra e pobre que viveu nas favelas de São Paulo nos anos 50."
                   />
                   <Card 
                   image={marielle}
                   name="Marielle Franco"
                   description="Socióloga e política, Marielle Franco foi vereadora do Rio de Janeiro e uma defensora incansável dos direitos humanos. Ela lutou pelos direitos das mulheres, da população negra e das comunidades marginalizadas, sendo uma voz ativa contra a violência policial."
                   />
                   <Card 
                   image={miltom}
                   name="Milton Santos"
                   description="Geógrafo e intelectual, Milton Santos foi um dos principais pensadores brasileiros do século XX. Ele contribuiu para a compreensão da geografia humana e social, analisando as desigualdades espaciais e a exclusão no Brasil e no mundo."
                   />
                    <Card 
                   image={machado}
                   name="Machado de Assis"
                   description="Reconhecido como um dos maiores escritores da literatura brasileira, Machado de Assis foi o primeiro presidente da Academia Brasileira de Letras. Ele é conhecido por obras como Memórias Póstumas de Brás Cubas e Dom Casmurro"
                   />
                   <Card 
                   image={dandara}
                   name="Dandara dos Palmares"
                   description="Dandara foi uma guerreira e líder quilombola durante o período colonial brasileiro. Esposa de Zumbi dos Palmares, ela desempenhou um papel fundamental na defesa do Quilombo dos Palmares contra a opressão colonial."
                   />
                   <Card 
                   image={abdias}
                   name="Abdias do Nascimento"
                   description="Artista, político e ativista, Abdias do Nascimento foi uma figura central na luta pelos direitos dos afro-brasileiros. Ele fundou o Teatro Experimental do Negro e foi um dos pioneiros na valorização da cultura e da identidade negra no Brasil."
                   />
                </div>
            </div>
        </div>
    );
}