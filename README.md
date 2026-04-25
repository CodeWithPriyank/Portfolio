# Priyank's Portfolio

Personal developer portfolio showcasing projects, skills, experience, and creative work — built with React + Vite and deployed via GitHub Pages.

---

## Features

### Core Sections
- **Hero** — Animated landing with smooth scroll
- **About** — Bio, tech stack with brand icons, fun fact
- **Experience** — Timeline of roles at Yudiz Solutions with dynamic duration counter
- **Projects** — Interactive project cards with modal detail view
- **Contact** — Email contact form + social links

### Interactive Features
- **Terminal Easter Egg** — Press `` ` `` (backtick) or click the terminal button (bottom-right) to open a dev terminal. Supports commands: `whoami`, `skills`, `experience`, `projects`, `contact`, `open <n>`, `clear`, `exit`
- **Contact Form** — Name/email/message form powered by EmailJS (no backend required)

### Coming Soon (commented out, ready to enable)
- **GitHub Live Stats** — Animated repo count, stars, followers fetched from GitHub API (`GitHubStats` component)
- **Blog / Writings** — Post cards pulled from Dev.to public API (`BlogSection` component)

---

## Tech Stack

| Tech | Role |
|---|---|
| React 19 | Frontend framework |
| Vite | Build tool |
| React Router | Client-side routing |
| GSAP + ScrollTrigger | Scroll animations |
| Framer Motion | Component animations |
| react-icons | Brand & UI icons |
| EmailJS | Contact form (no backend) |
| gh-pages | Deployment |

---

## Project Structure

```
src/
├── components/
│   ├── About/           # About section with tech stack icons
│   ├── BlogSection/     # Blog posts (commented out — needs Dev.to username)
│   ├── ContactForm/     # EmailJS contact form
│   ├── Experience/      # Work timeline
│   ├── FooterContact/   # Footer with nav + contact
│   ├── GitHubStats/     # GitHub stats (commented out — enable anytime)
│   ├── HeroSection/     # Landing hero
│   ├── OsmoMenu/        # Fullscreen navigation menu
│   ├── ProjectModal/    # Project detail modal
│   ├── ProjectsSection/ # Featured projects grid
│   └── Terminal/        # Dev terminal easter egg
├── data/
│   └── projects.js      # All project entries
└── Pages/
    ├── Landing/         # Main landing page
    └── ProjectDetail/   # Individual project page
```

---

## Run Locally

```bash
git clone https://github.com/CodeWithPriyank/Portfolio.git
cd Portfolio
npm install
npm run dev
```

---

## Deploy to GitHub Pages

```bash
npm run deploy
```

Builds the project and pushes the `dist/` folder to the `gh-pages` branch automatically.

Live at: **https://codewithpriyank.github.io/Portfolio**

---

## Enable Commented Features

### Contact Form (EmailJS)
1. Create a free account at [emailjs.com](https://emailjs.com)
2. Add an Email Service and create a Template with variables: `{{from_name}}`, `{{reply_to}}`, `{{message}}`
3. Open `src/components/ContactForm/ContactForm.jsx` and replace:
   ```js
   const SERVICE_ID  = 'YOUR_SERVICE_ID';
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
   ```

### GitHub Stats
Uncomment in `src/components/About/AboutSection.jsx`:
```jsx
import GitHubStats from '../GitHubStats/GitHubStats';
// and
<GitHubStats />
```

### Blog / Writings
1. Create a [Dev.to](https://dev.to) account and publish posts
2. Open `src/components/BlogSection/BlogSection.jsx` and set your username
3. Uncomment the import and `<BlogSection />` in `src/Pages/Landing/Landing.jsx`
