// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sample-docs',
  tagline: 'Docusaurus sample docs',
  url: 'https://pr3b.github.io', //add
  baseUrl: '/docusaurus-demo/', //add
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://img1.wsimg.com/isteam/ip/6f380b15-78c1-4a0d-9bc4-3e2fa49378cf/favicon/4357e332-a7a0-4da2-8b25-8a7c4a57b9cb.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pr3b', // Usually your GitHub org/user name. //add
  projectName: 'docusaurus-demo', // Usually your repo name. //add
  deploymentBranch: "gh-pages", //add
  trailingSlash: false, //add

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kakakepan/Docusaurus-sample-docs/tree/main/',
        },
        blog:false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
         theme: {
           customCss: require.resolve('./src/css/custom.css'),
         },
      }),
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'https://img1.wsimg.com/isteam/ip/6f380b15-78c1-4a0d-9bc4-3e2fa49378cf/logo.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/kakakepan',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guide',
                to: '/',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Sample Documentation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
