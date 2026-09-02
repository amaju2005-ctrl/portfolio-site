const projects = [
  {
    number: '01',
    name: 'HomePlate',
    type: 'Founder · Consumer marketplace',
    year: '2025—Now',
    description:
      'A community marketplace built around a simple belief: home-cooked food should come with a person, a story, and a reason to return.',
    details: [
      '100+ customer and home-cook interviews',
      '50+ early sign-ups',
      '20K+ organic views from early storytelling',
    ],
    outcome: 'Building & validating',
    action: 'Ask about HomePlate',
    color: 'project-lime',
  },
  {
    number: '02',
    name: 'Buddy Up',
    type: 'Founder’s Associate · Social impact',
    year: '2024 / 2026',
    description:
      'Supporting an accessibility-first social platform that helps disabled people build meaningful friendships and relationships.',
    details: [
      'Designed the model behind its first £1K in revenue',
      'Built a marketing strategy that grew social following 300%',
      'Returned to sharpen the 2026 Zero Project pitch',
    ],
    outcome: 'Strategy, growth & narrative',
    action: 'Ask about the work',
    color: 'project-coral',
  },
  {
    number: '03',
    name: 'Founder & investor research',
    type: 'Independent research · Consulting',
    year: 'Ongoing',
    description:
      'Studying how founders build conviction and how investors make decisions—through company analysis, market maps, founder briefs, and direct conversations.',
    details: [
      '10 projects led for VC-backed businesses at Headstart Global',
      'Research across food, AI, climate, deeptech and venture',
      'A growing series of founder and investor conversations',
    ],
    outcome: 'Evidence before opinion',
    action: 'Compare notes',
    color: 'project-blue',
    longTitle: true,
  },
  {
    number: '04',
    name: 'Writing in public',
    type: 'Newsletter · Podcast in development',
    year: '2026—Now',
    description:
      'Using writing and interviews to understand how ambitious businesses get built—and what it feels like to try before the outcome is obvious.',
    details: [
      'Published the first essay, “The Potential Paradox”',
      'Building a founder-and-investor interview format',
      'Writing at the intersection of business and honest curiosity',
    ],
    outcome: 'Learning where people can see it',
    action: 'Ask what’s next',
    color: 'project-dark',
    longTitle: true,
  },
];

const experience = [
  {
    period: '2026',
    organisation: 'Deloitte',
    role: 'Technology & Transformation graduate programme',
    note: 'Beginning the next chapter in Manchester after a 2025 Finance Transformation internship.',
  },
  {
    period: '2025—26',
    organisation: 'Warwick Consulting Society',
    role: 'President',
    note: 'Led a 1,000+ member society, secured £10K in sponsorship, and delivered the London Consulting Summit at The Shard.',
  },
  {
    period: '2024—26',
    organisation: 'Headstart Global',
    role: 'Project Director',
    note: 'Led 10 client projects for VC-backed businesses while managing teams of four student consultants.',
  },
  {
    period: '2025',
    organisation: 'Rival Technologies',
    role: 'Growth & Development Intern',
    note: 'Worked on early adoption, partnerships, and product learning for a spatial-computing startup.',
  },
  {
    period: '2024',
    organisation: 'Voiz Academy',
    role: 'Summer Associate',
    note: 'Built a climate internship network and researched partnerships across startups, NGOs, and student communities.',
  },
];

const capabilities = [
  'Founder & customer discovery',
  'Venture & market research',
  'Business model strategy',
  'Pitch & narrative development',
  'Community building',
  'Writing & synthesis',
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Abhishek Majumdar, home">
          AM<span className="wordmark-dot">•</span>
        </a>
        <p className="nav-note">
          Startup builder &amp;
          <br />
          venture-curious operator
        </p>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="mailto:amaju2005@gmail.com">
          <span aria-hidden="true" /> Open to thoughtful conversations
        </a>
      </nav>

      <header className="hero page-shell" id="top">
        <p className="eyebrow">Building · Researching · Writing</p>
        <h1>
          I&apos;m learning how
          <span className="hero-line">
            <em>great businesses</em>
          </span>
          get built.
        </h1>

        <div className="hero-bottom">
          <p className="hero-intro">
            I&apos;m Abhishek—an Economics graduate, early-stage founder and
            researcher interested in startups, venture capital, social impact,
            and the stories behind what gets built.
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
            Things I&apos;ve built,
            <br />
            shaped, and learned from.
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
                <h3 className={project.longTitle ? 'project-long-title' : undefined}>
                  {project.name}
                </h3>
                <div className="project-story">
                  <p>{project.description}</p>
                  <ul>
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="project-footer">
                <span>{project.outcome}</span>
                <a
                  href={`mailto:amaju2005@gmail.com?subject=${encodeURIComponent(project.name)}`}
                >
                  {project.action} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section page-shell" id="about">
        <div className="about-lead">
          <p className="section-index">(02) — About</p>
          <p className="about-kicker">Curious enough to ask. Impatient enough to build.</p>
        </div>
        <div className="about-copy">
          <h2>
            I&apos;m drawn to people with the conviction to build something—and
            the judgement to ask whether it <em>should exist.</em>
          </h2>
          <div className="about-columns">
            <p>
              I studied Economics at Warwick after growing up in Mumbai. Since
              then, I&apos;ve moved between early-stage startups, consulting,
              community leadership, and my own experiments. I like messy
              questions: what makes a marketplace work, where a business earns
              its right to win, and why people care enough to come back.
            </p>
            <p>
              Long term, I want to build and own meaningful businesses—most
              likely somewhere around food, hospitality, or sport. Right now I&apos;m
              collecting the skills, relationships, and judgement to do that
              well, while sharing the honest version of what I learn.
            </p>
          </div>
        </div>
      </section>

      <figure className="poster-section page-shell">
        <img
          src="/og.png"
          alt="Editorial profile poster for Abhishek Majumdar."
        />
        <figcaption>
          <span>Profile poster</span>
          <span>Builder · Researcher · Storyteller</span>
        </figcaption>
      </figure>

      <section className="experience-section page-shell" aria-labelledby="experience-title">
        <div className="experience-heading">
          <p className="section-index">(03) — Selected experience</p>
          <h2 id="experience-title">Learning across companies, communities, and stages.</h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={`${item.period}-${item.organisation}`}>
              <span>{item.period}</span>
              <h3>{item.organisation}</h3>
              <div>
                <strong>{item.role}</strong>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities-section page-shell" aria-labelledby="capabilities-title">
        <div>
          <p className="section-index">(04) — How I work</p>
          <h2 id="capabilities-title">Turning curiosity into useful evidence.</h2>
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
        <p className="section-index">(05) — Currently</p>
        <div className="personal-grid">
          <h2>A live index of what I&apos;m trying to understand.</h2>
          <div className="index-card">
            <span>Building</span>
            <p>What makes someone order from the same home cook twice?</p>
            <small>HomePlate · Customer discovery</small>
          </div>
          <div className="index-card index-card-dark">
            <span>Writing & recording</span>
            <p>How do founders and investors form conviction?</p>
            <small>Newsletter + interview series</small>
          </div>
          <div className="index-card index-card-outline">
            <span>Learning</span>
            <p>AI, food economics, venture, and the craft of clear thinking.</p>
            <small>One question at a time</small>
          </div>
          <div className="index-card index-card-coral">
            <span>Beyond work</span>
            <p>Training for a half marathon, drumming, and finding great food.</p>
            <small>London · Mumbai · wherever next</small>
          </div>
        </div>
      </section>

      <footer className="site-footer page-shell" id="contact">
        <div className="footer-top">
          <p className="section-index">(06) — Contact</p>
          <p>Founders, investors, operators, curious people—say hello.</p>
        </div>
        <a className="footer-email" href="mailto:amaju2005@gmail.com">
          Start a conversation.
          <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <p>Abhishek Majumdar</p>
          <div>
            <a
              href="https://www.linkedin.com/in/abhishek-majumdar"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="mailto:amaju2005@gmail.com">Email ↗</a>
          </div>
          <p>UK · India</p>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="link-note">
          Newsletter and podcast links will be added when their final public URLs are confirmed.
        </p>
      </footer>
    </main>
  );
}
