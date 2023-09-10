export const navLinks = [
  { label: 'Home', href: '/#' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Resume', href: '/#resume' },
  { label: 'Contact', href: '/#contact' },
]

export const skills = [
  { label: 'MongoDB', iconUrl: '/assets/skills/mongo.png' },
  { label: 'Github', iconUrl: '/assets/skills/github.png' },
  { label: 'JavaScript', iconUrl: '/assets/skills/javascript.png' },
  { label: 'TypeScript', iconUrl: '/assets/skills/typescript.png' },
  { label: 'React', iconUrl: '/assets/skills/react.png' },
  { label: 'Next.js', iconUrl: '/assets/skills/nextjs.png' },
  { label: 'Tailwind', iconUrl: '/assets/skills/tailwind.png' },
  { label: 'NodeJS', iconUrl: '/assets/skills/node.png' },
]

export const projects = [
  {
    id: 1,
    name: "Booking App",
    shortDescription: "A clone of the airbnb website where users can book a room .",
    longDescription: "A clone of the airbnb website where users can book a room. It uses MongoDB as database, NextJS for frontend and backend using the most recent version with app router and TailwindCSS for styling. And also I implemented a a way to filter the rooms based on the text a user types on a search bar.",
    stack: ["MongoDB", "NextJS", "TailwindCSS", "NextAuth", "Prisma"],
    image: "/assets/projects/booking.png",
    code: "https://github.com/Deivid182/next13-airbnb-clone",
    demo: "https://next13-airbnb-clone-swart.vercel.app/"
  },
  {
    id: 2,
    name: "Chat App",
    shortDescription: "A clone of the messenger app with realtime.",
    longDescription: "In this project I tried to implement realtime with pusher because of socket io wasn't working for Next13 with app router. It implements authentication with NextAuth and MongoDB as database. Also I implemented Cloudinary for uploading images.",
    stack: ["MongoDB", "NextJS", "TailwindCSS", "NextAuth", "Cloudinary", "Pusher"],
    image: "/assets/projects/messenger.png",
    code: "https://github.com/Deivid182/chat-app",
    demo: "https://chat-app-eight-ruby.vercel.app/"
  },
  {
    id: 3,
    name: "Expense Tracker",
    shortDescription: "This a little project that helps you track your expenses.",
    longDescription: "This was one the first projects I made in ReactJS using just hooks but no global state. It was the first time I implemented localstorage and TailwindCSS with external libraries",
    stack: ["ReactJS", "TailwindCSS"],
    image: "/assets/projects/expense-tracker.png",
    code: "https://github.com/Deivid182/cotizador-gastos",
    demo: "https://prismatic-salamander-ff6c0d.netlify.app/"
  },
  {
    id: 4,
    name: "Up Task",
    shortDescription: "Task Manager with MERN stack.",
    longDescription: "This is the first MERN project I made and it's a task manager that allows people to create projects, tasks and assign them to members. It uses the MERN stack and TailwindCSS.",
    stack: ["ReactJS", "TailwindCSS", "ExpressJS", "MongoDB", "NodeJS", "Socket.io"],
    image: "/assets/projects/up-task.png",
    code: "https://github.com/Deivid182/Up_Task_Client",
    demo: "https://brilliant-semolina-5cb4e7.netlify.app"
  },
  {
    id: 5,
    name: "Tweeter",
    shortDescription: "A clone of the twitter website.",
    longDescription: "This was the first project I built when I started leraning NextJS and It was exactly when the Nextjs 13 was released so I had to read a lot of documentation to get it. Briefly It just implements CRUD operations and a simple filter for the tweets and users.",
    stack: ["ReactJS", "TailwindCSS", "MongoDB", "NextJS", "Prisma"],
    image: "/assets/projects/tweeter.png",
    code: "https://github.com/Deivid182/tweeter-clone",
    demo: 'https://tweeter-clone-2clphtipc-deivid182.vercel.app/'
  },
  {
    id: 6,
    name: 'Web Videos',
    shortDescription: 'Technical test with MERN stack.',
    longDescription: "I found this technical test on Youtube and I tried to replicate it using the MERN stack. The users can create, edit and delete videos, and also they can like videos and follow the creator of the video.",
    stack: ["ReactJS", "TailwindCSS", "ExpressJS", "MongoDB", "NodeJS", "Shadcn UI", "TS"],
    image: "/assets/projects/web-videos.png",
    code: "https://github.com/Deivid182/video-app-client",
    demo: 'https://resplendent-dasik-ce178a.netlify.app/'
  }
]
