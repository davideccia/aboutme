// make web links in rendered Markdown HTML open in a new tab (mailto:/tel: and relative links are left alone)
export function openLinksInNewTab(html: string | undefined): string | undefined {
  return html?.replace(/<a (href="https?:\/\/[^"]*")/g, '<a $1 target="_blank" rel="noopener noreferrer"')
}
