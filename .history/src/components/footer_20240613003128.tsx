// components/Footer.tsx
"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Product
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  Autocapture
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                D
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  Brand Center
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  Discord Server
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  Licensing
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  iOS
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  Android
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  Windows
                </Link>
              </li>
              <li className="mb-4">
                <Link className="hover:underline" href="#">
                  MacOS
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <Link href="https://flowbite.com/">Flowbite™</Link>. All
            Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <Link
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              href="#"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              href="#"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              href="#"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-3.946 5.004A11.635 11.635 0 0 1 1.392.75a4.07 4.07 0 0 0-.554 2.047 4.068 4.068 0 0 0 1.799 3.384 4.1 4.1 0 0 1-1.85-.505v.05a4.073 4.073 0 0 0 3.26 3.989c-.36.1-.734.153-1.11.151a3.535 3.535 0 0 1-.771-.071 4.089 4.089 0 0 0 3.799 2.823A8.293 8.293 0 0 1 0 15.342 11.7 11.7 0 0 0 6.29 17c7.547 0 11.675-6.244 11.675-11.654 0-.18-.005-.362-.013-.542A8.097 8.097 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              href="#"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .277a10 10 0 1 0 0 19.446A10 10 0 0 0 10 .277Zm0 18.14a8.14 8.14 0 1 1 0-16.28 8.14 8.14 0 0 1 0 16.28Zm-.85-8.14a.85.85 0 1 0 1.7 0V4.78a.85.85 0 1 0-1.7 0v5.496Zm.85 3.188a.964.964 0 1 0 0-1.927.964.964 0 0 0 0 1.927Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
