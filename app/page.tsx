import Image from 'next/image';

const projects = [
  {
    number: '01',
    name: 'HomePlate',
    type: 'Founder · Consumer marketplace',
    year: '2025 to now',
    description:
      'I am exploring whether home-cooked food can feel more personal, trustworthy, and worth returning to when the person behind it is part of the experience.',
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
      'I supported an accessibility-first social platform helping disabled people build meaningful friendships and relationships.',
    details: [
      'Supported strategy, growth and narrative development',
      'Worked across an accessibility-first social platform',
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
      'I study how founders build conviction and how investors make decisions through company analysis, market maps, founder briefs, and direct conversations.',
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
    year: '2026 to now',
    description:
      'I use writing and interviews to understand how ambitious businesses get built, and what it feels like to try before the outcome is obvious.',
    details: [
      'Published the first essay, “The Potential Paradox”',
      'Building a founder-and-investor interview format',
      'Writing at the intersection of business and honest curiosity',
    ],
    outcome: 'Learning where people can see it',
    action: 'Read the Substack',
    color: 'project-dark',
    longTitle: true,
    href: 'https://substack.com/@abhishekmaju',
  },
];

const experiments = [
  {
    number: '01',
    name: 'Nutrition Logger',
    status: 'Prototype stage',
    description:
      'A personal nutrition logging tool I built for my own use. It is still at the prototype stage.',
    detail: 'Personal tool',
    action: 'Open the prototype',
    href: 'https://nutrition-logger-9gzaaj3vg-amaju2005-ctrls-projects.vercel.app/',
  },
  {
    number: '02',
    name: 'Atomic Goals',
    status: '50+ users in 2 days',
    description:
      'A website that builds an actionable roadmap for your goals using habits and tasks. It reached 50+ users in the first two days after release.',
    detail: 'Built with Base44',
    action: 'Open Atomic Goals',
    href: 'https://atomicgoals.base44.app',
  },
  {
    number: '03',
    name: 'Twenty',
    status: 'Prototype · Currently developing',
    description:
      'A trust-first career relationship engine I am currently developing. Twenty turns a person’s experience and ambition into a shortlist of 20 people worth speaking to, then helps them draft thoughtful outreach they review before anything is sent. It is designed to replace a fragmented cold-outreach workflow across search, research, contact checks, writing, and follow-ups.',
    detail: 'Career relationship tool',
    action: 'Explore the prototype',
    href: 'https://twenty-gamma-ten.vercel.app/',
  },
];

const experience = [
  {
    period: '2026',
    organisation: 'Deloitte',
    role: 'Finance Transformation Analyst',
    note: 'Working in Manchester after a 2025 Finance Transformation internship.',
  },
  {
    period: '2025 to 2026',
    organisation: 'Warwick Consulting Society',
    role: 'President · Largest consulting society in EMEA',
    note: 'Led a community with 6,000+ Instagram followers and 1,000+ active members, securing £20,000 in sponsorships. Organised a Startup Pitch Competition at The Shard with Warwick Kickstart, with £500,000 in funding raised.',
  },
  {
    period: '2024 to 2026',
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
    note: 'Built a lead generation model that produced a database of 100+ climate mentors.',
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
          Founder in progress
          <br />
          learning in public
        </p>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          className="availability"
          href="https://calendar.app.google/s9nLFUV84N37rw9n9"
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true" /> Book a conversation
        </a>
      </nav>

      <header className="hero page-shell" id="top">
        <p className="eyebrow">Building · Researching · Writing</p>
        <h1>
          I&apos;m trying to understand how
          <span className="hero-line">
            <em>interesting businesses</em>
          </span>
          get built.
        </h1>

        <div className="hero-bottom">
          <p className="hero-intro">
            I&apos;m Abhishek, a Finance Transformation Analyst at Deloitte. I
            build, research, and write about startups because I would rather
            learn from being in the arena than comment from the sidelines.
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
          <p className="section-index">(01) / Selected work</p>
          <h2>
            The ideas I&apos;m building,
            <br />
            and the work teaching me how.
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
                  href={
                    project.href ??
                    `mailto:amaju2005@gmail.com?subject=${encodeURIComponent(project.name)}`
                  }
                  target={project.href ? '_blank' : undefined}
                  rel={project.href ? 'noreferrer' : undefined}
                >
                  {project.action} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="experiments-section page-shell"
        id="experiments"
        aria-labelledby="experiments-title"
      >
        <div className="experiments-heading">
          <p className="section-index">(02) / Personal experiments</p>
          <div>
            <h2 id="experiments-title">Small tools. Real use. Early lessons.</h2>
            <p>
              I like building before I have every answer. These are personal
              experiments, shared honestly at the stage they are in.
            </p>
          </div>
        </div>
        <div className="experiments-grid">
          {experiments.map((experiment) => (
            <article className="experiment-card" key={experiment.name}>
              <div className="experiment-meta">
                <span>{experiment.number}</span>
                <span>{experiment.status}</span>
              </div>
              <div className="experiment-copy">
                <p>{experiment.detail}</p>
                <h3>{experiment.name}</h3>
                <p>{experiment.description}</p>
              </div>
              <a href={experiment.href} target="_blank" rel="noreferrer">
                {experiment.action} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section page-shell" id="about">
        <div className="about-lead">
          <p className="section-index">(03) / About</p>
          <p className="about-kicker">Curious enough to ask. Restless enough to build.</p>
        </div>
        <div className="about-copy">
          <h2>
            I&apos;m drawn to people with the conviction to build something, and
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
              Long term, I want to build and own meaningful businesses, most
              likely somewhere around food, hospitality, or sport. Right now I
              am collecting the skills, relationships, and judgement to do that
              well, while sharing the honest version of what I learn.
            </p>
          </div>
        </div>
      </section>

      <figure className="poster-section page-shell">
        <Image
          src="/og.png"
          alt="Editorial profile poster for Abhishek Majumdar."
          width={1733}
          height={908}
          sizes="(max-width: 1488px) calc(100vw - 48px), 1440px"
        />
        <figcaption>
          <span>Profile poster</span>
          <span>Builder · Researcher · Storyteller</span>
        </figcaption>
      </figure>

      <section className="experience-section page-shell" aria-labelledby="experience-title">
        <div className="experience-heading">
          <p className="section-index">(04) / Selected experience</p>
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
          <p className="section-index">(05) / How I work</p>
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
        <p className="section-index">(06) / Currently</p>
        <div className="personal-grid">
          <h2>What I&apos;m trying to understand right now.</h2>
          <div className="index-card">
            <span>Building</span>
            <p>What makes someone order from the same home cook twice?</p>
            <small>HomePlate · Customer discovery</small>
          </div>
          <div className="index-card index-card-dark">
            <span>Talking and writing</span>
            <p>How do founders and investors form conviction?</p>
            <small>Newsletter + podcast in development</small>
          </div>
          <div className="index-card index-card-outline">
            <span>Testing</span>
            <p>How much can a small personal tool teach me?</p>
            <small>Prototypes + vibe-coded experiments</small>
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
          <p className="section-index">(07) / Contact</p>
          <p>Founder conversations and podcast appearances are welcome.</p>
        </div>
        <a
          className="footer-email"
          href="https://calendar.app.google/s9nLFUV84N37rw9n9"
          target="_blank"
          rel="noreferrer"
        >
          Let&apos;s have a conversation.
          <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <p>Abhishek Majumdar</p>
          <div>
            <a
              href="https://calendar.app.google/s9nLFUV84N37rw9n9"
              target="_blank"
              rel="noreferrer"
            >
              Book a call ↗
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-majumdar-5964a228a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://substack.com/@abhishekmaju"
              target="_blank"
              rel="noreferrer"
            >
              Substack ↗
            </a>
            <a href="mailto:amaju2005@gmail.com">Email ↗</a>
          </div>
          <p>UK · India</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
