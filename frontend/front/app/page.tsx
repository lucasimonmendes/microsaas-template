"use client";

import Link from "next/link";
import { Github, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <nav className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link
              href="https://s1mon.tech"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Creator's Site
            </Link>
            <Link
              href="https://blog.s1m0n.tech"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Blog
            </Link>
            <Link
              href="/landing-page"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Landing Page
            </Link>
            <Link
              href="https://github.com/lucasimonmendes"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              GitHub
            </Link>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">
              {darkMode ? "Switch to light mode" : "Switch to dark mode"}
            </span>
          </button>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Welcome to Our SaaS Template
          </h1>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            A minimalistic and portable solution for your next big idea.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <Link
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Created by Simon
            </span>
            <Link
              href="https://github.com/lucasimonmendes"
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </Link>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href="https://s1mon.tech"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Visit Creator's Site
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
