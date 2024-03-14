import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavPage from "./navpage";
import Homepage from "./homepage";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/navpage" element={<NavPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
