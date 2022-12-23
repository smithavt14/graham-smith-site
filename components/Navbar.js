const Navbar = ({darkMode, toggleDarkMode}) => {
  const endAnimation = (event) => {
    event.target.classList.remove('opacity-0')
    event.target.classList.add('opacity-100')
  }

  return (
    <div className="transition-all duration-200 fixed inset-x-0 top-0 py-8 px-12 w-screen text-white flex justify-center items-center md:justify-end z-50">
      <a href="#about" className="mr-8 duration-200 hover:text-slate-400">Roman</a>
      <a href="#work" className="mr-8 duration-200 hover:text-slate-400">Mac</a>
      <a href="#contact" className="mr-8 duration-200 hover:text-slate-400">Aela</a>
    </div>
  );
}

export default Navbar;
