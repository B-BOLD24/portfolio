import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center w-full bg-[#0C0C0C] py-4 px-6 md:px-10 fixed top-0 shadow-md z-50 text-[#F0EEE8] text-sm tracking-widest uppercase">
      
      <span className="text-base font-bold tracking-tight normal-case hover:text-[#E8C547] transition-colors">
        Karan Telgad
      </span>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8">
        <li className="hover:text-[#E8C547] transition-colors"><a href="#about">About</a></li>
        <li className="hover:text-[#E8C547] transition-colors"><a href="#education">Education</a></li>
        <li className="hover:text-[#E8C547] transition-colors"><a href="#skills">Skills</a></li>
        <li className="hover:text-[#E8C547] transition-colors"><a href="#projects">Projects</a></li>
        <li className="hover:text-[#E8C547] transition-colors"><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden text-[#F0EEE8] hover:text-[#E8C547] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Animated mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#0C0C0C] flex flex-col items-center gap-0 md:hidden border-t border-[#222222]"
          >
            {["about", "education", "skills", "projects", "contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 hover:text-[#E8C547] hover:bg-[#111111] transition-colors border-b border-[#111111]"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}

export default Navbar