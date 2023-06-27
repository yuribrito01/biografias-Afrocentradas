import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import honoredPeople from "../pages/Home/people.json";
import { PersonBigraphy } from "../pages/PersonBiography";
import { Contact } from "../pages/Contact/contaxt";
import { NewPerson } from "../pages/NewPerson";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { useEffect, useState } from "react";

export const AppRouter = () => {
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

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favoritos" element={<Favorites />}></Route>
        {cards.map((person) => (
          <Route
            path={person.name}
            element={<PersonBigraphy person={person} />}
          ></Route>
        ))}
        <Route path="/contato" element={<Contact />}></Route>
        <Route path="/novaPessoa" element={<NewPerson />}></Route>
      </Routes>
    </Router>
  );
};
