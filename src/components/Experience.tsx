import { Briefcase, Calendar, MapPin, Building2, Users, Code, Zap, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "eArbor LLP",
      location: "Madhapur, Hyderabad",
      period: "December 2024 - Present",
      type: "Full-time",
      status: "Current Position",
      achievements: [
        "Developing and maintaining full-stack web applications using React.js,Next.js Node.js, Express, and MongoDB",
        "Collaborating with cross-functional teams in an agile development environment",
        "Implementing responsive UI components and optimizing application performance",
        "Contributing to code reviews and maintaining high code quality standards",
        "Working on client projects with modern development practices and tools"
      ],
      workEnvironment: {
        teamSize: "30 developers",
        methodology: "Agile/Scrum",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Git", "VS Code"],
        culture: "Collaborative, Learning-focused, Innovation-driven"
      }
    },
    // {
    //   title: "Self-Taught Full Stack Developer",
    //   company: "Personal Learning Journey",
    //   location: "Remote",
    //   period: "July 2024 - December 2024",
    //   type: "Learning & Development",
    //   status: "Completed",
    //   achievements: [
    //     "Completed comprehensive Full stack curriculum covering React, Node.js, Express, and MongoDB",
    //     "Built 5+ full-stack applications demonstrating proficiency in frontend and backend development",
    //     "Gained hands-on experience with modern development tools and best practices",
    //     "Developed strong problem-solving skills through debugging and optimization challenges"
    //   ]
    // },
    {
      title: "MERN Stack Web Development Program",
      company: "NxtWave Online Learning Platform",
      location: "Remote",
      period: "January 2024 – November 2024",
      type: "Education",
      status: "Completed",
      achievements: [
        "Completed intensive MERN Stack training covering MongoDB, Express.js, React, and Node.js",
        "Built and deployed 20+ responsive web applications using modern JavaScript and React",
        "Developed full-stack applications with RESTful APIs using Node.js and Express",
        "Implemented state management, hooks, routing, and component lifecycle in React",
        "Designed and managed MongoDB databases with CRUD operations and schema modeling",
        "Completed multiple real-world projects demonstrating end-to-end web development skills"
      ]
    }
  ];

  const workEnvironmentHighlights = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Modern Office Space",
      description: "State-of-the-art development environment in Madhapur tech hub"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Team",
      description: "Working with experienced developers and learning from industry experts"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Latest Technologies",
      description: "Using cutting-edge tools and frameworks for modern web development"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Agile Environment",
      description: "Fast-paced development with continuous learning and improvement"
    }
  ];

  const certifications = [
    "React.js Certification – NxtWave",
    "Node.js Certification – NxtWave",
    "TypeScript and JavaScript Certifications – NxtWave",
    "SQL (MySQL) Certification – NxtWave",
    "Python Programming Certification"
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.06),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 mx-auto mb-3 sm:mb-4 rounded-full animate-glow"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            My professional path and achievements as a dedicated Full stack developer,
            currently contributing to innovative projects at eArbor LLP
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
              Professional Experience
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative scroll-animate" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>
                  )}

                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 ${exp.status === 'Current Position' ? 'bg-gradient-to-r from-emerald-500 to-green-500 animate-pulse' : 'bg-gradient-to-r from-cyan-500 to-blue-500'} rounded-full flex items-center justify-center shadow-lg`}>
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 flex-1 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl card-hover">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{exp.title}</h4>
                        <div className="flex gap-2">
                          <span className={`px-2 py-1 sm:px-3 sm:py-1.5 ${exp.status === 'Current Position' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'} rounded-full text-xs border font-medium`}>
                            {exp.type}
                          </span>
                          {exp.status === 'Current Position' && (
                            <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-green-500/20 text-green-400 border-green-500/30 rounded-full text-xs border font-medium animate-pulse">
                              <Award className="w-4 h-4 inline mr-1" />
                              Current
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4 text-gray-300 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-cyan-400" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-3 sm:mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-xs sm:text-sm flex items-start gap-2 leading-relaxed">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Work Environment Details for Current Position */}
                      {exp.workEnvironment && (
                        <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20">
                          <h5 className="text-emerald-400 font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-xs sm:text-sm">
                            <Building2 className="w-5 h-5" />
                            Work Environment at eArbor LLP
                          </h5>
                          <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                            <div>
                              <span className="text-gray-400">Team Size:</span>
                              <span className="text-white ml-2 font-medium">{exp.workEnvironment.teamSize}</span>
                            </div>
                            <div>
                              <span className="text-gray-400">Methodology:</span>
                              <span className="text-white ml-2 font-medium">{exp.workEnvironment.methodology}</span>
                            </div>
                            <div className="sm:col-span-2">
                              <span className="text-gray-400">Culture:</span>
                              <span className="text-white ml-2 font-medium">{exp.workEnvironment.culture}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Work Environment Highlights */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-2xl scroll-animate">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-emerald-400 to-green-500 rounded-full"></div>
                Work Environment
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {workEnvironmentHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-900/40 rounded-lg sm:rounded-xl border border-slate-700/30 hover:border-emerald-500/50 transition-all duration-300 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-0.5 group-hover:text-emerald-100 transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-2xl scroll-animate">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                Certifications
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 sm:p-3 bg-slate-900/40 rounded-lg sm:rounded-xl border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300 group">
                    <Award className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:text-cyan-300 transition-colors duration-300" />
                    <span className="text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-2xl scroll-animate">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                Quick Stats
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-gray-300">Current Role</span>
                  <span className="text-emerald-400 font-semibold">Full Developer</span>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-gray-300">Experience</span>
                  <span className="text-cyan-400 font-semibold">1+ Years</span>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-gray-300">Projects Built</span>
                  <span className="text-cyan-400 font-semibold">10+</span>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-gray-300">Technologies</span>
                  <span className="text-cyan-400 font-semibold">15+</span>
                </div>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-gray-300">Languages</span>
                  <span className="text-cyan-400 font-semibold">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;