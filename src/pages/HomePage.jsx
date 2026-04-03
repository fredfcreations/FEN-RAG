
import React from 'react';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to our site" />
      </Helmet>
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Blank canvas ready for customization */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
