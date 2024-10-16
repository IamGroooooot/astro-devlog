import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Groot Devlog',
    description: 'The devlog of groot.',
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `${import.meta.env.BASE_URL}blog/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: 'https://iamgroooooooot.github.io/astro-devlog',
  });
}
