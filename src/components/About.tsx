import React from 'react';
import { Code, Zap, Users, Lightbulb, Globe, Building2, MapPin, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices and modern standards"
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Fast Learner",
      description: "Quick to adapt and master new technologies in the rapidly evolving web landscape"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Team Player",
      description: "Collaborative approach to problem-solving and agile project development"
    },
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Problem Solver",
      description: "Analytical mindset with innovative solutions to complex technical challenges"
    }
  ];

  const languages = [
    {
      name: "English",
      level: "Fluent",
      proficiency: 90,
      description: "Professional working proficiency"
    },
    {
      name: "Telugu",
      level: "Native",
      proficiency: 100,
      description: "Mother tongue"
    },
    {
      name: "Hindi",
      level: "Conversational",
      proficiency: 75,
      description: "Good conversational skills"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(14,165,233,0.06),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 mx-auto rounded-full animate-glow"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          <div className="scroll-animate-left space-y-8">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                ReactJs Developer
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed">
                I am a dedicated Full Stack Developer with 1+ years of professional experience, specializing in React.Js,Next.Js JavaScript, TypeScript, and Node.Js. Currently working at <span className="text-emerald-400 font-semibold">eArbor LLP</span> in Madhapur, Hyderabad since <span className="text-emerald-400 font-semibold">December 2024</span>, I am actively contributing to a critical on-site project, where I play a key role in designing, developing, and optimizing core front-end components and integrating RESTful APIs. My strengths include writing clean, scalable code, building responsive and user-centric interfaces using React, Redux, and TypeScript, and collaborating effectively with cross-functional teams. I’m passionate about creating high-performance web applications, solving real-world business challenges, and continually upgrading my skills in a fast-paced Agile environment.


              </p>

              {/* Current Employment Highlight */}
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-lg sm:rounded-xl border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  <h4 className="text-emerald-400 font-semibold text-sm sm:text-base">Currently at eArbor LLP</h4>
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span className="text-gray-300">Madhapur, Hyderabad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span className="text-gray-300">Collaborative Team Environment</span>
                  </div>
                </div>
                <p className="text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed">
                  Working on cutting-edge web applications with modern technologies in an agile development environment,
                  contributing to client projects and learning from experienced developers.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['React.Js', 'Next.Js', 'Node.Js', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS', "Materia UI", 'AntDesign', "NPM", "Redux Toolkit", "RESTFul APIs", 'Git & GitHub'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full text-xs border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>


          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 scroll-animate-right">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 card-hover group shadow-xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-cyan-400 mb-2 sm:mb-3 group-hover:text-cyan-300 transition-colors duration-300 group-hover:scale-110 transform">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base mb-1.5 sm:mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
            {/* Languages Section */}
            <div className="col-span-1 sm:col-span-2 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                Languages
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {languages.map((language, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                      <div>
                        <span className="text-white font-semibold text-sm sm:text-base group-hover:text-cyan-400 transition-colors duration-300">
                          {language.name}
                        </span>
                        <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">
                          {language.description}
                        </p>
                      </div>
                      <span className="text-cyan-400 text-xs font-bold bg-cyan-500/20 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-cyan-500/30">
                        {language.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-105 skill-bar relative"
                        style={{
                          width: `${language.proficiency}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 sm:mt-14 md:mt-16 scroll-animate">
          <div className="bg-gradient-to-r from-slate-800/60 via-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                { number: '1+', label: 'Years Experience' },
                { number: '10+', label: 'Projects Built' },
                { number: '15+', label: 'Technologies' },
                { number: '3', label: 'Languages' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;