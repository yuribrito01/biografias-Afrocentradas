import { Card } from "../../components/cards";
import { Navbar } from "../../components/navbar";
import logo from "../../images/Rustic_Printed-removebg-preview.png";
import carolina from "../../images/carolina.webp";
import marielle from "../../images/marielle-franco.webp";
import miltom from "../../images/milton_santos.webp";
import machado from "../../images/machado-de-assis.webp";
import dandara from "../../images/capa_dandara.jpeg";
import abdias from "../../images/abdias-do-Nascimento.jpg";
import "./styles.css";
import honoredPeople from "./people.json";
import { Footer } from "../../components/footer";
import { useState } from "react";

export const Home = () => {
  const [busca, setBusca] = useState("");

  const peopleFiltered = honoredPeople.honoredPeople.filter((person) =>
    person.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
  );

  const imageMap = {
    carolina: carolina,
    marielle: marielle,
    miltom: miltom,
    machado: machado,
    dandara: dandara,
    abdias: abdias,
  };
  return (
    <div className="listCardsHome">
      <Navbar />
      <div className="infoHome">
        <div>
          <i class="fa fa-search"></i>
          <input
            type="text"
            onChange={(e) => setBusca(e.target.value)}
            value={busca}
            placeholder="Pesquisar"
          />
          <p id="textHome">
            Aqui você encontrará biografias de pessoas negras notáveis que
            tiveram um impacto significativo no país. Explore as histórias
            inspiradoras desses indivíduos e descubra sua contribuição para
            diversas áreas, como política, cultura, ciência, esportes e mais.
            Aprecie a diversidade e a importância da representatividade negra na
            sociedade brasileira.
          </p>
        </div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <h1>Conheça algumas pessoas em destaque</h1>
        <div className="peopleCardsHome">
          {peopleFiltered.map((card, index) => {
            const image = imageMap[card.image] || null;
            return (
              <Card
                key={index}
                image={image}
                name={card.name}
                description={card.description}
                curtir="Curtir"
              />
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
