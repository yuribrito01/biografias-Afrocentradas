import { HashLoader } from "react-spinners";
import "./styles.css"

export const Loader = () => {
    return (
        <div className="containerLoading">
            <HashLoader color="#1F0802" />
        </div>
    );
}