import { defineConfig } from "tinacms";
import pages from "./collections/pages";
import blog from "./collections/blog";
import tags from "./collections/tags";
import siteConfig from "./globals/siteConfig";
import menus from "./globals/menus";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    // @ts-ignore
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
  },
  schema: {
    collections: [
      pages,
      blog,
      tags,
      menus,
      siteConfig,
    ],
  },
});
