import React from 'react';

const ContactBanner= () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Let's work together! Send me an email and let's discuss your project.</p>
        <a href="mailto:example@example.com" className="contact-button">Email Me</a>
      </div>
    </section>
  );
}

export default ContactBanner;
