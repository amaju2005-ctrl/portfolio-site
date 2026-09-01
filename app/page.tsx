const projects = [
  {
    number: '01',
    name: 'Northstar',
    type: 'Product design · Concept',
    year: '2026',
    description:
      'A quieter way to understand spending, designed around useful signals instead of financial noise.',
    outcome: 'Clarity over complexity',
    color: 'project-lime',
  },
  {
    number: '02',
    name: 'Commonroom',
    type: 'Brand system · Concept',
    year: '2025',
    description:
      'A warm identity and digital home for a community built around thoughtful conversations and shared practice.',
    outcome: 'Belonging, made visible',
    color: 'project-coral',
  },
  {
    number: '03',
    name: 'Sundial',
    type: 'Creative direction · Concept',
    year: '2025',
    description:
      'A seasonal habit journal that makes progress feel human, tactile, and worth returning to.',
    outcome: 'Rituals that last',
    color: 'project-blue',
  },
];

const capabilities = [
  'Product thinking',
  'Creative direction',
  'Interface design',
  'Prototyping',
  'Design systems',
  'Front-end development',
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Abhishek Majumdar, home">
          AM<span className="wordmark-dot">•</span>
        </a>
        <p className="nav-note">
          Independent designer &amp;
          <br />
          creative technologist
        </p>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="mailto:hello@example.com">
          <span aria-hidden="true" /> Available for select projects
        </a>
      </nav>

      <header className="hero page-shell" id="top">
        <p className="eyebrow">Portfolio · 2026</p>
        <h1>
          I shape ideas into
          <span className="hero-line">
            <em>useful, memorable</em>
          </span>
          digital experiences.
        </h1>

        <div className="hero-bottom">
          <p className="hero-intro">
            I&apos;m Abhishek, a multidisciplinary maker interested in the point
            where clear thinking, expressive design, and technology meet.
          </p>
          <a className="round-link" href="#work" aria-label="See selected work">
            <span>See work</span>
            <span className="round-link-arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
        <span className="hero-spark" aria-hidden="true">
          ✦
        </span>
      </header>

      <section className="work-section page-shell" id="work">
        <div className="section-heading">
          <p className="section-index">(01) — Selected work</p>
          <h2>
            Three ways of making
            <br />
            complicated things feel clear.
          </h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.color}`} key={project.name}>
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-footer">
                <span>{project.outcome}</span>
                <a href={`mailto:hello@example.com?subject=${project.name}%20case%20study`}>
                  Ask about the project <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section page-shell" id="about">
        <div className="about-lead">
          <p className="section-index">(02) — About</p>
          <p className="about-kicker">A restless generalist, in the best sense.</p>
        </div>
        <div className="about-copy">
          <h2>
            The best work feels <em>inevitable</em> after you see it—even when it
            took a hundred small decisions to get there.
          </h2>
          <div className="about-columns">
            <p>
              I enjoy turning early, ambiguous ideas into coherent products and
              stories. My approach moves between strategy, words, visuals, and
              code, always asking the same question: what would make this more
              useful and more alive?
            </p>
            <p>
              I&apos;m especially drawn to thoughtful teams, cultural projects, and
              products that help people learn, create, or feel more connected.
            </p>
          </div>
        </div>
      </section>

      <figure className="poster-section page-shell">
        <img
          src="/og.png"
          alt="Editorial poster reading Abhishek Majumdar — I shape ideas into useful, memorable digital experiences."
        />
        <figcaption>
          <span>Profile poster</span>
          <span>Designed for the portfolio · 2026</span>
        </figcaption>
      </figure>

      <section className="capabilities-section page-shell" aria-labelledby="capabilities-title">
        <div>
          <p className="section-index">(03) — Capabilities</p>
          <h2 id="capabilities-title">From first thought to finished thing.</h2>
        </div>
        <ol className="capabilities-list">
          {capabilities.map((capability, index) => (
            <li key={capability}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{capability}</strong>
              <span aria-hidden="true">↗</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="personal-section page-shell">
        <p className="section-index">(04) — Currently</p>
        <div className="personal-grid">
          <h2>A small index of what&apos;s keeping me curious.</h2>
          <div className="index-card">
            <span>Reading</span>
            <p>Designing for the Digital Age</p>
            <small>Kim Goodwin</small>
          </div>
          <div className="index-card index-card-dark">
            <span>Exploring</span>
            <p>Creative tools that make software feel personal</p>
            <small>Notes in progress</small>
          </div>
          <div className="index-card index-card-outline">
            <span>Listening</span>
            <p>A beautifully over-organised work playlist</p>
            <small>Always on shuffle</small>
          </div>
        </div>
      </section>

      <footer className="site-footer page-shell" id="contact">
        <div className="footer-top">
          <p className="section-index">(05) — Contact</p>
          <p>Have an interesting idea?</p>
        </div>
        <a className="footer-email" href="mailto:hello@example.com">
          Let&apos;s make it real.
          <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <p>Abhishek Majumdar</p>
          <div>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
          <p>London · UK</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
