import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    etmana,
    bevatel,
    ita,
    almanea,
    magento,
    bootstrap,
    almaneaP,
    babolatP,
    etmanaP,
    bevatelP,
    dashboard,
    kufa,
    ocoda,
    sms,
    zegnaP,
    hojuzat,
    fashion,
    mediat,
    rest

} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Magento Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "UI Developer",
        icon: backend,
    },
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Magento",
        icon: magento,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
];

const experiences = [{
        title: "Magento Frontend Developer",
        company_name: "Torque",
        icon: almanea,
        iconBg: "white",
        date: "Mar 2023 - Aug 2023",
        points: [
            "Developing, troubleshooting and maintaining client websites",
            "Build responsive websites that function perfectly on any device or browser size",
            "Collaborate with UX/UI Web Designers to bridge the gap – between graphical design and technical implementation in order to complete projects, websites, platforms and other web experiences",
            "Optimize application for optimum speed and clean code to match standards",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Etmana",
        icon: etmana,
        iconBg: "white",
        date: "Feb 2022 - Feb 2023",
        points: [
            "Developing, troubleshooting and maintaining Etmana e-commerce application",
            "Build responsive websites that function perfectly on any device or browser size",
            "Build responsive websites that function perfectly on any device or browser size",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Bevatel",
        icon: bevatel,
        iconBg: "white",
        date: "Aug 2020 - Feb 2022",
        points: [
            "Developing Unified Dashboard for call center solutions, it consists of CRM system, Report System, SMS & live panel to monitor the agents and incomming support tickets",
            "I also worked on the main website and online store",
            "Collaborate with UX/UI Web Designers",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "IT Ambition",
        icon: ita,
        iconBg: "#E6DEDD",
        date: "Jan 2020 - Aug 2020",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.Developing, troubleshooting and maintaining client websites",
            "I worked on several web plateforms like Magento, Wordpress, laravel and symphony",
            "Participating in code reviews and providing constructive feedback to other developers."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Tech Village",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Nov 2019 - Dec 2019",
        points: [
            "Throught one Month internship i worked on a project based on Laravel as an application for what i learnt in NTI Scholarship"
        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
        name: "Al Manea",
        description: "Al Manea is an e-commerce stablished in KSA and based on Magento, In this project i developed the website to match XD and i also worked on some backend tasks",
        tags: [{
                name: "Magento2",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "PHP",
                color: "pink-text-gradient",
            },
        ],
        image: almaneaP,
        source_code_link: "https://almanea.sa/"
    },
    {
        name: "Zegna",
        description: "Zegna is an ecommerce application based on Magento In this project i worked on customer account, cms pages, search behavior, popups and product catalog pages.",
        tags: [{
                name: "Magento",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "PHP",
                color: "pink-text-gradient",
            },
            {
                name: "Less",
                color: "pink-text-gradient",
            },
        ],
        image: zegnaP,
        source_code_link: "https://www.zegna.com/uk-en/",
    },
    {
        name: "Babolat",
        description: "Babolat is an ecommerce application based on Magento, I prepaired the theme to match global website",
        tags: [{
                name: "Magento",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: babolatP,
        source_code_link: "https://www.babolat.ae/en-jo/",
    },
    {
        name: "Etmana",
        description: "In this project i worked on two phases, Magento 2 and Angular, In Magento version I developed the website to match XD and i also kept maintaining the wesbiste In Angular version i worked on the website and admin , integrating Apis and designing the responsive design",
        tags: [{
                name: "Angular",
                color: "blue-text-gradient",
            },
            {
                name: "RXJX",
                color: "green-text-gradient",
            },
            {
                name: "PrimeNG",
                color: "pink-text-gradient",
            },
        ],
        image: etmanaP,
        source_code_link: "https://www.etmana.com",
    },
    {
        name: "Bevatel",
        description: "It's a business website for a callcenter solutions company, i was responsibe of the whole website, so i created everything using php, i also helped SEO team to get speed of 2.5s on 4G",
        tags: [{
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "Lottiefiles",
                color: "pink-text-gradient",
            },
        ],
        image: bevatelP,
        source_code_link: "https://www.bevatel.com",
    },
    {
        name: "Ocoda",
        description: "Ocoda is a marketing agency stablished in KSA I built this website from scratch and i handled SEO standards to obtain high speed over desktop and 4G",
        tags: [{
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "Lottiefiles",
                color: "pink-text-gradient",
            },
        ],
        image: ocoda,
        source_code_link: "https://www.ocoda.com",
    },
    {
        name: "Kufa",
        description: "Kufa is a restaurant in KSA and here is the official website, It presents the food menu, branches and contact",
        tags: [{
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "Wordpress",
                color: "pink-text-gradient",
            },
        ],
        image: kufa,
        source_code_link: "https://www.kufa.sa",
    },
    {
        name: "Unified Dashboard",
        description: "In this project i applied the identity on bevatel dashboard, it's a dashboard that consists of many solutions like SMS system, report system, CRM system and LivePanel, i also worked on every single system, development and designing",
        tags: [{
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "PHP",
                color: "pink-text-gradient",
            },
        ],
        image: dashboard,
        source_code_link: "https://cloud.bevatel.com/",
    },
    {
        name: "SMS System ",
        description: "It's a live solution included in the Unified dashboard, it allows companies to send and recieve messages around the middle east.",
        tags: [{
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "Laravel",
                color: "pink-text-gradient",
            },
        ],
        image: sms,
        source_code_link: "https://sms.bevatel.com/login",
    },
    {
        name: "Hojuzat ",
        description: "This is a small project that i built for a traveling agency It just a business application that presents the lastest offers and the contact info.",
        tags: [{
                name: "Flutter",
                color: "blue-text-gradient",
            },
            {
                name: "dart",
                color: "green-text-gradient",
            }
        ],
        image: hojuzat,
        source_code_link: "https://play.google.com/store/apps/details?id=hojuzat.v3",
    },
    {
        name: "Fashion Store ",
        description: "This is R&D project based on Magento, i built around 5 projects with different frontend design on several ideas like , Bikes, Toys, Pharmacy and this one is for Fashion I handled Installation, the responsive design and maintenance of the app",
        tags: [{
                name: "Magento",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "PHP",
                color: "pink-text-gradient",
            },
        ],
        image: fashion,
        source_code_link: "https://clothes.itambition.com/",
    },
    {
        name: "Delivery",
        description: "This is R&D project based on Magento, i built around 5 projects with different frontend design on several ideas like , Bikes, Toys, Pharmacy and this one is for Fashion I handled Installation, the responsive design and maintenance of the app",
        tags: [{
                name: "Magento",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "PHP",
                color: "pink-text-gradient",
            },
        ],
        image: rest,
        source_code_link: "#",
    },
    {
        name: "E-Pharmacy ",
        description: "This is R&D project based on Magento, i built around 5 projects with different frontend design on several ideas like , Bikes, Toys, Pharmacy and this one is for Fashion I handled Installation, the responsive design and maintenance of the app",
        tags: [{
                name: "Magento",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "green-text-gradient",
            },
            {
                name: "PHP",
                color: "pink-text-gradient",
            },
        ],
        image: mediat,
        source_code_link: "#",
    },
];

export { services, technologies, experiences, testimonials, projects };