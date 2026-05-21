"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "../../data/blog-posts";
import type { Topic, TopicSlug } from "../../data/blog-topics";
import { BlogGrid } from "./BlogGrid";
import { Sidebar } from "./Sidebar";

type InsightsOverviewProps = {
  posts: BlogPost[];
  topics: readonly Topic[];
  initialQuery: string;
  initialTopicSlug: TopicSlug;
};

const STOPWORDS = new Set([
  "und",
  "oder",
  "der",
  "die",
  "das",
  "ein",
  "eine",
  "mit",
  "für",
  "wie",
  "was",
  "von",
  "zu",
  "im",
  "in",
]);

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ").toLocaleLowerCase("de-DE");
}

function getEffectiveQuery(value: string) {
  const normalizedQuery = normalize(value);

  if (normalizedQuery.length < 3) return "";
  if (STOPWORDS.has(normalizedQuery)) return "";

  return normalizedQuery;
}

function createOverviewHref(query: string, topicSlug: TopicSlug) {
  const params = new URLSearchParams();
  const normalizedQuery = query.trim();

  if (topicSlug !== "alle") params.set("topic", topicSlug);
  if (normalizedQuery) params.set("q", normalizedQuery);

  const queryString = params.toString();
  return queryString ? `/blog?${queryString}` : "/blog";
}

function getEmptyStateCopy({
  activeTopicLabel,
  activeTopicSlug,
  hasPosts,
  hasEffectiveQuery,
}: {
  activeTopicLabel: string;
  activeTopicSlug: TopicSlug;
  hasPosts: boolean;
  hasEffectiveQuery: boolean;
}) {
  if (!hasPosts && activeTopicSlug === "alle") {
    return {
      title: "Noch keine Beiträge veröffentlicht",
      text: "Die ersten Artikel erscheinen bald.",
    };
  }

  if (!hasPosts) {
    return {
      title: `Noch keine Beiträge im Bereich ${activeTopicLabel}`,
      text: "Die ersten Artikel in diesem Bereich erscheinen bald.",
    };
  }

  if (!hasEffectiveQuery && activeTopicSlug !== "alle") {
    return {
      title: `Keine Beiträge im Bereich ${activeTopicLabel}`,
      text: "Für dieses Thema sind aktuell keine Beiträge veröffentlicht.",
    };
  }

  return {
    title: "Keine passenden Beiträge gefunden",
    text: "Passe Suche oder Thema an, um wieder Beiträge anzuzeigen.",
  };
}

export function InsightsOverview({ posts, topics, initialQuery, initialTopicSlug }: InsightsOverviewProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeTopicSlug, setActiveTopicSlug] = useState<TopicSlug>(initialTopicSlug);

  const updateUrl = (nextQuery: string, nextTopicSlug: TopicSlug) => {
    if (typeof window === "undefined") return;
    window.history.replaceState(null, "", createOverviewHref(nextQuery, nextTopicSlug));
  };

  const effectiveQuery = getEffectiveQuery(searchQuery);
  const activeTopic = topics.find((topic) => topic.slug === activeTopicSlug);
  const emptyStateCopy = getEmptyStateCopy({
    activeTopicLabel: activeTopic?.label ?? "diesem Thema",
    activeTopicSlug,
    hasPosts: posts.length > 0,
    hasEffectiveQuery: Boolean(effectiveQuery),
  });

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTopic = activeTopicSlug === "alle" || post.topicSlug === activeTopicSlug;
      const matchesQuery =
        !effectiveQuery || [post.title, post.topic].some((value) => normalize(value).includes(effectiveQuery));

      return matchesTopic && matchesQuery;
    });
  }, [activeTopicSlug, effectiveQuery, posts]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    updateUrl(value, activeTopicSlug);
  };

  const handleTopicChange = (topicSlug: TopicSlug) => {
    setActiveTopicSlug(topicSlug);
    updateUrl(searchQuery, topicSlug);
  };

  return (
    <div className="container layout">
      <Sidebar
        topics={topics}
        activeTopicSlug={activeTopicSlug}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchSubmit={() => updateUrl(searchQuery, activeTopicSlug)}
        onTopicChange={handleTopicChange}
        getTopicHref={(topicSlug) => createOverviewHref(searchQuery, topicSlug)}
      />
      <section className="content" aria-label="Beiträge">
        <BlogGrid posts={filteredPosts} emptyTitle={emptyStateCopy.title} emptyText={emptyStateCopy.text} />
      </section>
    </div>
  );
}
