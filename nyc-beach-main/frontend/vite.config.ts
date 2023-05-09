import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const base =
  "https://akira-kiraa.github.io/core-2-int-lab/nyc-beach-main/static/";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../static",
  },
  base,
  define: {
    BASE_URL: JSON.stringify(base),
  },
});
