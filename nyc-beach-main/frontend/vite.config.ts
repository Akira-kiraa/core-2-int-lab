import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const base =
  "https://akira-kiraa.github.io/core-2-int-lab/nyc-beach/frontend/dist/";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  define: {
    BASE_URL: JSON.stringify(base),
  },
});
