import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; // Tailwind CSS

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ReactTemplatePage from "./pages/ReactTemplatePage"


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/ReactTemplatePage" element={<ReactTemplatePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;