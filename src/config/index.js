module.exports = {
  siteTitle: 'Levi Lian | Product Manager',
  siteDescription:
    'Levi Lian is a product manager based in Palo Alto, CA specializing in building human-centered products across web and mobile &#40;Android and iOS&#41;, and occasionally in the physical world.',
  siteKeywords:
    'Levi Lian, Levi, Lian, levilian1, Shengjia Lian, stanford, treehacks',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Levi Lian',
  location: 'Palo Alto, CA',
  email: 'levilian@stanford.edu',
  github: 'https://github.com/Levilian/',
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/levi-lian/',
    },
    {
      name: 'Github',
      url: 'https://github.com/Levilian/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/levilian1',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    // {
    //   name: 'Work',
    //   url: '#projects',
    // },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@levilian1',
  googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkVioletColor: '#2D283E',
  // darkNavyColor: '#020c1b',
  darkNavyColor: '#2D283E',

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
