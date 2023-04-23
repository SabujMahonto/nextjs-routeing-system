import { useRouter } from "next/router"


export default function ProductDetails() {
    const {query:{productId}} = useRouter()
  return (
    <div><h1>ProductDetails : {productId}</h1></div>
  )
}
