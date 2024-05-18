type ArticleGame = 'diablo-4' | 'last-epoch'

interface Article {
  game: ArticleGame
  title: string
  publishedAt: Date
  slug: string
  image: string
}
