import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Camera,
  Upload,
  Building2,
  MapPin,
} from "lucide-react";

const Hero = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showUpload, setShowUpload] = useState<boolean>(false);
  const [showFullImage, setShowFullImage] = useState<boolean>(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
        setShowUpload(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const defaultProfileImage =
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="text-center">
          {/* Profile Photo Section */}
          <div className="mb-4 sm:mb-6 animate-fade-in relative">
            <div className="relative inline-block">
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center relative group">
                  <img
                    src="/assets/myPhoto.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                    onClick={() => setShowFullImage(true)}
                  />

                  {/* <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setShowUpload(!showUpload)}
                      className="text-white hover:text-cyan-400 transition-colors duration-300"
                      title="Change Profile Photo"
                    >
                      <Camera className="w-8 h-8" />
                    </button>
                  </div> */}
                </div>
              </div>

              {/* Upload Button
              {showUpload && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 animate-fade-in">
                  <label className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Upload Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              )} */}
            </div>

            {showFullImage && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center"
                onClick={() => setShowFullImage(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/40 to-slate-900 opacity-80"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),transparent_60%)] opacity-80"></div>

                {/* Full Image */}
                <img
                  src="/assets/myPhoto.jpg"
                  alt="Full Profile"
                  className="z-10 w-1/4 h-1/2 object-cover rounded-xl shadow-2xl border-4 border-cyan-400 transition-transform duration-300"
                />

                <button
                  onClick={() => setShowFullImage(false)}
                  className="absolute top-6 right-6 z-20 text-white text-3xl font-bold hover:text-cyan-400"
                >
                  &times;
                </button>
              </div>
            )}

            {/* Current Employment Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/40 rounded-full text-emerald-400 text-xs sm:text-sm font-medium mb-2 sm:mb-3 animate-pulse shadow-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <Building2 className="w-4 h-4" />
              Currently Working at eArbor LLP
            </div>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <MapPin className="w-4 h-4" />
              Madhapur, Hyderabad
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-8 animate-slide-up">
            <span className="block lg:inline">Full Stack</span>{' '}
            <span className="block lg:inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Developer
            </span>
          </h1>

          <div className="max-w-3xl mx-auto mb-4 sm:mb-6 animate-slide-up-delay">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-2 sm:mb-3 leading-relaxed">
              Professional React developer with{" "}
              <span className="text-cyan-400 font-semibold">1+ Years</span> of
              hands-on experience, currently contributing to innovative projects
              at{" "}
              <span className="text-emerald-400 font-semibold">eArbor LLP</span>
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Crafting modern web applications using{" "}
              <span className="text-blue-400 font-semibold">
                React.Js, Next.Js and Node.Js
              </span>

              <span className="hidden lg:inline text-blue-400 font-semibold">
                {" "}with JavaScript and TypeScript
              </span>

              {" "}in a collaborative professional environment
            </p>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-in-delay">
            <a
              href="#contact"
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 group"
            >
              <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              Get In Touch
            </a>
            <a
              href="/assets/FullStack_Resume.pdf"
              download
              className="px-4 py-2 sm:px-5 sm:py-2.5 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce transition-transform duration-300" />
              Download Resume
            </a>
            <a
              href="https://github.com/VadlaBhanuprasad?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-slate-800/50 border border-slate-700 text-white hover:bg-slate-700/50 hover:border-cyan-500/50 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center space-x-3 sm:space-x-4 animate-fade-in-delay-2">
            <a
              href="https://github.com/VadlaBhanuprasad?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800/50 border border-slate-700 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transform hover:scale-110 hover:rotate-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhanuprasad-vadla-064840193/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800/50 border border-slate-700 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transform hover:scale-110 hover:rotate-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:bhanuvadla88@gmail.com"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-800/50 border border-slate-700 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transform hover:scale-110 hover:rotate-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto animate-fade-in-delay-2">
            {[
              { number: "1+", label: "Years of Experience" },
              { number: "10+", label: "Projects Built" },
              { number: "15+", label: "Technologies" },
              { number: "3", label: "Languages" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-0.5 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm font-medium group-hover:text-gray-300 transition-colors duration-300 whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
