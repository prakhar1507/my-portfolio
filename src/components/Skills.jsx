import {
  SiPython, SiCplusplus, SiHtml5, SiCss3, SiMysql, SiNumpy,
  SiPandas, SiScikitlearn, SiMatplotlib, SiSeaborn, SiPlotly,
  SiStreamlit, SiFlask, SiPowerbi, SiTableau, SiGooglesheets,
  SiPlaywright, SiScrapy, SiVisualstudiocode, SiJupyter,
  SiGithub, SiGit, SiMicrosoftoffice, SiKaggle, SiAmazonaws, SiMicrosoftazure
} from 'react-icons/si';
import { FaAws, FaChartBar , FaFilePowerpoint ,FaCode} from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { TbAutomation } from "react-icons/tb";
import { GiVendingMachine } from "react-icons/gi";


const skills = {
  Languages: [
    { name: 'C/C++', icon: <SiCplusplus /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'SQL', icon: <SiMysql /> },
  ],
  'Automation / Scraping': [
    { name: 'Playwright', icon: <TbAutomation /> },
    { name: 'Scrapy', icon: <SiScrapy /> },
  ],
  'Frameworks & Packages': [
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'Scikit-learn', icon: <GiVendingMachine /> },
    { name: 'Matplotlib', icon: <FaChartBar  /> },
    // { name: 'Seaborn', icon: <SiSeaborn /> },
    // { name: 'Plotly', icon: <SiPlotly /> },
    { name: 'Streamlit', icon: <SiStreamlit /> },
    { name: 'Flask', icon: <SiFlask /> },
  ],
  'BI & Data Tools': [
    // { name: 'Power BI', icon: <SiPowerbi /> },
    { name: 'Tableau', icon: <SiTableau /> },
    { name: 'Google Sheets', icon: <SiGooglesheets /> },
  ],
  'Tools & Platforms': [
    { name: 'Microsoft Azure', icon: <VscAzure /> },
    { name: 'AWS', icon: <FaAws/> },
    { name: 'VS Code', icon: <FaCode /> },
    { name: 'Jupyter', icon: <SiJupyter /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'Kaggle', icon: <SiKaggle /> },
    { name: 'MS Office', icon: <FaFilePowerpoint /> },
  ],
};

const coursework = [
  'Data Structures and Algorithms',
  'Database Management System',
  'Object Oriented Programming',
  'Operating Systems',
  'Computer Networks',
  'Statistics',
  'Discrete Mathematics',
];

const competencies = [
  'Problem Solving',
  'Presentations',
  'Oratory',
  'Team Leadership',
  'Event Hosting',
  'Agile Methodologies',
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a192f] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-10 text-center tracking-wide">
          Tech Stack
        </h2>

        {/* Tech Categories */}
        {Object.entries(skills).map(([category, tools], index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl sm:text-2xl text-teal-300 font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-[#0f172a] p-4 rounded-xl border border-gray-700 hover:border-teal-400 transition duration-300"
                >
                  <div className="text-3xl text-teal-400 mb-2">{tool.icon}</div>
                  <p className="text-sm text-gray-300 tracking-wide text-center">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

       
{/* Coursework Section */}
<div className="mb-12" data-aos="fade-left">
  <h3 className="text-xl sm:text-2xl text-teal-300 font-semibold mb-4">Coursework</h3>
  <div className="flex flex-wrap gap-2 sm:gap-3">
    {coursework.map((course, index) => (
      <span
        key={index}
        className="bg-[#1e2639] text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-mono tracking-wide"
      >
        {course}
      </span>
    ))}
  </div>
</div>
{/* Data Skills Section - Styled as Pills */}
<div className="mb-12" data-aos="fade-right">
  <h3 className="text-xl sm:text-2xl text-teal-300 font-semibold mb-4">Data Skills</h3>
  <div className="flex flex-wrap gap-2 sm:gap-3">
    {[
      'Data Analysis',
      'Statistical Modelling',
      'Recommendation System',
      'Web Scraping',
      'Machine Learning',
      'NLP'
    ].map((skill, index) => (
      <span
        key={index}
        className="bg-[#1e2639] text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-mono tracking-wide"
      >
        {skill}
      </span>
    ))}
  </div>
</div>


{/* Core Competencies Section */}
<div data-aos="fade-up">
  <h3 className="text-xl sm:text-2xl text-teal-300 font-semibold mb-4">Core Competencies</h3>
  <div className="flex flex-wrap gap-2 sm:gap-3">
    {competencies.map((skill, index) => (
      <span
        key={index}
        className="bg-[#1e2639] text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-mono tracking-wide"
      >
        {skill}
      </span>
    ))}
  </div>
</div>



 
        
      </div>
    </section>
  );
};

export default Skills;
