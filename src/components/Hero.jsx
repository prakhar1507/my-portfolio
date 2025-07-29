import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
// import { FaChevronDown } from 'react-icons/fa';
// import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen bg-[#0a192f] text-white flex items-center justify-center px-4"
    >
      <div className="w-full max-w-5xl text-center">
        {/* Intro line */}
        <p className="text-teal-400 text-sm sm:text-base md:text-lg mb-2">
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Prakhar Srivastava
        </h1>

        {/* Typewriter */}
        <h2 className="text-sm sm:text-lg md:text-2xl text-gray-400 font-mono mt-3 min-h-[2rem]">
          I{' '}
          <span className="text-white">
            <Typewriter
              words={[
                'analyze data.',
                'build ML models.',
                'develop web apps.',
                'automate workflows.',
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-6 mx-auto max-w-xl leading-relaxed">
          Graduated Computer Science student passionate about solving real-world problems through software development. Strong focus on data handling, analysis, and automation, with a deep interest in building data-driven solutions that create meaningful impact.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-2">
          <a
            href="#projects"
            className="bg-teal-400 hover:bg-teal-500 text-black px-6 py-2 rounded font-semibold text-sm sm:text-base"
          >
            View Work
          </a>
          <a
            href="/resume.pdf"
            download="Prakhar_Srivastava_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-400 px-6 py-2 rounded text-teal-400 hover:bg-teal-400 hover:text-black font-semibold text-sm sm:text-base"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-xl sm:text-2xl text-gray-300">
          <a href="https://linkedin.com/in/prakhar-srivastava1507" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-teal-400" />
          </a>
          <a href="https://github.com/prakhar1507" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-teal-400" />
          </a>
          <a href="mailto:shrivastavaprakhar1507@gmail.com">
            <FaEnvelope className="hover:text-teal-400" />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
