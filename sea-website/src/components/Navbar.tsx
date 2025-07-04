import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-teal">
          SEA
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-teal">Home</Link>
            </li>
            <li>
              <Link href="/about-us" className="text-gray-600 hover:text-teal">About Us</Link>
            </li>
          </ul>
        </div>
        <div>
          {/* Placeholder for future navigation links */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;