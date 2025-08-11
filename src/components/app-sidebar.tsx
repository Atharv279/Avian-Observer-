'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarTrigger,
  SidebarFooter,
  SidebarInput,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import { Home, Compass, Feather, Image as ImageIcon, BookOpen, Bot, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const links = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/species', label: 'Species Guide', icon: Feather },
  { href: '/guides', label: 'Birding Guides', icon: BookOpen },
  { href: '/spots', label: 'Best Spots', icon: Compass },
  { href: '/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/identify', label: 'AI Identifier', icon: Bot },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <Logo />
          <SidebarTrigger />
        </div>
        <div className="relative">
          <SidebarInput placeholder="Search..." />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {links.map((link) => (
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
      <SidebarFooter>
        <div className="flex items-center gap-3 rounded-md p-2 bg-muted/50">
           <Avatar className="h-9 w-9">
              <AvatarImage src="https://placehold.co/40x40.png" alt="User Avatar" />
              <AvatarFallback>AO</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-sm">
                <span className="font-semibold">Enthusiast</span>
                <span className="text-muted-foreground">Guest User</span>
            </div>
        </div>
      </SidebarFooter>
    </>
  );
}
