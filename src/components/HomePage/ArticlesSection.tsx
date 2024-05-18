import { articles } from '@/data/articles'
import ArticleThumbnail from './ArticleThumbnail'
import SectionTitle from './SectionTitle'

const MAX_ARTICLES = 3

const GAME_NAME: Record<ArticleGame, string> = {
  'diablo-4': 'Diablo IV',
  'last-epoch': 'Last Epoch',
}

interface Props {
  game: ArticleGame
}

const ArticlesSection = ({ game }: Props) => {
  const filteredArticles = articles
    .filter((article) => article.game === game)
    .slice(0, MAX_ARTICLES)

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle>Dernier Articles - {GAME_NAME[game]}</SectionTitle>
      <ul className="grid gap-4 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <li key={article.slug}>
            <ArticleThumbnail article={article} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticlesSection
