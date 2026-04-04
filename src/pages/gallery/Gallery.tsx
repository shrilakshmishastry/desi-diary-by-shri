const Gallery = () => {
  // Replace this with your actual Google Photos Album URL
  const googlePhotosAlbumUrl = "https://photos.app.goo.gl/HznJCEcGRpLrEncd7";

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
          src="/kudremukh-hero.jpg"
          alt="Kudremukh Trek Path Start"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
          <div className="p-8 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Trekking Path to Kudremukh Peak
              </h2>
              <p className="text-gray-200">
                Distance 19 KM. Starting point of the adventure.
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
        <div className="group relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1506744626753-eda8151a74a0?auto=format&fit=crop&q=80&w=800"
            alt="Nature"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <span className="text-white p-4 font-semibold">
              Wonders of Nature
            </span>
          </div>
        </div>

        {/* Image Card 2 */}
        <div className="group relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&q=80&w=800"
            alt="Travel"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <span className="text-white p-4 font-semibold">Wanderlust</span>
          </div>
        </div>
      </div>

      {/* Call to Action for Google Photos */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 sm:p-12 text-center shadow-inner border border-indigo-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Want to see the rest?
        </h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          The full collection containing hundreds of uncompressed, beautiful
          memories is hosted securely on Google Photos.
        </p>
        <a
          href={googlePhotosAlbumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-1"
        >
          <svg
            className="w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
          </svg>
          Open Google Photos Album
        </a>
      </div>
    </div>
  );
};

export default Gallery;
