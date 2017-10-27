export function postClasses(post) {
  let classes = `post-${post.wordpress_id} ${post.type} type-${post.type} status-${post.status} format-${post.format}`;

  if (post.categories) {
    post.categories.map(cat => (classes += ` category-${cat.slug}`));
  }

  return classes;
}
