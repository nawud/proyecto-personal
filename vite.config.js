import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Si estás usando React
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // Si estás usando React
    tailwindcss(),
  ],
});