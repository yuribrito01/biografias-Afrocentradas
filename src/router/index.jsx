import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import honoredPeople from "../pages/Home/people.json"
import { PersonBigraphy } from "../pages/PersonBiography";


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/" element={<Home />}></Route>
                {honoredPeople.honoredPeople.map((person, index) => (
                    <Route key={index} path={person.name} element={<PersonBigraphy person={person} />}></Route>
                ))}
            </Routes>
        </Router>
    );
}