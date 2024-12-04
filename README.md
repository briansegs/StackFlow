# StackFlow - A modern Next.js clone of Stack Overflow

![site image](https://github.com/briansegs/StackFlow/blob/main/public/assets/images/project1.png)

### Demo:

[Link](https://stack-flow-ashy.vercel.app/)
This project is currently in development so the demo might be broken or down from time to time.

## Table of contents

- [About the app](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [DevLog](#devlog)
- [Status](#status)

## About the app:

I wanted to learn Next.js as well as a modern tech stack with Mongodb, TypeScript, and Tailwindcss. I also wanted to improve my current skills with React.js and build more advanced web applications. I learn best by first studying the material and then testing my understanding through a project. I haven't built a clone of a popular web application so this will be an exciting challenge in itself. I want to put my own spin on the UI/UX but I want to match the functionality as closely as I can, using a database to handle the data.

### The skills I learned after completing this project:

- React functional components and their reusability
- Next.js fundamentals
- Next.js file and folder structure
- Next.js routing
- Setting up a project using esLint and Prettier
- Fundamental CSS properties to improve my flex & grid skills
- Advanced styling with Tailwindcss and scadcn ui
- Light and dark theme
- Authentication
- Context API and multiple layouts
- Practice with Media queries for satisfactory responsiveness covering almost all devices
- Data fetching
- Revalidation and caching
- Building a backend
- Server actions
- Mongodb and Mongoose
- Intergration of OpenAI for automated answers
- Classic Algorithms
- React hook form for forms
- Zod for form validation
- TypeScript for type safety
- Pagination and search

## Technologies:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- Styling with [tailwindcss](https://tailwindcss.com/) and [scadcn ui](https://ui.shadcn.com/)
- Type safety with [TypeScript](https://www.typescriptlang.org/)
- Linting with [esLint](https://eslint.org/) and [prettier](https://prettier.io/)
- Authentication with [Clerk](https://clerk.com/)
- Form creation and validation with [React hook form](https://react-hook-form.com/) and [zod](https://zod.dev/)
- Text editor [TinyMCE](https://www.tiny.cloud/)
- Database with [Mongodb](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/)

## Setup:

Clone the project and enter its root directory.

Install **Node.js** -> [Instructions](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

### `npm i`

Installs all of the project's dependencies.

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## DevLog:

Completed features:

- Setup

  - Eslint / Prettier
  - Git / Github
  - Tailwindcss
  - Code Architecture
  - Nextjs routing
  - Authentication with Clerk
  - Layout, fonts, and metadata
  - Theme for light and dark mode

- Front-end development

  - Navbar
  - Sidebar
  - Home page
  - Ask a question page
  - Displayed questions on the home page

- Backend development

  - Setup MongoDB server actions
  - Created question model
  - Created User model
  - Creaded Tag model
  - Created question action

- Webhooks

  - Implemented Webhooks and user actions
  - deployed Webhooks

- Created Community page
- Created Tags page

- Created Question details page

  - Parsed and displayed question content
  - Created answer form
  - Created answer model
  - Implemented create answer action
  - Intergrated create answer action inside answer form
  - Displayed All answers on page

- Voting

  - Created Votes UI
  - Created upvote/downvote actions for questions
  - Intergrate question upvote/downvote actions in UI
  - Create answer voting

- Collections page

  - Implement Save question action
  - Display all saved questions

- Create question details page Views

- Create Tag details page

- Profile page

  - Create profile page
  - Create User stats UI
  - Implement User questions tab
  - Implement User Answers tab

- Edit/Delete User actions

  - Implement Edit/Delete Question/Answer component
  - Create edit question page
  - Create edit profile page

- Show top results

  - Fetch and show top questions
  - Fetch and show top tags

- Local search

  - Setup and manage local search state
  - Implement search functionality for home page
  - Implement search functionality for community page
  - Implement search functionality for collection page
  - Implement search functionality for tag page

- Filters

  - Setup and manage filter state
  - Intergrate filters on home page
  - Intergrate filters on community page
  - Intergrate filters on collection page
  - Intergrate filters on tag page

- pagination

  - Created pagination component
  - Implemented pagination on the home page
  - Implemented pagination for the rest of the pages

- Global search

  - Created the global search UI
  - Created the Global search results component
  - Created the global search filters
  - Implemented the global search action

- Reputation

  - Worked out how reputation should work and how to approach it
  - Implemented reputation points for questions
  - Implemented reputation points for answers
  - Made plans on how to extend this feature (Needs testing...)

- Badge system

  - Worked out how the badge system should work and how to approach it
  - Implemented the badge system
  - Made plans on how to extend this feature (Needs testing...)

- Generate AI answers

  - Setup AI Answer feature (OpenAI API account)
  - Implemented the API route for the AI feature
  - Displayed the AI results on the UI

- Loading place holders for page UI

  - Created a loading state for the home page
  - Created a loading state for rest of pages

- Created Toasts for actions (votes, saving questions, asking questions, etc...)

- Implemented basic metadata for pages.

- Implemented Recommendations feature

## Status:

- The application is deployed and ready to be used
- Jobs page is in development and will be available in the next version of the application
- Badge system will be improved after enough feedback is recieved
- Recommendations feature will be improved after enough feedback and data is recieved
