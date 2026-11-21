
import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Vishnu<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="intro">HELLO, I'M</p>

          <h1>
            Vishnuprabu S.J.
          </h1>

          <h2>
            Software Developer | Industrial Automation & IIoT
          </h2>

          <p className="hero-description">
            I build software applications, monitoring systems,
            and solutions connecting industrial technology
            with modern software.
          </p>
          

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a
              href="https://linkedin.com/in/vishnu-j-8880bb384"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="terminal">
            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`class Developer
{
  Skills = [
    "C#",
    ".NET",
    "React",
    "MySQL",
    "Python",
    "IIoT"
  ];

  Passion = "Building";
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <h2>About Me</h2>

        <p>
          Electrical and Electronics Engineering graduate with
          experience in industrial maintenance, software debugging,
          application support, and software development.
          Interested in Industrial IoT, machine monitoring,
          automation, and backend application development.
        </p>
      </section>


{/* Professional Experience */}
<section className="section" id="experience">
  <h2>Professional Experience</h2>

  <div className="experience-timeline">

    <div className="experience-card">
      <div className="experience-header">
        <h3>SN Engineering</h3>
        <span>Industrial Engineering</span>
      </div>

      <p className="experience-period">
        Industrial Maintenance & Automation
      </p>

      <ul>
        <li>Industrial electrical maintenance and troubleshooting.</li>
        <li>Machine fault identification and maintenance support.</li>
        <li>Electrical systems and automation-related troubleshooting.</li>
        <li>Applying software and engineering knowledge to industrial problems.</li>
      </ul>
    </div>

    <div className="experience-card">
  <div className="experience-header">
    <h3>Freelance Software Developer</h3>
    <span>Web Development & IIoT Projects</span>
  </div>

  <p className="experience-period">Freelance Projects & Independent Development</p>

  <ul>
    <li>Developed web applications using React, Java, Spring Boot and .NET.</li>
    <li>Built responsive websites for business and healthcare use cases.</li>
    <li>Developed REST APIs and integrated backend services with frontend applications.</li>
    <li>Created an Industrial Machine Monitoring application with live sensor data, alerts and downtime tracking.</li>
    <li>Worked with MySQL databases, API testing and application deployment.</li>
    <li>Designed and developed projects independently from requirements to deployment.</li>
  </ul>
</div>

    <div className="experience-card">
      <div className="experience-header">
        <h3>Zoho Corporation</h3>
        <span>Software Debug Engineer</span>
      </div>

      <p className="experience-period">
        May 2022 – October 2025
      </p>

      <ul>
        <li>Investigated customer-reported software issues and production incidents.</li>
        <li>Performed debugging, issue analysis and root cause investigation.</li>
        <li>Worked with Java, SQL, MySQL, REST APIs and Postman.</li>
        <li>Analyzed logs, API responses, database records and application behaviour.</li>
        <li>Collaborated with development and QA teams to resolve issues.</li>
        <li>Worked with Zoho CRM, Zoho Desk and integrations.</li>
      </ul>
    </div>

    <div className="experience-card">
      <div className="experience-header">
        <h3>SH Electronics</h3>
        <span>Electrical & Mechanical Maintenance</span>
      </div>

      <p className="experience-period">
        2018 – 2021
      </p>

      <ul>
        <li>Supported electrical and mechanical maintenance of industrial machines.</li>
        <li>Performed preventive and periodic maintenance activities.</li>
        <li>Troubleshot machine electrical faults and control circuit issues.</li>
        <li>Identified PLC output, power supply, emergency stop and interlock-related faults.</li>
        <li>Supported machine uptime and maintenance activities.</li>
      </ul>
    </div>

  </div>
</section>

      {/* Skills */}
      <section className="section" id="skills">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Backend</h3>
            <p>C#, Java, ASP.NET Core, Spring Boot, REST API</p>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MySQL, SQL, Entity Framework Core</p>
          </div>

          <div className="skill-card">
            <h3>Industrial</h3>
            <p>PLC, Electrical Maintenance, Industrial Automation, IIoT</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, Postman, VS Code, Visual Studio</p>
          </div>

          <div className="skill-card">
            <h3>Integration</h3>
            <p>REST API, JSON, Modbus fundamentals, Sensor Monitoring</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <h2>Featured Project</h2>

        <div className="project-card">
          <div className="project-content">
            <p className="project-label">INDUSTRIAL IoT</p>

            <h3>Industrial Machine Monitoring System</h3>

            <p>
              Developed a machine monitoring application to track
              real-time sensor readings, machine health, alerts,
              communication status, and downtime.
            </p>

            <ul>
              <li>Multi-machine sensor monitoring</li>
              <li>Live temperature, current and vibration charts</li>
              <li>HIGH and CRITICAL alert detection</li>
              <li>Browser notification integration</li>
              <li>Machine offline detection</li>
              <li>Downtime history and duration tracking</li>
            </ul>

            <div className="project-gallery">
  <img
    src="/images/01-dashboard-overview.png"
    alt="Industrial Machine Monitoring Dashboard"
  />
  <img
    src="/images/02-live-analytics.png"
    alt="Industrial Machine Live Analytics"
  />

  <img
    src="/images/03-alert-history.png"
    alt="Industrial Machine Alerts"
  />

  <img
    src="/images/04-downtime-history.png"
    alt="Industrial Machine Status and Downtime"
  />
</div>

            <div className="tech-stack">
              <span>C#</span>
              <span>.NET 8</span>
              <span>MySQL</span>
              <span>React</span>
              <span>Python</span>
            </div>

            <a
              href="https://github.com/ervishnuj/industrial-machine-monitoring"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub Repository →
            </a>
          </div>
        </div>
      </section>



{/* Industrial Automation & PLC */}
<section className="section" id="plc">
  <h2>Industrial Automation & PLC Experience</h2>

  <p>
    Combining electrical engineering knowledge, industrial
    maintenance experience, PLC troubleshooting exposure,
    and software development to build practical industrial
    automation and IIoT solutions.
  </p>

  <div className="skills-grid">
    <div className="skill-card">
      <h3>PLC & Automation</h3>
      <p>
        Siemens PLC, TIA Portal exposure, Ladder Logic,
        Structured Text fundamentals, PLC I/O troubleshooting.
      </p>
    </div>

    <div className="skill-card">
      <h3>Industrial Maintenance</h3>
      <p>
        Electrical and mechanical maintenance, preventive
        maintenance, machine fault identification,
        emergency stop and interlock checks.
      </p>
    </div>

    <div className="skill-card">
      <h3>Drives & Electrical</h3>
      <p>
        VFD troubleshooting exposure, motor supply checks,
        electrical wiring, drive output and machine fault checks.
      </p>
    </div>

    <div className="skill-card">
      <h3>Industrial Communication</h3>
      <p>
        Modbus, RS-485, RS-232 and Ethernet communication
        fundamentals and practical exposure.
      </p>
    </div>

    <div className="skill-card">
      <h3>PLC Practice Projects</h3>
      <p>
        Conveyor control, tank level control and product
        counting logic using PLC concepts.
      </p>
    </div>

    <div className="skill-card">
      <h3>Industrial Software Integration</h3>
      <p>
        C#, .NET, REST APIs, React dashboards, sensor data
        monitoring, machine alerts and downtime tracking.
      </p>
    </div>
  </div>
</section>


      {/* Contact */}
      <section className="section contact" id="contact">
        <h2>Contact</h2>

        <p>
          Interested in software development, industrial
          monitoring, and IIoT opportunities.
        </p>

        <a href="mailto:ervishnuj@gmail.com">
          ervishnuj@gmail.com
        </a>

        <p>
          <a
            href="https://linkedin.com/in/vishnu-j-8880bb384"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>

        <p>
          <a
            href="https://github.com/ervishnuj"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </p>
        <a href="/Vishnuprabu_SJ_ITOT_Integration_Engineer.pdf"
          download
          className="secondary-btn">
            Download Resume
        </a>
      </section>

      <footer>
        © 2026 Vishnuprabu S.J. | Built with React
      </footer>

    </div>
  );
}

export default App;
