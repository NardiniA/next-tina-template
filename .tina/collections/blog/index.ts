import type { Collection } from "tinacms";
import { capitaliseStr } from "../../utilities/capitaliseStr";

const blog: Collection = {
    name: "blog",
    label: "Blog",
    path: "src/content/blog",
    format: "mdx",
    ui: {
        filename: {
            slugify: (values) => values?.title?.toLowerCase()?.replace(/ /g, "-"),
        },
    },
    fields: [
        {
            name: "title",
            label: "Title",
            type: "string",
            required: true,
            isTitle: true,
        },
        {
            name: "excerpt",
            label: "Excerpt",
            type: "string",
            ui: { component: "textarea" },
            required: true,
        },
        {
            name: "date",
            label: "Publish Date",
            description: "Only posts dated on or after this date will be live.",
            type: "datetime",
            required: true,
        },
        {
            name: "tags",
            label: "Tags",
            type: "object",
            list: true,
            ui: { itemProps: (item) => ({
                label: capitaliseStr(item?.tagname?.replace("src/content/tags/", "")?.replace(".json", "")),
            }) },
            fields: [
                {
                    name: "tagname",
                    label: "Tag Name",
                    type: "reference",
                    collections: ["tags"],
                    required: true,
                },
            ],
        },
        {
            name: "content",
            label: "Content",
            type: "rich-text",
            required: true,
        },
    ],
}

export default blog;
