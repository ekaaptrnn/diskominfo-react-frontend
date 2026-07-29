import axios from 'axios';

// Sesuaikan URL ini dengan alamat backend Laravel Anda.
// Dipakai untuk: fetch data publik (berita, layanan, dll), gambar/storage,
// dan redirect penuh ke dashboard admin (window.location.href) setelah login.
export const BASE_URL = import.meta.env.VITE_API_BASE_URL
  ? import.meta.env.VITE_API_BASE_URL.replace('/api', '')
  : 'http://localhost:8000';

export const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Khusus untuk alur login (csrf-cookie + /login) -> baseURL dikosongkan (relatif)
// supaya request ini ditangkap proxy Vite (lihat vite.config.js) dan diteruskan
// ke Laravel secara transparan. Browser jadi melihat semuanya sebagai satu
// origin (localhost:5174), sehingga cookie CSRF Sanctum tidak lagi dianggap
// cross-origin dan tidak butuh konfigurasi CORS/SameSite yang rumit.
export const authApi = axios.create({
  baseURL: '',
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
