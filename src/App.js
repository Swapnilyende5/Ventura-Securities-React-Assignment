import IpoListPage from "./components/IpoListPage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IpoDetailsPage from "./components/IpoDetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IpoListPage />} />
          <Route path="/detailpage" element={<IpoDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
