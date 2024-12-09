import React, { useState } from "react";
import {
  GithubIcon,
  Mail,
  Phone,
  Code,
  Wrench,
  CheckCircle,
} from "lucide-react";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  const contactInfo = {
    name: "NamDinh",
    email: "derricrane@gmail.com",
    phone: "0358846173",
    linkedin: "https://www.linkedin.com/in/%C4%91inh-nam-b158112aa/",
    github: "https://github.com/namdinh2008",
  };

  const sections = [
    { id: "about", title: "About Me" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  const projects = [
    {
      title: "To-Do List Application",
      link: "https://namdinh-simple-todo-list-app.netlify.app/",
      description: [
        "Developed with *React* and styled using *Tailwind CSS*.",
        "Core functionality includes:",
        "  - Task management with data stored in *localStorage*.",
        "  - Secure logins with *Firebase* supporting email/password and Google authentication.",
        "  - Dynamic updates using *useState* and *useEffect* hooks.",
        "  - Provides a smooth and interactive experience for organizing tasks.",
      ],
      technologies: ["Firebase", "LocalStorage", "React-router-dom"],
    },
    {
      title: "Weather App",
      link: "https://weather-app-namdinh.netlify.app/",
      description: [
        "A weather forecast website offering real-time weather data for major cities globally.",
        "Built using *React* with the following features:",
        "  - *AsyncPaginate* for dynamic city search suggestions.",
        "  - Integration with a *geo API* to fetch weather data based on user input.",
        "  - Temperature visualization using *Recharts* for both current and forecasted weather.",
      ],
      technologies: ["React-select-async-paginate", "API", "Recharts"],
    },
    {
      title: "Pepe App",
      link: "https://pepe-app-produce.netlify.app/",
      description: [
        "A responsive *React-based* clone of <a href='https://pepe.vip' target='_blank' rel='noopener noreferrer'>*pepe.vip*</a>",
        "Features include:",
        "  - Smooth navigation between sections using *HashLink*.",
        "  - Modern and visually engaging design incorporating Pepe branding.",
        "  - Embedded *iframes* for related content.",
      ],
      technologies: ["Lucide-react", "Taiwind Css"],
    },
    {
      title: "NamDinh Profile",
      link: "https://pepe-app-produce.netlify.app/",
      description: [
        "A responsive portfolio website created with *React* and *Tailwind CSS* to showcase my work and skills.",
        "Features include:",
        "  - *Dynamic UI*: Built with React.js for an interactive experience.",
        "  - *Responsive Design*: Optimized for all device sizes.",
        "  - *Smooth Navigation*: Uses React Router for easy transitions.",
        "  - *Project Showcase*: Features key projects with descriptions and visuals.",
        "  - *Contact Section*: Includes a direct contact form for visitors.",
      ],
      technologies: ["Responsive", "React-router-hash-link"],
    },
    {
      title: "Personal Portfolio Website",
      link: "https://namdinh-portfolio.netlify.app/",
      description: [
        "Built using *React*, *Tailwind CSS*, and *React-Bootstrap* for a responsive and modern showcase.",
        "Key features include:",
        "  - *Dynamic active link highlighting* to show the current section.",
        "  - *Hover effects* within the `proj-imgbx` class to reveal project details interactively.",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "React-Bootstrap",
        "Animation effects",
      ],
    },
  ];

  const formatText = (text) => {
    // Handle bold text
    text = text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");

    // Handle links
    text = text.replace(
      /\[(.*?)\]$$(.*?)$$/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    return text;
  };

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100 p-8 rounded-lg shadow-xl">
            {/* Introduction */}
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-purple-700 mb-4">
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Enthusiastic first-year Computer Science student at Aptech,
                seeking an internship as a front-end developer. Passionate about
                coding and eager to learn from experienced developers in a
                professional environment. Ready to contribute to real-world
                projects and grow my skills in front-end technologies.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
              {/* Personal Details */}
              <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-300 pb-2 inline-block mb-4">
                  Personal Details
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Name:</span>
                    <span className="text-purple-600 font-semibold">
                      Đinh Đức Nam
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Age:</span>
                    <span className="text-purple-600 font-semibold">20</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">
                      Date of Birth:
                    </span>
                    <span className="text-purple-600 font-semibold">
                      25/08/2004
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Hometown:</span>
                    <span className="text-purple-600 font-semibold">
                      Hải Dương
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">
                      Current Residence:
                    </span>
                    <span className="text-purple-600 font-semibold">
                      292 Nguyễn Trãi, Hà Nội
                    </span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-purple-600 border-b-2 border-purple-300 pb-2 inline-block mb-4">
                  Education
                </h3>
                <div>
                  <h4 className="text-xl font-semibold text-purple-500 transition-transform transform hover:scale-110 hover:translate-x-5">
                    <a
                      href="https://aptech.vn/lap-trinh-vien-quoc-te-adse"
                      target="_bank"
                    >
                      ADSE International Programmer
                    </a>
                  </h4>
                  <p className="text-gray-700 mt-2">
                    <span className="block font-medium">
                      Aptech Computer Education
                    </span>
                    <span>175 P. Tây Sơn, Trung Liệt, Đống Đa, Hà Nội</span>
                  </p>
                  <p className="text-gray-600 mt-2 italic">
                    Expected Graduation: 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 p-8 rounded-lg shadow-lg text-black">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Front-End Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-purple-700">
                  <Code className="w-6 h-6 mr-2" /> Front-End Technologies
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-700 minw-5 pt-1.5" />
                    <span>
                      <strong>HTML:</strong> Proficient in writing clean,
                      semantic markup and responsive design.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-700 minw-5 pt-1.5" />
                    <span>
                      <strong>CSS:</strong> Skilled in crafting visually
                      appealing layouts with animations and custom styles.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-700 minw-5 pt-1.5" />
                    <span>
                      <strong>JavaScript:</strong> Experienced in dynamic
                      functionality, DOM manipulation, and API integration.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-700 minw-5 pt-1.5" />
                    <span>
                      <strong>React:</strong> Skilled in creating SPAs and
                      reusable components with React.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Tools & Frameworks */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-purple-700">
                  <Wrench className="w-6 h-6 mr-2" /> Tools & Frameworks
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-700 minw-5 pt-1.5" />
                    <span>
                      <strong>Material UI:</strong> Designing modern, responsive
                      UIs with Material UI components.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-700 minw-5 pt-1.5" />
                    <span>
                      <strong>Tailwind CSS:</strong> Utility-first responsive
                      design with Tailwind CSS.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-700 minw-5 pt-1.5" />
                    <span>
                      <strong>Git:</strong> Proficient in branch management and
                      resolving merge conflicts.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-700 minw-5 pt-1.5" />
                    <span>
                      <strong>GitHub:</strong> Collaboration, pull requests, and
                      code reviews.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Strengths */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-purple-700">
                <CheckCircle className="w-6 h-6 mr-2" /> Key Strengths
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-700 minw-5 pt-1.5" />
                  <span>
                    <strong>Passion for Coding:</strong> Enjoys solving problems
                    and keeping up with industry trends.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-700 minw-5 pt-1.5" />
                  <span>
                    <strong>Fast Learner:</strong> Quickly adapts to new tools
                    for seamless team integration.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-700 minw-5 pt-1.5" />
                  <span>
                    <strong>Team Player:</strong> Strong collaboration skills
                    for timely project delivery.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-700 minw-5 pt-1.5" />
                  <span>
                    <strong>Attention to Detail:</strong> Meticulous in code
                    writing and reviewing for high-quality results.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        );
      case "projects":
        return (
          <div className="bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-extrabold mb-6 text-purple-700 border-b-4 border-purple-500 inline-block">
              Projects
            </h2>
            {projects.map((project, index) => (
              <div
                key={index}
                className="mb-8 p-6 bg-white shadow-md rounded-lg transition-transform hover:scale-105"
              >
                <h3 className="font-bold text-purple-600 text-2xl mb-2 hover:underline">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div>
                  {project.description.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatText(item) }}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
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
      case "contact":
        return (
          <div className="bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-extrabold mb-6 text-purple-700 border-b-4 border-purple-500 inline-block">
              Contact Me
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="text-purple-500 text-2xl" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg text-gray-700 hover:text-purple-600 font-medium transition duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-purple-500 text-2xl" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-lg text-gray-700 hover:text-purple-600 font-medium transition duration-300"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <GithubIcon className="text-purple-500 text-2xl" />
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-700 hover:text-purple-600 font-medium transition duration-300"
                >
                  namdinh2008
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
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <header
          className="bg-cover bg-center shadow-md rounded-lg mb-8 max-w-4xl header-width block"
        >
          <div className="content">
            {/* Profile Section */}
            <div className="p-6 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-header">
                {contactInfo.name} Profile
              </h1>
              <p className="text-gray-600 mt-2 font-bold text-sm sm:text-base lg:text-lg">
                Front-End Developer | Computer Science Student
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center border-t border-gray-300 mt-4 bg-transparent">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 sm:py-3 transition-colors duration-300 font-bold text-sm sm:text-base lg:text-lg ${
                    activeSection === section.id
                      ? "bg-purple-400 text-white"
                      : "text-gray-700 hover:bg-purple-200"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="">{renderSection()}</main>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500">
          <p>© 2024 {contactInfo.name} | All Rights Reserved</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href={`mailto:${contactInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="text-gray-700 hover:text-gray-900" />
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="text-gray-700 hover:text-gray-900" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
