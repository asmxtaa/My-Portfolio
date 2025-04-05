"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Home, Mail, User } from "lucide-react";

const navItems = [
  { path: "/", name: "Home", icon: Home },
  { path: "/about", name: "About", icon: User },
  { path: "/contact", name: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            Portfolio
          </motion.div>
          <div className="flex space-x-4">
            {navItems.map(({ path, name, icon: Icon }) => (
              <Link key={path} href={path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-3 py-2 rounded-md ${
                    pathname === path
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {name}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}