# Personal Portfolio (React + Tailwind CSS)

A responsive, single-page portfolio with light/dark themes and a live list of
public GitHub repositories.

**Live site:** https://my-portfolio-khaki-two-66.vercel.app/

## Quick Start

### Prerequisites

[Node.js](https://nodejs.org/) v18 or higher.

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ICBMAY/IS_hub-summer-bootcamp-frontend-track.git
cd IS_hub-summer-bootcamp-frontend-track

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open the local URL printed in the terminal.

### Other commands

```bash
npm run build     # production build in /dist
npm run preview   # preview the production build locally
```

## GitHub integration

`src/hooks/useGithubRepos.js` calls
`GET https://api.github.com/users/{username}/repos`, removes forks, and sorts
by stars then latest push. It handles unknown users and API rate limits
(60 requests per hour per IP without authentication). The Projects section
adds a filter by language.

## Folder structure

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation header and light/dark switch
│   ├── Hero.jsx          # Intro banner and main call-to-action buttons
│   ├── About.jsx         # Bio and grouped skills
│   ├── Projects.jsx      # GitHub repository list with language filter
│   ├── Contact.jsx       # Email and social links
│   ├── Footer.jsx        # Copyright and location
│   └── Section.jsx       # Shared section layout wrapper
├── hooks/
│   └── useGithubRepos.js # Custom hook that fetches GitHub API data
├── data/
│   └── profile.js        # All personal content in one place
├── App.jsx               # Page layout
├── index.css             # Tailwind imports and color tokens
└── main.jsx              # React entry point
```

## Deployment

The site deploys to vercel
(`https://my-portfolio-khaki-two-66.vercel.app/`)

## Tech stack

React 18, Vite, Tailwind CSS 3, GitHub REST API.