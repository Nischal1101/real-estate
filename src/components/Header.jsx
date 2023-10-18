import {FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";




const Header = () => {
  return (
    <header className="bg-slate-200 shadown-md">
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">

        <h1 className="font-bold text-sm sm:text-xl flex-wrap">
            <span className="text-slate-500">Fake</span>
            <span className="text-slate-700">Estate</span>
        </h1>
        <form className="bg-slate-100 p-3 flex items-center">
            <input className="bg-transparent rounded-lg focus:outline-none w-24 sm:w-64 " type="text" placeholder="Search..." />
            <FaSearch className="text-slate-600 cursor-pointer "/>
        </form>
        <ul className="sm:flex gap-4 hidden ">
            <li className=" text-slate-700 hover:underline"><Link to="/">Home</Link></li>
            <li className=" text-slate-700 hover:underline"><Link to="/about">About</Link></li>
            <li className=" text-slate-700 hover:underline"><Link to="/sign-in">Sign in</Link></li>
        </ul>
        </div>
    </header>
  )
}

export default Header
