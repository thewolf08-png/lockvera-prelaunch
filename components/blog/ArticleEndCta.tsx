type ArticleEndCtaProps = {
  text: string;
};

export function ArticleEndCta({ text }: ArticleEndCtaProps) {
  return (
    <div className="article-end-cta">
      <a href="/">{text}</a>
    </div>
  );
}
