import * as mdiIcons from '@mdi/js';

function toKebabCase(exportName: string): string {
  return exportName
    .replace(/^mdi/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

export const mdiIconMap: Record<string, string> = Object.fromEntries(
  Object.entries(mdiIcons).map(([name, path]) => [toKebabCase(name), path as string]),
);

export type MdiIconName = keyof typeof mdiIconMap;
