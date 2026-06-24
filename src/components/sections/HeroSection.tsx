import Image from "next/image";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
}

const benefits = [
  "Индивидуальные программы под ваши цели",
  "Преподаватели с международным опытом",
  "Гибкий график: онлайн и офлайн",
  "Контроль прогресса на каждом этапе",
];

export function HeroSection({ title, subtitle, image }: HeroSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium tracking-wider text-zinc-800 uppercase">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Greenwich English School
            </div>
            
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              {title}
            </h1>
            
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
              {subtitle}
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm font-medium text-zinc-700 bg-zinc-50/50 rounded-xl p-3 border border-zinc-100 shadow-sm transition-all hover:bg-zinc-50">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a href="#application">
                <Button size="lg" className="shadow-lg shadow-zinc-900/10 transition-transform active:scale-95">
                  Записаться на обучение
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-2xl ring-1 ring-zinc-900/5 order-first lg:order-last">
            <Image
              src={image}
              alt="Обучение английскому языку в Greenwich"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}