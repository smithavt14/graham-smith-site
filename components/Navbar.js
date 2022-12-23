import {AiFillHome} from 'react-icons/ai'
import Link from 'next/link'

const Navbar = ({darkMode, toggleDarkMode}) => {
  const endAnimation = (event) => {
    event.target.classList.remove('opacity-0')
    event.target.classList.add('opacity-100')
  }

  return (
    <div className="transition-all duration-200 font-black fixed inset-x-0 top-0 py-8 px-12 w-screen text-white flex justify-center items-center md:justify-start z-50">
      <Link className="mr-8 duration-200 hover:text-slate-400" href="/">
        <AiFillHome className="transition duration-200 h-8 w-8 fill-slate-400 hover:fill-white stroke-white" />
      </Link>
    </div>
  );
}

export default Navbar;
