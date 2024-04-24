import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Game from "./pages/Game";

const App = () => {
  return (
    <div className="h-screen bg-slate-950">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
