import type { UICollection } from "@tinacms/schema-tools";
import { deepMerge } from "./deepMerge";

type GlobalUI = (title: string, overrides?: Partial<UICollection>) => UICollection;

export const globalUI: GlobalUI = (title, overrides) => deepMerge(
    {
        allowedActions: {
            create: false,
            delete: false,
        },
        filename: {
            slugify: () => title,
            readonly: true,
        },
        global: {
            layout: "popup",
        },
    },
    overrides,
);