import Image from "next/image";

import { Card } from "@/components/ui/Card";
import type { Teacher } from "@/types/teacher";

interface TeacherCardProps {
  teacher: Teacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-[4/5] bg-neutral-100">
        {teacher.photo && teacher.photo.startsWith('http') ? (
          <Image 
            src={teacher.photo} 
            alt={teacher.name} 
            fill 
            className="object-cover" 
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span>Нет фото</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-neutral-900">{teacher.name}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{teacher.experience}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
          {teacher.description}
        </p>
      </div>
    </Card>
  );
}
