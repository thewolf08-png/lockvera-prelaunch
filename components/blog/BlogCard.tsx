import type { BlogPost } from "../../data/blog-posts";
import { CoverGraphic } from "./CoverGraphic";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const href = `/blog/${post.slug}`;

  return (
    <article className="card">
      <a className="card__cover-link" href={href} aria-label={`Beitrag öffnen: ${post.title}`}>
        <CoverGraphic type={post.coverType} />
      </a>
      <span className="card__topic">{post.topic}</span>
      <h3 className="card__title">
        <a className="card__title-link" href={href}>
          {post.title}
        </a>
      </h3>
      <p className="card__teaser">{post.teaser}</p>
      <div className="card__meta">
        <span>{post.date}</span>
        <span className="card__meta-dot" />
        <span>{post.readingTime}</span>
      </div>
    </article>
  );
}
