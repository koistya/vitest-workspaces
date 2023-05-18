import { defineProject } from "vitest/config";

export default defineProject({
  cacheDir: "../.cache/api-vite",
  test: {
    ...{ cache: { dir: "../.cache/vitest" } },
    environment: "node",
  },
});
