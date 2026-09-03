import { DATA } from "@/data/resume";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="rounded-xl border bg-card p-7 sm:p-9">
      <div className="flex flex-col items-start gap-4">
        <div>
          <p className="mb-2 text-sm font-medium text-muted-foreground">
            Summer 2027
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let&apos;s work together.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          I&apos;m interested in software engineering, ML infrastructure, and AI
          systems internships. The best way to reach me is by email.
        </p>
        <Link
          href={`mailto:${DATA.contact.email}`}
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Mail className="size-4" aria-hidden />
          {DATA.contact.email}
        </Link>
      </div>
    </div>
  );
}
