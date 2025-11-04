import React, { useState } from "react";
import "./ServicesPage.css";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("development");

  const serviceCategories = {
    development: [
      {
        icon: "fas fa-code",
        title: "Web Development",
        description:
          "Custom web applications and websites built with the latest technologies to drive your business forward.",
        features: [
          "Responsive Design",
          "CMS Development",
          "E-commerce Solutions",
          "API Integration",
          "Progressive Web Apps",
        ],
        process: [
          "Requirement Analysis",
          "UI/UX Design",
          "Development",
          "Testing",
          "Deployment & Support",
        ],
      },
      {
        icon: "fas fa-mobile-alt",
        title: "Mobile App Development",
        description:
          "Native and cross-platform mobile applications designed to engage your customers on any device.",
        features: [
          "iOS & Android Apps",
          "Cross-Platform Development",
          "UI/UX Design",
          "App Store Deployment",
          "Maintenance & Updates",
        ],
        process: [
          "Strategy & Planning",
          "Design & Prototyping",
          "Development",
          "Quality Assurance",
          "Launch & Maintenance",
        ],
      },
      {
        icon: "fas fa-gamepad",
        title: "Video Game Development",
        description:
          "Engaging 2D/3D game development for mobile, desktop, and console platforms using cutting-edge technologies.",
        features: [
          "2D & 3D Games",
          "VR/AR Development",
          "Multiplayer Games",
          "Game Porting",
          "Game Design & Art",
        ],
        process: [
          "Concept & Design",
          "Art & Assets",
          "Development",
          "Testing & Balancing",
          "Launch & Updates",
        ],
      },
    ],
    business: [
      {
        icon: "fas fa-shopping-cart",
        title: "E-commerce Solutions",
        description:
          "Complete online store development with secure payment gateways, inventory management, and customer analytics.",
        features: [
          "Online Store Setup",
          "Payment Integration",
          "Inventory Management",
          "Order Processing",
          "Analytics Dashboard",
        ],
        process: [
          "Store Planning",
          "Design & Development",
          "Payment Setup",
          "Testing",
          "Launch & Training",
        ],
      },
      {
        icon: "fas fa-graduation-cap",
        title: "LMS Development",
        description:
          "Custom Learning Management Systems for educational institutions and corporate training programs.",
        features: [
          "Course Management",
          "Student Tracking",
          "Assessment Tools",
          "Video Streaming",
          "Certification System",
        ],
        process: [
          "Needs Analysis",
          "System Design",
          "Development",
          "Content Integration",
          "Training & Support",
        ],
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud Solutions",
        description:
          "Scalable cloud infrastructure and migration services to optimize your business operations.",
        features: [
          "Cloud Migration",
          "Infrastructure Setup",
          "Data Backup",
          "Security Management",
          "24/7 Monitoring",
        ],
        process: [
          "Assessment",
          "Migration Planning",
          "Implementation",
          "Testing",
          "Ongoing Management",
        ],
      },
    ],
    marketing: [
      {
        icon: "fas fa-search",
        title: "SEO Services",
        description:
          "Comprehensive search engine optimization to improve your website visibility and drive organic traffic.",
        features: [
          "Keyword Research",
          "On-Page SEO",
          "Technical SEO",
          "Content Strategy",
          "Performance Analytics",
        ],
        process: [
          "SEO Audit",
          "Strategy Development",
          "Implementation",
          "Monitoring",
          "Reporting & Optimization",
        ],
      },
      {
        icon: "fas fa-bullhorn",
        title: "Digital Marketing",
        description:
          "End-to-end digital marketing strategies including social media, PPC, content marketing, and analytics.",
        features: [
          "Social Media Marketing",
          "PPC Advertising",
          "Content Marketing",
          "Email Campaigns",
          "Performance Tracking",
        ],
        process: [
          "Market Research",
          "Strategy Creation",
          "Campaign Execution",
          "Performance Analysis",
          "Optimization",
        ],
      },
    ],
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "$999",
      period: "project based",
      features: [
        "Basic Website/App",
        "5 Pages/Screens",
        "Responsive Design",
        "Basic SEO",
        "1 Month Support",
        "Standard Hosting",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "project based",
      features: [
        "Custom Design",
        "Up to 15 Pages/Screens",
        "Advanced Features",
        "SEO Optimization",
        "3 Months Support",
        "Premium Hosting",
        "Analytics Setup",
        "Training Sessions",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "$4,999+",
      period: "custom quote",
      features: [
        "Complete Custom Solution",
        "Unlimited Pages/Screens",
        "Advanced Integrations",
        "Premium SEO",
        "6 Months Support",
        "Dedicated Server",
        "Priority Support",
        "Custom Training",
      ],
      recommended: false,
    },
  ];

  const technologies = [
    { name: "React", icon: "fab fa-react", category: "Frontend" },
    { name: "Node.js", icon: "fab fa-node-js", category: "Backend" },
    { name: "Python", icon: "fab fa-python", category: "Backend" },
    { name: "AWS", icon: "fab fa-aws", category: "Cloud" },
    { name: "Google Cloud", icon: "fab fa-google", category: "Cloud" },
    { name: "Docker", icon: "fab fa-docker", category: "DevOps" },
    { name: "WordPress", icon: "fab fa-wordpress", category: "CMS" },
    { name: "Shopify", icon: "fas fa-shopping-bag", category: "E-commerce" },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>
              Comprehensive IT solutions to transform your business and drive
              digital success
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>150+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="hero-stat">
                <h3>8+</h3>
                <p>Service Categories</p>
              </div>
              <div className="hero-stat">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="section service-categories">
        <div className="container">
          <div className="section-header">
            <h2>Our Service Portfolio</h2>
            <p>
              Explore our comprehensive range of IT services tailored to your
              business needs
            </p>
          </div>

          <div className="category-tabs">
            <button
              className={`tab-btn ${
                activeTab === "development" ? "active" : ""
              }`}
              onClick={() => setActiveTab("development")}
            >
              <i className="fas fa-laptop-code"></i>
              Development
            </button>
            <button
              className={`tab-btn ${activeTab === "business" ? "active" : ""}`}
              onClick={() => setActiveTab("business")}
            >
              <i className="fas fa-briefcase"></i>
              Business Solutions
            </button>
            <button
              className={`tab-btn ${activeTab === "marketing" ? "active" : ""}`}
              onClick={() => setActiveTab("marketing")}
            >
              <i className="fas fa-chart-line"></i>
              Digital Marketing
            </button>
          </div>

          <div className="services-grid">
            {serviceCategories[activeTab].map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-header">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-features">
                  <h4>Key Features</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-process">
                  <h4>Our Process</h4>
                  <div className="process-steps">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="process-step">
                        <div className="step-number">{idx + 1}</div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="service-cta">
                  <button className="btn btn-primary">Get Quote</button>
                  <button className="btn btn-outline">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section technologies-section">
        <div className="container">
          <div className="section-header">
            <h2>Technologies We Use</h2>
            <p>
              We work with cutting-edge technologies to deliver robust and
              scalable solutions
            </p>
          </div>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <i className={tech.icon}></i>
                <h4>{tech.name}</h4>
                <span className="tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing-section">
        <div className="container">
          <div className="section-header">
            <h2>Pricing Plans</h2>
            <p>Flexible pricing options to suit businesses of all sizes</p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${
                  plan.recommended ? "recommended" : ""
                }`}
              >
                {plan.recommended && (
                  <div className="recommended-badge">Most Popular</div>
                )}
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="amount">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn ${
                    plan.recommended ? "btn-primary" : "btn-outline"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Development Process</h2>
            <p>A structured approach to ensure quality and timely delivery</p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h4>Discovery & Planning</h4>
              <p>
                We analyze your requirements and create a detailed project plan
              </p>
            </div>
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <h4>Design & Prototyping</h4>
              <p>Create wireframes and prototypes for your approval</p>
            </div>
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-code"></i>
              </div>
              <h4>Development</h4>
              <p>Agile development with regular updates and feedback</p>
            </div>
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-bug"></i>
              </div>
              <h4>Testing & Quality</h4>
              <p>Rigorous testing to ensure bug-free performance</p>
            </div>
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h4>Deployment</h4>
              <p>Smooth deployment and launch of your project</p>
            </div>
            <div className="process-step">
              <div className="step-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h4>Support & Maintenance</h4>
              <p>Ongoing support and maintenance services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss your requirements and create a custom solution for
              your business
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Get Free Consultation</button>
              <button className="btn btn-outline">View Portfolio</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
