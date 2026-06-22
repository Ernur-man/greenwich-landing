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
    <section id="teachers" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          title={title}
          subtitle="Команда экспертов с международным опытом и персональным подходом к каждому студенту."
        />

        {teachers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        ) : (
          <p className="text-center text-neutral-500">
            Информация о преподавателях скоро появится.
          </p>
        )}
      </Container>
    </section>
  );
}
