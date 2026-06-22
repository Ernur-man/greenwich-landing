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
    <section id="how-it-works" className="bg-neutral-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          title={title}
          subtitle="Прозрачный процесс обучения от первого занятия до достижения вашей цели."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="flex flex-col gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                    Шаг {index + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {formats.map((format) => {
            const Icon = format.icon;
            return (
              <div
                key={format.label}
                className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-sm"
              >
                <Icon className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-neutral-800">{format.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
