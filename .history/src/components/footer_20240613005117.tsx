import Link from "next/link";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`bg-white dark:bg-gray-900 w-full ${className}`}>
      <div className="mx-auto max-w-screen-xl px-4 py-6 lg:py-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Bleisure
        </h1>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Product
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Autocapture
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Data governance
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Virtual Events
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Connect
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Explore
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Resources
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Documents
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Community
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Community Central
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Support
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Help
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  About us
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Partners
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Customers
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6C md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 Bleisure™. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
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
            {/* Add more social media icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
