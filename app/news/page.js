import { DUMMY_NEWS } from "@/dummy-news.js"
import NewsList from "@/components/news-list.js"

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  )
}
