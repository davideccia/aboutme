/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly UMAMI_SITE_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}