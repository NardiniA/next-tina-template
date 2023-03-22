import { Collection } from "tinacms";

const pages: Collection = {
  name: "pages",
  label: "Pages",
  path: "src/content/pages",
  format: "json",
  ui: {
    filename: {
        slugify: (values) => values?.title?.toLowerCase()?.replace(/ /g, "-"),
    },
    // router: ({ document }) => `/${document?._sys?.filename}`,
  },
  fields: [
    {
      name: "title",
      label: "Page Name",
      description: "The name of the file and what appears in the URL.",
      type: "string",
      required: true,
      isTitle: true,
    },
    {
      name: "meta",
      label: "Page Info",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          label: "Page Title",
          description:
            "Brief title of what the page covers (50-60 characters).",
          type: "string",
          required: true,
        },
        {
          name: "metaDescription",
          label: "Page Description",
          description: "Describe what is on the page (150-160 characters).",
          type: "string",
          ui: { component: "textarea" },
          required: true,
        },
      ],
    },
  ],
};

export default pages;