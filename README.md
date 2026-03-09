# Mind Gym

[![CI](https://github.com/LessUp/mind-gym/actions/workflows/ci.yml/badge.svg)](https://github.com/LessUp/mind-gym/actions/workflows/ci.yml)
[![Deploy](https://github.com/LessUp/mind-gym/actions/workflows/deploy.yml/badge.svg)](https://github.com/LessUp/mind-gym/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-CDN-06B6D4?logo=tailwindcss&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa&logoColor=white)

English | [简体中文](README.zh-CN.md)

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
- **i18n** — Chinese & English, auto-detect browser language

## Quick Start

```bash
# No build step needed — static files only
# Serve with any HTTP server:
npx serve .
# Or open index.html directly in a browser
```

## Project Structure

```
mind-gym/
├── index.html              # Main HTML (single-page app)
├── app.js                  # Core game logic & state management
├── sw.js                   # Service Worker (offline caching)
├── manifest.webmanifest    # PWA manifest
├── src/
│   ├── keys.js             # localStorage key constants
│   ├── utils.js            # Shuffle, seeded RNG, escapeHtml
│   ├── storage.js          # localStorage CRUD (settings, stats, etc.)
│   ├── i18n.js             # Internationalization dictionaries (zh/en)
│   ├── effects.js          # Sound (Web Audio) & vibration
│   ├── pools.js            # Card face pools (emoji, numbers, etc.)
│   ├── timer.js            # Game timer (elapsed & countdown)
│   ├── confetti.js         # Win celebration animation (Canvas 2D)
│   ├── ui.js               # DOM element bindings
│   └── ui-events.js        # Event listener bindings
├── __tests__/              # Jest unit tests
├── docs/                   # Architecture & design docs
├── scripts/                # Deploy preparation scripts
└── assets/                 # Icons & static assets
```

## Tech Stack

- Vanilla JavaScript (ES2022), Tailwind CSS (CDN), PWA Service Worker
- No framework, no build step, zero runtime dependencies
- Jest for testing, GitHub Actions for CI/CD, GitHub Pages for deployment

## Development

```bash
npm install          # Install dev dependencies (Jest)
npm test             # Run unit tests
npm run lint         # Check code formatting (Prettier)
npm run format       # Auto-format code
npm run prepare:deploy  # Build static bundle for deployment
```

## License

MIT License
