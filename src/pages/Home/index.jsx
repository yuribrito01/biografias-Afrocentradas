import { Card } from "../../components/cards";
import { Navbar } from "../../components/navbar"
import logo from "../../images/Rustic_Printed-removebg-preview.png"
import carolina from "../../images/carolina.webp"
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
                </div>
            </div>
        </div>
    );
}