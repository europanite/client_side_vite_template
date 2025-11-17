import { defineConfig } from "vite";

export default defineConfig({
  base: "/frontend_vite_template/",
  assetsInclude: ["**/*.wasm"], 
  build: {
    outDir: "dist",
    emptyOutDir: true,
    commonjsOptions: { transformMixedEsModules: true },
  },
});