import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        // modules: {
        //   generateScopedName: '[hash:base64:8]',
        // },
        preprocessorOptions: {
            scss: {
                additionalData: `
          @use "./src/styles/abstracts/colors" as *;
          @use "./src/styles/abstracts/mixins" as *;
          @use "./src/styles/abstracts/typography" as *;
          @use "./src/styles/components/avatar" as *;
          @use "./src/styles/components/button" as *;
          @use "./src/styles/components/rounded-circle" as *;
          @use "./src/styles/layout/flex" as *;
          @use "./src/styles/layout/grid" as *;
          @use "./src/styles/pages/dashboard" as *;
          @use "./src/styles/pages/home" as *;
          @use "./src/styles/themes/theme" as *;
        `,
            },
        },
    },
});
