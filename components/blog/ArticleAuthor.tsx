export function ArticleAuthor() {
  return (
    <div className="article-author">
      <span className="article-author__avatar" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M5.5 19c1.2-3.4 3.4-5.1 6.5-5.1s5.3 1.7 6.5 5.1"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span>David Wolf · Gründer, LockVera</span>
    </div>
  );
}
