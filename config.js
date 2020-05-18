module.exports = {
  pathPrefix: '',
  siteUrl: 'https://nishanshetty.com',
  siteTitle: 'Nishan Shetty ',
  siteDescription: 'Logbook of a student',
  author: 'Nishan Shetty',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/Brown-Boi-Nash',
    facebook: 'https://www.facebook.com/nishan.ironman98/',
    twitter: 'https://twitter.com/iam_nishan',
    instagram: 'https://www.instagram.com/get_to_nishan/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/482877c9-be80-4c8a-a43b-12aae7b29116',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'https://www.googletagmanager.com/gtag/js?id=UA-166883726-1',
  tags: {
    angular: {
      description: 'Angular is an open source web application platform.',
      color: '#dd3431',
    },
    javascript: {
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    typescript: {
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },

  },
};
