import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/facilities" element={<Facilities />} />
      {/* catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
