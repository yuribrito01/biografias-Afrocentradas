import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";


export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />}>
                </Route>
            </Routes>
        </Router>
    );
}