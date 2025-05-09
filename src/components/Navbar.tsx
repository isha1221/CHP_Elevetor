
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Clients', href: '/clients' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <span className="text-2xl font-bold text-elevator-blue">CPH</span>
          <span className="text-2xl font-medium">Elevators</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-elevator-blue ${
                  isActive ? 'text-elevator-blue' : 'text-gray-700'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Button>Get a Quote</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-elevator-blue"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-lg animate-fade-in">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-base font-medium py-2 transition-colors hover:text-elevator-blue ${
                      isActive ? 'text-elevator-blue' : 'text-gray-700'
                    }`
                  }
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button onClick={closeMenu}>Get a Quote</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
