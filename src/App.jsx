const sites = [
  {
    name: "BPM Panda",
    description: "Metronome, with tap to record BPM",
    url: "https://bpmpanda.web.app",
  },
  {
    name: "Phased Time",
    description: "A timer with on and off durations, and reps",
    url: "https://phasedtimer.web.app",
  },
  {
    name: "Beat Parakeet",
    description: "Plays lo-fi tunes",
    url: "https://beatparakeet.web.app",
  },
  {
    name: "Know it all",
    description: "If you don't know it all, at least know what you don't know",
    url: "https://know-it-all.io",
  },
  {
    name: "List of Primes",
    description: "A list of all the prime numbers. All of them.",
    url: "https://list-of-primes.web.app",
  },
  {
    name: "Disco Mundus",
    description: "Game to help you remember all the suburbs of Sydney",
    url: "https://discomundus.web.app",
  },
  {
    name: "English Counties",
    description: "Game to help you remember all the English counties",
    url: "http://englishcounties.web.app",
  },
  {
    name: "Pitch Teacher",
    description: "Teach yourself perfect pitch",
    url: "https://pitchteacher.web.app",
  },
];

export default function App() {
  return (
    <main className="min-h-screen text-slate-50">
      <div className="mx-auto max-w-2xl px-6 py-14">
        <header className="mb-8">
          <h1 className="text-2xl text-slate-300">
            A few personal projects from David Gilbertson
          </h1>
        </header>

        <section className="flex flex-col gap-4">
          {sites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noreferrer"
              className="group block cursor-pointer rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-50 group-hover:underline">
                    {site.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-300">
                    {site.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
