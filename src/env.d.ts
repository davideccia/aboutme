/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly UMAMI_WEBSITE_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }