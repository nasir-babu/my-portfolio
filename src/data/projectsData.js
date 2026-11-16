export const personalInfo = {
  name: "Nasirullah Babu",
  designation: "Full-Stack Web Developer",
  bio: "I am a passionate web developer focused on building clean, responsive, and high-performance web applications using modern technologies.",
  email: "nasir21b@gmail.com",
  phone: "+880 1948 860166",
  github: "https://github.com/nasir-babu",
  linkedin: "https://linkedin.com/in/nasir-babu",
};

export const skillsData = [
  // Frontend
  {
    name: "HTML5",
    category: "Frontend",
    icon: "FileCode",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: "FileCode2",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    icon: "Code",
    color: "from-yellow-400 to-amber-500",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "FileText",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: "Atom",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "Layers",
    color: "from-slate-200 to-slate-500",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "Palette",
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: "Layout",
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "GSAP",
    category: "Frontend",
    icon: "Zap",
    color: "from-green-400 to-emerald-500",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: "Server",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "Cpu",
    color: "from-slate-400 to-slate-600",
  },
  {
    name: "Prisma",
    category: "Backend",
    icon: "Database",
    color: "from-indigo-400 to-blue-600",
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: "DatabaseBackup",
    color: "from-emerald-400 to-green-600",
  },
  {
    name: "Redis",
    category: "Backend",
    icon: "Database",
    color: "from-red-500 to-rose-600",
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: "Database",
    color: "from-amber-400 to-orange-500",
  },

  // Tools & Workflow
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: "GitBranch",
    color: "from-orange-400 to-rose-500",
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: "Terminal",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Postman",
    category: "Tools",
    icon: "Send",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Vercel",
    category: "Tools",
    icon: "Globe",
    color: "from-slate-100 to-slate-400",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "City Service Platform",
    subtitle: "Full-Stack Civic Complaint & Service Platform",
    description:
      "A comprehensive role-based platform designed to connect citizens, service staff, and administrators in a single ecosystem. Citizens can seamlessly submit and track civic requests, staff can efficiently manage assigned work, and administrators can oversee platform users and service operations.",
    image:
      "https://res.cloudinary.com/xhmxwbu4/image/upload/v1791968684/screencapture-city-service-frontend-vercel-app-2026-10-14-14_42_17.jpg?w=1000&auto=format&fit=crop&q=80",
    liveUrl: "https://city-service-frontend.vercel.app/",
    githubUrl: "https://github.com/MD-Nasir301/city-service-frontend",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    techStack: {
      frontend: [
        "Next.js 16 App Router",
        "React 19",
        "TypeScript 5",
        "Tailwind CSS 4",
        "Shadcn UI",
        "TanStack Query 5",
      ],
      backend: ["Node.js", "Express.js", "JWT Authentication"],
      database: ["PostgreSQL"],
      tools: [
        "Prisma ORM",
        "Stripe API",
        "Cloudinary",
        "Vercel",
        "Recharts",
        "Zod",
      ],
    },
    keyFeatures: {
      citizen: [
        "Secure authentication including email verification and Google OAuth integration.",
        "Submit civic service requests with location, priority, category, and supporting images.",
        "Filter, track request status in real time, and manage profile details.",
        "Access payment history and request tracking information.",
      ],
      staff: [
        "Manage assigned service requests and update work statuses.",
        "Access a comprehensive dashboard summary (assigned, in-progress, resolved, cancelled, rejected).",
        "View earnings summary and completed/paid tasks.",
        "Manage profile details.",
      ],
      admin: [
        "Monitor platform-wide analytics and statistics via interactive charts.",
        "Manage service requests, create tasks, and assign available staff.",
        "Oversee user accounts, roles, and platform permissions.",
        "Manage service categories, transactions, and audit logs.",
      ],
    },
    challenges: [
      "Handling dynamic file uploads and safely storing images on Cloudinary while maintaining efficient data flow and accurate dynamic rendering on the frontend was a major technical challenge.",
    ],
    solutions: [
      "Overcame this by thoroughly understanding core concepts through mentor video resources and AI assistance. Successfully implemented robust client-server data flow, dynamic file handling, and cloud storage integration.",
    ],
    futurePlans: [
      "Upgrade the UI/UX for a more professional finish.",
      "Enhance system scalability and backend architecture.",
      "Expand dashboard functionalities and introduce advanced service management capabilities.",
    ],
  },
  {
    id: 2,
    title: "RentNest",
    subtitle: "Modern Property & Rental Management Platform",
    description:
      "RentNest is a feature-rich property and rental management application designed to streamline the rental experience. It offers custom role-based dashboards for tenants, landlords, and administrators to seamlessly manage property listings, rental requests, payments, and account moderation.",
    image:
      "https://res.cloudinary.com/xhmxwbu4/image/upload/v1791970207/screencapture-rentnest-frontend-22-vercel-app-2026-10-14-15_31_49.jpg",
    liveUrl: "https://rentnest-frontend-22.vercel.app/",
    githubUrl: "https://github.com/MD-Nasir301/rent-nest-frontend",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    techStack: {
      frontend: [
        "Next.js App Router",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Lucide Icons",
      ],
      backend: ["Node.js", "Express.js", "Next.js Server Actions"],
      database: ["PostgreSQL"],
      tools: [
        "Prisma ORM",
        "React Hook Form",
        "Zod",
        "Sonner",
        "Stripe API",
        "Vercel",
      ],
    },
    keyFeatures: {
      tenant: [
        "Browse available property listings with advanced search and filtering options.",
        "View detailed property pages including amenities, pricing, and availability.",
        "Submit rental requests, track status, and complete online payments securely.",
      ],
      landlord: [
        "Access a dedicated dashboard to list, update, and manage rental properties.",
        "Review incoming tenant rental requests and track overall property performance.",
      ],
      admin: [
        "Comprehensive platform moderation, user account management, and content control.",
        "Support for banning/unbanning accounts and reviewing platform-wide requests.",
      ],
    },
    challenges: [
      "Integrating a seamless, secure payment system while ensuring real-time transaction feedback and proper state updates across different user roles was a primary technical hurdle.",
    ],
    solutions: [
      "Overcame this by deep-diving into payment gateway integration concepts with the help of mentor guidelines and AI assistance. Successfully built a reliable end-to-end payment workflow with server actions and dynamic state updates.",
    ],
    futurePlans: [
      "Enhance overall User Experience (UX/UI) with smoother transitions and intuitive design touches.",
      "Add real-time messaging between tenants and landlords.",
      "Introduce advanced analytics for landlords to monitor rental earnings and property occupancy rates.",
    ],
  },
  {
    id: 3,
    title: "NextBuy - E-commerce Web Application",
    subtitle: "Vanilla JS E-Commerce Platform with GSAP & LocalStorage",
    description:
      "A dynamic, role-based e-commerce platform built with vanilla JavaScript. It demonstrates real-world features like API integration, persistent cart management, and smooth GSAP animations.",
    image:
      "https://res.cloudinary.com/xhmxwbu4/image/upload/v1791971604/screencapture-md-nasir301-github-io-next-buy-ecommerce-2026-10-14-15_55_13_1.jpg?w=1000&auto=format&fit=crop&q=80",
    liveUrl: "https://nasir-babu.github.io/next-buy-ecommerce/",
    githubUrl: "https://github.com/nasir-babu/next-buy-ecommerce",
    tags: ["JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap 5", "GSAP"],
    techStack: {
      frontend: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript (ES6+)"],
      animation: ["GSAP (GreenSock)", "SweetAlert2"],
      database: ["MockAPI", "LocalStorage API"],
      tools: ["imgBB API", "Git & GitHub"],
    },
    keyFeatures: {
      user: [
        "Role-Based System: Dynamic switching between Admin and User persisted via LocalStorage.",
        "Persistent Cart: Fully functional shopping cart that stays updated seamlessly.",
        "Interactive Alerts: Used SweetAlert for beautiful, user-friendly notifications.",
      ],
      admin: [
        "Product Management: Add, edit, and manage products dynamically.",
        "Order Tracking: Sync and manage orders via MockAPI backend.",
      ],
      performance: [
        "Smooth Animations: Integrated GSAP for high-quality UI transitions and effects.",
        "Image Management: All product images are hosted and fetched efficiently via imgBB.",
      ],
    },
    challenges: [
      "Manual State Management & DOM Sync: Without a framework like React, synchronizing the shopping cart state and user roles across multiple pages (index, product-details, checkout) using vanilla JS and LocalStorage required meticulous event handling and DOM re-rendering logic.",
    ],
    solutions: [
      "Structured modular JavaScript architecture with dedicated scripts for state handling, LocalStorage syncing, and event listeners. Utilized event delegation and modular file splitting (main.js, checkout.js, product_details.js) to maintain clean and scalable code.",
    ],
    futurePlans: [
      "Migrate the entire vanilla JS architecture to Next.js with TypeScript.",
      "Implement secure payment gateway integration like Stripe or SSLCommerz.",
      "Add advanced product filtering and user reviews/ratings system.",
    ],
  },
  {
    id: 4,
    title: "TaskSync",
    subtitle: "Modern Task Management Platform with Cloud & Local Sync",
    description:
      "TaskSync is a modern task management application designed for smooth productivity tracking. It supports robust Firebase authentication, local storage fallback, cloud synchronization, and dynamic date grouping to keep tasks organized seamlessly across devices.",
    image:
      "https://res.cloudinary.com/xhmxwbu4/image/upload/v1791971393/screencapture-sync-task-full-stack-vercel-app-2026-10-14-15_52_32.png",
    liveUrl: "https://sync-task-full-stack.vercel.app/",
    githubUrl: "https://github.com/MD-Nasir301/SyncTask-FullStack",
    tags: ["React", "Firebase", "Tailwind CSS", "Vite", "JavaScript"],
    techStack: {
      frontend: ["React 19", "Vite 7", "Tailwind CSS 4", "JavaScript (ES6+)"],
      backend: ["Firebase Authentication", "Firebase Firestore"],
      database: ["Firebase Firestore"],
      tools: [
        "Firebase Cloud Storage",
        "Local Storage API",
        "Vercel",
        "ESLint",
      ],
    },
    keyFeatures: {
      user: [
        "Seamless authentication via Firebase Authentication and Google Sign-In.",
        "Complete task CRUD operations (Create, Read, Update, Delete) and completion status toggles.",
        "Dual storage mode with dynamic filtering for local-only, cloud-only, or all tasks.",
        "Automated and manual sync mechanisms between local browser storage and cloud Firestore.",
        "Dynamic task grouping based on creation/due dates for enhanced daily planning.",
      ],
    },
    challenges: [
      "Efficiently managing state while maintaining seamless synchronization between local storage data and cloud Firestore databases.",
      "Grouping and rendering task items dynamically based on date structures without breaking performance or state consistency.",
    ],
    solutions: [
      "Resolved these issues by thoroughly discussing the core state management and data structure logic with AI tools, gaining a deep understanding of dual-storage sync patterns, and then implementing a robust custom hook (`useTaskManager`) to handle dynamic state updates and date grouping seamlessly.",
    ],
    futurePlans: [
      "Enhance the user interface (UI/UX) with interactive drag-and-drop task reordering.",
      "Add push notifications and automated email reminders for task deadlines.",
      "Introduce collaborative workspace features for team task management.",
    ],
  },
];
