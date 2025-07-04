import { DUMMY_NEWS } from "@/dummy-news.js"
import { notFound } from "next/navigation.js"

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug)

  if (!newsItem) {
    notFound()
  }
  return (
    <article className='news-article'>
      <header>
        <h1>{newsItem.title}</h1>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}
