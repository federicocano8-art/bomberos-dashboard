import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inventario from "./pages/Inventario";
import Moviles from "./pages/Moviles";
import ERAs from "./pages/ERAs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/moviles" element={<Moviles />} />
        <Route path="/eras" element={<ERAs />} />

      </Routes>
    </BrowserRouter>
  );
}
