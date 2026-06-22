import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const benefits = [
  "Индивидуальные программы под ваши цели",
  "Преподаватели с международным опытом",
  "Гибкий график: онлайн и офлайн",
  "Контроль прогресса на каждом этапе",
];

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Keenfort English School
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
              {subtitle}
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a href="#application">
                <Button size="lg">Записаться на обучение</Button>
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100 shadow-sm">
            <Image
              src="https://astarequivalency.co.uk/app/uploads/2022/06/Product-images-03_1.jpg"
              alt="Обучение английскому языку в Keenfort"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
