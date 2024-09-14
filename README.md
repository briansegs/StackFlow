# StackFlow - A modern Next.js clone of Stack Overflow
![site image](https://github.com/briansegs/StackFlow/blob/main/public/assets/images/project1.png)

### Demo:
Currently under construction

## Table of contents
- [About the app](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)

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

## Approach:
I started with creating a basic Next.js project and setting up my file system, routing, and sections. Next, I built the layout and set up the styles for light and dark theme. I worked on the sections in order of how they appear in the menu. There was a lot of jumping back and forth becuase sections often depended on features that weren't built out yet. Like I built the search bar but it took four passes to finish it because the search depended on other search UI, features being built and the database being built out. 

I started with the layout and theme. Once those were finished I built the navigation bar and sidebar. With those in place, I could start building out pages. I built the home page followed by the ask a question page. Now I need data for the questions and a text editor to ask the questions. I installed a text editor and set up the database. I setup the different models I needed for users, questions, and tags. I moved back to building pages.

I will update you as I make more progress...

## Status:
This project is currently in development.

## Credits:
N/A







