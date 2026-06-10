import React from "react";

const features = [
  {
    title: "Upload PDFs",
    desc: "Drop or upload any PDF to instantly convert chapters into audio.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 8h10M7 12h8m-8 4h6"
        />
      </svg>
    ),
  },
  {
    title: "Natural Voices",
    desc: "Choose from multiple high-quality voices in different languages.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6v12h4l5 2V4L8 6H4z"
        />
      </svg>
    ),
  },
  {
    title: "Adjustable Speed",
    desc: "Speed up or slow down playback to suit your listening style.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3M21 12A9 9 0 1112 3a9 9 0 019 9z"
        />
      </svg>
    ),
  },
  {
    title: "Offline Download",
    desc: "Export audio files to listen offline on any device.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v12m0 0l4-4m-4 4l-4-4M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6"
        />
      </svg>
    ),
  },
  {
    title: "Bookmarks & Progress",
    desc: "Save your position and pick up where you left off across devices.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 5v14l7-4 7 4V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Cross-Platform",
    desc: "Works in the browser and on mobile — no setup required.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 7h18M7 3v4M17 3v4M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
          What Retoli Does
        </h2>
        <p className="mt-2 text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Convert PDFs into immersive audiobooks with flexible playback and
          export options.
        </p>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.title}
              className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40"
            >
              <div className="flex-none text-brand dark:text-cyan-300">
                {f.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {f.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Features };
