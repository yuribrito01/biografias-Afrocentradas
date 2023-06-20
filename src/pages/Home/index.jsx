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
                <p id="textHome">Aqui você encontrará biografias de pessoas negras notáveis que tiveram um impacto significativo no país. Explore as histórias inspiradoras desses indivíduos e descubra sua contribuição para diversas áreas, como política, cultura, ciência, esportes e mais. Aprecie a diversidade e a importância da representatividade negra na sociedade brasileira.</p>
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