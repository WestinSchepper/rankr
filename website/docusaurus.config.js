// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rankr',
  titleDelimiter: '·',
  tagline: 'Pleasant Ranking Algorithm',
  url: 'https://westinschepper.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'westinschepper', // Usually your GitHub 
  projectName: 'rankr',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Rankr',
        logo: {
          alt: 'Rankr Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Docs',
            type: 'doc',
            docId: 'introduction/getting-started',
            position: 'right',
          },
          {
            label: 'API Reference',
            type: 'doc',
            docId: 'api-reference/config',
            position: 'right',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
          {
            href: 'https://github.com/westinschepper/rankr',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
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
                label: 'Getting Started',
                to: 'docs/introduction/getting-started',
              },
              {
                label: 'API Reference',
                to: 'docs/api-reference/config',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/rankr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/westinschepper/rankr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Westin Schepper, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
