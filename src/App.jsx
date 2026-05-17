const sites = [
  {
    name: "Voicebox",
    description: "A vocal training app with pitch tracking, spectrogram, and vibrato view.",
    url: "https://voicebox.dgapps.io",
    sourceUrl: "https://github.com/davidgilbertson/voicebox",
    screenshot: "/site-screenshots/voicebox.png",
  },
  {
    name: "Phased Timer",
    description: "A timer with hold, rest, and reps",
    url: "https://phasedtimer.dgapps.io",
    sourceUrl: "https://github.com/davidgilbertson/phased-timer",
    screenshot: "/site-screenshots/phased-timer.png",
  },
  {
    name: "BPM Panda",
    description: "Metronome, with tap to record BPM",
    url: "https://bpmpanda.web.app",
    sourceUrl: "https://github.com/davidgilbertson/bpmpanda",
    screenshot: "/site-screenshots/bpm-panda.png",
  },
  {
    name: "Beat Parakeet",
    description: "Plays lo-fi tunes",
    url: "https://beatparakeet.web.app",
    sourceUrl: "https://github.com/davidgilbertson/beatparakeet",
    screenshot: "/site-screenshots/beat-parakeet.png",
  },
  {
    name: "Off by one",
    description: "A word game",
    url: "https://offbyone.web.app",
    sourceUrl: "https://github.com/davidgilbertson/off_by_one",
    screenshot: "/site-screenshots/off-by-one.png",
  },
  {
    name: "List of Primes",
    description: "A list of all the prime numbers. All of them.",
    url: "https://list-of-primes.web.app",
    sourceUrl: "https://github.com/davidgilbertson/list-of-primes",
    screenshot: "/site-screenshots/list-of-primes.png",
  },
  {
    name: "Know it all",
    description: "If you don't know it all, at least know what you don't know",
    url: "https://know-it-all.io",
    sourceUrl: "https://github.com/davidgilbertson/know-it-all",
    screenshot: "/site-screenshots/know-it-all.png",
  },
  {
    name: "Disco Mundus",
    description: "Game to help you learn all the suburbs of Sydney",
    url: "https://discomundus.web.app",
    sourceUrl: "https://github.com/davidgilbertson/disco-mundus",
    screenshot: "/site-screenshots/disco-mundus.png",
  },
  {
    name: "English Counties",
    description: "Game to help you learn all the English counties",
    url: "http://englishcounties.web.app",
    sourceUrl: "https://github.com/davidgilbertson/englishcounties",
    screenshot: "/site-screenshots/english-counties.png",
  },
  {
    name: "Pitch Teacher",
    description: "Teach yourself perfect pitch",
    url: "https://pitchteacher.web.app",
    sourceUrl: "https://github.com/davidgilbertson/pitchteacher",
    screenshot: "/site-screenshots/pitch-teacher.png",
  },
];

function GitHubIcon() {
  return (
      <svg
          aria-hidden="true"
          className="size-4"
          viewBox="0 0 16 16"
          fill="currentColor"
      >
        <path d="M8 0C3.58 0 0 3.69 0 8.24c0 3.64 2.29 6.72 5.47 7.81.4.08.55-.18.55-.4l-.01-1.4c-2.23.5-2.7-1.1-2.7-1.1-.36-.96-.89-1.21-.89-1.21-.73-.51.05-.5.05-.5.81.06 1.23.85 1.23.85.72 1.26 1.88.9 2.34.69.07-.54.28-.9.51-1.11-1.78-.21-3.64-.92-3.64-4.07 0-.9.31-1.63.82-2.2-.08-.21-.36-1.04.08-2.17 0 0 .68-.22 2.2.84A7.42 7.42 0 0 1 8 4c.68 0 1.36.09 2 .27 1.53-1.06 2.2-.84 2.2-.84.44 1.13.16 1.96.08 2.17.51.57.82 1.3.82 2.2 0 3.16-1.87 3.86-3.65 4.06.29.26.54.76.54 1.53l-.01 2.26c0 .22.14.48.55.4A8.18 8.18 0 0 0 16 8.24C16 3.69 12.42 0 8 0Z"/>
      </svg>
  );
}

export default function App() {
  return (
      <main className="min-h-screen text-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <header className="mb-8">
            <h1 className="text-2xl text-slate-900">
              A few personal projects from <strong>David Gilbertson</strong>
            </h1>
          </header>

          <section className="site-grid grid gap-5">
            {sites.map((site) => (
                <div
                    key={site.name}
                    className="site-card group grid overflow-hidden border border-white/70 bg-white/85 shadow-md shadow-slate-300/80 backdrop-blur transition hover:border-white hover:bg-white/95 hover:shadow-lg hover:shadow-slate-400/60"
                >
                  <a
                      href={site.url}
                      target="_blank"
                      rel="noreferrer"
                      className="site-screenshot-link block bg-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                  >
                    <img
                        src={site.screenshot}
                        alt={`Screenshot of ${site.name}`}
                        className="h-full w-full object-contain"
                    />
                  </a>
                  <div className="flex flex-col justify-center p-5 xl:p-8">
                    <h2 className="text-xl font-semibold text-slate-900 xl:text-2xl">
                      <a
                          href={site.url}
                          target="_blank"
                          rel="noreferrer"
                          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 group-hover:underline"
                      >
                        {site.name}
                      </a>
                    </h2>
                    <p className="mt-4 max-w-64 text-base leading-7 text-slate-700">
                      {site.description}
                    </p>
                    <a
                        href={site.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                    >
                      <GitHubIcon/>
                      <span>Source</span>
                    </a>
                  </div>
                </div>
            ))}
          </section>
        </div>
      </main>
  );
}
