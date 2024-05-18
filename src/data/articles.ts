const diabloArticles: Article[] = [
  {
    game: 'diablo-4',
    title: 'Sorcier - Orbe Gelée',
    publishedAt: new Date('2024-05-17'),
    slug: 'sorcier-orbe-gelee',
    image: 'https://talion.tv/wp-content/uploads/2024/05/SORCIER-orbe-gele.jpg',
  },
  {
    game: 'diablo-4',
    title: 'Barbare - Charge Marteau Des Anciens',
    publishedAt: new Date('2024-05-12'),
    slug: 'barbare-charge-marteau-des-anciens',
    image: 'https://talion.tv/wp-content/uploads/2024/03/Barbare-marteau.jpg',
  },
  {
    game: 'diablo-4',
    title: 'Druide – Loup Orage',
    publishedAt: new Date('2024-05-17'),
    slug: 'druide-loup-orage',
    image: 'https://talion.tv/wp-content/uploads/2024/03/DRUIDE-loup-orage.jpg',
  },
]

const lastEpochArticles: Article[] = [
  {
    game: 'last-epoch',
    title: 'Tireuse D’élite – Flèche Explosive',
    publishedAt: new Date('2024-03-27'),
    slug: 'tireuse-elite-fleche-explosive',
    image:
      'https://talion.tv/wp-content/uploads/2024/03/tireuse-delite-fleche-explosives.jpg',
  },
  {
    game: 'last-epoch',
    title: 'Danselame – Dagues D’ombre',
    publishedAt: new Date('2024-03-20'),
    slug: 'danselame-dagues-ombre',
    image:
      'https://talion.tv/wp-content/uploads/2024/03/LE-danselame-dagues-dombre.jpg',
  },
  {
    game: 'last-epoch',
    title: 'Chevalier Du Néant – Tourbillon',
    publishedAt: new Date('2024-03-16'),
    slug: 'chevalier-neant-tourbillon',
    image:
      'https://talion.tv/wp-content/uploads/2024/03/LE-chevalier-du-neant-tourbillon-contour-blanc.jpg',
  },
]

export const articles: Article[] = [...diabloArticles, ...lastEpochArticles]
