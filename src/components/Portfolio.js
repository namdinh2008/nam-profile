import React, { useState } from 'react';
import { GithubIcon, Linkedin, Mail, Phone } from 'lucide-react';

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
      description: 'Developed a responsive personal portfolio using HTML, CSS, JavaScript, and React. Implemented a clean and modern design to showcase my skills, projects, and contact information. Integrated Material UI components for a more professional look.',
      technologies: ['React', 'HTML', 'CSS', 'Material UI']
    },
    {
      title: 'To-Do List Application',
      description: 'Built an interactive To-Do List web app using React. Utilized useState and useEffect hooks for managing state and local storage to retain tasks between sessions. Applied Tailwind CSS for styling and improving the UI/UX of the application.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript']
    },
    {
      title: 'Weather App',
      description: 'Created a simple weather forecasting application using JavaScript and React. Leveraged the OpenWeather API to fetch real-time weather data for user-input cities. Practiced asynchronous programming techniques to handle API requests smoothly.',
      technologies: ['React', 'JavaScript', 'API Integration']
    }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">About Me</h2>
            <p className="text-gray-700">
              Enthusiastic first-year Computer Science student at Aptech, seeking an internship as a front-end developer. 
              Passionate about coding and eager to learn from experienced developers in a professional environment. 
              Ready to contribute to real-world projects and grow my skills in front-end technologies.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-blue-500">Education</h3>
              <p className="text-gray-700">
                Diploma in Computer Science
                <br />
                Aptech Computer Education, [City]
                <br />
                Expected Graduation: [Year]
              </p>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-blue-500">Front-End Technologies</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-500">Tools & Frameworks</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Material UI</li>
                  <li>Tailwind CSS</li>
                  <li>Git</li>
                  <li>GitHub</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-blue-500">Key Strengths</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Passion for Coding</li>
                <li>Fast Learner</li>
                <li>Team Player</li>
                <li>Attention to Detail</li>
              </ul>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-6 border-b pb-4 last:border-b-0">
                <h3 className="font-semibold text-blue-500 text-xl">{project.title}</h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
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
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="mr-3 text-blue-500" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-blue-600">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-blue-500" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-700 hover:text-blue-600">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="mr-3 text-blue-500" />
                <a 
                  href={contactInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-blue-600"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center">
                <GithubIcon className="mr-3 text-blue-500" />
                <a 
                  href={contactInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-blue-600"
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
        <header className="bg-white shadow-md rounded-lg mb-8">
          <div className="p-6 text-center">
            <h1 className="text-4xl font-bold text-blue-700">{contactInfo.name} Profile</h1>
            <p className="text-gray-600 mt-2">Front-End Developer | Computer Science Student</p>
          </div>
          
          {/* Navigation */}
          <nav className="flex justify-center border-t">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-3 transition-colors duration-300 ${
                  activeSection === section.id 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:bg-blue-100'
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
              <Linkedin className="text-blue-500 hover:text-blue-700" />
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