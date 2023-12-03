import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "../components/Index.jsx";
import Nav from "../components/Nav.jsx";
import Home from "../components/Home.jsx";
import New from "../components/New.jsx";
import Show from "../components/Show.jsx";
import Update from "../components/Update.jsx";


function App() {
  return (
    <>
      <div>
        <Router>
          <Nav />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/matchups" element={<Index />} />
              <Route path="/matchups/new" element={<New />} />
              <Route path="/matchups/:id" element={<Show />} />
              <Route path="/matchups/:id/edit" element={<Update />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
