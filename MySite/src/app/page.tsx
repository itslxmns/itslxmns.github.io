import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="background-blur"></div>
      <div className="glass-orb orb-1"></div>
      <div className="glass-orb orb-2"></div>
      <div className="glass-orb orb-3"></div>
      
      <div className="scroll-progress"></div>
      
      <header className="glass-header">
        <div className="header-content">
          <h1 className="glitch" data-text="Itslxmns">Itslxmns</h1>
          <nav>
            <a href="#about" className="nav-link">About Me</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contacts" className="nav-link">Contact Me</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="glass-section fade-in">
          <div className="section-content">
            <h2>About Me</h2>
            <p>Itslxmns, Dmitriy.</p>
          </div>
        </section>

        <section id="skills" className="glass-section fade-in">
          <div className="section-content">
            <h2>Skills</h2>
            <div className="skills-grid">
              <span className="skill-tag">Visual Studio Code</span>
              <span className="skill-tag">Blender</span>
              <span className="skill-tag">Photoshop</span>
              <span className="skill-tag">Premier Pro</span>
              <span className="skill-tag">Roblox Studio</span>
              <span className="skill-tag">Discord Bots</span>
              <span className="skill-tag">Lua</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">SQLite</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
            </div>
          </div>
        </section>

        <section id="contacts" className="glass-section fade-in">
          <div className="section-content">
            <h2>Contact Me</h2>
            <div className="contact-links">
              <a href="https://t.me/lxmnsdev" className="contact-btn">
                <Image
                  src="/TelegramLogo.webp"
                  alt="Telegram"
                  width={32}
                  height={32}
                />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
