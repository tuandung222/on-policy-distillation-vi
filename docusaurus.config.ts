import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'On-Policy Distillation cho Mọi Họ Mô hình',
  tagline: 'Bản dịch tiếng Việt bài nghiên cứu "Unlocking On-Policy Distillation for Any Model Family" của HuggingFace H4 — Phương pháp GOLD cho phép chưng cất tri thức on-policy giữa các mô hình với tokenizer khác nhau',
  favicon: 'img/logo.svg',

  url: 'https://tuandung222.github.io',
  baseUrl: '/on-policy-distillation-vi/',

  organizationName: 'tuandung222',
  projectName: 'on-policy-distillation-vi',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.17.0/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-A7p14lI4Xr64x4YPm5yP0mMRzrkpAEbgZrN4pel3kNTGMHdf0hGgMPmESaGGfkO',
      crossorigin: 'anonymous',
    },
  ],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'noindex, nofollow',
      },
    },
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'On-Policy Distillation VI',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Bài giảng',
        },
        {
          href: 'https://github.com/tuandung222/on-policy-distillation-vi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Nội dung',
          items: [
            {
              label: 'Giới thiệu',
              to: '/docs/gioi_thieu',
            },
            {
              label: 'Phương pháp Chưng cất',
              to: '/docs/phuong_phap_chung_cat',
            },
            {
              label: 'Thuật toán GOLD',
              to: '/docs/gold_algorithm',
            },
            {
              label: 'Kết quả Thí nghiệm',
              to: '/docs/ket_qua_thi_nghiem',
            },
          ],
        },
        {
          title: 'Chương khác',
          items: [
            {
              label: 'Thiết lập Thí nghiệm',
              to: '/docs/thiet_lap_thi_nghiem',
            },
            {
              label: 'So sánh với GRPO',
              to: '/docs/so_sanh_grpo',
            },
            {
              label: 'Chưng cất cho Domain',
              to: '/docs/chung_cat_cho_domain',
            },
            {
              label: 'Kết luận',
              to: '/docs/ket_luan',
            },
          ],
        },
        {
          title: 'Tài nguyên',
          items: [
            {
              label: 'Bài viết gốc (HuggingFace)',
              href: 'https://huggingface.co/spaces/HuggingFaceH4/blogpost-on-policy-distillation',
            },
            {
              label: 'TRL Documentation',
              href: 'https://huggingface.co/docs/trl',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/tuandung222/on-policy-distillation-vi',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} tuandung222. Được xây dựng với Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'yaml'],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
