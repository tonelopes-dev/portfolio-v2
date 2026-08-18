<h1 align="center">
  <img src="https://tonelopes-dev.github.io/mylinks/assets/img/avatar-photo/avatar-light.jpg" width="120" style="border-radius:50%;" alt="Tone Lopes" /><br/>
  Tone Lopes — Developer Portfolio v2
</h1>

<p align="center">
  <strong>FullStack Developer · TypeScript · React · Node.js</strong><br/>
  Transforming lines of code into scalable, high-impact solutions.
</p>

<p align="center">
  <a href="https://tonelopes-dev.github.io/portfolio-v2/" target="_blank">
    <img src="https://img.shields.io/badge/🌐 Live Demo-Visit Portfolio-teal?style=for-the-badge" alt="Live Demo" />
  </a>
  <a href="https://www.linkedin.com/in/tonelopes-dev" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/tonelopes-dev" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-38BDF8?style=flat-square&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel" />
</p>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
  - [Frontend](#frontend)
  - [Tooling \& Quality](#tooling--quality)
  - [Backend (Projects Showcased)](#backend-projects-showcased)
- [Features](#features)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Featured Projects](#featured-projects)
  - [Frontend](#frontend-1)
  - [Backend](#backend)
  - [FullStack](#fullstack)
- [About Me](#about-me)
  - [Key Milestones](#key-milestones)
  - [What Sets Me Apart](#what-sets-me-apart)
  - [Open to Global Opportunities](#open-to-global-opportunities)
- [License](#license)

---

## About the Project

This is **version 2** of my personal developer portfolio — a production-grade, fully responsive Single Page Application built with a modern React ecosystem. It serves as a living showcase of my technical expertise, professional background, and curated project portfolio.

The goal was not to simply "have a portfolio", but to build one that is **itself** a demonstration of senior-level engineering: performance-conscious, maintainable, SEO-optimised, and production-deployed.

> **Live at:** [tonelopes-dev.github.io/portfolio-v2](https://tonelopes-dev.github.io/portfolio-v2/)

---

## Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19 | UI framework with concurrent features |
| **Vite** | 6 | Next-generation build tool & dev server |
| **TypeScript** | 5 | Type-safe JavaScript at scale |
| **TailwindCSS** | 3 | Utility-first CSS framework |
| **React Router DOM** | 7.18+ | Client-side routing (CVE-hardened) |
| **Swiper.js** | 12 | Touch-friendly project carousels |
| **React Fast Marquee** | 1.6 | Animated tech-stack gallery |
| **Radix UI** | Latest | Accessible, unstyled UI primitives |
| **Flowbite React** | 0.7 | Component library |

### Tooling & Quality

| Tool | Purpose |
|---|---|
| **ESLint** | Static analysis & code quality enforcement |
| **Prettier** | Opinionated, consistent code formatting |
| **PostCSS + Autoprefixer** | CSS compatibility & transformations |
| **Vercel Analytics** | Real-time usage insights |
| **Google Analytics & GTM** | Conversion tracking |

### Backend (Projects Showcased)

| Technology | Use Case |
|---|---|
| **Node.js + Express** | REST API development |
| **PostgreSQL / SQLite / MongoDB** | Relational & document databases |
| **Prisma ORM** | Type-safe database access layer |
| **Firebase** | Authentication & real-time features |
| **Docker** | Containerisation & deployment |
| **Angular** | Enterprise-scale frontend (project contexts) |

---

## Features

- **Blazing Fast** — Vite-powered build with tree-shaking and code splitting
- **Fully Responsive** — Mobile-first layout, tested across all screen sizes
- **Interactive Carousels** — Swiper.js-based project galleries (Frontend, Backend, FullStack)
- **Animated Tech Stack** — Auto-scrolling marquee showcasing 20+ technologies
- **Smooth Navigation** — React Router DOM with anchor-based scrolling
- **SEO Optimised** — Structured metadata, Google Search Console verified
- **Analytics Integrated** — Google Analytics + Google Ads conversion tracking
- **Security Hardened** — All dependencies up-to-date; `npm audit` returns `0 vulnerabilities`
- **i18n Ready** — Internationalisation scaffold in place (i18next + react-i18next)
- **Accessible** — Radix UI primitives ensure ARIA compliance out of the box

---

## Project Architecture

```
portfolio-v2/
├── public/                     # Static assets (logo, images, CV)
├── src/
│   ├── assets/                 # Bundled media and icons
│   ├── components/
│   │   ├── banner/             # Hero section (Banner.jsx)
│   │   ├── aboutMe/            # Bio, achievements & social links
│   │   ├── galeryStacks/       # Animated marquee tech stack gallery
│   │   ├── TabsProject/        # Swiper carousels (Front / Back / FullStack)
│   │   │   ├── CarrouselFront.jsx
│   │   │   ├── CarrouselBack.jsx
│   │   │   ├── CarrouselFullStack.jsx
│   │   │   └── CardProject.jsx
│   │   ├── timeline/           # Career & education timeline
│   │   ├── Footer/             # Footer with social media links
│   │   └── comuns/             # Shared UI atoms (Buttons, SocialMedia)
│   ├── pages/
│   │   └── Home.jsx            # Single-page composition
│   ├── App.jsx                 # Root component with BrowserRouter
│   └── main.jsx                # React 19 entry point
├── index.html                  # HTML shell with analytics & font preloads
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind theme customisation
├── postcss.config.js           # PostCSS plugins
└── package.json                # Dependency manifest with security overrides
```

> **Design pattern:** Component-driven architecture with clear separation between shared atoms (`comuns/`), feature components (`banner/`, `aboutMe/`), and page-level composition (`pages/`).

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/tonelopes-dev/portfolio-v2.git
cd portfolio-v2

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build |
| `npm run build:prod` | Build with `production` mode env |
| `npm run build:staging` | Build with `staging` mode env |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all `.jsx` files |
| `npm run format` | Format all files with Prettier |

---

## Featured Projects

### Frontend

| Project | Description | Live |
|---|---|---|
| **EcoConecta** | Recycling connection platform — find nearby collection points | [ecoconecta.vercel.app](https://ecoconecta.vercel.app/) |
| **My Links** | Developer link-in-bio card — clean personal hub | [mylinks-tonelopes](https://mylinks-tonelopes-projects.vercel.app/) |
| **Password Generator** | Cryptographically strong password generator (5–25 chars) | [Live](https://tonelopes-dev.github.io/gerador-de-senhas/) |

### Backend

| Project | Description | Stack |
|---|---|---|
| **Financial API** | RESTful API for user financial transaction management | Node.js · Express · PostgreSQL |
| **NodeNinjas PDV** | Point-of-sale API — led a 5-person team across 3 delivery sprints | Node.js · Express · Prisma |
| **MyNotes API** | Flashcard & note management REST API | Node.js · Express · SQLite |

### FullStack

| Project | Description |
|---|---|
| **Graninha App** | Personal finance organiser — tracks income and expenses end-to-end |
| **Barbershop Scheduler** | Appointment booking system with user auth and calendar integration |
| **Self-service Kiosk** | Interactive ordering system with product management and order flow |
| **Accommodation Booking** | Full CRUD booking system with availability management |

---

## About Me

I'm **Tone Lopes**, a FullStack Developer specialising in TypeScript, React and Node.js ecosystems. I build products that are not just functional, but crafted with engineering discipline and a sharp eye for user experience.

### Key Milestones

- **Rocketseat FullStack Bootcamp** — End-to-end project delivery across frontend, backend and DevOps fundamentals.
- **iFood-Sponsored Backend Bootcamp (Cubos Academy)** — Selected from **36,000 candidates**. Led a 5-person team to ship a production-grade financial transactions API across 3 sprints.
- Creator of **Graninha App**, a financial management product built independently from concept to deployment.

### What Sets Me Apart

- **Technical breadth** — Comfortable across the entire stack: React SPAs, Node.js REST APIs, relational & document databases, containerisation.
- **Leadership** — Proven ability to lead engineering teams under real delivery pressure.
- **Product mindset** — I think in outcomes, not just outputs. Features ship with analytics, proper error handling and production monitoring.
- **Quality discipline** — ESLint, Prettier, and audit-clean dependencies are non-negotiable defaults in every project I touch.

### Open to Global Opportunities

I am actively seeking **Senior Software Engineer** or **FullStack Developer** roles with high-impact, globally-distributed teams. I thrive in fast-paced environments, remote-first cultures, and products that scale.


---

## License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<p align="center">
  Built with precision by <strong>Tone Lopes</strong><br/>
  <em>"Transforming lines of code into innovative solutions."</em>
</p>
