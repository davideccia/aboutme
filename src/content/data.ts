type Summary = {
  name: string;
  email: string;
  linkedin: {
    title: string;
    href: string;
  };
  codeberg: {
    title: string;
    href: string;
  };
  github: {
    title: string;
    href: string;
  };
  location: {
    title: string;
    href: string;
  };
  phone: string | null;
  title: string;
};

type StackItem = {
  name: string;
  icon: string;
  level: number;
};

type Education = {
  period: [string, string];
  institution: string;
  description: string;
};

const all = {
  summary: {
    name: 'Davide Ciaccia',
    email: 'davideccia@gmail.com',
    linkedin: { title: 'LinkedIn', href: 'https://linkedin.com/in/davideccia' },
    codeberg: { title: 'Codeberg', href: 'https://codeberg.org/davideccia' },
    github: { title: 'GitHub', href: 'https://github.com/davideccia' },
    location: { title: 'Puglia, Italy', href: 'https://maps.app.goo.gl/tMwq9F8f6T2YCAgD7' },
    phone: null,
    title: 'Software/DevOps Engineer',
  },
  frameworksStack: [
    {
      name: 'Laravel',
      icon: 'https://raw.githubusercontent.com/laravel/art/refs/heads/master/logo-mark/5%20svg/3%20rgb/1%20Full%20Color/laravel-mark-rgb-red.svg',
      level: 5,
    },
    { name: 'Nuxt', icon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/nuxt.svg', level: 4 },
    { name: 'NestJS', icon: 'https://cdn.simpleicons.org/nestjs/E0234E', level: 3 },
    { name: 'Astro', icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/astro.svg', level: 3 },
    {
      name: 'Spring Boot',
      icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/springboot-initializer.svg',
      level: 3,
    },
    { name: 'Goravel', icon: 'https://avatars.githubusercontent.com/u/93197157?s=200&v=4', level: 3 },
  ],
  techonologiesStack: [
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/aws.svg', level: 3 },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/docker.svg', level: 5 },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/php.svg', level: 5 },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/typescript.svg',
      level: 4,
    },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/java.svg', level: 3 },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/kotlin.svg', level: 3 },
    { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/go.svg', level: 3 },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/python.svg', level: 2 },
    { name: 'Bash', icon: 'https://cdn.simpleicons.org/gnubash/4EAA25', level: 3 },
  ],
  education: [
    {
      period: ['Oct 2022', 'Jan 2023'],
      institution: 'corsolinux.com@udemy',
      description: 'Linux LPIC-1',
    },
    {
      period: ['Sep 2014', 'Jul 2020'],
      institution: 'IISS Del Prete - Falcone',
      description: 'Computer Science degree',
    },
  ],
} as const satisfies {
  summary: Summary;
  frameworksStack: StackItem[];
  techonologiesStack: StackItem[];
  education: Education[];
};

export default all;
