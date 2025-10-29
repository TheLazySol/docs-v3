/**
 * GitHub repository configuration for "Edit this page" links
 */
export const githubConfig = {
  repo: 'https://github.com/EpicentralLabs/docs-v3',
  branch: 'main',
  docsPath: 'content/docs',

  /**
   * Generate the GitHub edit URL for a given file path
   * @param filePath - The path to the file (e.g., 'index.mdx' or 'stakinglab.mdx')
   * @returns The full GitHub edit URL
   */
  getEditUrl(filePath: string): string {
    return `${this.repo}/edit/${this.branch}/${this.docsPath}/${filePath}`;
  },

  /**
   * Format a date with timestamp for display
   * @param date - The date to format
   * @returns Formatted date string
   */
  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  },
};
