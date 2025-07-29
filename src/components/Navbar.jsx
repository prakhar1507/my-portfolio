import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'experience' },
    { id: 6, link: 'contact' },
  ];

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      <h1 className="text-2xl font-bold text-teal-400">Prakhar Srivastava</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-2 cursor-pointer capitalize font-medium text-gray-300 hover:text-teal-400 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="/resume.pdf"
            download="Prakhar_Srivastava_Resume.pdf"
            className="border border-teal-400 px-4 py-1 rounded text-teal-400 hover:bg-teal-400 hover:text-black transition-all font-mono text-sm"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger Menu Icon */}
      <div onClick={() => setNav(!nav)} className="md:hidden z-10 cursor-pointer text-gray-300">
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full bg-[#0a192f]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-4 text-xl capitalize cursor-pointer hover:text-teal-400"
            >
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <li className="py-4">
            <a
              href="/resume.pdf"
              download="Prakhar_Srivastava_Resume.pdf"
              className="border border-teal-400 px-4 py-2 rounded text-teal-400 hover:bg-teal-400 hover:text-black transition-all font-mono text-sm"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
