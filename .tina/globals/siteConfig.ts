import type { Collection } from "tinacms";
import { globalUI } from "../utilities/globalUI";
import { url } from "../fields/url";

const siteConfig: Collection = {
  name: "siteConfig",
  label: "Site Configuration",
  path: "src/config/site",
  format: "json",
  ui: globalUI("Site Configuration"),
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "image",
      required: true,
    },
    {
      name: "logoText",
      label: "Logo Text",
      type: "string",
      required: true,
    },
    {
      name: "metaData",
      label: "Meta Data",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Default Site Title",
          type: "string",
          required: true,
        },
        {
          name: "titleSuffix",
          label: "Default Title Suffix",
          type: "string",
          required: true,
          ui: {
            description:
              "What do you want to add on the end of the document title?",
          },
        },
        {
          name: "description",
          label: "Description",
          type: "string",
          ui: { component: "textarea" },
          required: true,
        },
        {
            name: "author",
            label: "Default Site Author",
            type: "string",
            required: true,
        },
        {
            name: "keywords",
            label: "Keywords",
            type: "string",
            required: true,
        },
        {
            name: "ogImage",
            label: "Default Site Image",
            type: "image",
            required: true,
        },
        {
        name: "theme",
        label: "Theme",
        type: "string",
        ui: { component: "color" },
        required: true,
        },
      ],
    },
    {
        name: "social",
        label: "Social Media",
        type: "object",
        list: true,
        fields: [
            {
                name: "name",
                label: "Platform name",
                type: "string",
                required: true,
            },
            url({
                name: "href",
            }),
            {
                name: "icon",
                label: "Icon",
                type: "string",
                required: true,
            }
        ],
    },
    {
      name: "developer",
      label: "Developer",
      type: "object",
      fields: [
        url({
          name: "baseImageURL",
          label: "Base Image URL",
          ui: {
            defaultItem: () =>
              `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`,
          },
        }),
      ],
    },
  ],
};

export default siteConfig;