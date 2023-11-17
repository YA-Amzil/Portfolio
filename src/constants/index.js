import {
    mobile,
    backend,
    creator,
    web,

    csharp,
    java,
    python,

    javascript,
    typescript,
    vuejs,
    reactjs,
    threejs,
    nodejs,
    html,
    css,
    bootstrap,
    tailwind,


    mongodb,
    mssqlserver,
    oracle,
    git,
    docker,
    bmileisure,

    chessgame,
    tetrisgame,
    snakegame,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Mobile Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
    // {
    //     name: "HTML 5",
    //     icon: html,
    // },
    // {
    //     name: "CSS 3",
    //     icon: css,
    // },
    // {
    //     name: "Bootstrap",
    //     icon: bootstrap,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "Vue JS",
        icon: vuejs,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "MS SQL Server",
        icon: mssqlserver,
    },
    {
        name: "Oracle",
        icon: oracle,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "C# Developer",
        company_name: "BMI Leisure",
        icon: bmileisure,
        iconBg: "#383E56",
        date: "November 2022 - June 2023",
        points: [
            "Developing and maintaining applications using C# and other related technologies.",
            "Developing and maintaining mobile apps using .NET MAUI.",
            "Building web applications with .NET technologies, including ASP.NET Core 6.",
            "Creating WPF (Windows Presentation Foundation) and console applications using .NET Framework.",
            "Conducting code reviews to enhance code quality and foster continuous improvement.",
            "Collaborating with cross-functional teams, such as designers, product managers, and other developers, to deliver high-quality products.",
        ],

    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Chess Game",
        description:
            "A chess game that allows users to play against the computer or against another player.",
        tags: [
            {
                name: "C#",
                color: "purple-text-gradient",
            },
            {
                name: "WPF",
                color: "green-text-gradient",
            },
            {
                name: "Asp.Net.Core",
                color: "pink-text-gradient",
            },
        ],
        image: chessgame,
        source_code_link: "https://github.com/YA-Amzil/ChessGame",
    },
    {
        name: "Snake Game",
        description:
            "A classic game where players control a growing snake on a grid, aiming to eat food and avoid collisions for a challenging gaming experience.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "JavaFX",
                color: "pink-text-gradient",
            },
        ],
        image: snakegame,
        source_code_link: "https://github.com/YA-Amzil/SnakeGame",
    },
    {
        name: "Tetris Game",
        description:
            "A classic falling-block puzzle game. Arrange shapes, clear lines, and score points in this timeless challenge.",
        tags: [
            {
                name: "C#",
                color: "blue-text-gradient",
            },
            {
                name: "WPF",
                color: "green-text-gradient",
            },
            {
                name: "Asp.Net.Core",
                color: "pink-text-gradient",
            },
        ],
        image: tetrisgame,
        source_code_link: "https://github.com/YA-Amzil/TetrisGame",
    },
];

export { services, technologies, experiences, testimonials, projects };