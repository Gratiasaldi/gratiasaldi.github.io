import { useState, useEffect } from 'react';
import { Microscope, Dna, FlaskConical, Mail, Github, Linkedin, Leaf, Atom } from 'lucide-react';

function App() {
  const [pulseActive, setPulseActive] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [scanlinePosition, setScanlinePosition] = useState(0);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 1000);
    }, 5000);

    const scanlineInterval = setInterval(() => {
      setScanlinePosition((prev) => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(scanlineInterval);
    };
  }, []);

  const projects = [
    {
      title: "DNA SEQUENCER",
      year: "1985",
      description: "Genetic code analysis and visualization",
      tech: "FORTRAN, Lab Equipment"
    },
    {
      title: "CELL MONITOR",
      year: "1987",
      description: "Real-time cellular activity tracking",
      tech: "Pascal, Microscopy"
    },
    {
      title: "BIO SYNTHESIZER",
      year: "1989",
      description: "Organic compound design system",
      tech: "C, Chemical Database"
    }
  ];

  const skills = [
    "Genetics", "Molecular Biology", "Biochemistry", "Lab Automation", "Data Analysis", "Microscopy",
    "Cell Culture", "DNA Sequencing", "Biostatistics"
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* CRT Scanlines Effect */}
      <div
        className="scanlines pointer-events-none fixed inset-0 z-50"
        style={{ top: `${scanlinePosition}%` }}
      />

      {/* CRT Screen Curve Effect */}
      <div className="crt-screen fixed inset-0 pointer-events-none z-40" />

      {/* Organic Pattern Background */}
      <div className="organic-background fixed inset-0 z-0" />

      {/* DNA Helix Animation */}
      <div className="dna-helix fixed inset-0 z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b-4 border-green-400 bg-black/80 backdrop-blur-sm sticky top-0 z-30">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Dna className="text-green-400 animate-spin-slow" size={32} />
                <div className={`retro-text text-xl md:text-2xl ${pulseActive ? 'pulse-glow' : ''}`}>
                  BIO.LAB
                </div>
              </div>
              <div className="flex gap-4 md:gap-8">
                {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setCurrentSection(item.toLowerCase())}
                    className={`retro-button text-xs md:text-sm ${
                      currentSection === item.toLowerCase() ? 'active' : ''
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        {currentSection === 'home' && (
          <section className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center space-y-8">
              <div className={`retro-text text-4xl md:text-7xl lg:text-8xl mb-4 ${pulseActive ? 'pulse-glow' : ''}`}>
                BIOTECH
              </div>
              <div className="bio-text text-xl md:text-3xl lg:text-4xl mb-8">
                ENGINEERING LIFE
              </div>
              <div className="retro-box max-w-2xl mx-auto p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Microscope className="text-green-400 animate-pulse" size={24} />
                  <span className="retro-text text-lg md:text-xl text-green-400">LAB READY</span>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-mono">
                  Bioengineering researcher from the organic frontier.
                  Bridging biology and technology to create innovative
                  solutions for tomorrow's challenges.
                </p>
              </div>
              <button
                onClick={() => setCurrentSection('projects')}
                className="retro-button-large text-lg md:text-xl mt-8"
              >
                {'>'} EXPLORE PROJECTS_
              </button>
            </div>
          </section>
        )}

        {/* About Section */}
        {currentSection === 'about' && (
          <section className="min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <h2 className="retro-text text-4xl md:text-6xl mb-12 text-center">ABOUT_ME</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="retro-box p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <FlaskConical className="text-green-500" size={28} />
                    <h3 className="retro-text text-xl md:text-2xl text-green-500">PROFILE</h3>
                  </div>
                  <div className="space-y-4 font-mono text-sm md:text-base">
                    <p className="text-gray-300">
                      <span className="text-green-400">NAME:</span> [YOUR NAME]
                    </p>
                    <p className="text-gray-300">
                      <span className="text-green-400">LOCATION:</span> BIOLAB_01
                    </p>
                    <p className="text-gray-300">
                      <span className="text-green-400">STATUS:</span> <span className="animate-pulse text-lime-400">ACTIVE</span>
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                      A biological engineer exploring the intersection
                      of life sciences and technology. Passionate about
                      genetic research and sustainable biotechnology.
                    </p>
                  </div>
                </div>

                <div className="retro-box p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Atom className="text-amber-500" size={28} />
                    <h3 className="retro-text text-xl md:text-2xl text-amber-500">EXPERTISE</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="skill-tag text-xs md:text-sm"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {currentSection === 'projects' && (
          <section className="min-h-screen py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="retro-text text-4xl md:text-6xl mb-12 text-center">PROJECTS</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="retro-box p-6 hover:scale-105 transition-transform cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Leaf className="text-green-500" size={24} />
                      <span className="text-green-400 font-mono text-sm">{project.year}</span>
                    </div>
                    <h3 className="retro-text text-lg md:text-xl mb-3 text-green-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 font-mono">
                      {project.description}
                    </p>
                    <div className="border-t border-green-400/30 pt-3">
                      <span className="text-amber-400 text-xs font-mono">
                        TECH: {project.tech}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {currentSection === 'contact' && (
          <section className="min-h-screen flex items-center justify-center px-4">
            <div className="container mx-auto max-w-3xl">
              <h2 className="retro-text text-4xl md:text-6xl mb-12 text-center">CONTACT</h2>

              <div className="retro-box p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 border-2 border-green-400/30 hover:border-green-400 transition-colors cursor-pointer">
                    <Mail className="text-green-400" size={28} />
                    <div>
                      <div className="retro-text text-sm text-green-400">EMAIL</div>
                      <div className="text-gray-300 font-mono text-sm md:text-base">your.email@cyber.net</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 border-2 border-lime-500/30 hover:border-lime-500 transition-colors cursor-pointer">
                    <Github className="text-lime-500" size={28} />
                    <div>
                      <div className="retro-text text-sm text-lime-500">GITHUB</div>
                      <div className="text-gray-300 font-mono text-sm md:text-base">github.com/yourname</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 border-2 border-emerald-500/30 hover:border-emerald-500 transition-colors cursor-pointer">
                    <Linkedin className="text-emerald-500" size={28} />
                    <div>
                      <div className="retro-text text-sm text-emerald-500">LINKEDIN</div>
                      <div className="text-gray-300 font-mono text-sm md:text-base">linkedin.com/in/yourname</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-400 font-mono text-sm">
                    {'>'} READY TO COLLABORATE? LET'S ENGINEER TOMORROW_
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="border-t-4 border-green-400 bg-black/80 backdrop-blur-sm py-6 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400 font-mono text-xs md:text-sm">
              {'<'} RESEARCHED IN 1985 • ENGINEERED IN 2025 {'/>'}
            </p>
            <p className="text-green-400 font-mono text-xs mt-2 animate-pulse">
              LAB.STATUS: ACTIVE
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
