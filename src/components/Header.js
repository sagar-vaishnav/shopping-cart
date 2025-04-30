import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Header = () => {
    const activeClass = "text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
    const inActiveClass = "focus:outline-none font-medium rounded-lg py-2 text-center";    
    const cartCount = useSelector(state => state.cart.cartList.length);
  return (
    <header>
        <nav className="bg-white border-gray-200 border-b-2 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Shopping Cart Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">REDUX CART</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Link to="/cart" className="font-medium text-sm px-4 py-2 text-center">Cart: {cartCount}</Link>            
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass } end>Home</NavLink>
                </li>
                <li className=''>
                    <NavLink to="/cart" className={({isActive}) => isActive ? activeClass : inActiveClass } end>Cart</NavLink>
                </li>            
            </ul>
        </div>
        </div>
        </nav>
    </header>
  )
}
