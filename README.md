# Netflix Clone (Frontend Only)

A pixel-inspired **Netflix UI clone** built with React and Tailwind CSS. This is a
**frontend-only** demo — there is no backend, no authentication, and no real API.
All content is dummy data, and imagery uses stable seeded placeholders that fall
back to CSS gradients if offline.

> ⚠️ This project is a non-commercial UI clone built for learning purposes and is
> **not affiliated with, endorsed by, or connected to Netflix**. All trademarks
> belong to their respective owners.

## Features

- 🎬 **Landing page** — hero with email capture, feature sections, and an FAQ accordion
- 👤 **"Who's watching?"** profile selection screen
- 🧭 **Browse page** — scroll-aware navbar, cinematic hero billboard, and horizontally
  scrolling content rows with hover previews
- 🔝 **Top 10** row with the signature oversized rank numbers
- 🔍 **Search** by title or genre
- ➕ **My List** — add/remove titles, persisted in `localStorage`
- 🪟 **Details modal** — Netflix-style title popup with metadata and actions
- 📱 Fully responsive (mobile → desktop)

## Tech Stack

- [React 18](https://react.dev/) (Create React App)
- [React Router 6](https://reactrouter.com/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

```bash
# install dependencies
yarn install     # or: npm install

# start the dev server (http://localhost:3000)
yarn start       # or: npm start

# create a production build
yarn build       # or: npm run build
```

## Project Structure

```
src/
├── components/     # Navbar, Billboard, Row, Card, Modal, Footer, NetflixLogo
├── context/        # MyListContext (localStorage), ModalContext
├── data/           # movies.js — dummy catalog
├── pages/          # Landing, Profiles, Browse, MyList, Search
├── App.js          # routes + providers
├── index.css       # Tailwind + global styles
└── index.js        # entry (BrowserRouter)
```

## Routes

| Path              | Screen                   |
| ----------------- | ------------------------ |
| `/`               | Landing (marketing)      |
| `/profiles`       | Who's watching?          |
| `/browse`         | Home (billboard + rows)  |
| `/browse/tv`      | TV Shows                 |
| `/browse/movies`  | Movies                   |
| `/browse/new`     | New & Popular            |
| `/browse/my-list` | My List                  |
| `/search?q=`      | Search results           |
