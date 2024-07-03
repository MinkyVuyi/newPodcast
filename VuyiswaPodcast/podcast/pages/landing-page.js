import Link from 'next/link';


const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg mb-8">Discover amazing features and more!</p>
        <img
          src="/podcast.jpeg"  // Place your hero image in the public folder
          alt="podcast"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <Link href="/authorization">
          <button className="mt-8 bg-blue-500 hover-bg-blue-600 text-white font-semibold px-6 py-3 rounded-full inline-block transition duration-300 ease-in-out">
            Get Started
          </button>
        </Link>

      </div>
    </div>
  );
};

export default LandingPage;
