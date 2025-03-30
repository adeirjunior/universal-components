import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "universalWc",
      fileName: (format) => `universal-wc.${format}.js`,
    },
    rollupOptions: {
      input: "src/index.ts",
      external: [],
      output: {
        globals: {},
      },
    },
    outDir: "dist",
  },
  plugins: [dts({
    exclude: ['src/stories/**/*'],
    insertTypesEntry: true
  })],
});
