import { Card } from "../../components/cards"
import { Navbar } from "../../components/navbar"
import carolina from "../../images/carolina.webp"
import marielle from "../../images/marielle-franco.webp"
import miltom from "../../images/milton_santos.webp"
import machado from "../../images/machado-de-assis.webp"
import dandara from "../../images/capa_dandara.jpeg"
import abdias from "../../images/abdias-do-Nascimento.jpg"
import honoredPeople from "../Home/people.json"
import { useState } from "react"


export const Explore = () => {
    const [busca, setBusca] = useState ('');
    
    const peopleFiltered = honoredPeople.honoredPeople.filter((person) => person.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase()));

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
            <Navbar></Navbar>
            <div>
                <input type="text" onChange={(e) => setBusca(e.target.value)} value={busca}/>
                <div className="peopleCardsHome">
                    {peopleFiltered.map((card, index) => {
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
    )

}