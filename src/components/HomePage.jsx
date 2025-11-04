import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Home = () => {
  const servicesHighlights = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies.",
      link: "/services#web-development",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      link: "/services#mobile-development",
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce",
      description:
        "Complete online store solutions with secure payment integration.",
      link: "/services#ecommerce",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      link: "/services#cloud",
    },
  ];

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/portfolio",
    },
    {
      title: "Fitness Mobile App",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/portfolio",
    },
    {
      title: "LMS Platform",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/portfolio",
    },
  ];

  const teamHighlights = [
    {
      name: "Expert Team",
      description:
        "25+ skilled professionals across development, design, and marketing.",
      link: "/team",
    },
    {
      name: "10+ Years Experience",
      description: "Over a decade of delivering successful IT solutions.",
      link: "/about",
    },
    {
      name: "Join Our Team",
      description: "Looking for talented individuals to grow with us.",
      link: "/careers",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Innovative IT Solutions for Your Business</h1>
            <p>
              We provide cutting-edge technology services to help businesses
              thrive in the digital age. From web development to cloud
              solutions, we've got you covered.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive IT solutions tailored to your business needs</p>
          </div>
          <div className="services-highlights">
            {servicesHighlights.map((service, index) => (
              <div key={index} className="service-highlight-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <Link to={service.link} className="read-more">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About I-ON Infotech</h2>
              <p>
                With over a decade of experience in the IT industry,
                i-oninfotech has established itself as a trusted partner for
                businesses seeking digital transformation.
              </p>
              <p>
                Our team of skilled professionals is dedicated to delivering
                innovative solutions that drive growth and efficiency for our
                clients across various industries.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>150+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
              <Link
                to="/about"
                className="btn btn-outline"
                style={{ margin: "auto" }}
              >
                Our Story
              </Link>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Our Team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section portfolio-preview">
        <div className="container">
          <div className="section-header">
            <h2>Our Portfolio</h2>
            <p>Showcasing our successful projects and innovative solutions</p>
          </div>
          <div className="featured-projects">
            {featuredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <Link to={project.link} className="view-project">
                      View Project <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/portfolio" className="btn btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="section team-preview">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Meet the talented professionals behind our success</p>
          </div>
          <div className="team-highlights">
            {teamHighlights.map((highlight, index) => (
              <div key={index} className="team-highlight-card">
                <h4>{highlight.name}</h4>
                <p>{highlight.description}</p>
                <Link to={highlight.link} className="read-more">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/team" className="btn btn-primary">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Careers Preview Section */}
      <section className="section careers-preview">
        <div className="container">
          <div className="careers-content">
            <div className="careers-text">
              <h2>Join Our Team</h2>
              <p>
                We're always looking for talented individuals who are passionate
                about technology and innovation.
              </p>
              <div className="careers-benefits">
                <div className="benefit">
                  <i className="fas fa-home"></i>
                  <span>Remote Work Options</span>
                </div>
                <div className="benefit">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Learning & Development</span>
                </div>
                <div className="benefit">
                  <i className="fas fa-dumbbell"></i>
                  <span>Health & Wellness</span>
                </div>
                <div className="benefit">
                  <i className="fas fa-rocket"></i>
                  <span>Career Growth</span>
                </div>
              </div>
              <Link to="/careers" className="btn btn-primary">
                View Open Positions
              </Link>
            </div>
            <div className="careers-image">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Join Our Team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss how we can help transform your business with
              technology
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link to="/services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
