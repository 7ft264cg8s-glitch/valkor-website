import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  headerClassName = ""
}: SectionProps) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-6 lg:px-8 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {title ? (
          <div className={`mb-12 max-w-3xl ${headerClassName}`}>
            {eyebrow ? (
              <p className="mb-4 text-sm font-semibold uppercase text-valkor-orange">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl font-semibold leading-tight text-valkor-text sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-5 max-w-2xl text-base leading-7 text-valkor-muted sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
