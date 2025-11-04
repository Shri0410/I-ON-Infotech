import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Our Office",
      details: [
        "123 Tech Park, Innovation Road",
        "Silicon Valley, CA 94025",
        "United States",
      ],
      description: "Visit our headquarters for meetings and consultations",
    },
    {
      icon: "fas fa-phone",
      title: "Phone Number",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Mon-Fri from 9am to 6pm PST",
    },
    {
      icon: "fas fa-envelope",
      title: "Email Address",
      details: ["info@i-oninfotech.in", "support@i-oninfotech.in"],
      description: "We reply within 24 hours",
    },
    {
      icon: "fas fa-clock",
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
      description: "We follow Pacific Standard Time",
    },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "Cloud Solutions",
    "LMS Development",
    "SEO Services",
    "Digital Marketing",
    "Video Game Development",
    "Other",
  ];

  const budgetRanges = [
    "₹4,00,000 - ₹8,00,000",
    "₹8,00,000 - ₹20,00,000",
    "₹20,00,000 - ₹40,00,000",
    "₹40,00,000 - ₹80,00,000",
    "₹80,00,000+",
    "Not Sure",
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A simple website takes 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! We work with clients worldwide. Our remote collaboration process is optimized for international partnerships across different time zones.",
    },
    {
      question: "What is your development process?",
      answer:
        "We follow an agile methodology with regular check-ins, transparent communication, and iterative development to ensure your project stays on track and meets your expectations.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Absolutely! We offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally after launch.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        service: "",
        budget: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get In Touch</h1>
            <p>
              Ready to start your project? Let's discuss how we can help
              transform your business with technology
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
              <div className="hero-stat">
                <h3>2h</h3>
                <p>Average Response Time</p>
              </div>
              <div className="hero-stat">
                <h3>150+</h3>
                <p>Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2>Let's Start a Conversation</h2>
            <p>Choose your preferred way to get in touch with our team</p>
          </div>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <h4>{info.title}</h4>
                <div className="contact-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
                <p className="contact-description">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="form-content">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>
                  Fill out the form below and our team will get back to you
                  within 2 hours
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <h4>Thank You!</h4>
                    <p>
                      Your message has been sent successfully. We'll get back to
                      you within 2 hours.
                    </p>
                  </div>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    required
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className={`btn btn-primary ${
                      isSubmitting ? "loading" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="map-content">
              <div className="map-container">
                <div className="map-placeholder">
                  <i className="fas fa-map-marker-alt"></i>
                  <h3>Our Location</h3>
                  <p>123 Tech Park, Innovation Road, Silicon Valley, CA</p>
                  <div className="map-features">
                    <div className="map-feature">
                      <i className="fas fa-car"></i>
                      <span>Free Parking</span>
                    </div>
                    <div className="map-feature">
                      <i className="fas fa-wifi"></i>
                      <span>Free WiFi</span>
                    </div>
                    <div className="map-feature">
                      <i className="fas fa-coffee"></i>
                      <span>Meeting Rooms</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quick-contact">
                <h4>Quick Connect</h4>
                <div className="quick-links">
                  <a href="mailto:info@i-oninfotech.in" className="quick-link">
                    <i className="fas fa-envelope"></i>
                    <span>Email Us</span>
                  </a>
                  <a href="tel:+15551234567" className="quick-link">
                    <i className="fas fa-phone"></i>
                    <span>Call Now</span>
                  </a>
                  <a href="https://calendly.com" className="quick-link">
                    <i className="fas fa-calendar"></i>
                    <span>Schedule Meeting</span>
                  </a>
                  <a href="https://wa.me/15551234567" className="quick-link">
                    <i className="fab fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Get quick answers to common questions about working with us</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's schedule a free consultation to discuss your project
              requirements and timeline
            </p>
            <div className="cta-buttons">
              <a href="tel:+15551234567" className="btn btn-primary">
                <i className="fas fa-phone"></i>
                Call Now
              </a>
              <a href="https://calendly.com" className="btn btn-outline">
                <i className="fas fa-calendar"></i>
                Schedule Meeting
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
