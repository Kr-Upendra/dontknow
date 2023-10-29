import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Live from "./pages/LIve";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="live" element={<Live />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
