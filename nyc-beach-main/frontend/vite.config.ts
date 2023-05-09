import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const remoteDir = "/core-2-int-lab/nyc-beach-main/static/";
const origin = "https://akira-kiraa.github.io";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../static",
    terserOptions: {
      keep_fnames: true,
      mangle: false,
    },
    emptyOutDir: true,
  },
  base: origin + remoteDir,
  define: {
    REMOTE_DIR: JSON.stringify(remoteDir),
  },
});
