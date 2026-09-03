/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

function LogoImage({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <span className="flex size-10 flex-none items-center justify-center rounded-full border bg-muted text-[10px] font-semibold ring-2 ring-border">
        {initials}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-10 flex-none rounded-full border object-contain p-1 ring-2 ring-border"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="grid w-full gap-6">
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="grid w-full gap-2 border-b-0"
        >
          <AccordionTrigger className="group cursor-pointer rounded-none p-0 text-left hover:no-underline [&>svg]:hidden">
            <div className="flex w-full flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
              <div className="flex min-w-0 flex-1 items-center gap-x-3">
                <LogoImage
                  src={work.logoUrl}
                  alt={work.company}
                  initials={work.initials}
                />
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex items-center gap-2 font-semibold leading-tight">
                    {work.company}
                    <span className="relative inline-flex size-3.5 shrink-0 items-center">
                      <ChevronRight
                        className={cn(
                          "absolute size-3.5 text-muted-foreground transition-all",
                          "opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0",
                        )}
                        aria-hidden
                      />
                      <ChevronDown
                        className={cn(
                          "absolute size-3.5 text-muted-foreground opacity-0 transition-all",
                          "group-data-[state=open]:rotate-180 group-data-[state=open]:opacity-100",
                        )}
                        aria-hidden
                      />
                    </span>
                  </div>
                  <div className="text-sm leading-snug text-muted-foreground">
                    {work.title} · {work.location}
                  </div>
                </div>
              </div>
              <time className="pl-13 text-xs tabular-nums text-muted-foreground sm:pl-0">
                {work.start} – {work.end}
              </time>
            </div>
          </AccordionTrigger>
          <AccordionContent className="ml-13 p-0 text-sm leading-relaxed text-muted-foreground">
            <ul className="list-disc space-y-2 pl-4">
              {work.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
