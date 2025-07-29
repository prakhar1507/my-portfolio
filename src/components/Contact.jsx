import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_t75wbto',       
        'template_xpdlopn',           
        form.current,
        '4x2BmJ0o07FBFQ8Ea'      
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowPopup(true);
          form.current.reset();
          setTimeout(() => setShowPopup(false), 4000); // Auto-close after 4s
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-[#0a192f] text-white py-20 px-5 relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-6 tracking-wide">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
          I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
        </p>

        
        <form ref={form} onSubmit={sendEmail} className="space-y-4 text-left max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded bg-[#112240] text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded bg-[#112240] text-white focus:outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 rounded bg-[#112240] text-white focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-teal-400 text-[#0a192f] px-6 py-3 rounded-md font-mono font-semibold text-base hover:bg-teal-500 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/prakharshrivastava1507/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/prakhar1507"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:prakharshrivastava1507@gmail.com"
            className="text-gray-300 hover:text-teal-400 text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center w-[90%] max-w-sm animate-fadeIn">
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="mb-4">Your message has been sent successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center text-gray-400 text-sm mt-16 border-t border-gray-700 pt-6">
        Designed & Built with <span className="text-pink-400">❤</span> by Prakhar Srivastava
      </div>
    </section>
  );
};

export default Contact;
