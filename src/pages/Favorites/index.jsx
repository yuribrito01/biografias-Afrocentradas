import { Card } from "../../components/cards";
import { Navbar } from "../../components/navbar";
import "./styles.css";
import { Footer } from "../../components/footer";
import { db } from "../../services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Favorites = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const querySnapshot = await getDocs(collection(db, "favorites"));
      const cardsList = [];
      querySnapshot.forEach((doc) => {
        cardsList.push(doc.data());
        console.log(doc.data());
      });
      setCards(cardsList);
    }

    fetchCards();
  }, []);
  return (
    <div className="listCardsFavotite">
      <Navbar />

      <div>
        <h1>Meus Favoritos</h1>
        <div className="peopleCardsHome">
          {cards.map((card) => {
            return (
              <Card
                image={card.image}
                name={card.name}
                description={card.smallDescriptiopn}
              />
            );
          })}
        </div>
      </div>
      <div className="footerPg">
        <Footer></Footer>
      </div>
    </div>
  );
};
