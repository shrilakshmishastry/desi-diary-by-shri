import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogFrontmatter } from "../../types";
import { getBlogPost } from "../../utils/mdx";
import { BlogPost as BlogPostComponent } from "../../components/blog/BlogPost";

type BlogPostData = {
  frontmatter: BlogFrontmatter;
  code: React.ComponentType;
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        if (slug) {
          const postData = await getBlogPost(slug);
          setPost(postData);
        }
      } catch (error) {
        console.error("Error loading post:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Post Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          The blog post you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  const PostContent = post.code;
  return (
    <BlogPostComponent frontmatter={post.frontmatter}>
      <PostContent />
    </BlogPostComponent>
  );
};

export default BlogPostPage;
