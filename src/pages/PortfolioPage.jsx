import React, { useState } from "react";
import "./PortfolioPage.css";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioCategories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "game", name: "Game Development" },
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "ecommerce",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description:
        "A comprehensive e-commerce solution with advanced inventory management and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "Fashion Retail Co.",
      duration: "4 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Multi-vendor Support",
        "Advanced Analytics",
        "Mobile Responsive",
        "SEO Optimized",
      ],
      results: {
        revenue: "45% increase",
        users: "10K+ monthly",
        performance: "2s load time",
      },
    },
    {
      id: 2,
      title: "Fitness Mobile App",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description:
        "A fitness tracking app with workout plans, progress tracking, and social features.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      client: "FitLife Studios",
      duration: "3 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Workout Plans",
        "Progress Tracking",
        "Social Features",
        "Offline Mode",
      ],
      results: {
        downloads: "50K+",
        rating: "4.8/5",
        retention: "85% monthly",
      },
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description:
        "A modern corporate website with CMS integration and lead generation features.",
      technologies: ["Next.js", "Contentful", "Tailwind CSS", "Vercel"],
      client: "Tech Solutions Inc.",
      duration: "2 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "CMS Integration",
        "Lead Generation",
        "Multi-language",
        "Fast Loading",
      ],
      results: {
        leads: "200% increase",
        traffic: "15K monthly",
        conversion: "12% rate",
      },
    },
    {
      id: 4,
      title: "Educational Game",
      category: "game",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description:
        "An educational game for children with interactive learning activities.",
      technologies: ["Unity", "C#", "Blender", "AWS"],
      client: "EduPlay Learning",
      duration: "6 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Interactive Learning",
        "Progress Tracking",
        "Parent Dashboard",
        "Multi-platform",
      ],
      results: {
        users: "25K+ students",
        engagement: "45 mins daily",
        satisfaction: "95% positive",
      },
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description:
        "A food delivery app with real-time tracking and multiple payment options.",
      technologies: ["Flutter", "Node.js", "MongoDB", "Google Maps"],
      client: "QuickBite Delivery",
      duration: "5 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Real-time Tracking",
        "Multiple Payments",
        "Order History",
        "Ratings & Reviews",
      ],
      results: {
        orders: "5K+ monthly",
        delivery: "30 mins average",
        growth: "300% YoY",
      },
    },
    {
      id: 6,
      title: "LMS Platform",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description:
        "A learning management system for online courses and student management.",
      technologies: ["React", "Django", "PostgreSQL", "AWS S3"],
      client: "Online Academy",
      duration: "4 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Course Management",
        "Video Streaming",
        "Assessments",
        "Certificates",
      ],
      results: {
        students: "10K+ enrolled",
        courses: "200+ available",
        completion: "80% rate",
      },
    },
    {
      id: 7,
      title: "AR Shopping App",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1626573600745-87d4e1a5b815?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description:
        "Augmented reality shopping experience for furniture and home decor.",
      technologies: ["ARKit", "Swift", "Firebase", "3D Modeling"],
      client: "HomeStyle AR",
      duration: "7 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "AR Visualization",
        "3D Models",
        "Product Catalog",
        "Social Sharing",
      ],
      results: {
        sales: "35% increase",
        returns: "60% reduction",
        engagement: "3x higher",
      },
    },
    {
      id: 8,
      title: "Healthcare Portal",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description:
        "A comprehensive healthcare portal for patients and medical professionals.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
      client: "MediCare Group",
      duration: "6 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Patient Records",
        "Appointment Booking",
        "Telemedicine",
        "Prescription Management",
      ],
      results: {
        efficiency: "40% improvement",
        patients: "50K+ served",
        satisfaction: "4.9/5 rating",
      },
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeFilter
        );

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-content">
            <h1>Our Portfolio</h1>
            <p>Showcasing our successful projects and innovative solutions</p>
            <div className="portfolio-stats">
              <div className="portfolio-stat">
                <h3>150+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="portfolio-stat">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="portfolio-stat">
                <h3>8+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="section portfolio-filter">
        <div className="container">
          <div className="filter-buttons">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  activeFilter === category.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="portfolio-item"
                onClick={() => openProjectModal(project)}
              >
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <div className="portfolio-tech">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <span className="portfolio-category">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section portfolio-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>What our clients say about working with us</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "i-oninfotech delivered beyond our expectations. Their team
                  was professional, communicative, and delivered a high-quality
                  e-commerce platform that has significantly boosted our sales."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">JS</div>
                <div className="author-info">
                  <h4>John Smith</h4>
                  <p>CEO, Fashion Retail Co.</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "The fitness app developed by i-oninfotech has been a
                  game-changer for our business. User engagement is through the
                  roof and the technical execution is flawless."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">SR</div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>Founder, FitLife Studios</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Working with i-oninfotech on our corporate website was
                  seamless. They understood our vision and delivered a modern,
                  high-performing site that perfectly represents our brand."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MC</div>
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>Marketing Director, Tech Solutions Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section portfolio-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's create something amazing together. Share your ideas and
              we'll bring them to life.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Start a Project</button>
              <button className="btn P-btn-outline">View Case Studies</button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={closeProjectModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeProjectModal}>
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <div className="modal-header-content">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
                <div className="project-meta">
                  <div className="meta-item">
                    <i className="fas fa-user"></i>
                    <span>Client: {selectedProject.client}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-clock"></i>
                    <span>Duration: {selectedProject.duration}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-tags"></i>
                    <span>Category: {selectedProject.category}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="project-details">
                <div className="detail-section">
                  <h3>Technologies Used</h3>
                  <div className="tech-stack">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <h3>Project Results</h3>
                  <div className="results-grid">
                    {Object.entries(selectedProject.results).map(
                      ([key, value], index) => (
                        <div key={index} className="result-item">
                          <div className="result-value">{value}</div>
                          <div className="result-label">
                            {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="project-links">
                <a href={selectedProject.liveUrl} className="btn btn-primary">
                  <i className="fas fa-external-link-alt"></i>
                  Live Demo
                </a>
                <a href={selectedProject.githubUrl} className="btn btn-outline">
                  <i className="fab fa-github"></i>
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
