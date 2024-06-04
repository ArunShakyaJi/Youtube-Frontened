import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server : {
    proxy : {
      '/api' : 'youtube-twitter-amber.vercel.app'
    }
  }
})
