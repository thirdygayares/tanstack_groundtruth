import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  server: { port: 3100 },
  optimizeDeps: {
    exclude: ["bun", "bun:sql"],
  },
  build: {
    rollupOptions: {
      external: ["bun", /^bun:/],
    },
  },
  plugins: [
    devtools(),
    nitro({
      preset: "bun",
      rollupConfig: {
        external: [/^@sentry\//, "bun", /^bun:/],
      },
    }),
    tailwindcss(),
    tanstackStart({
      prerender: { enabled: true, autoStaticPathsDiscovery: true },
      importProtection: { behavior: "mock" },
    }),
    viteReact(),
  ],
});

export default config;
