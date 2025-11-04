import React, { useState } from "react";
import "./TeamPage.css";

const TeamPage = () => {
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [selectedMember, setSelectedMember] = useState(null);

  const departments = [
    { id: "all", name: "All Team" },
    { id: "leadership", name: "Leadership" },
    { id: "development", name: "Development" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO & Founder",
      department: "leadership",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With over 15 years in the IT industry, John founded i-oninfotech with a vision to deliver innovative technology solutions that drive business growth.",
      email: "john@ioninfotech.in",
      phone: "+1 (555) 123-4567",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      skills: [
        "Strategic Planning",
        "Business Development",
        "Technology Innovation",
        "Leadership",
      ],
      experience: "15+ years",
      education: "MBA - Harvard Business School",
      funFact: "Avid rock climber and coffee enthusiast",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      department: "leadership",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Sarah leads our technical vision with expertise in cloud architecture, AI solutions, and scalable system design. She ensures our solutions are cutting-edge and reliable.",
      email: "sarah@ioninfotech.in",
      phone: "+1 (555) 123-4568",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      skills: ["Cloud Architecture", "AI/ML", "System Design", "DevOps"],
      experience: "12+ years",
      education: "M.S. Computer Science - MIT",
      funFact: "Competitive chess player and sci-fi book collector",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Head of Development",
      department: "development",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Michael oversees our development teams, ensuring quality and timely delivery of projects. He specializes in agile methodologies and team leadership.",
      email: "michael@ioninfotech.in",
      phone: "+1 (555) 123-4569",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      skills: [
        "Team Leadership",
        "Agile Methodologies",
        "Full-stack Development",
        "Code Review",
      ],
      experience: "10+ years",
      education: "B.S. Software Engineering - Stanford",
      funFact: "Plays lead guitar in a weekend rock band",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Marketing Director",
      department: "marketing",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Emily leads our digital marketing strategies and client engagement initiatives. She has a proven track record of driving growth through innovative marketing campaigns.",
      email: "emily@ioninfotech.in",
      phone: "+1 (555) 123-4570",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      skills: [
        "Digital Marketing",
        "Brand Strategy",
        "Client Relations",
        "Content Creation",
      ],
      experience: "8+ years",
      education: "M.A. Marketing - Northwestern University",
      funFact: "Traveled to 25+ countries and speaks 3 languages",
    },
    {
      id: 5,
      name: "David Wilson",
      position: "Senior Full-stack Developer",
      department: "development",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "David specializes in creating robust full-stack applications. He's passionate about clean code and user experience.",
      email: "david@ioninfotech.in",
      phone: "+1 (555) 123-4571",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      skills: ["React", "Node.js", "Python", "Database Design"],
      experience: "6+ years",
      education: "B.S. Computer Science - UC Berkeley",
      funFact: "Marathon runner and open-source contributor",
    },
    {
      id: 6,
      name: "Lisa Rodriguez",
      position: "UI/UX Designer",
      department: "design",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Lisa creates intuitive and beautiful user interfaces. She believes good design should be both functional and delightful.",
      email: "lisa@ioninfotech.in",
      phone: "+1 (555) 123-4572",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
      experience: "5+ years",
      education: "B.F.A. Design - Rhode Island School of Design",
      funFact: "Professional photographer in her spare time",
    },
    {
      id: 7,
      name: "Alex Thompson",
      position: "Mobile App Developer",
      department: "development",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Alex specializes in cross-platform mobile development. He's passionate about creating seamless mobile experiences.",
      email: "alex@ioninfotech.in",
      phone: "+1 (555) 123-4573",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      skills: ["React Native", "Flutter", "iOS/Android", "Mobile UI"],
      experience: "4+ years",
      education: "B.S. Mobile Computing - University of Washington",
      funFact: "Developed his first mobile app at age 16",
    },
    {
      id: 8,
      name: "Rachel Kim",
      position: "Digital Marketing Specialist",
      department: "marketing",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Rachel manages our social media presence and content strategy. She's skilled at creating engaging digital campaigns.",
      email: "rachel@ioninfotech.in",
      phone: "+1 (555) 123-4574",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      skills: ["Social Media", "Content Strategy", "SEO", "Analytics"],
      experience: "3+ years",
      education: "B.A. Communications - UCLA",
      funFact: "Yoga instructor and meditation practitioner",
    },
  ];

  const companyStats = [
    { number: "25+", label: "Team Members" },
    { number: "8+", label: "Years Experience" },
    { number: "150+", label: "Projects Delivered" },
    { number: "15+", label: "Technologies" },
  ];

  const filteredMembers =
    activeDepartment === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.department === activeDepartment);

  const openMemberModal = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <div className="team-hero-content">
            <h1>Meet Our Team</h1>
            <p>
              The talented professionals behind our success - dedicated to
              delivering exceptional results
            </p>
            <div className="team-stats">
              {companyStats.map((stat, index) => (
                <div key={index} className="team-stat">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Filter */}
      <section className="section team-filter">
        <div className="container">
          <div className="section-header">
            <h2>Our Experts</h2>
            <p>
              Get to know the brilliant minds that make i-oninfotech exceptional
            </p>
          </div>
          <div className="department-filters">
            {departments.map((dept) => (
              <button
                key={dept.id}
                className={`dept-filter-btn ${
                  activeDepartment === dept.id ? "active" : ""
                }`}
                onClick={() => setActiveDepartment(dept.id)}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section team-grid-section">
        <div className="container">
          <div className="team-grid">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="team-member-card"
                onClick={() => openMemberModal(member)}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="overlay-content">
                      <h4>View Profile</h4>
                      <div className="social-links">
                        <a
                          href={member.social.linkedin}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          href={member.social.twitter}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href={member.social.github}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p className="position">{member.position}</p>
                  <span className={`department ${member.department}`}>
                    {member.department.charAt(0).toUpperCase() +
                      member.department.slice(1)}
                  </span>
                  <p className="member-bio">
                    {member.bio.substring(0, 100)}...
                  </p>
                  <div className="member-skills">
                    {member.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="skill-tag more">
                        +{member.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section culture-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Culture</h2>
            <p>What makes i-oninfotech a great place to work and collaborate</p>
          </div>
          <div className="culture-grid">
            <div className="culture-card">
              <div className="culture-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation First</h3>
              <p>
                We encourage creative thinking and embrace new technologies to
                solve complex problems.
              </p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaborative Spirit</h3>
              <p>
                Teamwork is at our core. We believe great things happen when we
                work together.
              </p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Continuous Learning</h3>
              <p>
                We invest in our team's growth with regular training and skill
                development programs.
              </p>
            </div>
            <div className="culture-card">
              <div className="culture-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Work-Life Balance</h3>
              <p>
                We value our team's well-being and promote a healthy balance
                between work and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <section className="section hiring-section">
        <div className="container">
          <div className="hiring-content">
            <div className="hiring-text">
              <h2>Join Our Team</h2>
              <p>
                We're always looking for talented individuals who are passionate
                about technology and innovation.
              </p>
              <div className="hiring-benefits">
                <div className="benefit-item">
                  <i className="fas fa-dollar-sign"></i>
                  <span>Competitive Salary</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-home"></i>
                  <span>Remote Work Options</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-dumbbell"></i>
                  <span>Health & Wellness</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-rocket"></i>
                  <span>Career Growth</span>
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => (window.location.href = "/careers")}
              >
                View Open Positions
              </button>
            </div>
            <div className="hiring-image">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Join Our Team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="team-member-modal">
          <div className="modal-overlay" onClick={closeMemberModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeMemberModal}>
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <div className="member-profile">
                <div className="profile-image">
                  <img src={selectedMember.image} alt={selectedMember.name} />
                </div>
                <div className="profile-info">
                  <h2>{selectedMember.name}</h2>
                  <p className="position">{selectedMember.position}</p>
                  <span className={`department ${selectedMember.department}`}>
                    {selectedMember.department.charAt(0).toUpperCase() +
                      selectedMember.department.slice(1)}{" "}
                    Team
                  </span>
                  <div className="contact-info">
                    <div className="contact-item">
                      <i className="fas fa-envelope"></i>
                      <span>{selectedMember.email}</span>
                    </div>
                    <div className="contact-item">
                      <i className="fas fa-phone"></i>
                      <span>{selectedMember.phone}</span>
                    </div>
                  </div>
                  <div className="social-links">
                    <a href={selectedMember.social.linkedin}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href={selectedMember.social.twitter}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={selectedMember.social.github}>
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="member-details">
                <div className="detail-section">
                  <h3>About Me</h3>
                  <p>{selectedMember.bio}</p>
                </div>

                <div className="details-grid">
                  <div className="detail-section">
                    <h3>Skills & Expertise</h3>
                    <div className="skills-list">
                      {selectedMember.skills.map((skill, index) => (
                        <span key={index} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Experience</h3>
                    <div className="experience-item">
                      <i className="fas fa-briefcase"></i>
                      <div>
                        <strong>{selectedMember.experience}</strong>
                        <span>in the industry</span>
                      </div>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Education</h3>
                    <div className="education-item">
                      <i className="fas fa-graduation-cap"></i>
                      <div>
                        <strong>{selectedMember.education}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Fun Fact</h3>
                    <div className="fun-fact">
                      <i className="fas fa-star"></i>
                      <span>{selectedMember.funFact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="action-buttons">
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="btn btn-primary"
                >
                  <i className="fas fa-envelope"></i>
                  Send Message
                </a>
                <a
                  href={selectedMember.social.linkedin}
                  className="btn btn-outline"
                >
                  <i className="fab fa-linkedin-in"></i>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPage;
