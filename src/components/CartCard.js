import { useDispatch } from "react-redux";
import {remove} from "../store/cartSlice";

export const CartCard = ({product}) => {
  const dispatch = useDispatch();
    const {name, price, image} = product;
  return (
    <div className="flex flex-row justify-start bg-white shadow-md rounded-lg p-4 m-2 w-full">
        <img src={image} alt={name} className="w-40 h-20 object-cover" />
        <h2 className="text-lg font-semibold w-4/5 ml-5">{name}</h2>
        <p className="text-gray-600 font-semibold w-5/12">${price}</p>
        <button onClick={()=> dispatch(remove(product))} className="bg-red-500 h-10 font-semibold text-white py-2 px-4 align-middle rounded" >Remove</button>        
    </div>
  )
}
