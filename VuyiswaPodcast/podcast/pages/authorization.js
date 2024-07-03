// pages/authorization.js
import Link from 'next/link';

const AuthorizationPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Authorization</h1>
        <p className="text-lg mb-8">Choose an option below:</p>
        <Link href="/signin">
          <a className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full inline-block transition duration-300 ease-in-out mr-4">
            Sign In
          </a>
        </Link>
        <Link href="/signup">
          <a className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full inline-block transition duration-300 ease-in-out">
            Sign Up
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AuthorizationPage;
