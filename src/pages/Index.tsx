
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Wrench, Hammer, Settings, ScanSearch } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Installation",
      description: "Custom elevator installations for residential, commercial, and industrial buildings.",
      icon: Wrench,
      learnMoreLink: "/services#installation",
    },
    {
      title: "Maintenance",
      description: "Regular servicing to ensure the safety and longevity of your elevator systems.",
      icon: Hammer,
      learnMoreLink: "/services#maintenance",
    },
    {
      title: "Modernization",
      description: "Upgrade your existing elevators for improved performance, safety, and aesthetics.",
      icon: Settings,
      learnMoreLink: "/services#modernization",
    },
    {
      title: "Repairs",
      description: "Fast and efficient repair services with minimal downtime for all elevator brands.",
      icon: ScanSearch,
      learnMoreLink: "/services#repairs",
    },
  ];


  const testimonials = [
    {
    quote: "The CPH team delivered efficient solutions tailored for our multi-storey project. Highly recommended.",
    author: "Jitin Kamble",
    company: "Kalyani Builders",
  },
  {
    quote: "Our experience with CPH Elevators during the hospital expansion has been nothing short of excellent. Safe, efficient, and quick.",
    author: "Dr. Patil",
    company: "Shatayu Hospital",
  },
  {
    quote: "Very satisfied with the installation at our hotel. The new elevator has elevated our guest experience, literally!",
    author: "Dinesh Suntale",
    company: "Hotel Aryan",
  },
  ];

  const clients = [
    "Solapur Municipal Corporation",
    "Kailash Complex",
    "Usha Kiran Hospital",
    "Grand Hotel",
    "Sai Properties",
    "Hotel Rachna Residency",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-elevator-dark text-white py-24 md:py-32 clip-path-slant">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Reliable Elevator Solutions for Residential, Commercial & Industrial Needs
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Serving our Clients with 100% Satisfaction
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer comprehensive elevator solutions tailored to your specific needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                learnMoreLink={service.learnMoreLink}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-gray-50 clip-path-slant-reverse">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="mb-6 text-lg">
                CPH Elevators has delivered professional, efficient elevator services for over 15 years.
                We specialize in providing top-quality elevator solutions with a customer-centric, safety-first approach.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-elevator-blue mr-2">✓</span>
                  100% client satisfaction
                </li>
                <li className="flex items-center">
                  <span className="text-elevator-blue mr-2">✓</span>
                  Non-proprietary systems
                </li>
                <li className="flex items-center">
                  <span className="text-elevator-blue mr-2">✓</span>
                  Available 24/7
                </li>
                <li className="flex items-center">
                  <span className="text-elevator-blue mr-2">✓</span>
                  Coverage in Pune, Chhatrapati Sambhajinagar, Solapur, Nasik, and more
                </li>
              </ul>
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="./images/modern_elevator2.png" 
                  alt="Modern elevator" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            We take pride in our work and our clients' satisfaction
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                // role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Preview */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="section-title">Our Trusted Clients</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {clients.map((client, index) => (
              <div key={index} className="bg-white px-6 py-4 rounded-lg shadow-md">
                <p className="font-medium text-lg">{client}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/clients">View All Clients</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-elevator-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Space?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on your elevator needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
