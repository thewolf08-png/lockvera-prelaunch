import type { CoverType } from "../../data/blog-posts";
import { CoverGraphic } from "./CoverGraphic";

type ArticleInlineVisualProps = {
  coverType: CoverType;
};

export function ArticleInlineVisual({ coverType }: ArticleInlineVisualProps) {
  return (
    <div className="article-inline-visual" aria-hidden="true">
      <CoverGraphic type={coverType} />
    </div>
  );
}
