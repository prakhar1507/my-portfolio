import { FaUniversity, FaSchool } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-[#0a192f] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* About Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-8 tracking-wide">
          About Me
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed tracking-wide">
          I'm a Graduated Computer Science student from Jaypee university of Engineering and Technology, Guna passionate about data, automation, and solving real-world problems using technology. I specialize in building intelligent tools, streamlining workflows, and developing web apps that add real value.
        </p>

        {/* Education Heading */}
        <h3 className="text-2xl text-teal-300 font-semibold mt-16 mb-6 tracking-wide">
          Education
        </h3>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left items-stretch">
          
          {/* Card 1: JUET */}
          <div className="bg-[#0f172a] rounded-xl p-6 shadow-lg border border-gray-800 hover:border-teal-400 transition-all duration-300 h-full flex flex-col justify-start">

            <h4 className="text-white font-medium text-base flex items-start gap-2 tracking-wide mb-1">
              <FaUniversity className="text-teal-400 text-lg mt-1" />
              <span>Jaypee University of Engineering and Technology, Guna</span>
            </h4>
            <p className="text-gray-400 text-sm">B.Tech – Computer Science</p>
            <p className="text-gray-500 text-xs">Aug 2021 – June 2025</p>
            <p className="text-teal-300 text-sm mt-2">CGPA: 8.2 / 10</p>
          </div>

          {/* Card 2: Class 12 */}
          <div className="bg-[#0f172a] rounded-xl p-6 shadow-lg border border-gray-800 hover:border-teal-400 transition-all duration-300 h-full flex flex-col justify-start">

            <h4 className="text-white font-medium text-base flex items-start gap-2 tracking-wide mb-1">
              <FaSchool className="text-teal-400 text-lg mt-1" />
              <span>The Aryan's School, Jhansi</span>
            </h4>
            <p className="text-gray-400 text-sm">Class 12th – CBSE</p>
            <p className="text-gray-500 text-xs">April 2018 – March 2020</p>
            <p className="text-teal-300 text-sm mt-2">Percentage: 93.8%</p>
          </div>

          {/* Card 3: Class 10 */}
          <div className="bg-[#0f172a] rounded-xl p-6 shadow-lg border border-gray-800 hover:border-teal-400 transition-all duration-300 h-full flex flex-col justify-start">

            <h4 className="text-white font-medium text-base flex items-start gap-2 tracking-wide mb-1">
              <FaSchool className="text-teal-400 text-lg mt-1" />
              <span>Jai Academy, Jhansi</span>
            </h4>
            <p className="text-gray-400 text-sm">Class 10th – CBSE</p>
            <p className="text-gray-500 text-xs">April 2017 – March 2018</p>
            <p className="text-teal-300 text-sm mt-2">Percentage: 86%</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
