import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import Login from './pages/Login';


const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="antialiased bg-slate-50 min-h-screen flex flex-col font-sans">
      {/* Navbar hanya muncul jika BUKAN halaman login */}
      {!isLoginPage && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/tupoksi" element={<Tupoksi />} />
          <Route path="/artikel" element={<ArtikelList />} />
          <Route path="/skm" element={<SKMForm />} />
          <Route path="/maklumat" element={<MaklumatPelayanan />} />
          <Route path="/ppid" element={<PPIDPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {/* Footer hanya muncul jika BUKAN halaman login */}
      {!isLoginPage && <Footer />}
    </div>
  );
};

// 2. Fungsi App utama sekarang hanya memanggil Router dan AppContent
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
