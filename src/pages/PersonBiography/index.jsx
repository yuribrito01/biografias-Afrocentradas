import { Navbar } from "../../components/navbar";
import "./styles.css";
import { Footer } from "../../components/footer";

export const PersonBigraphy = ({ person }) => {

  return (
    <div class="detailBiography">
      <Navbar></Navbar>
      <div className="infosPerson">
        <img src={person.image} />
        <h2>{person.name}</h2>
        <div className="descriptionPerson">
          <p >{person.longDescription}</p>
        </div>
      </div>
    </div>
  );
};
