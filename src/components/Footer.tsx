
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-elevator-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-elevator-orange mr-2">CPH</span> Elevators
            </h3>
            <p className="text-gray-300 mb-4">
              Providing reliable elevator solutions with 100% client satisfaction for over 15 years.
            </p>
            <p className="text-gray-300">
              Available 24/7 for your elevator needs.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-elevator-orange">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/clients" className="text-gray-300 hover:text-white transition-colors">
                  Our Clients
                </NavLink>
              </li>
             
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-elevator-orange">Services</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/services#installation" className="text-gray-300 hover:text-white transition-colors">
                  Installation
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#maintenance" className="text-gray-300 hover:text-white transition-colors">
                  Maintenance
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#modernization" className="text-gray-300 hover:text-white transition-colors">
                  Modernization
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#repairs" className="text-gray-300 hover:text-white transition-colors">
                  Repairs
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-elevator-orange">Contact Info</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Pune Office: Sr.No.39, “Florida County”, Bldg. No. B6 / Flat No. 303, Near Shree Hospital, Keshav Nagar, Mundhwa, 411036.</p>
              
              <p>Phone: +91 9922904709</p>
              <p>Email: cphelevators7@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} CPH Elevators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
