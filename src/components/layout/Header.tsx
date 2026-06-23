"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";

const navLinks = [
  { href: "#how-it-works", label: "Обучение" },
  { href: "#teachers", label: "Преподаватели" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#pricing", label: "Тарифы" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Keenfort">
          <Image
            src="/keenfort_logo.svg"
            alt="Keenfort"
            width={140}
            height={36}
            priority
            unoptimized
            style={{ width: 'auto', height: '36px' }}
          />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Основная навигация"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#application"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-dark"
          >
            Записаться
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-700 md:hidden"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <div
        className={cn(
          "border-t border-neutral-200 bg-white md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-neutral-700"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#application"
            className="rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-white"
            onClick={() => setIsOpen(false)}
          >
            Записаться
          </Link>
        </Container>
      </div>
    </header>
  );
}
