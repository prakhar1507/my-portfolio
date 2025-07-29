import React from 'react';
import { FaBriefcase, FaUsers, FaAward } from 'react-icons/fa';

const Experience = () => {
  const timelineItems = [
    {
      icon: <FaBriefcase className="text-teal-400 text-xl" />,
      title: 'Data Analyst Intern',
      org: 'Careervira Pvt Ltd',
      location: 'Remote',
      duration: 'Feb 2024 – July 2024',
      points: [
        'Leads Prioritization Project (Python, Pygsheets, Playwright): Utilized Playwright to automate the collection of relevant LinkedIn post data, fed into Hugging Face language models for intent classification. Achieved 75% reduction in lead generation time with 85% accuracy.',
        'Implemented 15+ API requests within Scrapy to extract targeted data from dynamically loaded JavaScript content on websites, demonstrating web scraping proficiency.'
      ]
    },
    {
      icon: <FaUsers className="text-teal-400 text-xl" />,
      title: 'Core Member',
      org: 'Mozilla Phoenix',
      duration: 'Nov 2021 – Aug 2024',
      points: [
        'Contributed to open-source projects focused on data science and ML, including automation pipelines and data workflows',
        'Collaborated in organizing tech events, promoting open web advocacy among students.'
      ]
    },
    {
      icon: <FaUsers className="text-teal-400 text-xl" />,
      title: 'Technical Coordinator',
      org: 'Rospinot',
      duration: 'Jan 2022 – Feb 2024',
      points: [
        'Managed multiple data pipelines and collaborated on college-level automation initiatives.',
        'Delivered workshops to juniors on GitHub, APIs, and Python scripting.'
      ]
    },
    {
      icon: <FaUsers className="text-teal-400 text-xl" />,
      title: 'Member',
      org: 'Juet Alumni Association',
      duration: 'Nov 2021 – May 2025',
      points: [
        'Assisted in planning alumni meets and career mentorship webinars.',
        'Strengthened alumni-student relations by managing communications.'
      ]
    },
  ];

  return (
    <section id="experience" className="bg-[#0a192f] text-white py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 text-center mb-12 tracking-wide">
          Work Experience & Involvement
        </h2>

        <div className="relative border-l border-teal-400 ml-4">
          {timelineItems.map((item, index) => (
            <div key={index} className="mb-12 ml-6">
              <div className="absolute -left-5 bg-[#0a192f] p-2 rounded-full border border-teal-400">
                {item.icon}
              </div>
              <div className="bg-[#0f172a] p-5 rounded-md shadow-lg border border-gray-700 hover:border-teal-400 transition-all">
                <div className="flex justify-between items-center">
                  <h3 className="text-teal-400 text-lg font-semibold tracking-wide">{item.title}</h3>
                  <span className="text-sm text-gray-400">{item.duration}</span>
                </div>
                <p className="text-red-400 text-sm mb-2">{item.org}</p>
                {item.location && (
                  <p className="text-gray-400 text-sm italic mb-2">{item.location}</p>
                )}
                <ul className="list-disc ml-5 text-sm text-gray-300 space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
