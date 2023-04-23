import { useRouter } from "next/router"


export default function orderDetail() {
    const {query:{productId,orderId}}=useRouter();
  return (
    <div>

        <h1>ProductId {productId}, OrderId {orderId}</h1>
        <h3>Order details Page</h3>
    </div>
  )
}
