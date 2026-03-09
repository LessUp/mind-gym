# Mind Gym

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-CDN-06B6D4?logo=tailwindcss&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa&logoColor=white)

[简体中文](README.md) | English

A browser-based card-flip memory training game combining modern memory training research with intuitive interaction design. From classic matching to timed challenges, daily challenges, combo scoring, adaptive difficulty, spaced reinforcement, recall quizzes, and N-back multi-mode training.

## Features

- **Classic Matching** — Multiple difficulties (4×4 / 4×5 / 6×6), best scores & leaderboard
- **Countdown Mode** — Time-limited per difficulty, auto-fail with retry prompt
- **Daily Challenge** — Date+difficulty+card-seeded for uniform daily challenge
- **Combo & Scoring** — Consecutive match streaks with score multiplier
- **Statistics** — Historical stats, session trends, accuracy tracking
- **Adaptive Difficulty** — Auto-adjusts based on recent performance
- **Spaced Reinforcement** — Periodically resurfaces previously matched cards
- **Recall Quiz** — Post-game position recall test
- **N-Back Training** — Sequential N-back cognitive training mode
- **PWA** — Installable, works offline

## Quick Start

```bash
# No build step needed — static files only
# Serve with any HTTP server:
npx serve .
# Or open index.html directly in a browser
```

## Tech Stack

- Vanilla JavaScript (ES2022), Tailwind CSS (CDN), PWA Service Worker
- No framework, no build step, zero dependencies

## License

MIT License
