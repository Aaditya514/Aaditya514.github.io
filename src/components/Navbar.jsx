import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, FileText } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'hero', title: 'Home', icon: Home },
    { id: 'about', title: 'About', icon: User },
    { id: 'projects', title: 'Projects', icon: Briefcase },
    { id: 'contact', title: 'Contact', icon: Mail }
  ];

  const resumeLink = "https://drive.google.com/file/d/149n5JvjYIB8C_vUEXfCfSG67OvG59VPS/view?usp=sharing";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white text-xl font-bold">Aaditya Aanand</h1>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ id, title, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 text-white hover:bg-white/10 ${
                  activeSection === id ? 'bg-white/10' : ''
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{title}</span>
              </button>
            ))}
            {/* Resume */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:bg-white/10 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-black/80 backdrop-blur-md border-t border-white/10 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(({ id, title, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-white transition-all duration-300 ${
                  activeSection === id ? 'bg-white/10' : 'hover:bg-white/10'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium text-left">{title}</span>
              </button>
            ))}
            {/* Resume */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 mt-4 shadow-lg"
            >
              <FileText size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
