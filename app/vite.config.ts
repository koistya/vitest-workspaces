import { defineProject } from "vitest/config";

export default defineProject({
  cacheDir: "../.cache/app-vite",
  test: {
    ...{ cache: { dir: "../.cache/vitest" } },
    environment: "jsdom",
  },
});
