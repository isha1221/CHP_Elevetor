
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Installation, Maintenance, Modernization, Repairs } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-elevator-dark text-white py-20 clip-path-slant">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Services</h1>
          <p className="text-lg max-w-3xl mx-auto text-center">
            Comprehensive elevator solutions for all your needs
          </p>
        </div>
      </section>

      {/* Service Introduction */}
      <section>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Elevator Solutions for Every Need</h2>
            <p className="text-lg mb-8">
              At CPH Elevators, we provide end-to-end elevator services, from installation and maintenance 
              to modernization and repairs. Our team of experts ensures quality, safety, and reliability in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Service */}
      <section id="installation" className="bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Installation className="text-elevator-blue mr-3" size={36} />
                <h2 className="text-3xl font-bold">Installation</h2>
              </div>
              <p className="mb-6 text-lg">
                We offer custom elevator installation solutions for residential, commercial, and industrial buildings. 
                Our expert team ensures smooth installation with minimal disruption to your space.
              </p>
              <h3 className="text-xl font-semibold mb-3">Custom Solutions For:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <li className="flex items-center">
                  <span className="text-elevator-orange mr-2">✓</span> Homes
                </li>
                <li className="flex items-center">
                  <span className="text-elevator-orange mr-2">✓</span> Apartments
                </li>
                <li className="flex items-center">
                  <span className="text-elevator-orange mr-2">✓</span> Offices
                </li>
                <li className="flex items-center">
                  <span className="text-elevator-orange mr-2">✓</span> Hospitals
                </li>
                <li className="flex items-center">
                  <span className="text-elevator-orange mr-2">✓</span> Shopping Centers
                </li>
                <li className="flex items-center">
                  <span className="text-elevator-orange mr-2">✓</span> Industrial Buildings
                </li>
              </ul>
              <p className="mb-6">
                We handle all types of elevators including capsule elevators, goods elevators, vehicle elevators, 
                passenger elevators, and more.
              </p>
              <Button asChild>
                <Link to="/contact">Request Installation Quote</Link>
              </Button>
            </div>
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1557660558-d7f6676e1d97?auto=format&fit=crop&q=80" 
                  alt="Elevator installation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Service */}
      <section id="maintenance">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581092325335-5a966b5e74b6?auto=format&fit=crop&q=80" 
                  alt="Elevator maintenance" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <Maintenance className="text-elevator-blue mr-3" size={36} />
                <h2 className="text-3xl font-bold">Maintenance</h2>
              </div>
              <p className="mb-6 text-lg">
                Regular maintenance is essential for the safety and longevity of your elevator systems. 
                Our comprehensive maintenance services ensure your elevators operate smoothly and efficiently.
              </p>
              <h3 className="text-xl font-semibold mb-3">Our Maintenance Plans Include:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Regular inspection and testing of all components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Preventive maintenance to avoid breakdowns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Lubrication and adjustment of mechanical parts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Safety checks and compliance verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>24/7 emergency support</span>
                </li>
              </ul>
              <p className="mb-6">
                We offer flexible maintenance plans to suit different needs and budgets.
              </p>
              <Button asChild>
                <Link to="/contact">Explore Maintenance Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modernization Service */}
      <section id="modernization" className="bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Modernization className="text-elevator-blue mr-3" size={36} />
                <h2 className="text-3xl font-bold">Modernization</h2>
              </div>
              <p className="mb-6 text-lg">
                Upgrade your existing elevators to improve speed, comfort, safety, and aesthetics. 
                Our modernization services provide cost-effective solutions to match modern standards.
              </p>
              <h3 className="text-xl font-semibold mb-3">Modernization Benefits:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Improved energy efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Enhanced safety features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Better performance and reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Updated aesthetics and cabin design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Compliance with current safety standards</span>
                </li>
              </ul>
              <p className="mb-6">
                We work with you to determine the most cost-effective modernization plan for your elevators.
              </p>
              <Button asChild>
                <Link to="/contact">Request Modernization Assessment</Link>
              </Button>
            </div>
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1567378407519-0460da51d44c?auto=format&fit=crop&q=80" 
                  alt="Modern elevator interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repairs Service */}
      <section id="repairs">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1517940310602-26535839fe84?auto=format&fit=crop&q=80" 
                  alt="Elevator repair" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <Repairs className="text-elevator-blue mr-3" size={36} />
                <h2 className="text-3xl font-bold">Repairs</h2>
              </div>
              <p className="mb-6 text-lg">
                Our fast and efficient repair services minimize downtime and restore your elevator's functionality. 
                Our experienced team handles repairs for all elevator brands and models.
              </p>
              <h3 className="text-xl font-semibold mb-3">Our Repair Process:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Free inspection and diagnosis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Detailed repair quote with no hidden costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Quick sourcing of genuine parts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Efficient repair with minimal disruption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-elevator-orange mr-2 mt-1">✓</span>
                  <span>Post-repair testing and safety checks</span>
                </li>
              </ul>
              <p className="mb-6">
                We handle emergency repairs 24/7 to ensure minimal downtime for your elevators.
              </p>
              <Button asChild>
                <Link to="/contact">Request Repair Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Compare Our Services</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-elevator-blue text-white">
                  <th className="py-3 px-4 text-left">Service</th>
                  <th className="py-3 px-4 text-left">Best For</th>
                  <th className="py-3 px-4 text-left">Timeline</th>
                  <th className="py-3 px-4 text-left">Key Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 font-medium">Installation</td>
                  <td className="py-3 px-4">New buildings or adding elevators</td>
                  <td className="py-3 px-4">2-8 weeks</td>
                  <td className="py-3 px-4">Custom solutions for specific needs</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Maintenance</td>
                  <td className="py-3 px-4">All elevator systems</td>
                  <td className="py-3 px-4">Regularly scheduled</td>
                  <td className="py-3 px-4">Prevents costly breakdowns</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-3 px-4 font-medium">Modernization</td>
                  <td className="py-3 px-4">Older elevators (5+ years)</td>
                  <td className="py-3 px-4">1-4 weeks</td>
                  <td className="py-3 px-4">Improved efficiency & aesthetics</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Repairs</td>
                  <td className="py-3 px-4">Malfunctioning elevators</td>
                  <td className="py-3 px-4">1-3 days</td>
                  <td className="py-3 px-4">Fast resolution of issues</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-elevator-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your elevator requirements and get a customized solution.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
