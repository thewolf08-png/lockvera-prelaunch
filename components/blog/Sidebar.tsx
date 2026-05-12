"use client";

import type { MouseEvent } from "react";
import type { Topic, TopicSlug } from "../../data/blog-topics";

type SidebarProps = {
  topics: readonly Topic[];
  activeTopicSlug: TopicSlug;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onTopicChange: (topicSlug: TopicSlug) => void;
  getTopicHref: (topicSlug: TopicSlug) => string;
};

export function Sidebar({
  topics,
  activeTopicSlug,
  searchQuery,
  onSearchChange,
  onTopicChange,
  getTopicHref,
}: SidebarProps) {
  const handleTopicClick = (event: MouseEvent<HTMLAnchorElement>, topicSlug: TopicSlug) => {
    event.preventDefault();
    onTopicChange(topicSlug);
  };

  return (
    <aside className="sidebar" aria-label="Themen">
      <div className="sidebar__eyebrow">LockVera</div>
      <h1 className="sidebar__title">Insights</h1>
      <p className="sidebar__lede">
        Fachliche Beiträge zu Dokumentenkontrolle, Compliance und Sicherheit — direkt vom
        LockVera-Team.
      </p>

      <div className="sidebar__search" role="search">
        <svg
          className="sidebar__search-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="search"
          value={searchQuery}
          placeholder="Beiträge durchsuchen"
          aria-label="Beiträge durchsuchen"
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      {searchQuery.trim() ? (
        <div className="sidebar__mobile-search-state" role="status">
          <span>Suche: {searchQuery.trim()}</span>
          <button type="button" onClick={() => onSearchChange("")}>
            Zurücksetzen
          </button>
        </div>
      ) : null}

      <div className="sidebar__divider" role="presentation" />

      <div className="sidebar__section-label">Themen</div>
      <ul className="filters">
        {topics.map((topic) => (
          <li className="filters__item" key={topic.slug}>
            <a
              className={topic.slug === activeTopicSlug ? "is-active" : undefined}
              href={getTopicHref(topic.slug)}
              onClick={(event) => handleTopicClick(event, topic.slug)}
            >
              {topic.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
