import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css"; // Tailwind CSS

// import Home from "./pages/Home"
// import NotFound from "./pages/NotFound"
// import ReactTemplatePage from "./pages/ReactTemplatePage"
import Navbar from "./components/Navbar";
// import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
    {/* //     <Routes>
    //       <Route>
    //         {["/", "/home"].map((path, element) => 
    //           <Route path={path} element={<Home />} key={element}/>
    //             )}
    //       </Route>
    //       <Route path="/ReactTemplatePage" element={<ReactTemplatePage />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes> */}
    </Router>

  );
}

export default App;