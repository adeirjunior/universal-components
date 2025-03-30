import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from 'vite-plugin-static-copy';

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
        dir: 'dist',
        format: 'es',
        chunkFileNames: 'chunks/[name]-[hash].js',
        globals: {},
      },
    },
    outDir: "dist"
  },
  plugins: [
    dts({
      include: ['./src'],
      exclude: ['./src/stories/**/*'],
      outDir: './dist',
      insertTypesEntry: true,
      beforeWriteFile: (filePath, content) => {
        if (filePath.endsWith('index.d.ts')) {
          content = `import './global.d.ts';\n${content}`;
        }
        return { filePath, content };
      }
    }),
    viteStaticCopy({
      targets: [
        {
          src: './src/global.d.ts',
          dest: './'
        },
      ],
    }),
  ],
});
