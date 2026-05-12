import type { BlogPost } from "../../data/blog-posts";
import { BlogCard } from "./BlogCard";

type BlogGridProps = {
  posts: BlogPost[];
  emptyTitle?: string;
  emptyText?: string;
};

export function BlogGrid({ posts, emptyTitle, emptyText }: BlogGridProps) {
  if (!posts.length) {
    return (
      <div className="empty-state" role="status">
        <h2>{emptyTitle ?? "Keine Beiträge gefunden"}</h2>
        <p>{emptyText ?? "Für diese Auswahl gibt es aktuell keine Beiträge."}</p>
      </div>
    );
  }

  return (
    <div className="grid">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
