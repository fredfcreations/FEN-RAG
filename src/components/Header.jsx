import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return <header className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-lg font-semibold text-foreground hover:text-foreground/80 transition-colors duration-200">
            XYZ NAME
          </Link>
        </div>
      </div>
    </header>;
}
export default Header;