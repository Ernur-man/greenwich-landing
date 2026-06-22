import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({
  label,
  error,
  className,
  id,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={textareaId} className="text-sm font-medium text-neutral-700">
        {label}
      </label>
      <textarea
        id={textareaId}
        className={cn(
          "min-h-32 w-full resize-y rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-accent",
          error && "border-red-500",
          className,
        )}
        {...props}
      />
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
