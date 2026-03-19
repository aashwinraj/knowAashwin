import { useEffect, useState } from 'react';

type FloatingHeart = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  sway: number;
};

type Star = {
  id: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
};

const adoreReasons = [
  {
    title: 'Your Smile',
    text: 'The kind of smile that can turn an ordinary day into something warm, bright, and unforgettable.'
  },
  {
    title: 'Your Magic',
    text: 'You somehow make every little moment feel softer, sweeter, and worth holding onto forever.'
  },
  {
    title: 'Your Heart',
    text: 'So gentle, so brave, and so full of love that being near you always feels like coming home.'
  }
];

const memoryMoments = [
  'The first butterflies, the first blush, the first time the whole world felt quieter because you were there.',
  'All the tiny inside jokes, sweet messages, late-night chats, and those little glances that still melt everything.',
  'Every day since then becoming another reminder that love can be playful, cozy, sparkly, and deeply real.'
];

const promises = [
  'More silly laughs than serious frowns.',
  'More forehead kisses, hand squeezes, and surprise sweet moments.',
  'More choosing us, again and again, in the loud days and the gentle ones.'
];

const badgeWords = ['Forever Crush', 'Still Smitten', 'Pure Heart Eyes', 'My Favorite Person'];

const constellationStars: Star[] = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 6}s`,
  duration: `${4 + Math.random() * 6}s`
}));

function App() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const [noteOpen, setNoteOpen] = useState(false);

  useEffect(() => {
    const injectWave = () => {
      const batch = Array.from({ length: 7 }, (_, index) => ({
        id: Date.now() + index + Math.random(),
        left: 6 + Math.random() * 88,
        delay: Math.random() * 0.8,
        duration: 8 + Math.random() * 5,
        size: 18 + Math.random() * 26,
        sway: (Math.random() - 0.5) * 120
      }));

      setHearts((current) => [...current.slice(-24), ...batch]);
    };

    injectWave();
    const intervalId = window.setInterval(injectWave, 2400);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const cleanupId = window.setInterval(() => {
      const cutoff = Date.now() - 18000;
      setHearts((current) => current.filter((heart) => heart.id > cutoff));
    }, 5000);

    return () => {
      window.clearInterval(cleanupId);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 22;
      const y = (event.clientY / window.innerHeight - 0.5) * 22;

      document.documentElement.style.setProperty('--pointer-x', `${x}px`);
      document.documentElement.style.setProperty('--pointer-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleHeartShower = () => {
    const burst = Array.from({ length: 18 }, (_, index) => ({
      id: Date.now() + index + Math.random(),
      left: 20 + Math.random() * 60,
      delay: Math.random() * 0.35,
      duration: 5 + Math.random() * 2.5,
      size: 22 + Math.random() * 32,
      sway: (Math.random() - 0.5) * 180
    }));

    setHearts((current) => [...current, ...burst]);
  };

  return (
    <main className="page-shell">
      <div className="bg-lights" aria-hidden="true">
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="glow glow-three" />
        <div className="grain" />
        {constellationStars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration
            }}
          />
        ))}
      </div>

      <div className="heart-rain" aria-hidden="true">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="floating-heart"
            style={{
              left: `${heart.left}%`,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
              ['--sway' as string]: `${heart.sway}px`
            }}
          />
        ))}
      </div>

      <section className="hero-card panel">
        <div className="eyebrow-row">
          <span className="eyebrow">For My Favorite Human</span>
          <span className="eyebrow alt">A Page Full Of Us</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Happy Anniversary, My Love</h1>
            <p className="hero-text">
              Another year of loving you, admiring you, and falling for you in a million tiny ways.
              This little page is just a glowing reminder that my heart still does the happy, messy,
              lovey-dovey thing every time I think of you.
            </p>

            <div className="cta-row">
              <button className="primary-button" type="button" onClick={handleHeartShower}>
                Shower You With Hearts
              </button>
              <button
                className="secondary-button"
                type="button"
                onClick={() => setNoteOpen((current) => !current)}
              >
                {noteOpen ? 'Fold The Love Note' : 'Open The Love Note'}
              </button>
            </div>

            <div className="badge-row">
              {badgeWords.map((word) => (
                <span key={word} className="love-badge">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="heart-stage">
              <div className="heart-core" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="pulse-ring pulse-one" />
              <div className="pulse-ring pulse-two" />
            </div>

            <div className="sparkle-card">
              <p className="sparkle-label">Love Level</p>
              <strong>Infinity and then some</strong>
              <span>Certified mushy. Very intentional. Fully devoted.</span>
            </div>
          </div>
        </div>

        <article className={`love-note panel ${noteOpen ? 'is-open' : ''}`}>
          <p className="note-label">Love Note</p>
          <p>
            You are my comfort place, my favorite plot twist, my best memory-maker, and the easiest
            person to adore. Thank you for being my calm, my excitement, my safe place, and my
            sweetest hello. Here&apos;s to more anniversaries, more adventures, and more us.
          </p>
        </article>
      </section>

      <section className="stats-grid">
        <article className="panel stat-card">
          <span>1000+</span>
          <p>moments where my heart quietly whispered, &quot;Yep, it&apos;s still you.&quot;</p>
        </article>
        <article className="panel stat-card">
          <span>Always</span>
          <p>kisses, cuddles, soft looks, and reasons to keep choosing this love every day.</p>
        </article>
        <article className="panel stat-card">
          <span>24/7</span>
          <p>main-character energy from the person who somehow makes life feel prettier.</p>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel section-card">
          <div className="section-heading">
            <span>What I Adore</span>
            <h2>Three reasons you make my heart trip over itself</h2>
          </div>

          <div className="reason-list">
            {adoreReasons.map((reason, index) => (
              <article
                className="reason-card"
                key={reason.title}
                style={{ animationDelay: `${index * 0.16}s` }}
              >
                <span className="reason-index">0{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="panel section-card">
          <div className="section-heading">
            <span>Sweet Timeline</span>
            <h2>Our love story in soft-focus highlights</h2>
          </div>

          <div className="memory-list">
            {memoryMoments.map((moment, index) => (
              <div className="memory-item" key={moment}>
                <span className="memory-dot" />
                <div>
                  <strong>Chapter {index + 1}</strong>
                  <p>{moment}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="panel promise-card">
        <div className="promise-copy">
          <span>My Promise</span>
          <h2>I will keep loving you loudly, gently, and on purpose.</h2>
          <p>
            Through sleepy mornings, chaotic schedules, random cravings, big dreams, tiny rituals,
            and every season in between, I want to keep making this love feel cherished and alive.
          </p>
        </div>

        <div className="promise-list">
          {promises.map((promise) => (
            <div className="promise-pill" key={promise}>
              {promise}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
