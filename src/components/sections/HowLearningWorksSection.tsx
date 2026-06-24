import {
  BookOpen,
  ClipboardCheck,
  Globe,
  GraduationCap,
  MessageCircle,
  Monitor,
  Users,
} from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface HowLearningWorksSectionProps {
  title: string;
}

const steps = [
  {
    title: "Определение уровня",
    description: "Точная диагностика знаний и целей обучения.",
    icon: ClipboardCheck,
  },
  {
    title: "Подбор программы",
    description: "Индивидуальный маршрут под ваши задачи и сроки.",
    icon: BookOpen,
  },
  {
    title: "Обучение",
    description: "Структурированные занятия с акцентом на практику.",
    icon: GraduationCap,
  },
  {
    title: "Разговорная практика",
    description: "Регулярные speaking-сессии для уверенной речи.",
    icon: MessageCircle,
  },
  {
    title: "Контроль прогресса",
    description: "Промежуточные проверки и корректировка программы.",
    icon: Users,
  },
];

const formats = [
  { label: "Онлайн обучение", icon: Monitor },
  { label: "Офлайн обучение", icon: Globe },
  { label: "Подготовка к IELTS", icon: BookOpen },
  { label: "Подготовка к экзаменам", icon: ClipboardCheck },
  { label: "Разговорный английский", icon: MessageCircle },
];

export function HowLearningWorksSection({ title }: HowLearningWorksSectionProps) {
  return (
    <section id="how-it-works" className="bg-zinc-50/50 py-24 lg:py-32 border-y border-zinc-100">
      <Container>
        <SectionHeading
          title={title}
          subtitle="Прозрачный процесс обучения от первого занятия до достижения вашей цели."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="flex flex-col gap-5 p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm transition-all hover:shadow-md hover:border-zinc-200/80 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Шаг {index + 1}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-zinc-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {formats.map((format) => {
            const Icon = format.icon;
            return (
              <div
                key={format.label}
                className="flex items-center gap-3 rounded-xl border border-zinc-200/80 bg-white px-4 py-3.5 shadow-sm transition-all hover:bg-zinc-50 hover:border-zinc-300"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-zinc-800 tracking-tight">{format.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}