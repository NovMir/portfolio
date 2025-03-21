import { type CollectionEntry } from 'astro:content';

// ✅ Slugify utility
export function slugify(text?: string): string {
  return text?.toString()
    .normalize('NFD') // Normalize accents
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Convert spaces to dashes
    .replace(/[^\w-]+/g, '') || ''; // Remove non-word chars
}

// ✅ Sort blog or project items by publishDate (descending)
export function sortItemsByDateDesc(
  itemA: CollectionEntry<'blog' | 'projects'>,
  itemB: CollectionEntry<'blog' | 'projects'>
): number {
  return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

// ✅ Get all unique tags from blog posts
export function getAllTags(posts: CollectionEntry<'blog'>[]) {
  const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []))];

  return tags
    .map((tag) => ({
      name: tag,
      id: slugify(tag)
    }))
    .filter((tagObj, index, self) =>
      self.findIndex((t) => t.id === tagObj.id) === index
    );
}

// ✅ Get posts by tagId (slugified tag string)
export function getPostsByTag(
  posts: CollectionEntry<'blog'>[],
  tagId: string
): CollectionEntry<'blog'>[] {
  return posts.filter((post) =>
    (post.data.tags || []).map(slugify).includes(tagId)
  );
}

// ✅ Format blog posts (filter drafts, future, sort, limit)
export function formatBlogPosts(
  posts: { frontmatter: { date: string; draft?: boolean } }[],
  options: {
    filterOutDrafts?: boolean;
    filterOutFuturePosts?: boolean;
    sortByDate?: boolean;
    limit?: number;
  } = {}
) {
  const {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit
  } = options;

  let filteredPosts = posts.filter((post) => {
    const { date, draft } = post.frontmatter;
    if (filterOutDrafts && draft) return false;
    if (filterOutFuturePosts && new Date(date) > new Date()) return false;
    return true;
  });

  if (sortByDate) {
    filteredPosts = filteredPosts.sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
  }

  if (typeof limit === 'number') {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}
