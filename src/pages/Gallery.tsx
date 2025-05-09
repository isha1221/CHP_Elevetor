
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Panoramic Elevator Installation",
      location: "Grand Hotel, Pune",
      description: "Installation of a glass panoramic elevator in the hotel lobby",
      category: "installation",
      imageUrl: "https://images.unsplash.com/photo-1603068485032-a146b0f2d92c?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Hospital Elevator Modernization",
      location: "City General Hospital, Pune",
      description: "Modernized 6 elevators to improve patient transport efficiency",
      category: "modernization",
      imageUrl: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Residential Building Installation",
      location: "Harmony Residency, Aurangabad",
      description: "Installation of 4 high-efficiency passenger elevators",
      category: "installation",
      imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Office Complex Maintenance",
      location: "Tech Park One, Pune",
      description: "Regular maintenance of 12 elevators in a busy IT complex",
      category: "maintenance",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      title: "Shopping Mall Installation",
      location: "Westside Mall, Nasik",
      description: "Installation of 8 elevators and 4 escalators in a new mall",
      category: "installation",
      imageUrl: "https://images.unsplash.com/photo-1581541234264-28d5fb5964b9?auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      title: "Hotel Elevator Repair",
      location: "Golden Retreat Resort, Aurangabad",
      description: "Emergency repair of a malfunctioning elevator",
      category: "repairs",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    },
    {
      id: 7,
      title: "University Building Installation",
      location: "Central University, Solapur",
      description: "Installation of 3 elevators in a new university building",
      category: "installation",
      imageUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80",
    },
    {
      id: 8,
      title: "Apartment Complex Modernization",
      location: "Silver Heights, Pune",
      description: "Complete modernization of 5 elevators in an older building",
      category: "modernization",
      imageUrl: "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?auto=format&fit=crop&q=80",
    },
    {
      id: 9,
      title: "Hospital Goods Elevator",
      location: "Sunshine Hospital, Nasik",
      description: "Installation of a dedicated goods elevator for hospital supplies",
      category: "installation",
      imageUrl: "https://images.unsplash.com/photo-1586861256632-52a3db1073ee?auto=format&fit=crop&q=80",
    },
  ];

  const projectCategories = ["All", "Installation", "Maintenance", "Modernization", "Repairs"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <>
      {/* Hero Section */}
      <section className="bg-elevator-dark text-white py-20 clip-path-slant">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Project Gallery</h1>
          <p className="text-lg max-w-3xl mx-auto text-center">
            Explore our completed elevator projects across various sectors
          </p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === activeCategory 
                    ? "bg-elevator-blue text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(project.imageUrl)}
              >
                <div className="aspect-video bg-gray-200">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <span className="text-xs bg-elevator-light text-elevator-blue px-2 py-1 rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Image Lightbox Dialog */}
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden">
              {selectedImage && (
                <img 
                  src={selectedImage} 
                  alt="Project details" 
                  className="w-full h-auto"
                />
              )}
            </DialogContent>
          </Dialog>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-4">
                We don't have any {activeCategory.toLowerCase()} projects to display at the moment.
              </p>
              <Button variant="outline" onClick={() => setActiveCategory("All")}>
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Before & After Section */}
      <section className="bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Before & After</h2>
          <p className="text-lg mb-12 text-center max-w-2xl mx-auto">
            See the transformations we've made in our modernization projects.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581541234264-28d5fb5964b9?auto=format&fit=crop&q=80" 
                  alt="Before modernization" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">Before</h3>
              <p className="text-center text-muted-foreground">
                Outdated elevator with worn interior and old control panel
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1603068485032-a146b0f2d92c?auto=format&fit=crop&q=80" 
                  alt="After modernization" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">After</h3>
              <p className="text-center text-muted-foreground">
                Modern elevator with sleek design and digital control panel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-elevator-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us help you with your elevator needs. Contact us today for a consultation and quote.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
