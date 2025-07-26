import { Link } from "react-router-dom";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-gray-900">
        <nav className="container py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              DesiDiaryByShri
            </Link>
            <div className="flex gap-6">
              <Link
                to="/blog"
                className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/gallery"
                className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/talks"
                className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Talks
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow container py-8">{children}</main>

      <footer className="bg-gray-50 dark:bg-gray-800">
        <div className="container py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              With ❤️ from Shrilakshmi Shastry
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/shrilakshmishastry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                GitHub
              </a>
              <a
                href="https://x.com/shrilakshmihg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                X
              </a>
              <a
                href="https://www.linkedin.com/in/shrilakshmi-shastry-29737516a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
