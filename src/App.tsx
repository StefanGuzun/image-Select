import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReportPage from "./components/ReportPage/ReportPage";
import MainPage from "./components/MainPage/MainPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/ReportPage" element={<ReportPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
