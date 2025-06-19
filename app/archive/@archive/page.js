import { getAvailableNewsYears } from "@/lib/news.js"

export default function ArchivePage() {
  const links = getAvailableNewsYears()

  return (
    <header id='archive-header'>
      <nav>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  )
}
