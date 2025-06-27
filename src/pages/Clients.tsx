
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { useState } from "react";


const Clients = () => {
  const clients = [
  { name: "Shivtara Properties", sector: "Real Estate" },
  { name: "Solapur Municipal Corporation", sector: "Government" },
  { name: "Kailash Complex", sector: "Commercial" },
  { name: "Usha Kiran Hospital", sector: "Healthcare" },
  { name: "Sai Properties", sector: "Real Estate" },
  { name: "Sidhivinayak Developers", sector: "Real Estate" },
  { name: "Om Sai Developers", sector: "Real Estate" },
  { name: "Guru Datta Developers", sector: "Real Estate" },
  { name: "Sahara Developers", sector: "Real Estate" },
  { name: "Shivshree Developers", sector: "Real Estate" },
  { name: "Sathe Group", sector: "Real Estate" },
  { name: "Nitture Group", sector: "Real Estate" },
  { name: "Vivek Developers", sector: "Real Estate" },
  { name: "S.M. Autade Pvt. Ltd.", sector: "Corporate" },
  { name: "R.R. Construction", sector: "Construction" },
  { name: "Panchtara Developers", sector: "Real Estate" },
  { name: "Shah Kunj Developers", sector: "Real Estate" },
  { name: "Saishree Developers", sector: "Real Estate" },
  { name: "Gurukrupa Developers", sector: "Real Estate" },
  { name: "Utkarsh Builders", sector: "Construction" },
  { name: "Sai Siddhi Developers", sector: "Real Estate" },
  { name: "Shiv Samarth Builders", sector: "Construction" },
  { name: "Subha Associate", sector: "Real Estate" },
  { name: "Vignahartha Developers", sector: "Real Estate" },
  { name: "Jijamata Developers", sector: "Real Estate" },
  { name: "Bhosale Developers", sector: "Real Estate" },
  { name: "Sai Sankalp Developers", sector: "Real Estate" },
  { name: "DMR Developers", sector: "Real Estate" },
  { name: "Kalyani Developers", sector: "Real Estate" },
  { name: "Heritage Developers", sector: "Real Estate" },
  { name: "Mayur One Hotel", sector: "Restaurants" },
  { name: "Pawar Sarii", sector: "Retail" },
  {name:"Shatayu Hospital",sector:"Healthcare"},
  {name:"Hotel Rachna Residency", Sector:"Restaurants"},
  {name:"Hotel Aryan",sector:"Restaurants"},
  {name:"Shaan Coco Palms Resort",sector:"Commercial"}
];


  const testimonials = [
  {
    quote: "CPH Elevators handled our hotel project with exceptional professionalism. The elevator adds both functionality and elegance to our space.",
    author: "Ekanath Bhandari",
    company: "Hotel Rachna Residency",
  },
  {
    quote: "The installation process was smooth and timely. We’re very satisfied with CPH’s service quality.",
    author: "Nilesh Singh",
    company: "Shivtara Builders",
  },
  {
    quote: "Excellent support and maintenance by CPH Elevators. They are responsive and reliable at every stage.",
    author: "Devendra Bhat",
    company: "Matoshree Builders",
  },
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
  {
    quote: "We’re happy with the quality and after-sales service provided by CPH. Will definitely recommend them for future resort projects.",
    author: "Shubham Mahajan",
    company: "Shaan Coco Palms Resort",
  },
  {
    quote: "From installation to follow-up service, CPH Elevators delivered a seamless experience. A great partner for commercial projects.",
    author: "Rajesh Pawar",
    company: "Pawar Saree",
  },
];



  const clientSectors = ["All", "Real Estate", "Healthcare","Restaurants", "Commercial", "Retail","Government"];

  const [selectedSector, setSelectedSector] = useState("All");

// Filter clients based on selected sector
const filteredClients = selectedSector === "All" 
  ? clients 
  : clients.filter(client => client.sector === selectedSector);

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

            {/* <div className="flex flex-wrap justify-center gap-4 mb-8">
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
            </div> */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
  {clientSectors.map((sector, index) => (
    <button 
      key={index}
      onClick={() => setSelectedSector(sector)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition ${
        selectedSector === sector 
          ? "bg-elevator-blue text-white" 
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {sector}
    </button>
  ))}
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {filteredClients.map((client, index) => (
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
                // role={testimonial.role}
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
                  src="./images/hospital.webp" 
                  alt="Hospital elevator project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Shatayu Hospital</h3>
                {/* <p className="text-sm text-muted-foreground mb-2">Modernization of 6 elevators</p> */}
                <p>Upgraded the hospital's elevator system to improve patient transport efficiency and safety.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gray-200">
                <img 
                  src="./images/rachna_residency.webp" 
                  alt="Residential elevator project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Hotel Rachna Residency</h3>
                {/* <p className="text-sm text-muted-foreground mb-2">Installation of 4 new passenger elevators</p> */}
                <p>Installed high-efficiency, quiet elevators for this premium residential complex in Pune.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gray-200">
                <img 
                  src="./images/shaan_resort.jpg" 
                  alt="Commercial elevator project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Shaan Coco Palms Resort</h3>
                <p className="text-sm text-muted-foreground mb-2">Ongoing maintenance for 12 elevators</p>
                <p>Providing regular maintenance services to ensure smooth operation for this busy IT complex.</p>
              </div>
            </div>
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
