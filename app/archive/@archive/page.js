import { getAvailableNewsYears } from "@/lib/news.js"
import Link from "next/link.js"

export default function ArchivePage() {
  const links = getAvailableNewsYears()

  return (
    <header id='archive-header'>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
