import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useSelector } from "react-redux";


export const Cart = () => {
    useTitle("Cart");
    const cartList = useSelector(state => state.cart.cartList);  
    const total = useSelector(state => state.cart.total);
  return (
    <main>
        <section className="flex flex-wrap justify-center items-center p-4">
            <h1 className="text-2xl font-bold mb-4 ">Your Cart : {cartList.length} / ${total}</h1>
            {
                cartList.map((product) => (
                    <CartCard key={product.id} product={product} />
                ))
            }
        </section>
    </main>
  )
}
