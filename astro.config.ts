import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import workerLinks from 'astro-worker-links';
import compress from 'astro-compress';

import a11yEmoji from '@fec/remark-a11y-emoji';
import autolinkHeadings from 'rehype-autolink-headings';
import codeTitle from 'remark-code-title';
import externalLinks from 'rehype-external-links';
import figureCaption from '@microflash/remark-figure-caption';
import readingTime from './src/utils/post';
import slug from 'rehype-slug';
import tableOfContents from 'remark-toc';

import { readFileSync } from 'node:fs';

// https://astro.build/config
export default defineConfig({
  site: `https://arciniega.one`,
  markdown: {
    shikiConfig: {
      theme: 'material-theme-ocean',
    },
    remarkPlugins: [
      a11yEmoji,
      codeTitle,
      figureCaption,
      [
        tableOfContents,
        {
          tight: true,
        },
      ],
      readingTime,
    ],
    rehypePlugins: [
      slug,
      [
        autolinkHeadings,
        {
          behavior: 'append',
          content: {
            type: 'text',
            value: '#',
          },
        },
      ],
      [
        externalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener'],
        },
      ],
    ],
  },
  integrations: [
    tailwind(),
    mdx(),
    icon({
      include: {
        mdi: ['*'],
      },
    }),
    sitemap(),
    workerLinks({
      domain: 'https://solstice.tf',
      secret: process.env.WORKER_SECRET!,
      getPageMapping(pages) {
        return pages
          .filter(
            (url) =>
              url.pathname !== '/articles/' &&
              url.pathname.includes('/articles') &&
              !url.pathname.includes('/articles/tag')
          )
          .map((url) => {
            return {
              page: url.href,
              shortlink: url.pathname.replace('/articles', ''),
            };
          });
      },
    }),
    compress(),
  ],
  vite: {
    plugins: [rawFonts(['.ttf'])],
    optimizeDeps: { exclude: ['@resvg/resvg-js'] },
  },
});

function rawFonts(ext: string[]) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_: unknown, id: string) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        };
      }
    },
  };
}
