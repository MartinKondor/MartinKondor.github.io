"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-neutral-800 py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-500">
          MK
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="#about"
              className="hover:text-green-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="hover:text-green-500 transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-green-500 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-green-500 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
