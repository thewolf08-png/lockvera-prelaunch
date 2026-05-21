"use client";

import type { MouseEvent } from "react";
import type { Topic, TopicSlug } from "../../data/blog-topics";

type SidebarProps = {
  topics: readonly Topic[];
  activeTopicSlug: TopicSlug;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
  onTopicChange: (topicSlug: TopicSlug) => void;
  getTopicHref: (topicSlug: TopicSlug) => string;
};

export function Sidebar({
  topics,
  activeTopicSlug,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  onTopicChange,
  getTopicHref,
}: SidebarProps) {
  const handleTopicClick = (event: MouseEvent<HTMLAnchorElement>, topicSlug: TopicSlug) => {
    event.preventDefault();
    onTopicChange(topicSlug);
  };

  return (
    <aside className="sidebar" aria-label="Themen">
      <div className="sidebar__hero">
        <div className="sidebar__eyebrow">LockVera</div>
        <h1 className="sidebar__title">
          Insights
        </h1>
        <p className="sidebar__lede">
          <span className="sidebar__lede-desktop">
            Fachliche Beiträge zu Dokumentenkontrolle, Compliance und Sicherheit — direkt vom LockVera-Team.
          </span>
          <span className="sidebar__lede-mobile">
            Einblicke, die Dokumentenarbeit verständlicher machen.
          </span>
        </p>
      </div>

      <div className="sidebar__search-panel">
        <h2 className="sidebar__panel-title">Blogsuche</h2>
        <form
          className="sidebar__search"
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            onSearchSubmit();
          }}
        >
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
          <button className="sidebar__search-submit" type="submit">
            Suchen
          </button>
        </form>

        {searchQuery.trim() ? (
          <div className="sidebar__mobile-search-state" role="status">
            <span>Suche: {searchQuery.trim()}</span>
            <button type="button" onClick={() => onSearchChange("")}>
              Zurücksetzen
            </button>
          </div>
        ) : null}
      </div>

      <div className="sidebar__divider" role="presentation" />

      <div className="sidebar__category-panel">
        <div className="sidebar__section-label">Kategorien</div>
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
      </div>
    </aside>
  );
}
