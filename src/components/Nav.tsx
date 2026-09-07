import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-3xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          Meu-app
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
