import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'UniversalComponents',
            fileName: (format) => `universal-components.${format}.js`,
        },
        rollupOptions: {
            output: {
                globals: {},
            },
        },
    },
    plugins: [dts()],
});
