export type BlogType = "tech" | "kannada";

export type BlogFrontmatter = {
  title: string;
  date: string;
  type: BlogType;
  description: string;
  slug: string;
};
