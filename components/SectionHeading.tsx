export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-ink">
        {title}
      </h2>
    </div>
  );
}