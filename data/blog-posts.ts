import type { ArticleTopicSlug } from "./blog-topics";

export const coverTypes = ["trail", "grid", "bars", "shield", "stack", "connect", "quote", "wash"] as const;

export type CoverType = (typeof coverTypes)[number];

export type BlogPost = {
  slug: string;
  topic: string;
  topicSlug: ArticleTopicSlug;
  title: string;
  teaser: string;
  date: string;
  publishedAt: string;
  readingTime: string;
  coverType: CoverType;
  ctaText: string;
};

export type BlogPostDetail = BlogPost & {
  content: string;
};

export function isCoverType(value: unknown): value is CoverType {
  return typeof value === "string" && coverTypes.includes(value as CoverType);
}
