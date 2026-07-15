import axios from 'axios';

// Sesuaikan URL ini dengan alamat backend Laravel Anda
export const BASE_URL = 'http://localhost:8000'; 

export const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});