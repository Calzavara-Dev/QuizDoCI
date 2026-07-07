import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/QuizDoCI/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          supabase: ['@supabase/supabase-js', '@supabase/ssr'],
          icons: ['lucide-react'],
        },
      },
    },
  },
})
