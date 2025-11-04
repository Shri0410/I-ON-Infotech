import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "With over 15 years in the IT industry, John leads our vision and strategic direction.",
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Sarah drives our technical innovation with expertise in cloud architecture and AI solutions.",
    },
    {
      name: "Michael Chen",
      position: "Head of Development",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Michael oversees our development teams ensuring quality and timely delivery of projects.",
    },
    {
      name: "Emily Davis",
      position: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Emily leads our digital marketing strategies and client engagement initiatives.",
    },
  ];

  const milestones = [
    {
      year: "2013",
      event: "Company Founded",
      description: "Started with a vision to deliver innovative IT solutions",
    },
    {
      year: "2015",
      event: "First Major Client",
      description: "Secured our first enterprise-level client",
    },
    {
      year: "2017",
      event: "Team Expansion",
      description: "Grew to 25+ team members and opened new offices",
    },
    {
      year: "2019",
      event: "Award Recognition",
      description: "Received 'Best IT Service Provider' award",
    },
    {
      year: "2021",
      event: "Global Reach",
      description: "Expanded services to international markets",
    },
    {
      year: "2023",
      event: "150+ Projects",
      description: "Successfully delivered 150+ projects worldwide",
    },
  ];

  const values = [
    {
      icon: "fas fa-bullseye",
      title: "Innovation",
      description:
        "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      icon: "fas fa-handshake",
      title: "Partnership",
      description:
        "We build long-term relationships with our clients based on trust and mutual success.",
    },
    {
      icon: "fas fa-medal",
      title: "Excellence",
      description:
        "We maintain the highest standards of quality in every project we undertake.",
    },
    {
      icon: "fas fa-users",
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and open communication with our clients.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About i-oninfotech</h1>
            <p>
              Transforming businesses through innovative technology solutions
              since 2013
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2013, i-oninfotech began as a small team of
                passionate developers with a shared vision: to help businesses
                leverage technology for growth and innovation. What started as a
                modest startup has grown into a trusted IT partner for companies
                worldwide.
              </p>
              <p>
                Over the years, we've evolved from a web development agency to a
                comprehensive IT solutions provider, expanding our expertise
                across mobile applications, cloud computing, e-commerce, and
                digital marketing. Our journey has been marked by continuous
                learning, adaptation, and a relentless pursuit of excellence.
              </p>
              <p>
                Today, we're proud to have delivered 150+ successful projects,
                helping businesses of all sizes achieve their digital
                transformation goals. Our commitment to quality, innovation, and
                client satisfaction remains the cornerstone of everything we do.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-card">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card">
                <h3>150+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-card">
                <h3>25+</h3>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative, reliable, and scalable
                technology solutions that drive growth, enhance efficiency, and
                create lasting competitive advantages in the digital landscape.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted technology partner for businesses
                worldwide, recognized for our excellence, innovation, and
                commitment to delivering transformative digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Key milestones in our growth story</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h4>{milestone.event}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The talented professionals behind our success</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <div className="social-links">
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p className="position">{member.position}</p>
                  <p className="description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss how we can help transform your business with
              technology
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="/services" className="btn btn-outline">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
