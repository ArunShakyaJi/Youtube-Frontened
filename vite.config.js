import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server : {
    proxy : {
      '/api' : 'https://youtube-twitter-p8hj.onrender.com/api//v1'
    }
  }
})
