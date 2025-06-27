
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const valuesList = [
    {
      title: "Customer-Centric Approach",
      description: "We prioritize our clients' needs and ensure 100% satisfaction in every project."
    },
    {
      title: "Safety First",
      description: "Safety is our top priority in design, installation, and maintenance."
    },
    {
      title: "Quality Assurance",
      description: "We use only high-quality parts and follow strict quality control procedures."
    },
    {
      title: "Personalized Service",
      description: "We tailor our solutions to meet the specific requirements of each client."
    },
    {
      title: "Integrity & Transparency",
      description: "We maintain honesty and transparency in all our communications and pricing."
    },
    {
      title: "Continuous Innovation",
      description: "We continuously update our knowledge and skills to provide the latest solutions."
    }
  ];

  const locations =["Pune", "Chhatrapati Sambhajinagar", "Solapur", "Nasik", "Mumbai", "Kolhapur", "Nanded", "Latur", "Ahmednagar","Panaji","Margao","Mapusa","Bangalore","Mysore"," Mangalore","Hubli-Dharwad","Belgaum"];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-elevator-dark text-white py-20 clip-path-slant">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About CPH Elevators</h1>
          <p className="text-lg max-w-3xl mx-auto text-center">
            15+ years of excellence in elevator solutions
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="mb-4 text-lg">
                CPH Elevators has been delivering professional and efficient elevator services for over 15 years. 
                We specialize in providing comprehensive solutions for all types of buildings, from residential homes to commercial complexes.
              </p>
              <p className="mb-4 text-lg">
                Founded in 2010, we have grown from a small local business to a trusted name in the elevator industry, 
                serving clients across multiple cities in Maharashtra.
              </p>
              <p className="mb-4 text-lg">
                Our team consists of highly skilled engineers, technicians, and support staff who are committed to delivering excellence in every project.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/logo.png" 
                  alt="CPH Elevators Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-elevator-blue text-white p-4 rounded shadow-lg">
                <p className="font-bold">15+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Our mission is to provide safe, reliable, and innovative elevator solutions that exceed our clients' expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuesList.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-elevator-blue">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Coverage Areas</h2>
            <p className="text-lg max-w-2xl mx-auto">
              We provide our elevator services across major cities in Maharashtra.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="bg-elevator-light border border-gray-200 rounded-lg p-4 text-center hover:bg-elevator-blue hover:text-white transition-colors"
              >
                <p className="font-medium text-lg">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/modern_elevator.png" 
                  alt="Modern elevator interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-elevator-orange text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">100% Client Satisfaction</h3>
                    <p>We ensure complete satisfaction with our work quality and service.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-elevator-orange text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Non-proprietary Systems</h3>
                    <p>We install systems that can be maintained by any qualified service provider.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-elevator-orange text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Available 24/7</h3>
                    <p>Our team is available round the clock for emergencies and support.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-elevator-orange text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Experienced Professionals</h3>
                    <p>Our team consists of highly trained and experienced elevator specialists.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-elevator-orange text-xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Competitive Pricing</h3>
                    <p>We offer high-quality services at competitive market rates.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-elevator-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help with your elevator needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
