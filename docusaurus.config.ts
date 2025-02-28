import { themes } from 'prism-react-renderer';

const config = {
  title: 'UnifAI Documentation',
  tagline: 'Explore the power of UnifAI',
  url: 'https://getunifai.github.io',
  baseUrl: '/Documentation/', // Ensure it matches your GitHub Pages settings
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GetUnifai', // GitHub Org/User
  projectName: 'Documentation', // GitHub Repo Name
  deploymentBranch: 'gh-pages', // Ensures correct deployment branch
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/', // Ensures documentation loads from root
          path: 'src/docs', // Ensure your documentation files are here
          editUrl: 'https://github.com/GetUnifai/Documentation/edit/main/', // Adds an "Edit this page" link
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Ensures your CSS loads
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'UnifAI Docs',
      logo: {
        alt: 'UnifAI Logo',
        src: 'img/logo.svg', // Use uploaded logo
        width: 32,
        height: 32,
      },
      items: [
        { type: 'doc', docId: 'vision', position: 'left', label: 'Docs' },
        { href: 'https://github.com/GetUnifai/Unifai', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [{ label: 'GitHub', href: 'https://github.com/GetUnifai/Unifai' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GetUnifai. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },
};

export default config;

