import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { AnimatePresence, easeOut, motion } from 'framer-motion';
import { Fragment } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Accueil", href: "/", regexp: new RegExp('^\/$') },
  { name: "À propos", href: "/a-propos/", regexp: new RegExp('^\/a-propos\/$') },
  { name: "Blogue", href: "/blogue/", regexp: new RegExp('^\/blogue\/') },
];

export default function NavBar() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-gray-800 top-nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-white text-lg font-extrabold">
                  <Link href="/" className="brand-logo">
                    JF Paris
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name} className={classNames(
                        item.regexp.test(router.asPath)
                          ? "current-nav"
                          : "",
                        "px-2 py-2 rounded-md text-sm font-medium transition"
                      )}
                      aria-current={item.current ? "page" : undefined}>
                          {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>

                  <div>
                    <motion.div
                      animate={{
                        rotate: open ? 45 : 0,
                        y: open ? 6 : 0,
                      }}
                      className="w-6 h-0.5 bg-white mb-1"
                    />
                    <motion.div
                      animate={{
                        opacity: open ? 0 : 1,
                      }}
                      className="w-6 h-0.5 bg-white mb-1"
                    />
                    <motion.div
                      animate={{
                        rotate: open ? -45 : 0,
                        y: open ? -6 : 0,
                      }}
                      className="w-6 h-0.5 bg-white"
                    />
                  </div>
                </DisclosureButton>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <DisclosurePanel static as={Fragment} className="md:hidden">
                <motion.div
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="origin-top"
                >
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t-2 border-red-500">
                    {navigation.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as={Link}
                        href={item.href}
                        className={classNames(
                          item.regexp.test(router.asPath)
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </div>
                </motion.div>
              </DisclosurePanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
}
