import React from 'react';

const Skills = () => {
  // const skillCategories = [
  //   {
  //     title: "Frontend Development",
  //     skills: [
  //       { name: "HTML5", level: 90, description: "Semantic HTML, Accessibility" },

  //       { name: "React.js", level: 85, description: "Hooks, Context, Component Lifecycle" },
  //       { name: "JavaScript (ES6+)", level: 80, description: "Modern JS, Async/Await, Modules" },
  //       { name: "CSS3", level: 85, description: "Flexbox, Grid, Animations" },
  //       { name: "Tailwind CSS", level: 80, description: "Utility-first, Responsive Design" },
  //       { name: "Responsive Design", level: 85, description: "Mobile-first, Cross-browser" }
  //     ]
  //   },
  //   {
  //     title: "Backend Development",
  //     skills: [
  //       { name: "Node.js", level: 75, description: "Server-side JavaScript, NPM" },
  //       { name: "Express.js", level: 75, description: "RESTful APIs, Middleware" },
  //       { name: "RESTful APIs", level: 70, description: "CRUD Operations, HTTP Methods" },
  //       { name: "Authentication", level: 65, description: "JWT, Sessions, Security" },
  //       { name: "API Integration", level: 70, description: "Third-party APIs, Fetch" }
  //     ]
  //   },
  //   {
  //     title: "Database & Tools",
  //     skills: [
  //       { name: "MongoDB", level: 70, description: "NoSQL, Mongoose, Aggregation" },
  //       { name: "Git & GitHub", level: 80, description: "Version Control, Collaboration" },
  //       { name: "VS Code", level: 85, description: "Extensions, Debugging, Shortcuts" },
  //       { name: "Postman", level: 75, description: "API Testing, Documentation" },
  //       { name: "NPM/Yarn", level: 80, description: "Package Management, Scripts" }
  //     ]
  //   }
  // ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90, description: "Semantic HTML, Accessibility" },
        { name: "CSS3", level: 85, description: "Flexbox, Grid, Animations" },
        { name: "JavaScript (ES6+)", level: 85, description: "Modern JS, Async/Await, ES Modules" },
        { name: "TypeScript", level: 75, description: "Static Typing, Interfaces, Generics" },
        { name: "React.js", level: 90, description: "SPA, Virtual DOM, JSX" },
        { name: "Next.js", level: 85, description: "SSR, SSG, API routes, authentication, full-stack development" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first CSS, Responsive UI, Custom Design" },
        { name: "React Hooks", level: 85, description: "useState, useEffect, Custom Hooks" },
        { name: "Responsive Design", level: 85, description: "Mobile-first, Cross-browser Compatibility" }
      ]
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80, description: "Server-side JavaScript, Event-driven" },
        { name: "Express.js", level: 80, description: "Routing, Middleware, REST APIs" },
        { name: "RESTful APIs", level: 80, description: "CRUD Operations, HTTP Methods" },
        { name: "Authentication", level: 70, description: "JWT, Sessions, Passport.js" },
        { name: "API Integration", level: 75, description: "3rd-party APIs, Axios/Fetch" },
        { name: "Python", level: 65, description: "Problem Solving, Patterns, FastAPI" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 75, description: "NoSQL, Mongoose, Aggregation" },
        { name: "MySQL", level: 80, description: "Relational DB, Joins, SQL Queries" },
        { name: "PostgreSQL", level: 85, description: "Advanced SQL, Indexing, JSONB" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Redux", level: 80, description: "State Management, Middleware" },
        { name: "Redux Toolkit", level: 75, description: "Slices, RTK Query, Simplified Redux" },
        { name: "Bootstrap", level: 80, description: "Responsive Layouts, Utility Classes" },
        { name: "Ant Design", level: 75, description: "Component Library, Theming" },
        { name: "Material UI", level: 75, description: "Design System, Custom Components" }
      ]
    },
    {
      title: "Tools & Utilities",
      skills: [
        { name: "NPM (Node Package Manager)", level: 85, description: "Package Management, Script Automation" },

        { name: "Git", level: 80, description: "Version Control, Branching" },
        { name: "GitHub", level: 80, description: "Repositories, Collaboration, Pull Requests" },
        { name: "Postman", level: 75, description: "API Testing, Collections, Environment Vars" },
        { name: "VS Code", level: 95, description: "Extensions, Shortcuts, Debugging" }
      ]
    }
  ];


  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-blue-900/10 to-slate-900/30"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.06),transparent_40%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 mx-auto mb-3 sm:mb-4 rounded-full animate-glow"></div>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I've mastered during my intensive 1+ years of journey as a React developer, along with the skills I've been trained in.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 shadow-2xl scroll-animate card-hover"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 flex items-center justify-center gap-2">
                  <div className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                  {category.title}
                  <div className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                      <div>
                        <span className="text-white font-semibold text-sm sm:text-base group-hover:text-cyan-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <p className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors duration-300">
                          {skill.description}
                        </p>
                      </div>
                      <span className="text-cyan-400 text-xs font-bold bg-cyan-500/20 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-cyan-500/30">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-105 skill-bar relative"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-20 scroll-animate">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                Currently Learning & Exploring
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
              </h3>
              <p className="text-gray-300 text-lg">
                Expanding my skillset with cutting-edge technologies
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Gen AI', color: 'from-blue-500 to-blue-600' },
                { name: 'Next.js', color: 'from-gray-600 to-gray-700' },
                { name: 'GraphQL', color: 'from-pink-500 to-pink-600' },
                { name: 'Docker', color: 'from-blue-400 to-blue-500' },
                { name: 'AWS', color: 'from-orange-500 to-orange-600' },
                { name: 'Testing (Jest)', color: 'from-red-500 to-red-600' },
                { name: 'DSA', color: 'from-purple-500 to-purple-600' },
                { name: 'TypeScript', color: 'from-green-500 to-green-600' }
              ].map((tech, index) => (
                <span 
                  key={tech.name} 
                  className={`px-5 py-3 bg-gradient-to-r ${tech.color} text-white rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:rotate-2 shadow-lg hover:shadow-xl font-medium`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;