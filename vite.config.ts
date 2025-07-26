import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkGfm],
        providerImportSource: "@mdx-js/react",
      }),
    },
    react({
      babel: {
        plugins: [["@babel/plugin-syntax-typescript", { isTSX: true }]],
      },
    }),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ["@mdx-js/react"],
  },
});
