/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) return null;

  return (
    <img
      src={src}
      alt={alt}
      className="h-44 w-full object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const hasMedia = Boolean(video || image);

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/20",
        className,
      )}
    >
      {hasMedia && (
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block shrink-0"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-44 w-full object-cover"
            />
          ) : (
            <ProjectImage src={image || ""} alt={title} />
          )}
        </Link>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold leading-tight">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="prose max-w-full flex-1 text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge
              key={tag}
              className="h-6 w-fit border border-border px-2 text-[11px] font-medium"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
        {links && links.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-2 border-t pt-3">
            {links.map((link) => (
              <Link
                href={link.href}
                key={`${title}-${link.type}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge className="flex items-center gap-1.5 text-xs">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
