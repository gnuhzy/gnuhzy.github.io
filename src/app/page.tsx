/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.025;

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-14">
      <section id="hero" aria-labelledby="page-title">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div className="order-2 flex flex-col gap-3 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <h1
                  id="page-title"
                  className="text-4xl font-semibold tracking-tighter sm:text-5xl"
                >
                  Hi, I&apos;m {DATA.preferredName}.
                </h1>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="max-w-[620px] text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {DATA.description}
                </p>
              </BlurFade>
            </div>
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="order-1 md:order-2"
            >
              <Avatar className="size-24 rounded-full border ring-4 ring-muted md:size-28">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <Link
                href={DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground"
              >
                <MapPin className="size-4" aria-hidden />
                {DATA.location}
              </Link>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4" aria-hidden />
                Expected Dec 2027
              </span>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="about" aria-labelledby="about-title">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 id="about-title" className="text-xl font-bold">
              About
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="impact" aria-labelledby="impact-title">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <h2 id="impact-title" className="mb-5 text-xl font-bold">
            Selected impact
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {DATA.highlights.map((highlight) => (
              <article
                key={highlight.label}
                className="rounded-xl border bg-card p-4"
              >
                <p className="text-2xl font-semibold tracking-tight">
                  {highlight.value}
                </p>
                <h3 className="mt-1 text-sm font-semibold">
                  {highlight.label}
                </h3>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">
                  {highlight.detail}
                </p>
              </article>
            ))}
          </div>
        </BlurFade>
      </section>

      <section id="work" aria-labelledby="work-title">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 id="work-title" className="text-xl font-bold">
              Experience
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <ProjectsSection />
      </BlurFade>

      <section id="education" aria-labelledby="education-title">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 id="education-title" className="text-xl font-bold">
              Education
            </h2>
          </BlurFade>
          <div className="flex flex-col gap-7">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 11 + index * 0.025}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-x-3">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt=""
                        className="size-10 flex-none rounded-full border object-contain p-1 ring-2 ring-border"
                      />
                    ) : (
                      <span className="flex size-10 flex-none items-center justify-center rounded-full border bg-muted text-[10px] font-semibold ring-2 ring-border">
                        {education.initials}
                      </span>
                    )}
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <div className="flex items-center gap-2 font-semibold leading-tight">
                        {education.school}
                        <ArrowUpRight
                          className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                          aria-hidden
                        />
                      </div>
                      <div className="text-sm leading-snug text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <time className="pl-13 text-xs tabular-nums text-muted-foreground sm:pl-0">
                    {education.start} – {education.end}
                  </time>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" aria-labelledby="skills-title">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 id="skills-title" className="text-xl font-bold">
              Skills
            </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, index) => (
              <BlurFade
                key={skill}
                delay={BLUR_FADE_DELAY * 13 + index * 0.015}
              >
                <span className="flex h-8 items-center rounded-lg border bg-background px-3 text-sm font-medium">
                  {skill}
                </span>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" aria-labelledby="awards-title">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <h2 id="awards-title" className="mb-4 text-xl font-bold">
            Honors
          </h2>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
            {DATA.awards.map((award) => (
              <li key={award} className="border-l-2 border-border pl-3">
                {award}
              </li>
            ))}
          </ul>
        </BlurFade>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
