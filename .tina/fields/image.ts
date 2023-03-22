import type { TinaField } from "tinacms";
import { deepMerge } from "../utilities/deepMerge";

export type Props = {
    src: string,
    alt: string,
}

type Image = (overrides?: Partial<TinaField>) => TinaField;

export const image: Image = (overrides) => deepMerge(
    {
        name: "image",
        label: "Image",
        type: "object",
        fields: [
            {
                name: "src",
                label: "Image",
                type: "image",
                required: true,
            },
            {
                name: "alt",
                label: "Image Description",
                type: "string",
                required: true,
            },
        ],
    },
    overrides,
);
