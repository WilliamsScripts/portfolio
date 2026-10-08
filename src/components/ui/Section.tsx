export default function Section({
  id,
  title,
  aside,
  children,
}: {
  id: string;
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {aside}
        </div>
        {children}
      </div>
    </section>
  );
}
