'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Button } from './button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

const components = [
  {
    title: "About",
    href: "/greenprint/about",
    description:
      "Learn about our mission and vision for cryptocurrency trading.",
  },
  {
    title: "Documentation",
    href: "/greenprint/docs",
    description:
      "Detailed guides and API documentation for our platform.",
  },
  {
    title: "Features",
    href: "/greenprint/experienced#features",
    description:
      "Explore the powerful features that set GreenPrint apart.",
  },
  {
    title: "FAQ",
    href: "/greenprint/experienced#faq",
    description:
      "Find answers to commonly asked questions about our platform.",
  },
];

// Mobile navbar item component
const NavbarMobileItem = ({ href, children, className, onClick }) => {
  return (
    <Link
      href={href}
      className={cn(
        "block py-2 text-base font-medium text-gray-200 hover:text-white transition-colors",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export function ShadcnNavbar({ transparent = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const getNavbarStyle = () => {
    if (transparent && !isScrolled) {
      return "bg-transparent border-transparent";
    }
    return "bg-black/80 backdrop-blur-sm border-gray-800";
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-colors duration-200",
      getNavbarStyle()
    )}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/greenprint-logo.PNG"
              alt="Greenprint Logo"
              width={240}
              height={72}
              className="h-12 w-auto"
              priority
              quality={100}
              style={{
                objectFit: 'contain',
                maxWidth: 'none'
              }}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-green-400 hover:bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-400/20 to-green-600/20 p-6 no-underline outline-none focus:shadow-md"
                          href="/greenprint"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            GreenPrint
                          </div>
                          <p className="text-sm leading-tight text-white/80">
                            Market-neutral crypto arbitrage strategy with consistent returns in all market conditions.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-600/10 focus:bg-green-600/10"
                          href="/greenprint/funding-rate-bot"
                        >
                          <div className="text-sm font-medium leading-none text-white">Funding Rate Bot</div>
                          <p className="line-clamp-2 text-sm leading-snug text-white/70">
                            Automated funding rate arbitrage across exchanges.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-600/10 focus:bg-green-600/10"
                          href="/greenprint/funding-rate-analyzer"
                        >
                          <div className="text-sm font-medium leading-none text-white">Funding Rate Analyzer</div>
                          <p className="line-clamp-2 text-sm leading-snug text-white/70">
                            Advanced analytics platform for funding rate opportunities.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-600/10 focus:bg-green-600/10"
                          href="/greenprint/clmm-bot"
                        >
                          <div className="flex items-center text-sm font-medium leading-none text-white">
                            CLMM Bot
                            <span className="ml-2 rounded-full bg-green-700 px-2 py-0.5 text-xs text-white">
                              Coming Soon
                            </span>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-white/70">
                            Concentrated liquidity market maker for optimal returns.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-green-400 hover:bg-transparent">
                  Learn
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {components.map((component) => (
                      <li key={component.title}>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-600/10 focus:bg-green-600/10"
                            href={component.href}
                          >
                            <div className="text-sm font-medium leading-none text-white">{component.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/70">
                              {component.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/greenprint/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:text-green-400 hover:bg-transparent"
                  )}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* CTA buttons for desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-white hover:text-green-400 hover:bg-black/20">
              Log in
            </Button>
          </Link>
          <Link href="/greenprint/docs">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-200">
              Get Started
            </Button>
          </Link>
        </div>
        
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 border-gray-800">
            <SheetHeader>
              <SheetTitle className="text-white">GreenPrint</SheetTitle>
              <SheetDescription className="text-gray-400">
                Market-neutral crypto arbitrage strategies
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-6 py-6">
              <div className="grid gap-3">
                <h3 className="text-lg font-medium text-gray-200">Products</h3>
                <NavbarMobileItem href="/greenprint">GreenPrint Platform</NavbarMobileItem>
                <NavbarMobileItem href="/greenprint/funding-rate-bot">Funding Rate Bot</NavbarMobileItem>
                <NavbarMobileItem href="/greenprint/funding-rate-analyzer">Funding Rate Analyzer</NavbarMobileItem>
                <NavbarMobileItem href="/greenprint/clmm-bot" className="flex items-center">
                  CLMM Bot
                  <span className="ml-2 rounded-full bg-green-700 px-2 py-0.5 text-xs text-white">
                    Coming Soon
                  </span>
                </NavbarMobileItem>
              </div>
              <div className="grid gap-3">
                <h3 className="text-lg font-medium text-gray-200">Learn</h3>
                {components.map((component) => (
                  <NavbarMobileItem 
                    key={component.title}
                    href={component.href}
                  >
                    {component.title}
                  </NavbarMobileItem>
                ))}
              </div>
              <div className="grid gap-3">
                <NavbarMobileItem href="/greenprint/pricing">Pricing</NavbarMobileItem>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/login">
                  <Button variant="outline" className="w-full text-white border-gray-700 hover:bg-gray-800">
                    Log in
                  </Button>
                </Link>
                <Link href="/greenprint/docs">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
} 