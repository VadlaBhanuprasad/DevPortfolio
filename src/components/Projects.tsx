import React from 'react';
import { ExternalLink, Github, Calendar, Tag, Star } from 'lucide-react';



const Projects = () => {
  const projects = [
    {
      title: "Warehouse Management System",
      description: "A React-based front-end application designed for efficient warehouse operations. Built dynamic UI components for inventory tracking, order management, and real-time updates.",
      image: "https://www.amsc-usa.com/wp-content/uploads/2023/06/warehouse-efficiency.jpg",
      technologies: ["React", "TypeScript", "JavaScript", "BootStrap", "JWT", "AntDesign"],
      github: "https://github.com/VadlaBhanuprasad",
      live: "https://dev.earbor.com/",
      featured: false,
      status: "Completed"
    },
    {
      title: "Song Brite - A Modern Music Streaming Application",
      description: "Song Brite is a sleek, Spotify-inspired music streaming application built using Next.js, TypeScript, and Styled Components. It delivers a smooth, responsive user experience for discovering, playing, and managing music.",
      image: "/assets/songBrite.png",
      technologies: ["ReactJs", "TypeScript", "Redux", "AntDesign", "CSS3", "API's", "JWT"],
      github: "https://github.com/VadlaBhanuprasad",
      live: "https://songbriteweb.earbor.com/",
      featured: false,
      status: "Completed"
    },
    {
      title: "HRM Dashboard",
      description: "An HR Management dashboard to handle candidate onboarding, employee verification, document uploads, and role-based access with progress tracking and responsive UI.",
      image: "/assets/HRMDashboard.png",
      technologies: ["React", "TypeScript", "AntDesign", "JWT", "REST APIs", "Responsive Design"],
      github: "https://github.com/VadlaBhanuprasad",
      live: "https://gchrms.earbor.com/login",
      featured: false,
      status: "Completed"
    },
    {
      title: "Fleet Management System",
      description: "A fleet management platform to track vehicles, drivers, routes, and maintenance with real-time updates, dashboards, and role-based access control.",
      image: "/assets/fleetmanagement.png",
      technologies: ["React", "Node.js", "TypeScript", "JWT", "APIs", "Dashboards"],
      github: "https://github.com/VadlaBhanuprasad",
      live: "https://gcfms.earbor.com/",
      featured: false,
      status: "Completed"
    },
    {
      title: "FAS Trading & Establishment – Company Profile",
      description: "Created a professional, high-level company profile and value proposition for a Saudi industrial services firm, highlighting certified manpower, heavy equipment rental, and integrated contracting services with a strong focus on safety, quality, and client satisfaction.",
      image: "/assets/fas-tradingest.png",
      technologies: ["React", "TypeScript", "Mobile Responsive", "Email Sending"],
      github: "https://github.com/VadlaBhanuprasad/fas-trading-establishment.git",
      live: "https://fas-tradingest.netlify.app/",
      featured: false,
      status: "Completed"
    },
    {
      title: "Spice Garden Restaurant Website",
      description: "Designed and developed a responsive restaurant website for Spice Garden, showcasing menu, services, and contact details with a clean UI, smooth navigation, and mobile-friendly experience.",
      image: "/assets/SpicyGardenRestuarent.png",
      technologies: ["React", "JavaScript", "CSS3", "Responsive Design", "UI/UX"],
      github: "https://github.com/VadlaBhanuprasad/SpiceGardenRestuarent.git",
      live: "https://spicegardenarestuarent.netlify.app/",
      date: "Apr 2025",
      featured: false,
      status: "Completed"
    },
    {
      title: "NxtTrendz - E-commerce Application",
      description: "NxtTrendz is an e-commerce application built with React.js, JWT authentication, and CSS. It allows users to browse products by category, add them to the cart, and ensures a smooth and secure shopping experience.",
      image: "/assets/NXTTrendz.png",
      technologies: ["ReactJs", "JavaScript", "API Integration", "CSS3", "JWT Authentication", "Local Storage"],
      github: "https://github.com/VadlaBhanuprasad/nxt-trendz-app",
      live: "https://bhanunxttrendz.ccbp.tech/login",
      featured: false,
      status: "Completed"
    },
    {
      title: "IPL Dashboard",
      description: "IPL Dashboard is a web app to view participating IPL teams, their match results, and win/loss outcomes between teams. It also provides detailed information about each team.",
      image: "/assets/IPLDashboard.png",
      technologies: ["React", "CSS3", "Responsive Design", "API's"],
      github: "https://github.com/VadlaBhanuprasad/ipl-dashboard",
      live: "https://bhanuipldb.ccbp.tech/",
      featured: false,
      status: "Completed"
    },



  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-800/30 via-slate-900/20 to-slate-800/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(56,189,248,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(14,165,233,0.06),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 mx-auto mb-3 sm:mb-4 rounded-full animate-glow"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Here's a showcase of projects I've built during my learning journey as a Full stack developer,
            demonstrating my growth and technical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 card-hover shadow-2xl scroll-animate ${project.featured ? 'xl:col-span-1 md:col-span-2 xl:row-span-1' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </span>
                </div>
              )}

              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status === 'Completed'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                  {project.status}
                </span>
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 sm:h-44 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-4 sm:p-5">
                {/* <div className="flex items-center gap-1.5 mb-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-medium">{project.date}</span>
                </div> */}

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>

                <p
                  className="text-gray-300 mb-3 leading-relaxed text-xs sm:text-sm line-clamp-2 group-hover:text-gray-200 transition-colors duration-300 cursor-help"
                  title={project.description}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full text-xs border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${techIndex * 0.05}s` }}
                    >
                      <Tag className="w-3 h-3 inline mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/60 hover:bg-slate-700/60 text-white rounded-lg transition-all duration-300 border border-slate-600/50 hover:border-cyan-500/50 transform hover:scale-105 flex-1 justify-center"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex-1 justify-center shadow-lg hover:shadow-cyan-500/25"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 scroll-animate">
          <a
            href="https://github.com/VadlaBhanuprasad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 btn-primary"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;