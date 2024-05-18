import { formatTimestamp } from '@/utils/formatTimestamp'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  article: Article
}

const ArticleThumbnail = ({ article }: Props) => {
  const formattedTimestamp = formatTimestamp(article.publishedAt)

  return (
    <Link
      href={`/${article.game}/${article.slug}`}
      className="group relative block h-56 overflow-hidden rounded-lg shadow-lg"
      title="Lire l'article complet"
    >
      <Image
        src={article.image}
        alt={article.title}
        fill
        className="-z-10 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="flex h-full items-end">
        <div className="w-full bg-black/80 p-2 text-right">
          <h3 className="text-lg font-medium">{article.title}</h3>
          <div>
            <span className="sr-only">Publié:</span>
            {formattedTimestamp}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticleThumbnail
