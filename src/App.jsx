import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; // N Besar
import Footer from "./components/layout/footer"; // f Kecil sesuai gambar folder Anda

// Pages
import Home from "./pages/Home";
import VisiMisi from "./pages/VisiMisi";
import Tupoksi from "./pages/Tupoksi";
import ArtikelList from "./pages/ArtikelList";
import SKMForm from "./pages/SKMForm";
import MaklumatPelayanan from "./pages/MaklumatPelayanan";
import PPIDPage from "./pages/PPIDPage";


function App() {
  return (
    <Router>
      <div className="antialiased bg-slate-50 min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route path="/tupoksi" element={<Tupoksi />} />
            <Route path="/artikel" element={<ArtikelList />} />
            <Route path="/skm" element={<SKMForm />} />
            <Route path="/maklumat" element={<MaklumatPelayanan />} />
            <Route path="/ppid" element={<PPIDPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;