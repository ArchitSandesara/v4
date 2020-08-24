module.exports = {
  siteTitle: 'Archit Sandesara | Software Engineer',
  siteDescription:
    'Archit Sandesara is a Software Engineer with industry experience building large scale websites, web and mobile applications. Feel free to take a look at my work or get in touch!',
  siteKeywords:
    'Archit Sandesara, Archit, Sandesara, aps, ArchitSandesara, archit-sandesara, software engineer, front-end engineer, back-end engineer, full-stack engineer, web developer, android developer, android engineer, senior android developer, javascript, northeastern',
  siteUrl: 'https://architsandesara.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Archit Sandesara',
  location: 'Canada',
  email: 'sandesara.archit@gmail.com',
  github: 'https://github.com/ArchitSandesara',
  twitterHandle: '@architsandesara',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ArchitSandesara',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/archit-sandesara',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/architsandesara',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/architsandesara',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
