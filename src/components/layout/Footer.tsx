import Link from "next/link";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";

import { Container } from "@/components/ui/Container";
import type { ContactInfo } from "@/types/contact";

interface FooterProps {
  contacts: ContactInfo;
}

export function Footer({ contacts }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">Greenwich English School</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-600">
              Премиальная школа английского языка для тех, кто ценит качество,
              персональный подход и измеримый результат.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
              Контакты
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              {contacts.phone ? (
                <li>
                  <a href={`tel:${contacts.phone.replace(/\s/g, "")}`} className="hover:text-neutral-900">
                    {contacts.phone}
                  </a>
                </li>
              ) : null}
              {contacts.email ? (
                <li>
                  <a href={`mailto:${contacts.email}`} className="hover:text-neutral-900">
                    {contacts.email}
                  </a>
                </li>
              ) : null}
              {contacts.address ? <li>{contacts.address}</li> : null}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
              Социальные сети
            </h4>
            <div className="mt-4 flex items-center gap-4">
              {contacts.instagram ? (
                <Link
                  href={contacts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-neutral-600 hover:text-accent"
                >
                  <FaInstagram className="h-5 w-5" />
                </Link>
              ) : null}
              {contacts.telegram ? (
                <Link
                  href={contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="text-neutral-600 hover:text-accent"
                >
                  <FaTelegram className="h-5 w-5" />
                </Link>
              ) : null}
              {contacts.whatsapp ? (
                <Link
                  href={contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-neutral-600 hover:text-accent"
                >
                  <FaWhatsapp className="h-5 w-5" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8 text-sm text-neutral-500">
          © {year} Greenwich. Все права защищены.
        </div>
      </Container>
    </footer>
  );
}
