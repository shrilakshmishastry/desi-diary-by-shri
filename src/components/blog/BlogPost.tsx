import { MDXProvider } from "@mdx-js/react";
import { BlogFrontmatter } from "../../types";
import { Helmet } from "react-helmet-async";
import type { ComponentPropsWithoutRef } from "react";

type BlogPostProps = {
  frontmatter: BlogFrontmatter;
  children: React.ReactNode;
};

const components = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      {...props}
      className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white"
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      {...props}
      className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white"
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      {...props}
      className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-white"
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p {...props} className="mb-4 text-gray-700 dark:text-gray-300" />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      {...props}
      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      {...props}
      className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300"
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      {...props}
      className="list-decimal list-inside mb-4 text-gray-700 dark:text-gray-300"
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      {...props}
      className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5"
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      {...props}
      className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 overflow-x-auto"
    />
  ),
};

export const BlogPost = ({ frontmatter, children }: BlogPostProps) => {
  return (
    <>
      <Helmet>
        <title>{frontmatter.title} - DesiDiaryByShri</title>
        <meta name="description" content={frontmatter.description} />
      </Helmet>

      <article className="max-w-4xl mx-auto prose dark:prose-invert">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {frontmatter.title}
          </h1>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {frontmatter.date}
          </time>
        </header>

        <MDXProvider components={components}>{children}</MDXProvider>
      </article>
    </>
  );
};
