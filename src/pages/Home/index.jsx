import { Card } from "../../components/cards";
import { Navbar } from "../../components/navbar";
import logo from "../../images/Rustic_Printed-removebg-preview.png";
import "./styles.css";
import { Footer } from "../../components/footer";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

export const Home = () => {

  const [cards, setCards] = useState([]);

  useEffect (() => {
    async function fetchCards() {
      const querySnapshot = await getDocs(collection(db, "honored"));
      const cardsList = [];
      querySnapshot.forEach((doc) => {
        cardsList.push(doc.data());
      });
      setCards(cardsList);
    }

    fetchCards();
  }, []);
  

  const [busca, setBusca] = useState("");

  const peopleFiltered = cards.filter((person) =>
    person.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
  );

  return (
    <div className="listCardsHome">
      <Navbar />
      <div className="infoHome">
        <div>
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
        <i class="fa fa-search"></i>
          <input
            type="text"
            onChange={(e) => setBusca(e.target.value)}
            value={busca}
            placeholder="Pesquisar"
          />
        <div className="peopleCardsHome">
          {peopleFiltered.map((card) => {
            return (
              <Card
                image={card.image}
                name={card.name}
                description={card.smallDescriptiopn}
                description2={card.longDescription}
              />
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
