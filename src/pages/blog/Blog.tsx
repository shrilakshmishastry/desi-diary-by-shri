import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import type { BlogFrontmatter } from "../../types/blog";
import { getAllPosts } from "../../utils/mdx";

type Post = {
  frontmatter: BlogFrontmatter;
  slug: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await getAllPosts();
        setPosts(allPosts);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const BlogSection = ({ posts }: { posts: Post[] }) => (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.slug} className="group">
          <div className="flex flex-col space-y-2">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {post.frontmatter.date}
            </time>
            <a
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {post.frontmatter.title}
            </a>
            <p className="text-gray-600 dark:text-gray-300">
              {post.frontmatter.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>ಕನ್ನಡ ಕಥೆಗಳು - DesiDiaryByShri</title>
        <meta
          name="description"
          content="Kannada short stories and personal reflections by Shrilakshmi Shastry."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          ಕನ್ನಡ ಕಥೆಗಳು
        </h1>

        <div className="mt-8">
          {loading ? (
            <p className="text-gray-600 dark:text-gray-300">Loading posts...</p>
          ) : posts.length > 0 ? (
            <BlogSection posts={posts} />
          ) : (
            <p className="text-gray-600 dark:text-gray-300">No posts found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
