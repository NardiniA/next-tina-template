import type { Collection } from "tinacms";

const tags: Collection = {
    name: "tags",
    label: "Tags",
    path: "src/content/tags",
    format: "json",
    ui: {
        filename: {
            slugify: (values) => `${values?.name?.toLowerCase()?.replace(/ /g, "-")}`,
            readonly: true,
        },
    },
    fields: [
        {
            name: "name",
            label: "Name",
            type: "string",
            required: true,
            isTitle: true,
        },
    ],
}

export default tags;