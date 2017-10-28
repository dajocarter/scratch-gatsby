export function postClasses(post) {
  let classes = `post-${post.wordpress_id}`;
  if (post.type) classes += ` ${post.type} type-${post.type}`;
  if (post.status) classes += ` status-${post.status}`;
  if (post.format) classes += ` format-${post.format}`;
  if (post.categories)
    post.categories.map(cat => (classes += ` category-${cat.slug}`));

  return classes;
}
