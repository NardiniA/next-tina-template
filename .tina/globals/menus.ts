import type { Collection } from "tinacms";
import { globalUI } from "../utilities/globalUI";
import { url } from "../fields/url";

const menus: Collection = {
  name: "menus",
  label: "Menus",
  path: "src/config/nav",
  format: "json",
  ui: globalUI("Menus"),
  fields: [
    {
      name: "mainMenu",
      label: "Main Menu",
      type: "object",
      list: true,
      fields: [
        {
          name: "text",
          label: "Text",
          type: "string",
          required: true,
        },
        url({
          name: "href",
        }),
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.text,
        }),
      },
    },
    {
      name: "cta",
      label: "Call To Action",
      type: "object",
      fields: [
        {
          name: "text",
          label: "Text",
          type: "string",
          required: true,
        },
        url({
          name: "href",
        }),
      ],
    },
  ],
};

export default menus;