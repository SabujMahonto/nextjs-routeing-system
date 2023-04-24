import { loadGetInitialProps } from "next/dist/shared/lib/utils"
import { useRouter } from "next/router"


export default function ProductDetails() {
 const handleOrder = ()=>{
  console.log("Order pleased success");
  router.push("/products")
 }
 const router = useRouter();
const {productId} = router.query;
  return ( 
    <div>
      <h1>ProductDetails : {productId}</h1>
      <button onClick={handleOrder} >Place Order</button>
    </div>
  )
}
