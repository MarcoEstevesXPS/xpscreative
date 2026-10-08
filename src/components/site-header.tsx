'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Instagram, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

// Um único lugar para links e contatos — antes cada página tinha sua própria cópia.
const NAV_LINKS = [
  { href: '/', label: 'HOME', withIcon: true },
  { href: '/servicos', label: 'SOLUÇÕES' },
  { href: '/sobre', label: 'SOBRE' },
];
const CONTACT_EMAIL = 'mailto:marco@xpscreative.com';
const INSTAGRAM_URL = 'https://www.instagram.com/xpscreative';
const CLIENT_AREA_URL = 'https://clientexps.lovable.app/auth';

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-30 w-full px-[24px] md:px-[47px]',
        'transition-[padding,background-color,box-shadow] duration-300 motion-reduce:transition-none',
        scrolled
          ? 'bg-[#F7F5EE]/90 backdrop-blur-md py-3 shadow-[0_1px_0_rgba(68,41,62,0.10)]'
          : 'bg-transparent pt-[24px] md:pt-[47px] pb-3'
      )}
    >
      <div className="relative mx-auto max-w-7xl flex items-center">
        <Logo className="text-[#44293E]" />

        <div className="flex-1 flex justify-end md:justify-center">
          <div className="flex items-center justify-between bg-[#44293E] text-[#E1E1E3] rounded-full px-4 h-14 w-auto">
            {/* Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-lg pl-8">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'hover:text-white transition-colors flex items-center gap-2',
                      active && 'text-white font-bold'
                    )}
                  >
                    {link.withIcon && (
                      <Image src="/logomenu.png" alt="" width={24} height={24} />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-6 ml-4">
              <div className="w-px h-6 bg-white/20" />
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da XPS Creative"
                className="hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Button
                asChild
                size="sm"
                className="rounded-full bg-white text-[#44293E] hover:bg-white/90 px-8"
              >
                <Link href={CONTACT_EMAIL}>Contato</Link>
              </Button>
              <Button
                asChild
                variant="link"
                className="text-white hover:text-white/80 hover:no-underline"
              >
                <Link href={CLIENT_AREA_URL} target="_blank">
                  Área do Cliente
                </Link>
              </Button>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center justify-between w-full">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Abrir menu"
                    className="text-white hover:bg-transparent hover:text-white/80"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-[#44293E] text-white border-none p-8">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-8 text-2xl mt-8">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={pathname === link.href ? 'page' : undefined}
                        className="hover:text-white/80 transition-colors flex items-center gap-2"
                      >
                        {link.withIcon && (
                          <Image src="/logomenu.png" alt="" width={24} height={24} />
                        )}
                        {link.label}
                      </Link>
                    ))}
                    <div className="pt-8 space-y-4">
                      <Button
                        asChild
                        variant="link"
                        className="text-white hover:text-white/80 hover:no-underline text-xl p-0 h-auto"
                      >
                        <Link href={CLIENT_AREA_URL} target="_blank">
                          Área do Cliente
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        className="rounded-full bg-white text-[#44293E] hover:bg-white/90 w-full"
                      >
                        <Link href={CONTACT_EMAIL}>Contato</Link>
                      </Button>
                      <div className="flex items-center gap-6 justify-center pt-4">
                        <Link
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram da XPS Creative"
                          className="hover:text-white/80"
                        >
                          <Instagram className="h-6 w-6" />
                        </Link>
                      </div>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
              <Button
                asChild
                variant="link"
                className="text-white hover:text-white/80 hover:no-underline text-sm"
              >
                <Link href={CLIENT_AREA_URL} target="_blank">
                  Área do Cliente
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
