import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { type BlogPost, type BlogPostDetail, isCoverType } from "../data/blog-posts";
import { getArticleTopicBySlug, isArticleTopicSlug } from "../data/blog-topics";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const MDX_EXTENSION = ".mdx";

type Frontmatter = {
  title: string;
  slug: string;
  topicSlug: BlogPost["topicSlug"];
  teaser: string;
  publishedAt: string;
  readingTime: string;
  coverType: BlogPost["coverType"];
  ctaText: string;
  published: boolean;
};

type RawFrontmatter = Record<string, unknown>;

function getContentFiles() {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((fileName) => fileName.endsWith(MDX_EXTENSION) && !fileName.startsWith("_"))
    .sort();
}

function getStringField(frontmatter: RawFrontmatter, field: keyof Frontmatter, fileName: string) {
  const value = frontmatter[field];

  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Invalid or missing frontmatter field "${field}" in ${fileName}`);
  }

  return value.trim();
}

function getBooleanField(frontmatter: RawFrontmatter, field: keyof Frontmatter, fileName: string) {
  const value = frontmatter[field];

  if (typeof value !== "boolean") {
    throw new Error(`Invalid or missing frontmatter field "${field}" in ${fileName}`);
  }

  return value;
}

function validateDate(value: string, fileName: string) {
  const timestamp = Date.parse(value);

  if (Number.isNaN(timestamp)) {
    throw new Error(`Invalid frontmatter date "publishedAt" in ${fileName}`);
  }

  return value;
}

function formatDisplayDate(value: string) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function validateFrontmatter(rawFrontmatter: RawFrontmatter, fileName: string): Frontmatter {
  const fileSlug = fileName.slice(0, -MDX_EXTENSION.length);
  const title = getStringField(rawFrontmatter, "title", fileName);
  const slug = getStringField(rawFrontmatter, "slug", fileName);
  const topicSlug = getStringField(rawFrontmatter, "topicSlug", fileName);
  const teaser = getStringField(rawFrontmatter, "teaser", fileName);
  const publishedAt = validateDate(getStringField(rawFrontmatter, "publishedAt", fileName), fileName);
  const readingTime = getStringField(rawFrontmatter, "readingTime", fileName);
  const coverType = getStringField(rawFrontmatter, "coverType", fileName);
  const ctaText = getStringField(rawFrontmatter, "ctaText", fileName);
  const published = getBooleanField(rawFrontmatter, "published", fileName);

  if (slug !== fileSlug) {
    throw new Error(`Frontmatter slug "${slug}" must match file name "${fileSlug}" in ${fileName}`);
  }

  if (!isArticleTopicSlug(topicSlug)) {
    throw new Error(`Invalid article topicSlug "${topicSlug}" in ${fileName}; "alle" is only a UI reset value`);
  }

  if (!isCoverType(coverType)) {
    throw new Error(`Invalid coverType "${coverType}" in ${fileName}`);
  }

  return {
    title,
    slug,
    topicSlug,
    teaser,
    publishedAt,
    readingTime,
    coverType,
    ctaText,
    published,
  };
}

function readPost(fileName: string): BlogPostDetail & { published: boolean } {
  const filePath = path.join(CONTENT_DIR, fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const frontmatter = validateFrontmatter(data, fileName);
  const topic = getArticleTopicBySlug(frontmatter.topicSlug);

  return {
    slug: frontmatter.slug,
    topic: topic.label,
    topicSlug: frontmatter.topicSlug,
    title: frontmatter.title,
    teaser: frontmatter.teaser,
    date: formatDisplayDate(frontmatter.publishedAt),
    publishedAt: frontmatter.publishedAt,
    readingTime: frontmatter.readingTime,
    coverType: frontmatter.coverType,
    ctaText: frontmatter.ctaText,
    content,
    published: frontmatter.published,
  };
}

function sortByPublishedAtDesc<T extends Pick<BlogPostDetail, "publishedAt">>(posts: T[]) {
  return [...posts].sort((first, second) => Date.parse(second.publishedAt) - Date.parse(first.publishedAt));
}

export function getAllPosts(): BlogPost[] {
  return sortByPublishedAtDesc(
    getContentFiles()
      .map(readPost)
      .filter((post) => post.published),
  ).map(({ content: _content, published: _published, ...post }) => post);
}

export function getAllPostDetails() {
  return sortByPublishedAtDesc(
    getContentFiles()
      .map(readPost)
      .filter((post) => post.published),
  );
}

export function getPostBySlug(slug: string) {
  return getAllPostDetails().find((post) => post.slug === slug);
}
