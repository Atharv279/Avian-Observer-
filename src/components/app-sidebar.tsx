
'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
  SidebarInput,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { Home, Compass, Feather, Image as ImageIcon, BookOpen, Bot, Search, Info, Mail, ShieldCheck } from 'lucide-react';
import { useSidebar } from './ui/sidebar';

const mainLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/species', label: 'Species Guide', icon: Feather },
  { href: '/guides', label: 'Birding Guides', icon: BookOpen },
  { href: '/spots', label: 'Best Spots', icon: Compass },
  { href: '/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/identify', label: 'AI Identifier', icon: Bot },
];

const secondaryLinks = [
    { href: '/about', label: 'About Us', icon: Info },
    { href: '/contact', label: 'Contact Us', icon: Mail },
    { href: '/privacy', label: 'Privacy Policy', icon: ShieldCheck },
]

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isMobile } = useSidebar();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const query = e.currentTarget.value;
      if (query) {
        router.push(`/species?q=${encodeURIComponent(query)}`);
      }
    }
  };


  return (
    <>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <Logo />
        </div>
        {!isMobile && (
          <div className="relative">
            <SidebarInput placeholder="Search..." onKeyDown={handleSearch} />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {mainLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <Link href={link.href} className="w-full">
                <SidebarMenuButton
                  isActive={
                    link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
                  }
                  tooltip={{
                    children: link.label,
                  }}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className='flex-col items-start gap-4'>
        <SidebarSeparator />
         <SidebarMenu>
            {secondaryLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <Link href={link.href} className="w-full">
                <SidebarMenuButton
                  isActive={pathname.startsWith(link.href)}
                  tooltip={{
                    children: link.label,
                  }}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
