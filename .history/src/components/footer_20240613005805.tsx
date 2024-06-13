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
        <div className="mx-auto max-w-screen-xl px-4 py-6 lg:py-8">
          <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
            Bleisure
          </h1>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Your menu items here */}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center px-4 py-6C">
            <span className="text-sm text-gray-500 dark:text-gray-300">
              © 2024 Bleisure™. All Rights Reserved.
            </span>
            <div className="flex mt-4 md:mt-0 space-x-5">
              {/* Social media icons */}
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

              {/* Instagram */}
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaInstagram className="w-4 h-4" />
                <span className="sr-only">Instagram page</span>
              </Link>
              {/* Gmail */}
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub className="w-4 h-4" />
                <span className="sr-only">Gmail page</span>
              </Link>
              {/* Add more social media icons here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
