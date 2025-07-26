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
    // Try tech directory first
    try {
      const post = await import(`../content/tech/${slug}.mdx`);
      const frontmatter = post.frontmatter as BlogFrontmatter;
      return {
        frontmatter,
        code: post.default,
      };
    } catch {
      // If not found in tech, try kannada directory
      const post = await import(`../content/kannada/${slug}.mdx`);
      const frontmatter = post.frontmatter as BlogFrontmatter;
      return {
        frontmatter,
        code: post.default,
      };
    }
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
  // Get all MDX files from both tech and kannada directories
  const techModules = import.meta.glob<MDXModule>("../content/tech/*.mdx");
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

  const [techPosts, kannadaPosts] = await Promise.all([
    loadPosts(techModules),
    loadPosts(kannadaModules),
  ]);

  const allPosts = [...techPosts, ...kannadaPosts];

  return allPosts.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
  });
};
