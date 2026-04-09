const Gallery = () => {
  // Replace this with your actual Google Photos Album URL
  const googlePhotosAlbumUrl = "https://photos.app.goo.gl/4XTgCYBsBswPTADr7";

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl border-b-4 border-indigo-500 inline-block pb-2">
          Moments & Memories
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          A glimpse into my favorite moments. Explore the curated teasers below,
          or dive into the complete collection.
        </p>
      </div>

      {/* Hero Image / Album Cover */}
      <a
        href={googlePhotosAlbumUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-12 rounded-2xl overflow-hidden shadow-2xl relative group h-[400px] sm:h-[500px] md:h-[600px] w-full cursor-pointer"
      >
        <img
          src="/valley-of-flowers.jpg"
          alt="Valley of Flowers"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
          <div className="p-8 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Valley of Flowers
              </h2>
              <p className="text-gray-200">
                A breathtaking landscape of blooming beauty.
              </p>
            </div>
            <div className="group/btn flex items-center bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md px-6 py-3 rounded-full text-white font-semibold tracking-wide transition-all duration-300 self-start sm:self-auto text-sm w-max shadow-lg hover:shadow-white/20">
              <svg
                className="w-5 h-5 mr-2 opacity-90"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
              </svg>
              <span>Click to see album</span>
              <svg
                className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>

      {/* Teaser Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {/* Image Card 1 */}
        <a
          href="https://photos.app.goo.gl/HznJCEcGRpLrEncd7"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-200 cursor-pointer block"
        >
          <img
            src="/kudremukh-hero.jpg"
            alt="Kudremukh Trek"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
            <div className="w-full flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-lg">
                Kudremukh Trek
              </span>
              <span className="text-white text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                Click to see album
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </a>

        {/* Image Card 2 */}
        <a
          href="https://photos.app.goo.gl/Y9PA9dLN73CY3H4P8"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-200 cursor-pointer block"
        >
          <img
            src="/kanoor-kote.jpg"
            alt="Kanoor Kote"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
            <div className="w-full flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-lg">
                Kanoor Kote
              </span>
              <span className="text-white text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                Click to see album
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Gallery;
