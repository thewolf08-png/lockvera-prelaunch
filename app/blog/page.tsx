import type { Metadata } from "next";
import { Footer } from "../../components/blog/Footer";
import { InsightsOverview } from "../../components/blog/InsightsOverview";
import { Topbar } from "../../components/blog/Topbar";
import { getAllPosts } from "../../lib/blog-content";
import { topics, type TopicSlug } from "../../data/blog-topics";

type HomeProps = {
  searchParams?: Promise<{
    q?: string;
    topic?: string;
  }>;
};

function getInitialTopicSlug(value: string | undefined): TopicSlug {
  const topic = topics.find((item) => item.slug === value);
  return topic?.slug ?? "alle";
}

export const metadata: Metadata = {
  title: "LockVera Blog — Fachbeiträge zu Compliance, Sicherheit und Dokumentenkontrolle",
  description: "Fachliche Beiträge zu Dokumentenkontrolle, Compliance, Sicherheit und Architektur vom LockVera-Team.",
  robots: { index: true, follow: true },
};

export const runtime = "nodejs";

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const posts = getAllPosts();
  const initialQuery = typeof params?.q === "string" ? params.q : "";
  const initialTopicSlug = getInitialTopicSlug(params?.topic);

  return (
    <div className="page">
      <Topbar />
      <main className="main">
        <InsightsOverview
          posts={posts}
          topics={topics}
          initialQuery={initialQuery}
          initialTopicSlug={initialTopicSlug}
        />
      </main>
      <Footer />
    </div>
  );
}
