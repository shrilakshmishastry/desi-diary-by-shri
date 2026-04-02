import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>DesiDiaryByShri - Writer and Nature Enthusiast</title>
        <meta
          name="description"
          content="Personal website of Shrilakshmi Shastry - Kannada writer and nature enthusiast from Shivamogga, sharing stories and visual journeys."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Shrilakshmi Shastry
          </h1>
        </div>

        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
          <p>
            Hailing from the lush green city of Shivamogga, nestled in the heart
            of Karnataka's Western Ghats, my days are a blend of trekking,
            writing, and storytelling, fueled by the serenity of nature and the
            rhythm of Kannada literature.
          </p>

          <p>
            I'm a storyteller at heart—writing Kannada short stories that
            capture life's fleeting moments and sharing vibrant images from my
            wanderings in the Western Ghats and annual Himalayan treks. In my
            blog, I share personal reflections, heartfelt thoughts, and the
            simple joys of life.
          </p>

          <p>
            When I'm not writing, you'll find me walking amidst trees, cycling
            through Shivamogga's scenic trails, or lost in a Kannada novel. This
            website is my digital campfire—a space to share heartfelt stories
            and glimpses of nature's beauty.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          <Link
            to="/blog"
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4">Blog</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Kannada short stories, personal reflections, and heartfelt
              narratives.
            </p>
          </Link>
          <Link
            to="/gallery"
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4">Gallery</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Visual stories from the Western Ghats and Himalayan treks.
            </p>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};
