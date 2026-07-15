// src/data.js

export const navMenus = [
  { label: "Home", href: "/", icon: "Home" },
  { 
    label: "PPID", 
    href: "#", 
    icon: "FileText",
    sub: ["Daftar Informasi Publik", "Informasi Berkala", "Informasi Setiap Saat", "Informasi Serta Merta", "Informasi Dikecualikan"]
  },
  { 
    label: "Profil", 
    href: "#", 
    icon: "Info",
    sub: ["Visi & Misi", "Struktur Organisasi", "Tupoksi"]
  },
  { label: "SKM", href: "/skm", icon: "Star" },
  { label: "Informasi", href: "/artikel", icon: "Newspaper" },
  { 
    label: "Layanan", 
    href: "#", 
    icon: "ClipboardList",
    sub: ["Maklumat Layanan", "Standar Layanan"]
  },
];

export const visitorStats = [
  { label: "Hari Ini", value: "243" },
  { label: "Kemarin", value: "831" },
  { label: "Bulan Ini", value: "19.083" },
  { label: "Total", value: "28.040" },
];

export const ppidDocuments = [
  { id: 1, judul: "Laporan Keuangan Dinas 2025", kategori: "Informasi Berkala", format: "PDF", ukuran: "2.4 MB" },
  { id: 2, judul: "Rencana Strategis (RENSTRA) 2021-2026", kategori: "Informasi Berkala", format: "PDF", ukuran: "5.1 MB" },
  { id: 3, judul: "Daftar Aset Teknologi Informasi", kategori: "Informasi Setiap Saat", format: "XLSX", ukuran: "1.2 MB" },
  { id: 4, judul: "Prosedur Penanganan Siber", kategori: "Informasi Serta Merta", format: "PDF", ukuran: "850 KB" },
];