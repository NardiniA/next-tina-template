import type { TinaField } from "tinacms";
import { deepMerge } from "../utilities/deepMerge";

export type Props = string;

type URL = (overrides?: Partial<TinaField>) => TinaField;

export const url: URL = (overrides) => deepMerge(
    {
        name: "url",
        label: "URL",
        type: "string",
        required: true,
        ui: {
            validate: (value) => {
                return;
            }
        }
    },
    overrides,
);