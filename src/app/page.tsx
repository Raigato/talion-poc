import ArticlesSection from '@/components/HomePage/ArticlesSection'
import VideoSection from '@/components/HomePage/VideoSection'

const HomePage = () => {
  return (
    <main className="container mx-auto flex flex-col gap-16 px-4 py-8">
      <ArticlesSection game="diablo-4" />
      <ArticlesSection game="last-epoch" />
      <VideoSection />
    </main>
  )
}

export default HomePage
