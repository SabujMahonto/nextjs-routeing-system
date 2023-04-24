import Link from "next/link";

export default function HomePage() {
  return (
    <div><h1>HomePage</h1>
    <ul>
      <li><Link href="/products">Product Page</Link></li>
      <li><Link href="/blog">Blog Page</Link></li>
      <li><Link href="/library">Library</Link></li>
    </ul>
    </div>
  )
}
