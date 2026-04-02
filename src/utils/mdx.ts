import { BlogFrontmatter } from "../types";

type MDXModule = {
  frontmatter: BlogFrontmatter;
  default: React.ComponentType;
};

export const getBlogPost = async (
  slug: string
): Promise<{
  frontmatter: BlogFrontmatter;
  code: React.ComponentType;
}> => {
  try {
    const post = await import(`../content/kannada/${slug}.mdx`);
    const frontmatter = post.frontmatter as BlogFrontmatter;
    return {
      frontmatter,
      code: post.default,
    };
  } catch (error) {
    console.error("Error loading blog post:", error);
    throw error;
  }
};

export const getAllPosts = async (): Promise<
  Array<{
    frontmatter: BlogFrontmatter;
    slug: string;
  }>
> => {
  // Get all MDX files from kannada directory
  const kannadaModules = import.meta.glob<MDXModule>(
    "../content/kannada/*.mdx"
  );

  const loadPosts = async (
    modules: Record<string, () => Promise<MDXModule>>
  ) => {
    return Promise.all(
      Object.keys(modules).map(async (path) => {
        const module = await modules[path]();
        return {
          frontmatter: module.frontmatter,
          slug: path.split("/").pop()?.replace(".mdx", "") || "",
        };
      })
    );
  };

  const kannadaPosts = await loadPosts(kannadaModules);

  return kannadaPosts.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
  });
};
