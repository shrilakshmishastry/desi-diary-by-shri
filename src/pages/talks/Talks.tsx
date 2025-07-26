import { Helmet } from "react-helmet-async";

type Talk = {
  title: string;
  date: string;
  link: string;
};

const talks: Talk[] = [
  {
    title: "Input accessibility in depth",
    date: "04 Jul, 2025",
    link: "https://youtu.be/6NYb85ve1Qo?si=Tj06vKfaJnuQ1XuG",
  },
];

const Talks = () => {
  return (
    <>
      <Helmet>
        <title>Talks - DesiDiaryByShri</title>
        <meta
          name="description"
          content="Technical talks and presentations by Shrilakshmi Shastry on frontend development and accessibility."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Talks
        </h1>
        <div className="space-y-8">
          {talks.map((talk) => (
            <article key={talk.link} className="group">
              <div className="flex flex-col space-y-2">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {talk.date}
                </time>
                <a
                  href={talk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  {talk.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Talks;
