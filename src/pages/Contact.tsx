
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const offices = [
    {
      city: "Pune",
      address: "Sr.No.39, “Florida County”, Bldg. No. B6 / Flat No. 303, Near Shree Hospital, Keshav Nagar, Mundhwa, Pune - 411036.",
      phone: "+91 9922904709",
      email: "cphelevators7@gmail.com",
      mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30261.400635984548!2d73.91255228413503!3d18.543579571317583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c229151423ad%3A0x5f948980691cf925!2sFlorida%20County!5e0!3m2!1sen!2sin!4v1750763463632!5m2!1sen!2sin"
    }
  ];

  const serviceAreas = ["Pune", "Chhatrapati Sambhajinagar", "Solapur", "Nasik", "Mumbai", "Kolhapur", "Nanded", "Latur", "Ahmednagar","Panaji","Margao","Mapusa","Bangalore","Mysore"," Mangalore","Hubli-Dharwad","Belgaum"];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-elevator-dark text-white py-20 clip-path-slant">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto text-center">
            Get in touch with our team for all your elevator needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg mb-8">
                Whether you need information about our services, want to request a quote, 
                or have questions about your existing elevator system, we're here to help.
              </p>
              
              <div className="flex items-center justify-center ">
                <div className="bg-gray-50 p-6 rounded-lg"> 
                  <h3 className="text-xl font-semibold mb-4">Pune Office</h3>
                  <address className="not-italic space-y-2 text-muted-foreground">
                    <p>Sr.No.39, “Florida County”, Bldg. No. B6 / Flat No. 303, Near Shree Hospital, Keshav Nagar, Mundhwa, Pune - 411036.</p>
                    <p>Phone: +91 7776072929</p>
                    <p>Email: cphelevators7@gmail.com</p>
                  </address>
                </div>
                
                
              </div>
            
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, index) => (
                    <span key={index} className="bg-elevator-light text-elevator-blue px-3 py-1 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-elevator-orange/10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-lg">
            <div>
              <h3 className="text-2xl font-bold mb-2">24/7 Emergency Service</h3>
              <p className="text-lg mb-4 md:mb-0">
                For elevator emergencies, call our hotline:
              </p>
            </div>
            <Button size="lg" className="bg-elevator-orange hover:bg-elevator-orange/90 whitespace-nowrap">
              <a href="tel:+919922904709">+91 9922904709</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section>
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Locations</h2>
          
          <div className="flex items-center justify-center">
            {offices.map((office, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video w-full">
                  <iframe 
                    src={office.mapUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title={`${office.city} Office Map`}
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{office.city} Office</h3>
                  <address className="not-italic mt-2 text-muted-foreground">
                    {office.address}
                  </address>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How quickly can you respond to emergencies?</h3>
              <p>
                We offer 24/7 emergency service with response times typically under 2 hours in most service areas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Do you offer free quotes?</h3>
              <p>
                Yes, we provide free inspections and quotes for all our services, including installations and repairs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How often should elevators be serviced?</h3>
              <p>
                We recommend monthly maintenance for high-traffic elevators and quarterly maintenance for residential elevators.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Do you service all elevator brands?</h3>
              <p>
                Yes, our technicians are trained to work on all major elevator brands and models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-elevator-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Fill out our contact form or call us directly to get started on your elevator solution.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" variant="secondary">
              <a href="tel:+919922904709">Call Us Now</a>
            </Button>
            <Button size="lg" variant="secondary" >
              <a href="mailto:cphelevators7@gmail.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
