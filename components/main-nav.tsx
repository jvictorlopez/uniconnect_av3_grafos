"use client"

import { Bell, Home, MessageSquare, Search, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center mr-4">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="UniConnect Logo" width={32} height={32} />
            <span className="hidden font-bold sm:inline-block text-unifor-blue">UniConnect</span>
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-2">
          <div className="w-full max-w-md relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Pesquisar pessoas, grupos ou eventos..." className="pl-8 w-full" />
          </div>
        </div>

        <nav className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard" className={cn(pathname === "/dashboard" ? "bg-accent" : "")}>
              <Home className="h-5 w-5" />
              <span className="sr-only">Início</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/rede" className={cn(pathname === "/rede" ? "bg-accent" : "")}>
              <Users className="h-5 w-5" />
              <span className="sr-only">Minha rede</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/mensagens" className={cn(pathname === "/mensagens" ? "bg-accent" : "")}>
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Mensagens</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/notificacoes" className={cn(pathname === "/notificacoes" ? "bg-accent" : "")}>
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notificações</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/perfil" className={cn(pathname === "/perfil" ? "bg-accent" : "")}>
              <User className="h-5 w-5" />
              <span className="sr-only">Perfil</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
