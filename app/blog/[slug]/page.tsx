import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { ArticleAuthor } from "../../../components/blog/ArticleAuthor";
import { ArticleEndCta } from "../../../components/blog/ArticleEndCta";
import { ArticleInlineVisual } from "../../../components/blog/ArticleInlineVisual";
import { Footer } from "../../../components/blog/Footer";
import { Topbar } from "../../../components/blog/Topbar";
import { getAllPosts, getPostBySlug } from "../../../lib/blog-content";

export const runtime = "nodejs";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Beitrag nicht gefunden — LockVera Blog",
    };
  }

  return {
    title: `${post.title} — LockVera Blog`,
    description: post.teaser,
    robots: { index: true, follow: true },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const mdxComponents = {
    ArticleVisual: () => <ArticleInlineVisual coverType={post.coverType} />,
  };

  return (
    <div className="page">
      <Topbar />
      <main className="article-main">
        <article className="article-shell">
          <a className="article-back" href="/blog">
            ← Blog
          </a>

          <div className="article-hero">
            <span className="card__topic">{post.topic}</span>
            <h1>{post.title}</h1>
            <p>{post.teaser}</p>
            <div className="card__meta article-meta">
              <span>{post.date}</span>
              <span className="card__meta-dot" />
              <span>{post.readingTime}</span>
            </div>
            <ArticleAuthor />
          </div>

          <div className="article-body">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          <ArticleEndCta text={post.ctaText} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
