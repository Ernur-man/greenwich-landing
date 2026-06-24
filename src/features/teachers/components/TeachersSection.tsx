import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeacherCard } from "@/features/teachers/components/TeacherCard";
import type { Teacher } from "@/types/teacher";

interface TeachersSectionProps {
  title: string;
  teachers: Teacher[];
}

export function TeachersSection({ title, teachers }: TeachersSectionProps) {
  return (
    <section id="teachers" className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          title={title}
          subtitle="Команда экспертов с международным опытом и персональным подходом к каждому студенту."
        />

        {teachers.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/30 p-12 text-center">
            <p className="text-sm font-medium text-zinc-500 tracking-tight">
              Информация о преподавателях скоро появится.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}