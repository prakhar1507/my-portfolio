import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Delivery Time Estimator',
    description:
      'Developed a delivery time estimator that accurately forecasts food delivery time based on multiple features with an impressive R2 of 0.84. The GUI offers a user-centric design, allowing users to customize predictions based on a diverse set of parameters.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Streamlit'],
    github: 'https://github.com/prakhar1507/minor_1',
    demo: '',
  },
  {
    title: 'Restaurant Recommendation System',
    description:
      'Built a restaurant recommendation system using data scraped from Zomato. Used BeautifulSoup for scraping, and NLP with TF-IDF and cosine similarity to recommend top 5 restaurants in a user’s region.',
    tech: ['Python', 'NLP', 'Streamlit', 'Scikit-learn', 'Gemini', 'Api Integration'],
    github: 'https://github.com/prakhar1507/host_resto',
    demo: '',
  },
  {
    title: 'Question Answer Evaluation Model',
    description:
      'The model compares user answers with original answers to evaluate content similarity and grammar using an API. It combines both scores for fair automated grading.',
    tech: ['Python', 'NLTK', 'Scikit-learn', 'Api Integration'],
    github: 'https://github.com/prakhar1507/Subjective-Answer-validation-model',
    demo: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a192f] text-white py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 text-center mb-12 tracking-wide">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f172a] rounded-xl border border-gray-700 hover:border-teal-400 transition-all p-6 flex flex-col shadow-lg"
            >
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <p className="text-white font-semibold mb-2 text-sm">Tech Stack:</p>
                <div className="flex flex-wrap gap-2 min-h-[64px] mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#112240] text-teal-300 px-2 py-1 rounded-full text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-700">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-teal-400 text-sm gap-1"
                  >
                    <FaGithub className="text-lg" /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-teal-400 text-sm gap-1"
                  >
                    <FiExternalLink className="text-lg" /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
