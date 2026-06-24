import Image from "next/image";
import { User } from "lucide-react";

import { Card } from "@/components/ui/Card";
import type { Teacher } from "@/types/teacher";

interface TeacherCardProps {
  teacher: Teacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  const hasPhoto = teacher.photo && teacher.photo.startsWith('http');

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white p-0 shadow-sm transition-all hover:border-zinc-200/80 hover:shadow-md">
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-50 border-b border-zinc-100">
        {hasPhoto ? (
          <Image 
            src={teacher.photo} 
            alt={teacher.name} 
            fill 
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-103" 
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-50 text-zinc-400">
            <User className="h-8 w-8 stroke-[1.25]" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-600">
          {teacher.name}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          {teacher.experience}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
          {teacher.description}
        </p>
      </div>
    </Card>
  );
}