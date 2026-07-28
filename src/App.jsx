import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; 
import Footer from "./components/layout/footer"; 

// --- PAGES PUBLIK ---
import Home from "./pages/Home";
import VisiMisi from "./pages/VisiMisi";
import Tupoksi from "./pages/Tupoksi";
import ArtikelList from "./pages/ArtikelList";
import ArtikelDetail from "./pages/ArtikelDetail";
import PublikasiDetail from "./pages/PublikasiDetail";
import SKMForm from "./pages/SKMForm";
import MaklumatPelayanan from "./pages/MaklumatPelayanan";
import PPIDPage from "./pages/PPIDPage";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import Login from './pages/Login';

// --- PAGES ADMIN ---
import KelolaLayanan from "./pages/admin/KelolaLayanan";
import EditSKM from "./pages/admin/EditSKM";

const AppContent = ({ dark, toggleDark }) => {
  const location = useLocation();
  
  // Logika: Sembunyikan Navbar & Footer jika di halaman Login ATAU halaman berawalan /admin
  const hideLayout = location.pathname === '/login' || location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar dikirimi state dark dan fungsi toggle */}
      {!hideLayout && <Navbar dark={dark} toggleDark={toggleDark} />}
      
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/tupoksi" element={<Tupoksi />} />
          <Route path="/artikel" element={<ArtikelList />} />
          <Route path="/artikel/:id" element={<ArtikelDetail />} />
          <Route path="/publikasi/:id" element={<PublikasiDetail />} />
          <Route path="/skm" element={<SKMForm />} />
          <Route path="/maklumat" element={<MaklumatPelayanan />} />
          <Route path="/ppid" element={<PPIDPage />} />
          <Route path="/struktur" element={<StrukturOrganisasi />} />
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/admin/layanan" element={<KelolaLayanan />} />
          <Route path="/admin/skm" element={<EditSKM />} />
          <Route path="/admin/dashboard" element={<KelolaLayanan />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default function App() {
  // 1. Ambil tema awal dari localStorage
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 2. Gunakan useEffect untuk update class "dark" di tag <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggleDark = () => setDark(!dark);

  return (
    <Router>
      <AppContent dark={dark} toggleDark={toggleDark} />
    </Router>
  );
}