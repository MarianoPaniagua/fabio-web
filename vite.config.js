import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths work on both the project URL (/fabio-web/) and the custom domain.
  base: './',
});
