
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";

const Clients = () => {
  const clients = [
    { name: "Prestige Group", sector: "Real Estate" },
    { name: "City General Hospital", sector: "Healthcare" },
    { name: "Tech Park One", sector: "IT & Office Space" },
    { name: "Grand Hotel", sector: "Hospitality" },
    { name: "Harmony Residency", sector: "Residential" },
    { name: "Westside Mall", sector: "Retail" },
    { name: "Central University", sector: "Education" },
    { name: "Silver Heights Apartments", sector: "Residential" },
    { name: "Metro Business Center", sector: "Commercial" },
    { name: "Sunshine Hospital", sector: "Healthcare" },
    { name: "Pinnacle Towers", sector: "Real Estate" },
    { name: "Golden Retreat Resort", sector: "Hospitality" }
  ];

  const testimonials = [
    {
      quote: "CPH Elevators provided exceptional service. They completed our elevator installation on time and within budget. Their team was professional and maintained high safety standards throughout the project.",
      author: "Rajesh Kumar",
      role: "Facility Manager",
      company: "Prime Towers",
    },
    {
      quote: "We've been using CPH for maintenance of our hospital elevators for over 5 years. Their 24/7 service has been invaluable to ensure our elevators are always operational for patients and staff.",
      author: "Dr. Anjali Sharma",
      role: "Director",
      company: "City General Hospital",
    },
    {
      quote: "The modernization of our old elevator system was handled professionally. The elevators now run smoother and look much better. Our residents are extremely happy with the results.",
      author: "Vikram Mehta",
      role: "Building Manager",
      company: "Harmony Residency",
    },
    {
      quote: "When our elevator broke down, CPH Elevators responded immediately and had it fixed within hours. Their emergency service is truly reliable and efficient.",
      author: "Priya Patel",
      role: "Operations Manager",
      company: "Tech Park One",
    },
    {
      quote: "The installation of our panoramic elevator has added a unique feature to our hotel. Guests love it, and the CPH team made the entire process smooth and hassle-free.",
      author: "Sanjay Kapoor",
      role: "General Manager",
      company: "Grand Hotel",
    },
    {
      quote: "CPH Elevators guided us through selecting the right elevator system for our mall. Their expertise and attention to detail made all the difference.",
      author: "Anita Singh",
      role: "Project Manager",
      company: "Westside Mall",
    },
  ];

  const clientSectors = ["All", "Real Estate", "Healthcare", "Hospitality", "Residential", "Commercial", "Retail", "Education", "IT & Office Space"];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-elevator-dark text-white py-20 clip-path-slant">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Clients</h1>
          <p className="text-lg max-w-3xl mx-auto text-center">
            Trusted by businesses and organizations across various sectors
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section>
        <div className="container">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Trusted Partners</h2>
            <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
              We're proud to serve a diverse range of clients across multiple industries. Here are some of the organizations that trust us with their elevator needs.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {clientSectors.map((sector, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    sector === "All" 
                      ? "bg-elevator-blue text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {clients.map((client, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-1">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.sector}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Client Testimonials</h2>
          <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section>
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
          <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
            Take a look at some of our notable elevator projects across different sectors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&q=80" 
                  alt="Hospital elevator project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">City General Hospital</h3>
                <p className="text-sm text-muted-foreground mb-2">Modernization of 6 elevators</p>
                <p>Upgraded the hospital's elevator system to improve patient transport efficiency and safety.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80" 
                  alt="Residential elevator project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Harmony Residency</h3>
                <p className="text-sm text-muted-foreground mb-2">Installation of 4 new passenger elevators</p>
                <p>Installed high-efficiency, quiet elevators for this premium residential complex in Pune.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                  alt="Commercial elevator project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Tech Park One</h3>
                <p className="text-sm text-muted-foreground mb-2">Ongoing maintenance for 12 elevators</p>
                <p>Providing regular maintenance services to ensure smooth operation for this busy IT complex.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/gallery">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-elevator-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience our exceptional elevator services and join our growing list of satisfied clients.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Clients;
