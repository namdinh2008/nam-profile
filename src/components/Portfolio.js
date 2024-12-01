import React, { useState } from 'react';
import { GithubIcon, Linkedin, Mail, Phone, Code, Wrench, CheckCircle } from 'lucide-react';
import "./Portfolio.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const contactInfo = {
    name: 'NamDinh',
    email: 'derricrane@gmail.com',
    phone: '0358846173',
    linkedin: '[LinkedIn Profile]',
    github: 'namdinh2008'
  };

  const sections = [
    { id: 'about', title: 'About Me' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' }
  ];

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: `A responsive and modern showcase built with React, Tailwind CSS, and React-Bootstrap, featuring smooth animation effect, features dynamic active link highlighting, a scroll-triggered background change and the hover effect within the proj-imgbx class highlights project details.`,
      technologies: ['React', 'Taiwind Css', 'React-bootstrap', 'Animation effect']
    },
    {
      title: 'To-Do List Application',
      description: 'To-Do app built with React and styled using Tailwind CSS allows users to manage tasks, with data stored in localStorage. It offers email/password and Google authentication via Firebase, ensuring secure logins. The app uses useState and useEffect hooks for task management and provides a smooth, interactive experience for organizing tasks.',
      technologies: ['Firebase', 'LocalStorage', 'React-router-dom']
    },
    {
      title: 'Weather App',
      description: 'Weather forecast website, built with React, offers real-time weather data for major cities globally. Uses AsyncPaginate for dynamic city search suggestions and fetches data via a geo API based on user input. The site also features temperature charts created with recharts to visualize current and forecasted temperatures.',
      technologies: ['React-select-async-paginate', 'API', 'Recharts']
    },
    {
      title: 'Pepe App',
      description: 'The Pepe app is a responsive React-based clone of pepe.vip, featuring smooth navigation with HashLink, modern design, and seamless scrolling between sections. It incorporates embedded iframes for related content and visually engaging Pepe branding.',
      technologies: ['Responsive', 'React-router-hash-link']
    }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-xl">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-purple-700 mb-4">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Enthusiastic first-year Computer Science student at Aptech, seeking an internship as a front-end developer. 
                Passionate about coding and eager to learn from experienced developers in a professional environment. 
                Ready to contribute to real-world projects and grow my skills in front-end technologies.
              </p>
            </div>
        
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-300 pb-2 inline-block mb-4">Education</h3>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/2">
                  <h4 className="text-xl font-semibold text-purple-500">ADSE International Programmer</h4>
                  <p className="text-gray-700 mt-2">
                    <span className="block font-medium">Aptech Computer Education</span>
                    Hanoi, Vietnam
                  </p>
                  <p className="text-gray-600 mt-2 italic">Expected Graduation: 2026</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-8 rounded-lg shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Front-End Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Code className="w-6 h-6 mr-2" /> Front-End Technologies
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    <span>
                      <strong>HTML:</strong> Proficient in writing clean, semantic markup and responsive design.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    <span>
                      <strong>CSS:</strong> Skilled in crafting visually appealing layouts with animations and custom styles.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    <span>
                      <strong>JavaScript:</strong> Experienced in dynamic functionality, DOM manipulation, and API integration.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    <span>
                      <strong>React:</strong> Skilled in creating SPAs and reusable components with React.
                    </span>
                  </li>
                </ul>
              </div>
      
              {/* Tools & Frameworks */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Wrench className="w-6 h-6 mr-2" /> Tools & Frameworks
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    <span>
                      <strong>Material UI:</strong> Designing modern, responsive UIs with Material UI components.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    <span>
                      <strong>Tailwind CSS:</strong> Utility-first responsive design with Tailwind CSS.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    <span>
                      <strong>Git:</strong> Proficient in branch management and resolving merge conflicts.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                    <span>
                      <strong>GitHub:</strong> Collaboration, pull requests, and code reviews.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
      
            {/* Key Strengths */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" /> Key Strengths
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span><strong>Passion for Coding:</strong> Enjoys solving problems and keeping up with industry trends.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span><strong>Fast Learner:</strong> Quickly adapts to new tools for seamless team integration.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span><strong>Team Player:</strong> Strong collaboration skills for timely project delivery.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span><strong>Attention to Detail:</strong> Meticulous in code writing and reviewing for high-quality results.</span>
                </li>
              </ul>
            </div>
          </div>
        );
        case 'projects':
          return (
            <div className="bg-gradient-to-r from-purple-50 via-white to-purple-50 p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-extrabold mb-6 text-purple-700 border-b-4 border-purple-500 inline-block">Projects</h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-8 p-6 bg-white shadow-md rounded-lg transition-transform hover:scale-105">
                  <h3 className="font-bold text-purple-600 text-2xl mb-2 hover:underline">
                    <a href="#">{project.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-200 text-purple-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:bg-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
          case 'contact':
            return (
              <div className="bg-gradient-to-r from-purple-50 via-white to-purple-50 p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-extrabold mb-6 text-purple-700 border-b-4 border-purple-500 inline-block">
                  Contact Me
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="text-purple-500 text-2xl" />
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-lg text-gray-700 hover:text-purple-600 font-medium transition duration-300"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-purple-500 text-2xl" />
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-lg text-gray-700 hover:text-purple-600 font-medium transition duration-300"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="text-purple-500 text-2xl" />
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-700 hover:text-purple-600 font-medium transition duration-300"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <GithubIcon className="text-purple-500 text-2xl" />
                    <a
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-700 hover:text-purple-600 font-medium transition duration-300"
                    >
                      {contactInfo.github}
                    </a>
                  </div>
                </div>
              </div>
            );
          
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="bg-white shadow-md rounded-lg mb-8 header-width">
          <div className="p-6 text-center">
            <h1 className="text-4xl font-bold text-white text-header">{contactInfo.name} Profile</h1>
            <p className="text-gray-600 mt-2 font-bold">Front-End Developer | Computer Science Student</p>
          </div>
          
          {/* Navigation */}
          <nav className="flex justify-center border-t">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-3 transition-colors duration-300 font-bold ${
                  activeSection === section.id 
                    ? 'bg-red-400 text-white' 
                    : 'text-gray-700 hover:bg-red-200'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </header>

        {/* Main Content */}
        <main className="px-4">
          {renderSection()}
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500">
          <p>© 2024 {contactInfo.name} | All Rights Reserved</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-purple-500 hover:text-purple-700" />
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="text-gray-700 hover:text-gray-900" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;