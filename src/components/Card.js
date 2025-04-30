import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { useEffect, useState } from "react";


export const Card = ({product}) => {  
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cart.cartList);
    const {name, image, price} = product;
    const [isInCart, setIsInCart] = useState(false);
    

    useEffect(() => {   
        const cartItem = cartList.find((item) => item.id === product.id);
        if (cartItem) {
          setIsInCart(true);
        } else {
            setIsInCart(false);
        }
    },[product.id, cartList]);
  return (
    <div className="w-full my-8 mr-8 max-w-sm bg-white border border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
            <img className="p-2 rounded-t-lg" src={image} alt={name} />
        </Link>
        <div className="px-5 pb-5">
            <Link to="#">
                <h5 className="mb-6 text-md font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </Link>            
            <div className="flex items-center justify-between">
                <span className="text-xl text-gray-900 dark:text-white">${price}</span>
                { isInCart ?
                <button onClick={()=> dispatch(remove(product))} className="bg-red-500 h-10 font-semibold text-white py-2 px-4 align-middle rounded" >Remove</button> 
                : 
                <Link to="#" onClick={()=> dispatch(add(product))} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Add to cart</Link>                
                }
                
            </div>
        </div>
    </div>
  )
}
