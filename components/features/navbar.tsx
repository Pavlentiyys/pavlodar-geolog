"use client";

import Link from "next/link";
import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.2, ease: "easeOut" }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between">
        {/* Лого с анимацией при наведении */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link href="/" className="flex items-center space-x-2 cursor-pointer hover:bg-accent rounded-md p-2 transition-colors">
            <h2 className="inline-block font-bold text-xl">ПавлодарГидроГеология</h2>
          </Link>
        </motion.div>

        {/* Десктопная навигация */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/" passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-20 rounded-none cursor-pointer hover:bg-accent`}>
                    Главная
                  </NavigationMenuLink>
                </Link>
              </motion.div>
            </NavigationMenuItem>

            {/* Элемент с hover-меню (Отделы компании) */}
            <NavigationMenuItem className="relative">
              <HoverCard openDelay={100} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div className={`${navigationMenuTriggerStyle()} flex items-center h-20 rounded-none cursor-pointer hover:bg-accent`}>
                    Отделы компании <ChevronDown className="ml-1 h-4 w-4" />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="absolute left-[-95px] w-60 p-0 border rounded-md shadow-lg">
                  <div className="py-1">
                    <Link href="/departments/geology-department" className="block px-4 py-2 hover:bg-accent cursor-pointer">
                      Геологический отдел
                    </Link>
                    <Link href="/departments/geophysic-department" className="block px-4 py-2 hover:bg-accent cursor-pointer">
                      Геофизический отдел
                    </Link>
                    <Link href="/departments/drills-department" className="block px-4 py-2 hover:bg-accent cursor-pointer">
                      Отдел буровых работ
                    </Link>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </NavigationMenuItem>

            {/* Элемент с hover-меню (О компании) */}
            <NavigationMenuItem className="relative">
              <HoverCard openDelay={100} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div className={`${navigationMenuTriggerStyle()} flex items-center h-20 rounded-none cursor-pointer hover:bg-accent`}>
                    О компании <ChevronDown className="ml-1 h-4 w-4" />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="absolute left-[-75px] w-60 p-0 border rounded-md shadow-lg">
                  <div className="py-1">
                    <Link href="/about/history" className="block px-4 py-2 hover:bg-accent cursor-pointer">
                      История
                    </Link>
                    <Link href="/about/vacancies" className="block px-4 py-2 hover:bg-accent cursor-pointer">
                      Вакансии
                    </Link>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Мобильное меню: кнопка бургера */}
        <motion.button 
          className="md:hidden p-2 rounded-md focus:outline-none cursor-pointer hover:bg-accent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Мобильное меню: контент */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden bg-background border-y"
          >
            <div className="container mx-auto py-2 flex flex-col">
              <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/" 
                  className="px-4 py-3 hover:bg-accent rounded cursor-pointer block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Главная
                </Link>
              </motion.div>

              <div className="border-t border-border">
                <motion.div 
                  className="px-4 py-3 hover:bg-accent flex items-center justify-between cursor-pointer"
                  onClick={() => toggleDropdown('departments')}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Отделы компании</span>
                  <motion.span
                    animate={{ rotate: activeDropdown === 'departments' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </motion.div>
                <AnimatePresence>
                  {activeDropdown === 'departments' && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="flex flex-col border-b border-border overflow-hidden"
                    >
                      <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                        <Link 
                          href="/departments/geology-department" 
                          className="px-6 py-2 hover:bg-accent cursor-pointer block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Геологический отдел
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                        <Link 
                          href="/departments/geophysic-department" 
                          className="px-6 py-2 hover:bg-accent cursor-pointer block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Геофизический отдел
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                        <Link 
                          href="/departments/drills-department" 
                          className="px-6 py-2 hover:bg-accent cursor-pointer block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Отдел буровых работ
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-y border-border">
                <motion.div 
                  className="px-4 py-3 hover:bg-accent flex items-center justify-between cursor-pointer"
                  onClick={() => toggleDropdown('about')}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>О компании</span>
                  <motion.span
                    animate={{ rotate: activeDropdown === 'about' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </motion.div>
                <AnimatePresence>
                  {activeDropdown === 'about' && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="flex flex-col border-y border-border overflow-hidden"
                    >
                      <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                        <Link 
                          href="/about/history" 
                          className="px-6 py-2 hover:bg-accent border-b cursor-pointer block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          История
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                        <Link 
                          href="/about/vacancies" 
                          className="px-6 py-2 hover:bg-accent border-b cursor-pointer block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Вакансии
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}