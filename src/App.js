import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import DropDown from "./components/DropList";
const App = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default App;
