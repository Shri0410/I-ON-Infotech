import React, { useState } from "react";
import "./CareersPage.css";

const CareersPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const jobCategories = [
    { id: "all", name: "All Positions" },
    { id: "development", name: "Development" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
    { id: "operations", name: "Operations" },
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      category: "development",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",
      salary: "$90,000 - $120,000",
      posted: "2 days ago",
      description:
        "We're looking for an experienced Full-Stack Developer to join our growing team and work on cutting-edge web applications.",
      responsibilities: [
        "Develop and maintain robust, scalable web applications",
        "Collaborate with cross-functional teams to define, design, and ship new features",
        "Write clean, maintainable, and efficient code",
        "Participate in code reviews and provide constructive feedback",
        "Troubleshoot and debug applications",
      ],
      requirements: [
        "5+ years of experience in full-stack development",
        "Proficiency in React.js and Node.js",
        "Experience with database systems (SQL and NoSQL)",
        "Knowledge of cloud platforms (AWS, Azure, or GCP)",
        "Strong understanding of software development principles",
      ],
      benefits: [
        "Competitive salary and equity package",
        "Flexible remote work options",
        "Health, dental, and vision insurance",
        "Professional development budget",
        "Unlimited paid time off",
      ],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      category: "design",
      type: "Full-time",
      location: "Hybrid",
      experience: "3+ years",
      salary: "$70,000 - $90,000",
      posted: "1 week ago",
      description:
        "Join our design team to create beautiful, intuitive user experiences that delight our clients and their customers.",
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with developers to implement designs",
        "Maintain and evolve our design system",
        "Create design specifications and guidelines",
      ],
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Strong portfolio showcasing design process",
        "Understanding of user-centered design principles",
        "Experience with design systems and component libraries",
      ],
      benefits: [
        "Competitive salary package",
        "Latest hardware and software",
        "Conference and learning budget",
        "Flexible working hours",
        "Creative freedom and ownership",
      ],
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      category: "marketing",
      type: "Full-time",
      location: "Remote",
      experience: "2+ years",
      salary: "$55,000 - $75,000",
      posted: "3 days ago",
      description:
        "Help us grow our brand and reach new clients through innovative digital marketing strategies.",
      responsibilities: [
        "Develop and execute digital marketing campaigns",
        "Manage social media channels and content strategy",
        "Analyze campaign performance and optimize ROI",
        "Create engaging content for various platforms",
        "Collaborate with sales and design teams",
      ],
      requirements: [
        "2+ years of digital marketing experience",
        "Experience with SEO, SEM, and social media marketing",
        "Proficiency in marketing analytics tools",
        "Excellent written and verbal communication skills",
        "Creative thinking and problem-solving abilities",
      ],
      benefits: [
        "Performance-based bonuses",
        "Remote work flexibility",
        "Marketing certification support",
        "Creative campaign ownership",
        "Regular team building events",
      ],
    },
    {
      id: 4,
      title: "DevOps Engineer",
      category: "development",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      salary: "$100,000 - $130,000",
      posted: "5 days ago",
      description:
        "Join our infrastructure team to build and maintain scalable, reliable systems that power our applications.",
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure and deployment processes",
        "Monitor system performance and ensure reliability",
        "Implement security best practices",
        "Automate operational processes",
      ],
      requirements: [
        "4+ years of DevOps or infrastructure experience",
        "Expertise in AWS, Docker, and Kubernetes",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Strong scripting skills (Bash, Python)",
        "Knowledge of monitoring and logging tools",
      ],
      benefits: [
        "Top-tier compensation package",
        "Remote-first culture",
        "Latest tools and technologies",
        "Conference and training budget",
        "Stock options program",
      ],
    },
    {
      id: 5,
      title: "Project Manager",
      category: "operations",
      type: "Full-time",
      location: "Hybrid",
      experience: "4+ years",
      salary: "$80,000 - $100,000",
      posted: "1 week ago",
      description:
        "Lead our project teams to deliver exceptional results for our clients while ensuring projects stay on track and within budget.",
      responsibilities: [
        "Manage project timelines, budgets, and resources",
        "Coordinate between clients and development teams",
        "Identify and mitigate project risks",
        "Facilitate team meetings and client communications",
        "Ensure project deliverables meet quality standards",
      ],
      requirements: [
        "4+ years of project management experience in IT",
        "PMP or Agile certification preferred",
        "Experience with project management tools (Jira, Asana)",
        "Excellent communication and leadership skills",
        "Strong problem-solving and decision-making abilities",
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Hybrid work model",
        "Leadership development programs",
        "Client interaction and relationship building",
        "Career growth opportunities",
      ],
    },
    {
      id: 6,
      title: "Frontend Developer",
      category: "development",
      type: "Contract",
      location: "Remote",
      experience: "3+ years",
      salary: "$40 - $60/hour",
      posted: "1 day ago",
      description:
        "Work on exciting client projects as a contract Frontend Developer, creating responsive and interactive web applications.",
      responsibilities: [
        "Develop responsive web applications using React.js",
        "Implement pixel-perfect designs",
        "Optimize applications for performance",
        "Collaborate with backend developers and designers",
        "Write clean, maintainable code with tests",
      ],
      requirements: [
        "3+ years of frontend development experience",
        "Strong proficiency in React.js and TypeScript",
        "Experience with modern CSS frameworks",
        "Knowledge of web performance optimization",
        "Familiarity with version control (Git)",
      ],
      benefits: [
        "Competitive hourly rates",
        "Flexible contract terms",
        "Remote work opportunity",
        "Diverse project exposure",
        "Potential for full-time conversion",
      ],
    },
  ];

  const companyBenefits = [
    {
      icon: "fas fa-home",
      title: "Remote First",
      description: "Work from anywhere with our flexible remote work policy",
    },
    {
      icon: "fas fa-dumbbell",
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Learning Budget",
      description: "$2,000 annual budget for courses, books, and conferences",
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Flexible PTO",
      description: "Unlimited paid time off to recharge and refresh",
    },
    {
      icon: "fas fa-laptop",
      title: "Tech Setup",
      description: "Latest MacBook Pro and accessories for your home office",
    },
    {
      icon: "fas fa-rocket",
      title: "Career Growth",
      description: "Clear career paths and promotion opportunities",
    },
  ];

  const hiringProcess = [
    {
      step: 1,
      title: "Application Review",
      description: "We carefully review your application and portfolio",
      duration: "1-3 days",
    },
    {
      step: 2,
      title: "Initial Screening",
      description: "30-minute video call with our hiring team",
      duration: "30 mins",
    },
    {
      step: 3,
      title: "Technical Assessment",
      description: "Skills-based test relevant to the position",
      duration: "2-4 hours",
    },
    {
      step: 4,
      title: "Team Interview",
      description: "Meet the team you'll be working with",
      duration: "1-2 hours",
    },
    {
      step: 5,
      title: "Final Offer",
      description: "We make an offer to the selected candidate",
      duration: "1-2 days",
    },
  ];

  const filteredJobs =
    activeCategory === "all"
      ? openPositions
      : openPositions.filter((job) => job.category === activeCategory);

  const openJobDetails = (job) => {
    setSelectedJob(job);
  };

  const closeJobDetails = () => {
    setSelectedJob(null);
    setShowApplicationForm(false);
  };

  const handleApplyNow = () => {
    setShowApplicationForm(true);
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-content">
            <h1>Join Our Team</h1>
            <p>
              Build your career with i-oninfotech and work on exciting projects
              with cutting-edge technologies
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>25+</h3>
                <p>Team Members</p>
              </div>
              <div className="hero-stat">
                <h3>8+</h3>
                <p>Years Growing</p>
              </div>
              <div className="hero-stat">
                <h3>6</h3>
                <p>Open Positions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section why-join-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Join i-oninfotech?</h2>
            <p>
              We're building more than software - we're building careers and
              shaping the future of technology
            </p>
          </div>
          <div className="benefits-grid">
            {companyBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section positions-section">
        <div className="container">
          <div className="section-header">
            <h2>Open Positions</h2>
            <p>
              Find the perfect role that matches your skills and career
              aspirations
            </p>
          </div>

          <div className="category-filters">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                className={`category-filter-btn ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="positions-grid">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="position-card"
                onClick={() => openJobDetails(job)}
              >
                <div className="position-header">
                  <h3>{job.title}</h3>
                  <span className={`job-type ${job.type.toLowerCase()}`}>
                    {job.type}
                  </span>
                </div>
                <div className="position-meta">
                  <div className="meta-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{job.location}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-briefcase"></i>
                    <span>{job.experience}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-dollar-sign"></i>
                    <span>{job.salary}</span>
                  </div>
                </div>
                <p className="position-description">{job.description}</p>
                <div className="position-footer">
                  <span className="posted-date">Posted {job.posted}</span>
                  <button className="btn btn-primary btn-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Hiring Process</h2>
            <p>
              Transparent and efficient process designed to find the best talent
            </p>
          </div>
          <div className="process-timeline">
            {hiringProcess.map((step, index) => (
              <div key={step.step} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                  <span className="step-duration">{step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section careers-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Don't See the Perfect Role?</h2>
            <p>
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <button className="btn btn-primary">
              Submit General Application
            </button>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="job-modal">
          <div className="modal-overlay" onClick={closeJobDetails}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeJobDetails}>
              <i className="fas fa-times"></i>
            </button>

            {!showApplicationForm ? (
              <>
                <div className="modal-header">
                  <div className="job-title-section">
                    <h2>{selectedJob.title}</h2>
                    <div className="job-tags">
                      <span
                        className={`job-type ${selectedJob.type.toLowerCase()}`}
                      >
                        {selectedJob.type}
                      </span>
                      <span className="job-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {selectedJob.location}
                      </span>
                      <span className="job-salary">
                        <i className="fas fa-dollar-sign"></i>
                        {selectedJob.salary}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="job-details">
                    <div className="detail-section">
                      <h3>Job Description</h3>
                      <p>{selectedJob.description}</p>
                    </div>

                    <div className="detail-section">
                      <h3>Key Responsibilities</h3>
                      <ul className="responsibilities-list">
                        {selectedJob.responsibilities.map(
                          (responsibility, index) => (
                            <li key={index}>
                              <i className="fas fa-check"></i>
                              {responsibility}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="detail-section">
                      <h3>Requirements</h3>
                      <ul className="requirements-list">
                        {selectedJob.requirements.map((requirement, index) => (
                          <li key={index}>
                            <i className="fas fa-arrow-right"></i>
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="detail-section">
                      <h3>Benefits & Perks</h3>
                      <div className="benefits-grid-small">
                        {selectedJob.benefits.map((benefit, index) => (
                          <div key={index} className="benefit-item-small">
                            <i className="fas fa-star"></i>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <div className="action-buttons">
                    <button
                      className="btn btn-primary"
                      onClick={handleApplyNow}
                    >
                      <i className="fas fa-paper-plane"></i>
                      Apply Now
                    </button>
                    <button className="btn btn-outline">
                      <i className="fas fa-share"></i>
                      Share Position
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="application-form">
                <div className="form-header">
                  <h2>Apply for {selectedJob.title}</h2>
                  <p>
                    Fill out the form below and we'll get back to you within 48
                    hours
                  </p>
                </div>

                <form className="application-form-content">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input type="text" id="firstName" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input type="text" id="lastName" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume">Upload Resume *</label>
                    <div className="file-upload">
                      <input
                        type="file"
                        id="resume"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                      <label htmlFor="resume" className="file-upload-label">
                        <i className="fas fa-cloud-upload-alt"></i>
                        Choose file
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="coverLetter">Cover Letter</label>
                    <textarea
                      id="coverLetter"
                      rows="4"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="portfolio">Portfolio/LinkedIn URL</label>
                    <input type="url" id="portfolio" placeholder="https://" />
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setShowApplicationForm(false)}
                    >
                      Back to Details
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;
