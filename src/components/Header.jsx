import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-slate-200 shadown-md">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <h1 className="font-bold text-sm sm:text-xl flex-wrap">
          <span className="text-slate-500">Fake</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form className="bg-slate-100 p-3 flex items-center">
          <input
            className="bg-transparent rounded-lg focus:outline-none w-24 sm:w-64 "
            type="text"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-600 cursor-pointer " />
        </form>
        <ul className="sm:flex gap-4 hidden ">
          <Link to="/">
            <li className=" text-slate-700 hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className=" text-slate-700 hover:underline">About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="h-7 w-7 rounded-full object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
