import { ReactNode } from "react";

interface CardProps {
  title: string;
  value?: ReactNode;
  unit?: string;
  content?: ReactNode;
  children?: ReactNode; // Allow children as a fallback
}

export function Card({ title, value, unit, content, children }: CardProps) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {value && (
        <div className="text-3xl font-bold">
          {value}
          {unit && <span className="text-base font-normal text-gray-500 ml-1">{unit}</span>}
        </div>
      )}
      {content && <div className="text-gray-500 mt-2">{content}</div>}
      {children}
    </div>
  );
}
