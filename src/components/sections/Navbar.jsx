import Cart from "./Cart";
import { DarkMode } from "../../context/DarkMode";
import { useContext, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCartOpen, setMobileCartOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className={`font-main-font`}>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-5xl justify-between items-center p-6 lg:px-8"
      >
        <div className="flex lg:flex-1 items-center">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <svg
              width="76"
              height="20"
              viewBox="0 0 76 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.2266 10.8359H27.3594V15H25.0156V3.625H29.2422C30.5859 3.625 31.6224 3.92448 32.3516 4.52344C33.0807 5.1224 33.4453 5.96875 33.4453 7.0625C33.4453 7.83854 33.276 8.48698 32.9375 9.00781C32.6042 9.52344 32.0964 9.9349 31.4141 10.2422L33.875 14.8906V15H31.3594L29.2266 10.8359ZM27.3594 8.9375H29.25C29.8385 8.9375 30.2943 8.78906 30.6172 8.49219C30.9401 8.1901 31.1016 7.77604 31.1016 7.25C31.1016 6.71354 30.9479 6.29167 30.6406 5.98438C30.3385 5.67708 29.8724 5.52344 29.2422 5.52344H27.3594V8.9375ZM45.2181 9.57031C45.2181 10.6901 45.0202 11.6719 44.6244 12.5156C44.2285 13.3594 43.6608 14.0104 42.9213 14.4688C42.1869 14.9271 41.3431 15.1562 40.39 15.1562C39.4473 15.1562 38.6061 14.9297 37.8666 14.4766C37.127 14.0234 36.5541 13.3776 36.1478 12.5391C35.7416 11.6953 35.5358 10.7266 35.5306 9.63281V9.07031C35.5306 7.95052 35.7311 6.96615 36.1322 6.11719C36.5384 5.26302 37.1088 4.60938 37.8431 4.15625C38.5827 3.69792 39.4265 3.46875 40.3744 3.46875C41.3223 3.46875 42.1634 3.69792 42.8978 4.15625C43.6374 4.60938 44.2077 5.26302 44.6088 6.11719C45.015 6.96615 45.2181 7.94792 45.2181 9.0625V9.57031ZM42.8431 9.05469C42.8431 7.86198 42.6296 6.95573 42.2025 6.33594C41.7754 5.71615 41.166 5.40625 40.3744 5.40625C39.5879 5.40625 38.9811 5.71354 38.5541 6.32812C38.127 6.9375 37.9108 7.83333 37.9056 9.01562V9.57031C37.9056 10.7318 38.1192 11.6328 38.5463 12.2734C38.9733 12.9141 39.5879 13.2344 40.39 13.2344C41.1765 13.2344 41.7806 12.9271 42.2025 12.3125C42.6244 11.6927 42.8379 10.7917 42.8431 9.60938V9.05469ZM49.905 13.1172H54.8816V15H47.5613V3.625H49.905V13.1172ZM63.7169 10.0703H59.2169V13.1172H64.4981V15H56.8731V3.625H64.4825V5.52344H59.2169V8.23438H63.7169V10.0703ZM70.5834 7.54688L72.7163 3.625H75.4116L72.0991 9.26562L75.4975 15H72.7709L70.5834 11.0156L68.3959 15H65.6694L69.0678 9.26562L65.7553 3.625H68.4506L70.5834 7.54688Z"
                fill={` ${isDarkMode ? "#F2F2F2" : "#2E2E2E"}`}
              />
              <path
                d="M10.8333 6.66669H9.16663V10.8334H13.3333V9.16669H10.8333V6.66669Z"
                fill={` ${isDarkMode ? "#F2F2F2" : "#2E2E2E"}`}
              />
              <path
                d="M16.6658 10C16.6658 7.53919 15.3224 5.39169 13.3333 4.23669V2.50002C13.3333 2.27901 13.2455 2.06704 13.0892 1.91076C12.9329 1.75448 12.721 1.66669 12.4999 1.66669H7.49994C7.27893 1.66669 7.06696 1.75448 6.91068 1.91076C6.7544 2.06704 6.66661 2.27901 6.66661 2.50002V4.23585C4.67744 5.39085 3.33411 7.53919 3.33411 10C3.33511 11.1916 3.65533 12.3611 4.26148 13.387C4.86762 14.4129 5.73754 15.2576 6.78077 15.8334H6.66661V17.5342C6.66661 17.7552 6.7544 17.9672 6.91068 18.1234C7.06696 18.2797 7.27893 18.3675 7.49994 18.3675H12.4999C12.721 18.3675 12.9329 18.2797 13.0892 18.1234C13.2455 17.9672 13.3333 17.7552 13.3333 17.5342V15.8334H13.2174C14.2612 15.258 15.1316 14.4134 15.738 13.3875C16.3445 12.3616 16.6649 11.1918 16.6658 10ZM9.99911 14.9992C8.6738 14.9976 7.40322 14.4704 6.46616 13.5332C5.5291 12.596 5.0021 11.3253 5.00077 10C5.0021 8.67471 5.5291 7.40405 6.46616 6.46683C7.40322 5.52962 8.6738 5.0024 9.99911 5.00085C12.7574 5.00085 14.9991 7.24335 14.9991 10C14.9978 11.3256 14.4705 12.5965 13.5331 13.5338C12.5957 14.4711 11.3247 14.9981 9.99911 14.9992Z"
                fill={` ${isDarkMode ? "#F2F2F2" : "#2E2E2E"}`}
              />
            </svg>
          </a>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 lg:pl-16">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-main-color"
            >
              Home
            </a>

            <a
              href="#featured"
              className="text-sm font-semibold leading-6 dark:text-title-color-dark"
            >
              Featured
            </a>
            <a
              href="#products"
              className="text-sm font-semibold leading-6 dark:text-title-color-dark"
            >
              Products
            </a>
            <a
              href="#new"
              className="text-sm font-semibold leading-6 dark:text-title-color-dark"
            >
              New
            </a>
          </PopoverGroup>
        </div>

        <div className="flex gap-4">
          <button type="button" onClick={() => setIsDarkMode(!isDarkMode)}>
            <span className="sr-only">Dark Mode</span>
            {isDarkMode ? (
              // matahari ku
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M5.82754 10C5.82754 12.3009 7.69921 14.1725 10 14.1725C12.3009 14.1725 14.1725 12.3009 14.1725 10C14.1725 7.69919 12.3009 5.82752 10 5.82752C7.69921 5.82752 5.82754 7.69919 5.82754 10ZM10 7.49419C11.3817 7.49419 12.5059 8.61835 12.5059 10C12.5059 11.3817 11.3817 12.5059 10 12.5059C8.61837 12.5059 7.49421 11.3817 7.49421 10C7.49421 8.61835 8.61837 7.49419 10 7.49419ZM9.16504 15.8334H10.8317V18.3334H9.16504V15.8334ZM9.16504 1.66669H10.8317V4.16669H9.16504V1.66669ZM1.66504 9.16669H4.16504V10.8334H1.66504V9.16669ZM15.8317 9.16669H18.3317V10.8334H15.8317V9.16669ZM3.51587 15.3025L5.28254 13.5342L6.46171 14.7125L4.69504 16.4809L3.51587 15.3025ZM13.5334 5.28669L15.3017 3.51835L16.48 4.69669L14.7117 6.46502L13.5334 5.28669ZM5.28504 6.46585L3.51671 4.69752L4.69587 3.51919L6.46254 5.28752L5.28504 6.46585ZM16.48 15.3034L15.3017 16.4817L13.5334 14.7134L14.7117 13.535L16.48 15.3034Z"
                  fill="#FFF"
                />
              </svg>
            ) : (
              // bulan sabit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>

          <button type="button" onClick={() => setMobileCartOpen(true)}>
            <span className="sr-only">Cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-5 ${isDarkMode ? "text-white" : "text-black"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden "
          >
            <span className="sr-only">Open main menu</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33333 2.5H3.33333C3.11232 2.5 2.90036 2.5878 2.74408 2.74408C2.5878 2.90036 2.5 3.11232 2.5 3.33333V8.33333C2.5 8.55435 2.5878 8.76631 2.74408 8.92259C2.90036 9.07887 3.11232 9.16667 3.33333 9.16667H8.33333C8.55435 9.16667 8.76631 9.07887 8.92259 8.92259C9.07887 8.76631 9.16667 8.55435 9.16667 8.33333V3.33333C9.16667 3.11232 9.07887 2.90036 8.92259 2.74408C8.76631 2.5878 8.55435 2.5 8.33333 2.5ZM7.5 7.5H4.16667V4.16667H7.5V7.5ZM11.6667 9.16667H16.6667C16.8877 9.16667 17.0996 9.07887 17.2559 8.92259C17.4122 8.76631 17.5 8.55435 17.5 8.33333V3.33333C17.5 3.11232 17.4122 2.90036 17.2559 2.74408C17.0996 2.5878 16.8877 2.5 16.6667 2.5H11.6667C11.4457 2.5 11.2337 2.5878 11.0774 2.74408C10.9211 2.90036 10.8333 3.11232 10.8333 3.33333V8.33333C10.8333 8.55435 10.9211 8.76631 11.0774 8.92259C11.2337 9.07887 11.4457 9.16667 11.6667 9.16667ZM12.5 4.16667H15.8333V7.5H12.5V4.16667ZM2.5 16.6667C2.5 16.8877 2.5878 17.0996 2.74408 17.2559C2.90036 17.4122 3.11232 17.5 3.33333 17.5H8.33333C8.55435 17.5 8.76631 17.4122 8.92259 17.2559C9.07887 17.0996 9.16667 16.8877 9.16667 16.6667V11.6667C9.16667 11.4457 9.07887 11.2337 8.92259 11.0774C8.76631 10.9211 8.55435 10.8333 8.33333 10.8333H3.33333C3.11232 10.8333 2.90036 10.9211 2.74408 11.0774C2.5878 11.2337 2.5 11.4457 2.5 11.6667V16.6667ZM4.16667 12.5H7.5V15.8333H4.16667V12.5ZM10.8333 16.6667C10.8333 16.8877 10.9211 17.0996 11.0774 17.2559C11.2337 17.4122 11.4457 17.5 11.6667 17.5H16.6667C16.8877 17.5 17.0996 17.4122 17.2559 17.2559C17.4122 17.0996 17.5 16.8877 17.5 16.6667V11.6667C17.5 11.4457 17.4122 11.2337 17.2559 11.0774C17.0996 10.9211 16.8877 10.8333 16.6667 10.8333H11.6667C11.4457 10.8333 11.2337 10.9211 11.0774 11.0774C10.9211 11.2337 10.8333 11.4457 10.8333 11.6667V16.6667ZM12.5 12.5H15.8333V15.8333H12.5V12.5Z"
                fill={`${isDarkMode ? "#FFF" : "#2E2E2E"}`}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Cart Mobile Viewport */}
      <Dialog open={mobileCartOpen} onClose={setMobileCartOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 border w-full overflow-y-auto bg-body-color px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-body-color-dark dark:border-border-color-dark">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your List Cart</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileCartOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                aria-hidden="true"
                className="h-6 w-6 dark:text-title-color-dark"
              />
            </button>
          </div>
          <Cart />
        </DialogPanel>
      </Dialog>

      {/* Mobile Nav Link */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full border overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-body-color-dark dark:border-border-color-dark">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                aria-hidden="true"
                className="h-6 w-6 dark:text-title-color-dark"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:border-border-color-dark">
              <div className="space-y-2 py-6 text-center">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-main-color hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#featured"
                  className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-title-color-dark"
                >
                  Featured
                </a>
                <a
                  href="#products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-title-color-dark"
                >
                  Products
                </a>
                <a
                  href="#new"
                  className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-title-color-dark"
                >
                  New
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
