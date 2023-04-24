import Link from "next/link";


export default function ProductList({productId = 99}) {
  return (
    <div>
        <h1>ProductList</h1>
        <Link href="/">Backt to Home</Link>
        <ul>
            <li><Link href="/products/1">Product 1</Link></li>
            <li><Link href="/products/2">Product 2</Link></li>
            <li><Link href="/products/3">Product 3</Link></li>
            <li><Link href="/products/4">Product 4</Link></li>
            <li><Link href="/products/5">Product 5</Link></li>
            <li><Link href={`/products/${productId}`}>Product {productId}</Link></li>
        </ul>
    </div>
  )
}
