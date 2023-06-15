import { Navbar } from "../../components/navbar"
import logo from "../../images/Rustic_Printed-removebg-preview.png"




export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="infoHome">
            <p id="textHome">A cada ano, a Câmara Municipal de Campinas tem a honra de conceder o Diploma Zumbi dos Palmares a um destacado membro da comunidade negra. Essa distinção representa uma homenagem merecida àqueles indivíduos que contribuíram significativamente para o progresso da comunidade negra em Campinas. Este site foi criado com o objetivo de exaltar essas pessoas e seu legado.</p>
            <img src={logo} alt="Logo" />
            </div>
        </div>
    );
}