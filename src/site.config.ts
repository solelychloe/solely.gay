// Base configuration for this website.

export const base = {
  favicon: {
    // Alt text for the favicon
    alt: 'A pink lotus flower in full bloom.',
    // File name for the favicon (for example, /favicon.png)
    fileName: '/lotus.png',
  },
  plausible: {
    // Whether to enable Plausible Analytics.
    // If you're using Vercel, you must also edit the rewrites found in the vercel.json file.
    // Read more about Plausible here: <https://plausible.io/>
    analytics: true,
  },
  seo: {
    // The site's accent color that will appear in embeds
    color: '#EF8496',
    // Keywords for search engines
    keywords: ['solelychloe', 'chloe arciniega', 'solely chloe', 'chloe solely'],
  },
  // The site's name. (will appear as example.com in embeds)
  site: 'arciniega.one',
};

// Blog configuration.

export const blog = {
  // Whether to allow GitHub discussion comments provided via Giscus on your blog posts or not.
  // See <https://giscus.app/> for more information and edit src/components/blog/comments.astro if set to true.
  comments: true,
};

// prettier-ignore
// RSS feed for my blog.

export const feed = {
  // Description for the RSS feed
  description: 'A personal blog, comprising of whatever stuff I find interesting to post.',
  // Title for the RSS feed
  title: 'Chloe\'s Posts'
};

// Social links that appear on the home page.
// If you don't want to link anything here, you can remove this object.

export const socials = {
  discord: {
    // Discord tag (will appear as example#1234)
    alt: 'solely#0001',
    // Discord ID (will appear as https://discord.com/users/423256515281585545)
    id: '312145496179474434',
  },

  // Your GitHub username (will appear as https://github.com/yourusername)
  github: 'solelychloe',
  // Your email (will appear as mail@example.com)
  mail: 'solely@riseup.net',

  mastodon: {
    // Instance identifier (will appear as name@instance.link)
    alt: 'solely@tech.lgbt',
    // Instance link (will appear as https://instance.link/name)
    link: 'https://tech.lgbt/@solely',
  },

  // Your Telegram username (will appear as https://t.me/yourusername)
  telegram: '',
  // Your Twitter username (will appear as https://twitter.com/yourusername)
  twitter: 'solelychloe',
};
