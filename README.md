# Jay-Ar Bote — Personal Portfolio

A responsive personal portfolio presenting my professional experience as a BIM Specialist and my continuing transition into software development, BIM automation, and AI-enabled solutions.

## Live Website

[View the deployed portfolio] https://jay-ar-portfolio.vercel.app/

## Project Overview

This project is Version 1 of my evolving personal portfolio.

The goal of Version 1 is to establish a clean, professional, and accessible frontend website that introduces my background, technical skills, selected projects, and learning journey.

The portfolio connects my construction and BIM experience with the software-development skills I am continuing to build.

## Version 1 Features

- Responsive single-page layout
- Professional BIM-inspired visual design
- Hero introduction and career direction
- About section
- Categorized technical skills
- Reusable project cards
- Honest project status indicators
- Professional and educational journey timeline
- Email, GitHub, and LinkedIn contact links
- Keyboard-accessible navigation
- Skip-to-content link
- Visible keyboard focus states
- Reduced-motion support
- Mobile, tablet, and desktop layouts
- Production deployment through Vercel

## Portfolio Sections

### Hero

Introduces who I am, where I am based, and how my BIM experience connects with software development.

### About

Explains my professional background and my direction toward BIM–IT, automation, and AI-enabled development.

### Skills

Organizes my current skills into clear categories, including:

- Software development
- Data, databases, and AI
- BIM and digital construction

### Projects

Presents selected completed, ongoing, and planned projects with their technologies, descriptions, repository links, and live-demo links when available.

### Journey

Shows the progression of my education, engineering career, BIM experience, and software-development learning.

### Contact

Provides professional contact options through email, GitHub, and LinkedIn.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- React
- Vite
- Git
- GitHub
- Vercel

## Project Structure

```text
jay-ar-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Journey.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   ├── contact.js
│   │   ├── journey.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

The portfolio content is separated from the presentation components where practical. This makes information such as projects, skills, journey milestones, and contact links easier to update.

## Run the Project Locally

### Requirements

Install:

- [Node.js](https://nodejs.org/)
- Git
- A code editor such as Visual Studio Code

### Installation

Clone the repository:

```bash
git clone https://github.com/jaru91/jay-ar-portfolio.git
```

Enter the project directory:

```bash
cd jay-ar-portfolio
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local address displayed by Vite, usually:

```text
http://localhost:5173
```

## Production Checks

Run the code-quality check:

```bash
npm run lint
```

Create the production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Accessibility and Responsive Design

Version 1 includes:

- Semantic HTML structure
- Logical heading hierarchy
- Keyboard-accessible links
- A skip-to-main-content link
- Visible focus indicators
- Descriptive accessible labels
- Reduced-motion support
- Responsive layouts from small mobile screens to desktop displays

The portfolio was manually checked using keyboard navigation, browser zoom, responsive browser tools, and multiple screen sizes.

## What I Learned

Building Version 1 strengthened my understanding of:

- Organizing a React project into reusable components
- Rendering structured data with JavaScript `.map()`
- Separating content data from component layout
- Creating responsive layouts using CSS Grid and Flexbox
- Applying semantic HTML and accessibility practices
- Testing development and production builds
- Using Git and GitHub to manage project history
- Deploying a React and Vite application

## Version Status

**Version 1 — Frontend Portfolio**

Version 1 focuses on presenting accurate professional content through a clean, responsive, and accessible frontend website.

Future upgrades will be developed separately after this version is stable and fully documented.

## Author

**Jay-Ar Bote**

BIM Specialist based in Singapore, developing practical skills in software development, BIM automation, and AI-enabled solutions.

- [GitHub] https://github.com/jaru91
- [LinkedIn] https://www.linkedin.com/in/jayarbote/
- [Portfolio] https://jay-ar-portfolio.vercel.app/
