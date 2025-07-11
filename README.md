# My Personal Portfolio

My personal portfolio showcases my skills, education, and projects. Built with a modern tech stack, it highlights my capabilities as a Full Stack Developer & UI/UX Designer.

## Table of Contents

- [My Personal Portfolio](#my-personal-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [Project Structure](#project-structure)
  - [Deployment](#deployment)

## Features

Key features:

* **Dynamic Content:** Education, Skills, and Projects data fetched from a local backend API.
* **Project Detail Pages:** Dedicated page for each project with a clickable image slider.
* **Responsive Navbar:** Adapts to screen sizes, includes a hamburger menu for mobile.
* **Smooth Section Scrolling:** Navbar links scroll smoothly to sections, accounting for sticky header.
* **Custom 404 Page:** User-friendly page for non-existent routes.
* **Global Font:** Uses Poppins from Google Fonts.
* **Animated Background:** Subtle, animated isometric grid pattern on non-detail pages.
* **On-Scroll Animations:** Sections animate into view.

## Technologies Used

Built with:

**Frontend:**

* **Vue.js 3:** Progressive JavaScript framework.
* **Vite:** Fast build tool.
* **Vue Router 4:** Client-side routing.
* **Axios:** HTTP client for API requests.
* **Tailwind CSS:** Utility-first CSS framework.
* **Google Fonts (Poppins):** Custom typography.

**Backend:**

* **Node.js:** JavaScript runtime.
* **Express.js:** Web framework for Node.js.
* **CORS:** Cross-Origin Resource Sharing middleware.
* **Static File Serving:** For project images.

## Getting Started

To run this project locally:

### Prerequisites

Make sure you have:

* [Node.js](https://nodejs.org/en/) (LTS recommended)
* [npm](https://www.npmjs.com/) (with Node.js) or [Yarn](https://yarnpkg.com/)

### Backend Setup

1.  **Go to `backend` folder:**
    ```bash
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start server:**
    ```bash
    node index.js
    # or, if you have nodemon:
    # nodemon index.js
    ```
    Runs on `http://localhost:3000`.

### Frontend Setup

1.  **Open new terminal, go to `frontend` folder:**
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start dev server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Opens at `http://localhost:5173`.

Your portfolio is now running locally!

## Project Structure

Project is split into `frontend` and `backend`:

```
cv-portfolio-saya/
├── backend/
│   ├── project_images/
│   ├── data.js
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── images/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── directives/
│   │   ├── router/
│   │   ├── views/
│   │   ├── App.vue
│   │   └── main.js
│   ├── .env
│   ├── .gitignore
│   ├── index.html
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   └── vite.config.js
├── .gitignore
├── LICENSE
└── README.md
```

## Deployment

Deployment is handled separately for frontend and backend.

* **Frontend:** Vue/Vite app builds to static assets (`npm run build`). Host on Netlify, Vercel, or GitHub Pages.
* **Backend:** Node.js/Express server deploys to Render, Heroku, or DigitalOcean. Configure environment variables (e.g., `PORT`, `CORS_ORIGIN`).
