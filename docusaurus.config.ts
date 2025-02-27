import { themes } from 'prism-react-renderer';

const config = {
  title: 'UnifAI Documentation',
  tagline: 'Explore the power of UnifAI',
  url: 'https://getunifai.github.io',
  baseUrl: '/Documentation/', // Matches GitHub Pages path
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GetUnifai',
  projectName: 'Documentation',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs at /Documentation/
          path: 'src/docs',
          // Removed homePageId (not supported in Docusaurus 3.7.0)
          // Use slug: / in vision.mdx instead
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'UnifAI Docs',
      logo: {
        alt: 'UnifAI Logo',
        src: '/img/logo.svg', // Use your uploaded logo
        width: 32, // Optional: Adjust for navbar size (32x32 is typical)
        height: 32 // Optional: Keeps aspect ratio
      },
      items: [
        { type: 'doc', docId: 'vision', position: 'left', label: 'Docs' }, // Links to /Documentation/vision
        { href: 'https://github.com/GetUnifai/Unifai', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Community', items: [{ label: 'GitHub', href: 'https://github.com/GetUnifai/Unifai' }] },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GetUnifai. Built with Docusaurus.`,
    },
    prism: { theme: themes.github, darkTheme: themes.dracula },
  },
};

export default config;
