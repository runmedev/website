import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function DarkContentSection({ title, children }: SectionProps): React.ReactElement {
  return (
    <div className="flex flex-col py-3 space-y-4">
      <h2 className="text-3xl font-medium text-center">{title}</h2>
      <div className="text-neutral-300">{children}</div>
    </div>
  );
}

export function ContentSection({ title, children }: SectionProps): React.ReactElement {
  return (
    <div className="flex flex-col py-3 space-y-2">
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="text-neutral-600">{children}</div>
    </div>
  );
}

export function SubContentSection({ title, children }: SectionProps): React.ReactElement {
  return (
    <div className="flex flex-col py-3 space-y-2">
      <h2 className="text-xl font-medium">{title}</h2>
      <div className="text-neutral-600">{children}</div>
    </div>
  );
}
