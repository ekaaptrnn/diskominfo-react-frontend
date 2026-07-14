// src/App.jsx (Pastikan bagian atas seperti ini)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Halaman-halaman
import Home from "./pages/Home"; // <-- Pastikan file ini ada di folder pages
import VisiMisi from "./pages/VisiMisi";
import Tupoksi from "./pages/Tupoksi";
import ArtikelList from "./pages/ArtikelList";
import SKMForm from "./pages/SKMForm";
import MaklumatPelayanan from "./pages/MaklumatPelayanan";

function App() {
  return (
    <Router>
      <div className="antialiased bg-slate-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route path="/tupoksi" element={<Tupoksi />} />
            <Route path="/artikel" element={<ArtikelList />} />
            <Route path="/skm" element={<SKMForm />} />
            <Route path="/maklumat" element={<MaklumatPelayanan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;