import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'folivoro',
  tagline: 'WordPress Theme Framework',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://folivoro.github.io',
  baseUrl: '/',

  organizationName: 'folivoro',
  projectName: 'folivoro',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs',
            to: '/docs/introduction',
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: ({docPath}) => `https://github.com/folivoro/docs/edit/main/${docPath}`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'folivoro',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://sixmonkey.github.io/sloth/',
          label: 'API Documentation',
          position: 'right',
        },
        {
          href: 'https://github.com/folivoro/sloth',
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
              label: 'Documentation',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Made possible by',
          items: [
            {
              label: 'SCHUMACHER DESIGN',
              href: 'https://schumacher-design.de',
            },
            {
              label: 'Quäntchen und Glück',
              href: 'https://qundg.de',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/folivoro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} folivoro. Built with Docusaurus. Made with 🩷 in Darmstadt. 🦥`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
