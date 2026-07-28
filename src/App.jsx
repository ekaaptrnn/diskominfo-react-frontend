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

import KelolaLayanan from "./pages/admin/KelolaLayanan";
import EditSKM from "./pages/admin/EditSKM";

const AppContent = () => {
  const location = useLocation();
  
  // Logika: Sembunyikan Navbar & Footer jika di halaman Login ATAU halaman yang berawalan /admin
  const hideLayout = location.pathname === '/login' || location.pathname.startsWith('/admin');

  return (
    <div className="antialiased bg-slate-50 min-h-screen flex flex-col font-sans">
      {/* Navbar muncul jika BUKAN login & BUKAN admin */}
      {!hideLayout && <Navbar />}
      
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

          {/* Admin Routes (Gunakan path /admin/...) */}
          <Route path="/admin/layanan" element={<KelolaLayanan />} />
          <Route path="/admin/skm" element={<EditSKM />} />
          
          {/* Opsional: Dashboard Utama Admin */}
          <Route path="/admin/dashboard" element={<KelolaLayanan />} />
        </Routes>
      </main>

      {/* Footer muncul jika BUKAN login & BUKAN admin */}
      {!hideLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;