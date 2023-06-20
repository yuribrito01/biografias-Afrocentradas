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
import honoredPeople from "./people.json"




export const Home = () => {
    const imageMap = {
        "carolina": carolina,
        "marielle": marielle,
        "miltom": miltom,
        "machado": machado,
        "dandara": dandara,
        "abdias": abdias
    };
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
                    {honoredPeople.honoredPeople.map((card, index) => {
                        const image = imageMap[card.image] || null;
                        return (
                            <Card
                                key={index}
                                image={image}
                                name={card.name}
                                description={card.description}
                            />
                        );
                    })}

                </div>
            </div>
        </div>
    );
}