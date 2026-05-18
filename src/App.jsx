import { useState } from 'react';

const benefitCards = [
  {
    number: '01',
    title: 'Speed',
    text: 'From idea to final cut in a fraction of the time. Days, not months.',
  },
  {
    number: '02',
    title: 'Zero Disruption',
    text: 'No crews. No schedules. No cameras on your floor. Your business never pauses.',
  },
  {
    number: '03',
    title: 'Visualize the Invisible',
    text: 'Workflows. Data. Product mechanisms. We show what others can only describe.',
  },
  {
    number: '04',
    title: 'Strategic Partner',
    text: 'We think like strategists, not just filmmakers. Every frame moves your market.',
  },
];

const workCards = [
  {
    client: 'Epicor',
    title: 'Enterprise Software Visualization',
    status: 'Case Study',
  },
  {
    client: 'Infor',
    title: 'Project in development',
    status: 'In Production',
  },
  {
    client: 'Workday',
    title: 'Product narrative system',
    status: 'Concept',
  },
  {
    client: 'ServiceNow',
    title: 'Operational clarity film',
    status: 'Concept',
  },
];

const processSteps = [
  'Research the market',
  'Write the script',
  'Build the visual language',
  'Render the world',
  'Edit, score, deliver',
];

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setEmail('');
  }

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container nav-bar" aria-label="Primary">
          <a className="brand" href="#hero" aria-label="Badge 8 home">
            <span aria-hidden="true">∞</span>
            <span>Badge 8</span>
          </a>

          <nav className="nav-links" aria-label="Section navigation">
            <a href="#work">Work</a>
            <a href="#approach">Approach</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="section hero" id="hero">
          <div className="container hero-grid">
            <p className="eyebrow">A Cinematic Film Studio</p>
            <div className="hero-copy">
              <h1>The best employee you never had.</h1>
              <p className="lede">
                Cinematic video, built like infrastructure.
                <br />
                For enterprise teams who need to move at the speed of the market — without filming a
                single frame on your floor.
              </p>
              <div className="button-row">
                <a className="button button-primary" href="#contact">
                  Start a conversation
                </a>
                <a className="button button-secondary" href="#work">
                  See the work
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section problem" id="problem">
          <div className="container narrow">
            <p className="eyebrow">The Problem</p>
            <h2>Your product moves industries. But explaining what it does - that’s the hard part.</h2>
            <p className="body-copy">
              Your reps know the product. Your prospects do not. By the time they catch up, the market
              has already moved. Traditional video takes months, interrupts your team, and produces
              something dated by the time it ships.
            </p>
            <p className="body-copy">There is a better way to tell the story.</p>
          </div>
        </section>

        <section className="section work-intro" id="services">
          <div className="container narrow">
            <p className="eyebrow">What We Do</p>
            <h2>We build cinematic video at the speed of your business.</h2>

            <div className="benefit-grid">
              {benefitCards.map((card) => (
                <article className="benefit-card" key={card.number}>
                  <div className="benefit-meta">
                    <span>{card.number}</span>
                    <h3>{card.title}</h3>
                  </div>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section selected-work" id="work">
          <div className="container">
            <p className="eyebrow">Selected Work</p>
            <div className="section-heading">
              <h2>Recent productions.</h2>
            </div>

            <div className="work-grid">
              {workCards.map((card) => (
                <article className="work-card" key={card.client}>
                  <div className="work-visual" aria-hidden="true">
                    <div className="work-marker">◌</div>
                    <div className="work-play">Play</div>
                  </div>
                  <div className="work-copy">
                    <div className="work-topline">
                      <h3>{card.client}</h3>
                      <span>{card.status}</span>
                    </div>
                    <p>{card.title}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="container narrow">
            <p className="eyebrow">The Approach</p>
            <h2>A studio process. Designed for enterprise pace.</h2>

            <ol className="process-list">
              {processSteps.map((step, index) => (
                <li key={step}>
                  <span className="process-number">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container about-inner">
            <p className="eyebrow">About</p>
            <p className="about-quote">
              Badge 8 is for enterprise teams who need cinematic clarity at a speed traditional
              production cannot match. We work like the best internal hire you never made — quiet,
              capable, and already inside the problem.
            </p>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Start a conversation.</h2>
              <p className="body-copy">
                Tell us what you are trying to communicate.
                <br />
                We will show you what it could look like.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="visually-hidden" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
              />
              <button className="button button-primary" type="submit">
                Send
              </button>
              {submitted ? (
                <p className="form-response" role="status" aria-live="polite">
                  Thank you. We will be in touch within one business day.
                </p>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>∞ Badge 8 — Est. 2026</p>
          <p>The best employee you never had.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;