import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          DesiDiaryByShri - Frontend Developer, Writer, and Nature Enthusiast
        </title>
        <meta
          name="description"
          content="Personal website of Shrilakshmi Shastry - Frontend developer at smallcase, Kannada writer, and nature enthusiast from Shivamogga."
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
            I'm a frontend developer at smallcase, hailing from the lush green
            city of Shivamogga, nestled in the heart of Karnataka's Western
            Ghats. My days are a blend of coding, trekking, and storytelling,
            fueled by the serenity of nature and the rhythm of Kannada
            literature.
          </p>

          <p>
            As a tech enthusiast, I'm passionate about building accessible,
            user-friendly digital experiences and contributing to open-source
            communities. At smallcase, I craft seamless interfaces, and in my
            blog, I share technical insights on frontend development,
            accessibility, and open-source adventures. Beyond code, I'm a
            storyteller at heart—writing Kannada short stories that capture
            life's fleeting moments and sharing vibrant images from my
            wanderings in the Western Ghats and annual Himalayan treks.
          </p>

          <p>
            When I'm not coding or writing, you'll find me walking amidst trees,
            cycling through Shivamogga's scenic trails, or lost in a Kannada
            novel. This website is my digital campfire—a space to share tech
            tips, heartfelt stories, and glimpses of nature's beauty.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <Link
            to="/blog"
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4">Blog</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Technical insights, coding adventures, and open-source
              contributions.
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
          <Link
            to="/talks"
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4">Talks</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Sharing knowledge about frontend development and accessibility.
            </p>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};
