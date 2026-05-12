export const topics = [
  { label: "Alle", slug: "alle" },
  { label: "Compliance", slug: "compliance" },
  { label: "Sicherheit", slug: "sicherheit" },
  { label: "Architektur", slug: "architektur" },
  { label: "Guides", slug: "guides" },
  { label: "Integrationen", slug: "integrationen" },
  { label: "Praxisberichte", slug: "praxisberichte" },
  { label: "Workflows", slug: "workflows" },
] as const;

export const articleTopicSlugs = [
  "compliance",
  "sicherheit",
  "architektur",
  "guides",
  "integrationen",
  "praxisberichte",
  "workflows",
] as const;

export type Topic = (typeof topics)[number];
export type TopicSlug = Topic["slug"];
export type ArticleTopicSlug = (typeof articleTopicSlugs)[number];
export type ArticleTopic = Extract<Topic, { slug: ArticleTopicSlug }>;

export function isArticleTopicSlug(value: unknown): value is ArticleTopicSlug {
  return typeof value === "string" && articleTopicSlugs.includes(value as ArticleTopicSlug);
}

export function getTopicBySlug(slug: TopicSlug) {
  return topics.find((topic) => topic.slug === slug);
}

export function getArticleTopicBySlug(slug: ArticleTopicSlug): ArticleTopic {
  const topic = topics.find((item) => item.slug === slug) as ArticleTopic | undefined;

  if (!topic) {
    throw new Error(`Unknown article topic slug: ${slug}`);
  }

  return topic;
}
