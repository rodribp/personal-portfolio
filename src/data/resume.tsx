import { Icons } from "@/components/icons";
import { House, Icon, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";
import { Angular } from "@/components/ui/svgs/angular";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";

export const DATA = {
  name: "Rodrigo Bonilla - Software Developer",
  initials: "RB",
  url: "https://alexmercer.dev",
  location: "Austin, TX",
  locationLink: "https://www.google.com/maps/place/austin+tx",
  description:
    "Full-stack developer based in El Salvador. I'm driven by building user-friendly apps with a focus on design.",
  summary:
    "I graduated as a technichal high-school in software development at \"Instituto Técnico Ricaldone\" and half a year later I graduated from [@cuboplus](https://cuboplus.academy) to right after build their landing page.",
  avatarUrl: "/cv.jpeg",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: false, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7, enabled: true,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: true,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Reach out to me through email, linkedin or X and I will respond whenever I can."
    },
  },
  photos: [
    { src: "/photos/lugano.webp", alt: "Photo 1" },
    { src: "/photos/lugano2.webp", alt: "Photo 2" },
    { src: "/photos/lugano3.webp", alt: "Photo 3" },
    { src: "/photos/tokyo3.webp", alt: "Photo 4" },
    { src: "/photos/tokyo2.webp", alt: "Photo 5" },
    { src: "/photos/tokyo.webp", alt: "Photo 6" },
  ],
  skills: [
    { name: "Astro", icon: Astro },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Angular", icon: Angular },
    { name: "TailwindCSS", icon: TailwindCSS },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
  ],
  contact: {
    email: "rodrigobonilla177@gmail.com",
    tel: "+503 77533785",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rodribp",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rodrigo-bonilla-a545a3281/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rodribp21",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:rodrigobonilla177@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Meridian Labs",
      href: "https://meridian.so",
      badges: ["Founder"],
      location: "Austin, TX",
      title: "Co-founder & Engineer",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "January 2023",
      end: undefined,
      description:
        "Building a suite of developer productivity tools focused on local-first architecture and offline sync. Grew to 1,200 paying customers within the first year. Responsible for the full stack - product, engineering, and growth.",
    },
    {
      company: "Stripe",
      href: "https://stripe.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=stripe.com&sz=128",
      start: "May 2022",
      end: "August 2022",
      description:
        "Worked on the Payments Infrastructure team. Built an internal load-testing framework in Go that reduced regression testing time by 60%. Contributed to the migration of legacy billing logic to a new event-driven architecture using Kafka.",
    },
    {
      company: "Cloudflare",
      href: "https://cloudflare.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=cloudflare.com&sz=128",
      start: "September 2021",
      end: "December 2021",
      description:
        "Joined the Workers team during a co-op term. Implemented a new dashboard UI for monitoring Worker invocation metrics using React and D3. Added support for custom error boundaries in the Workers runtime sandbox.",
    },
    {
      company: "Datadog",
      href: "https://datadoghq.com",
      badges: [],
      location: "New York, NY",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=datadoghq.com&sz=128",
      start: "January 2021",
      end: "April 2021",
      description:
        "Built new alert correlation features in the Incidents product using Python and React. Improved p99 query latency on the metrics explorer by 40% through query plan optimizations in PostgreSQL.",
    },
    {
      company: "Benchling",
      href: "https://benchling.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=benchling.com&sz=128",
      start: "May 2020",
      end: "August 2020",
      description:
        "Worked on the scientific data platform team. Implemented a bulk import pipeline for lab instrument data using TypeScript and AWS Lambda, reducing manual data entry time for research teams by over 80%.",
    },
    {
      company: "Relay Labs",
      href: "https://relay.app",
      badges: [],
      location: "Vancouver, BC",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=relay.app&sz=128",
      start: "September 2019",
      end: "December 2019",
      description:
        "Early-stage startup building workflow automation tools. Shipped core integrations with Slack, Notion, and GitHub. Designed the initial webhook delivery system in Node.js that handled over 500k events per day at peak.",
    },
  ],
  education: [
    {
      school: "Universidad Don Bosco",
      href: "https://www.udb.edu.sv/udb/",
      degree: "Bachelor's degree in business administration",
      logoUrl: "https://www.udb.edu.sv/udb_files/content_resource/es//Logo_8.5.jpg",
      start: "2025",
      end: "2030",
    },
    {
      school: "Universidad Don Bosco",
      href: "https://www.udb.edu.sv/udb/",
      degree: "Technical degree in graphic design",
      logoUrl: "https://www.udb.edu.sv/udb_files/content_resource/es//Logo_8.5.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Instituto Técnico Ricaldone",
      href: "https://ricaldone.edu.sv",
      degree: "Technical high-school in software development",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQFa3Lu1XGmoiw/company-logo_200_200/B4EZUfCh.lGYAM-/0/1739982517847/ricaldone_logo?e=2147483647&v=beta&t=qa08mu7rZVUygMkU2T_MctyE1-6IowuwJCN2vKeADBg",
      start: "2020",
      end: "2022",
    }
  ],
  projects: [
    {
      title: "RBC Proyectos landing page",
      href: "https://www.rbc-proyectos.com",
      dates: "April 2026 - Present",
      active: true,
      description:
        "Designed and built the official landing page for a construction company.",
      technologies: [
        "Astro",
        "TypeScript",
        "TailwindCSS"
      ],
      links: [
      ],
      image: "/landing-rbc.webp",
      video: "",
    },
    {
      title: "BTC Scripting tool",
      href: "https://btc-scripting-tool.vercel.app",
      dates: "April 2026 - Present",
      active: true,
      description:
        "An open source Bitcoin scripts and stack visualizer for developers.",
      technologies: [
        "Angular",
        "TypeScript",
        "TailwindCSS"
      ],
      links: [
      ],
      image: "/scripting-tool.webp",
      video: "",
    },
    {
      title: "CUBO+ Official Website",
      href: "https://cuboplus.academy",
      dates: "Nov 2023 - March 2024",
      active: true,
      description:
        "The official website for CUBO+ Program.",
      technologies: [
        "HTML",
        "JavaScript",
        "TailwindCSS",
        "Express.js"
      ],
      links: [
      ],
      image: "/cubo.webp",
      video: "",
    },
    {
      title: "Delivery system",
      href: "https://www.youtube.com/watch?v=nVouFHwsmfU",
      dates: "Nov 2023 - March 2024",
      active: true,
      description:
        "A system that merges marketplace and on-demand deliveries by independant couriers.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "PostgreSQL",
      ],
      image: "/ds2022.webp",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Legends of Lightning",
      dates: "Nov 6th - Nov 9th, 2023",
      location: "San Salvador, El Salvador",
      description: "Built an app to issue fiat-payment's changes in Bitcoin.",
      image: "https://pbs.twimg.com/profile_images/1903169051339395073/41-oewnr_400x400.jpg",
      win: "1st place",
      links: [
        {
          title: "Recording",
          icon: <Icons.youtube />,
          href: "https://www.youtube.com/watch?v=c1C0pztfbgU"
        }
      ],
    },
    {
      title: "CUBO+ Hackathon",
      dates: "July 17th - July 20th, 2023",
      location: "El Zonte, El Salvador",
      description: "Built a lightning powered blog with premium content unlocked upon lightning payments.",
      image: "https://pbs.twimg.com/profile_images/1837279282525003776/lY_e6fpP_400x400.jpg",
      win: "Participation",
      links: [],
    },
  ],
} as const;
