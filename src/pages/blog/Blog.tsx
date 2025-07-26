import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import type { BlogType, BlogFrontmatter } from "../../types/blog";
import { getAllPosts } from "../../utils/mdx";

type Post = {
  frontmatter: BlogFrontmatter;
  slug: string;
};

const Blog = () => {
  const [activeTab, setActiveTab] = useState<BlogType>("tech");
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

  const filteredPosts = posts.filter(
    (post) => post.frontmatter.type === activeTab
  );

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

  const TabButton = ({ type, label }: { type: BlogType; label: string }) => (
    <button
      onClick={() => setActiveTab(type)}
      className={`px-6 py-3 text-sm font-medium rounded-lg transition-colors ${
        activeTab === type
          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
          : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      <Helmet>
        <title>Blog - DesiDiaryByShri</title>
        <meta
          name="description"
          content="Technical blogs about frontend development and Kannada short stories by Shrilakshmi Shastry."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Blog
        </h1>

        <div className="flex gap-4 mb-8">
          <TabButton type="tech" label="Technical Blogs" />
          <TabButton type="kannada" label="ಕನ್ನಡ ಕಥೆಗಳು" />
        </div>

        <div className="mt-8">
          {loading ? (
            <p className="text-gray-600 dark:text-gray-300">Loading posts...</p>
          ) : filteredPosts.length > 0 ? (
            <BlogSection posts={filteredPosts} />
          ) : (
            <p className="text-gray-600 dark:text-gray-300">No posts found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
