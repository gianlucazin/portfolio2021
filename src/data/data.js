import hivenue1 from './../img/screenshots/hivenue1.png';
import hivenue2 from './../img/screenshots/hivenue2.png';

import srtendaggi1 from './../img/design/srtendaggi1.png';
import srtendaggi2 from './../img/design/srtendaggi2.png';

export const projectsData = [
  {
    general: {
      title: 'Passepartout',
      id: 'passepartout',
      url: 'www.passepartoutsocial.com',
      live: true,
      private: true,
      year: 2018,
    },
    overview: {
      overview:
        'Passepartout is a platform, built in php together with a friend of mine, where people can connect to participate and throw house parties in London. The platform has helped to organise a few real world events and enabled a lot of people to have fun.',
      role: 'Front-End Developer',
      technologies: 'Html Css Bootstrap Php Sql Git',
      features: 'Facebook login, Events participants selection, Payment system',
      difficulties:
        "I didn't know how to write a single line of code when started.",
      solution:
        'I started to learn, to continuosly challenge myself and after that to learn again, I discovered that I love programming and the immense impact it has if well used. It is probably the most important project I have worked on so far, since it triggered in myself the desire to learn more.',
    },
    cover: srtendaggi1,
    screenshots: [
      hivenue1,
      hivenue2,
      srtendaggi1,
      srtendaggi2,
      srtendaggi2,
      srtendaggi2,
    ],
    design: [
      hivenue1,
      hivenue2,
      srtendaggi1,
      srtendaggi2,
      srtendaggi2,
      srtendaggi2,
    ],
  },
  {
    general: {
      title: 'Srtendaggi',
      id: 'srtendaggi',
      url: 'www.srtendaggi.it',
      live: true,
      private: true,
      year: 2020,
    },
    overview: {
      overview:
        'This is the first project I have built for a client, and the first after deciding to become a programmer. I have studied for 6 months the basics of programming languages and started mastering them in a nice portfolio website for a small local sardinian business.',
      role: 'All, from design to deployment',
      technologies: 'Html, Sass, Js, Gsap, Webpack, Adobe XD',
      features: 'BEM Architecure, 7-1 Pattern, Webpack Integration',
      difficulties:
        'Very limited selection of quality images, poor branding strategy.',
      solution:
        'I have decided to design a website that could channel the focus on just a few images using white spaces, soft animations and pale colors. The user needs to experience a relaxing navigation throughout the pages without being overwhelmed by the typical patterns and colors of the average local curtain shop website. I have setup Webpack so to be able to add or remove images easily just by changing the content of specific folders.',
    },
    cover: hivenue1,
    screenshots: [hivenue1, hivenue2],
    design: [srtendaggi1, srtendaggi2],
  },
  {
    general: {
      title: 'Hivenue',
      id: 'hivenue',
      url: 'www.hivenue.club',
      live: true,
      private: true,
      year: 2021,
    },
    overview: {
      overview:
        'Hivenue is a website where Instagram influencers can connect with possible clients and increase their visibility. The backend was created by a different developer and I had to redesign and integrate a new front-end.',
      role: 'Front-End Developer',
      technologies: 'Laravel Blade Js Gsap Sass',
      features: 'Blade integration, BEM Architecure, 7-1 Pattern',
      difficulties:
        'I had to adapt my design to an on-going version of the back-end, without the access to the code until completion.',
      solution:
        'Since in Laravel the front-end is strictly linked with the back-end I have designed the website considering that it had later to be adapted to a template engine. I have kept the same functionality, improving the design and the front end interactivity. I have used the 7-1 pattern folders structure together with Sass and BEM architecture for modularity, reusability and scalability.',
    },
    cover: hivenue1,
    screenshots: [hivenue1, hivenue2],
    design: [srtendaggi1, srtendaggi2],
  },
  {
    general: {
      title: 'Portfolio',
      id: 'portfolio',
      url: '',
      live: true,
      private: false,
      repository: 'https://github.com/gianlucas90/portfolio2021',
      year: 2021,
    },
    overview: {
      overview:
        'This is the website you are currently navigating, I started the design from the logo and implemented some scroll triggered animation to add interactivity and a modern look.',
      role: 'All, from design to deployment',
      technologies: 'React Sass Gsap',
      features: 'Gsap Scroll Trigger, React Routing, BEM Architecure',
      difficulties: 'Communicate competence and passion for what I do.',
      solution:
        'I have designed the website giving a simple but pleasant look, using scroll triggered animations I have added interactivity to the user experience. I have connected all of it using the modern front-end technologies I know and which I’d like to learn more.',
    },
    cover: srtendaggi1,
    screenshots: [hivenue1, hivenue2],
    design: [srtendaggi1, srtendaggi2],
  },
  {
    general: {
      title: 'Blue Neon',
      id: 'blueneon',
      url: '',
      live: false,
      private: true,
      year: 'Ongoing',
    },
    overview: {
      overview:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      role: 'Lorem ipsum dolor sit',
      technologies: 'Lorem ipsum dolor sit',
      features: 'Lorem ipsum dolor sit',
      difficulties:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      solution:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    },
    cover: srtendaggi2,
    screenshots: [hivenue1, hivenue2],
    design: [srtendaggi1, srtendaggi2],
  },
  {
    general: {
      title: 'Localrama',
      id: 'localrama',
      url: '',
      live: false,
      private: true,
      year: 'Ongoing',
    },
    overview: {
      overview:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      role: 'Lorem ipsum dolor sit',
      technologies: 'Lorem ipsum dolor sit',
      features: 'Lorem ipsum dolor sit',
      difficulties:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
      solution:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
    },
    cover: hivenue2,
    screenshots: [hivenue1, hivenue2],
    design: [srtendaggi1, srtendaggi2],
  },
];
