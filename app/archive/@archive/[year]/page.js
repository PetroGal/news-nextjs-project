import NewsList from "@/components/news-list.js"
import { getNewsForYear } from "@/lib/news.js"

export default function FilteredNewsPage({ params }) {
  const newYear = params.year
  const news = getNewsForYear(newYear)
  return <NewsList news={news} />
}
