import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollegeList from "./components/CollegeList";
import CollegeDetails from "./components/CollegeDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CollegeList />} />
        <Route path="/college/:id" element={<CollegeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
