export default function NewsDetailPage({ params }) {
  console.log(params)
  const newsId = params.id
  return (
    <>
      <h1>Nes Detail Page</h1>
      <p>News ID: {newsId}</p>
    </>
  )
}
