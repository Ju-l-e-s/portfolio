"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  multiline?: boolean;
}

export function FloatingLabelInput({ label, name, multiline = false, ...props }: FloatingLabelInputProps) {
  const id = useId();
  const sharedProps = {
    id,
    name,
    className: cn(
      "peer block w-full appearance-none rounded-md border border-line bg-transparent px-4 py-3 text-text outline-none transition focus:border-accent-a focus:ring-1 focus:ring-accent-a",
      multiline ? "min-h-[120px]" : ""
    ),
    placeholder: " ", // Important for the :placeholder-shown selector to work
    ...props,
  };

  return (
    <div className="relative">
      {multiline ? (
        <textarea {...sharedProps} />
      ) : (
        <input {...sharedProps} />
      )}
      <label
        htmlFor={id}
        className="absolute top-3 left-4 origin-[0] -translate-y-7 scale-75 transform text-sm text-muted duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-accent-a"
      >
        {label}
      </label>
    </div>
  );
}
