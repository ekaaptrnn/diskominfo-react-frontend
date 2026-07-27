import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { applyColorShades } from "../utils/colorUtils";

const ThemeContext = createContext({ primary: "#1e4b8f", accent: "#0ea5e9", loaded: false });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({ primary: "#1e4b8f", accent: "#0ea5e9", loaded: false });

  useEffect(() => {
    let isMounted = true;

    const fetchTheme = async () => {
      try {
        const response = await api.get("/theme");
        const data = response.data.data || response.data;
        const primary = data.primary_color_hex || "#1e4b8f";
        const accent = data.accent_color_hex || "#0ea5e9";

        // Terapkan gradasi warna ke seluruh halaman (bukan cuma 1 warna flat)
        applyColorShades("primary", primary);
        applyColorShades("accent", accent);

        if (isMounted) setTheme({ primary, accent, loaded: true });
      } catch (err) {
        // Kalau gagal fetch (mis. backend mati), biarkan pakai warna default
        // yang sudah didefinisikan di tailwind.css — situs tetap tampil normal.
        console.error("Gagal memuat theme setting, memakai warna default:", err);
      }
    };

    fetchTheme();
    return () => { isMounted = false; };
  }, []);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
