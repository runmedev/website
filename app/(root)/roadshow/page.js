import Image from 'next/image'
import RoadShowUI from '@/components/RoadShowUI'

const shows = [
  {
    id: 'seattle-js',
    location: 'Seattle',
    date: '8/8/2023',
    host: ['Christian Bromman', 'Lizz Parody'],
    title: 'Seattle.js - Intro to Runme',
    background: '/roadshow/seattle.jpg',
    link: 'https://seattlejs.com',
    tweets: [],
    eventAssets: [],
    upcoming: false,
    hostAvatars: ['/roadshow/hosts/christian.jpeg', '/roadshow/hosts/lizz.jpeg'],
    postShowLinks: [],
    description: 'Showing off how Runme works, highlighting use cases for JS developers.',
  },
  {
    id: 'python-medellin',
    location: 'Medellín',
    date: '8/17/2023',
    host: ['Ruben'],
    title: 'How Runme elevates your MLOps',
    background: '/roadshow/medellin.jpg',
    link: 'https://www.meetup.com/es-ES/python-medellin/events/295445603',
    tweets: [],
    eventAssets: [
      '/roadshow/event-pics/python-medellin/pm1.jpg',
      '/roadshow/event-pics/python-medellin/pm3.jpg',
    ],
    upcoming: false,
    hostAvatars: ['/roadshow/hosts/ruben.jpeg'],
    postShowLinks: [],
    description:
      'Discover how Runme can optimize your machine learning development workflows and streamline the deployment operations to Hugging Face platform.',
  },

  {
    id: 'sd-python-group',
    location: 'San Diego',
    date: '8/24/2023',
    title: 'How to create Interactive Runbooks Built with Markdown using Runme',
    host: ['Christian Bromman'],
    background: '/roadshow/san-diego.jpg',
    link: 'https://www.meetup.com/pythonsd',
    tweets: [],
    eventAssets: [],
    upcoming: true,
    hostAvatars: ['/roadshow/hosts/christian.jpeg'],
    postShowLinks: [],
    description:
      'In this talk Christian Bromann will show off Runme, a tool designed to master code base operations through interactive runbooks built with markdown. He will provide an overview about the tool itself and will demo various use cases inspired by the day to day work of a Python developer.',
  },
  {
    id: 'medellin-js',
    location: 'Medellin',
    date: '8/30/2023',
    host: ['Lizz Parody'],
    background: '/roadshow/medellin.jpg',
    title: ' How to Use ChatGPT With Node.js',
    link: 'https://medellinjs.org',
    tweets: [],
    eventAssets: [
      '/roadshow/event-pics/medellin-js-1/m1.jpeg',
      '/roadshow/event-pics/medellin-js-1/m2.jpeg',
      '/roadshow/event-pics/medellin-js-1/m3.jpeg',
    ],
    upcoming: false,
    hostAvatars: ['/roadshow/hosts/lizz.jpeg'],
    postShowLinks: [],
    description:
      'Learn hacks on how to optimize your productivity with ChatGPT and have fun with artificial intelligence!',
  },
  {
    id: 'sf-node',
    location: 'San Francisco',
    date: '8/31/2023',
    title: 'How to create Interactive Runbooks Built with Markdown using Runme',
    host: ['Christian Bromman'],
    background: '/roadshow/san-francisco.jpg',
    link: 'https://www.meetup.com/sfnode',
    tweets: [],
    eventAssets: [],
    upcoming: false,
    hostAvatars: ['/roadshow/hosts/christian.jpeg'],
    postShowLinks: [],
    description:
      'In this talk Christian Bromann will show off Runme, a tool designed to master code base operations through interactive runbooks built with markdown. He will provide an overview about the tool itself and will demo various use cases inspired by the day to day work of a JavaScript developer.',
  },
  {
    id: 'hacktoberfest',
    location: 'remote',
    date: '9/13/2023',
    host: ['Lizz Parody'],
    background: '/roadshow/hacktoberfest.png',
    link: 'https://www.digitalocean.com/blog/ten-years-hacktoberfest',
    title: 'Showing off how Runme works, highlighting use cases for developers and DevOps.',
    tweets: [],
    eventAssets: [],
    upcoming: true,
    hostAvatars: ['/roadshow/hosts/lizz.jpeg'],
    postShowLinks: [],
    description: 'tbd',
  },
  {
    id: 'seattle-js-2',
    location: 'Seattle',
    date: '9/13/2023',
    host: ['Christian Bromman'],
    background: '/roadshow/seattle.jpg',
    link: 'tbd',
    title: 'Seattle JS',
    tweets: [],
    eventAssets: [],
    upcoming: false,
    hostAvatars: ['/roadshow/hosts/christian.jpeg'],
    postShowLinks: [],
    description:
      'SeattleJS is the largest JavaScript and web developer meetup in Seattle. They are an inclusive community and welcome everyone, including folks who are just getting started in tech.',
  },
  {
    id: 'typescript-congress',
    location: 'Remote',
    date: '9/21/2023',
    host: ['Lizz Parody'],
    title: 'Typescript Congress',
    background: '/roadshow/remote.jpg',
    link: 'https://typescriptcongress.com',
    tweets: [],
    eventAssets: [],
    upcoming: true,
    hostAvatars: ['/roadshow/hosts/lizz.jpeg'],
    postShowLinks: [],
    description:
      'TS Congress is an online event for web developers on all things TypeScript. Learn from industry professionals and community members, exchange ideas, interact, and collaborate in the form of a modern tech event.',
  },
  {
    id: 'tampa-bay',
    location: 'Tampa Bay',
    date: '9/21/2023',
    host: ['Lizz Parody'],
    title: 'Best Practices for Securing CI/CD Pipelines',
    background: '/roadshow/tampa.jpg',
    link: 'https://devopsdays.org/events/2023-tampa/welcome/',
    tweets: [],
    eventAssets: [],
    upcoming: true,
    hostAvatars: ['/roadshow/hosts/lizz.jpeg'],
    postShowLinks: [],
    description:
      'importance of secure code repositories, robust authentication, and access controls, and implementing vulnerability scanning and testing at each stage of the pipeline. Additionally, we will explore strategies for secrets management, secure artifact storage, and integrating security into the CI/CD workflow.',
  },

  {
    id: 'sre-con',
    location: 'Dublin, Ireland',
    date: '10/10/23 - 10/12/23',
    host: ['Adam Christian', 'Sebastian Tiedtke'],
    background: '/roadshow/dublin.jpg',
    link: 'https://www.usenix.org/conference/srecon23emea',
    background: '/roadshow/dublin.jpg',
    link: '',
    title: 'TBD',
    tweets: [],
    eventAssets: [],
    upcoming: true,
    hostAvatars: ['/roadshow/hosts/adam.jpg', '/roadshow/hosts/sebastian.jpeg'],
    postShowLinks: [],
    description: 'tbd',
  },

  {
    id: 'liberty-js',
    location: 'Philadelphia',
    date: '10/12/2023 - 10/13/2023',
    host: ['Ruben'],
    title: "Let's build the LibertyJS VSCode extension together!",
    background: '/roadshow/libertyjs.png',
    link: 'https://libertyjs.com/schedule/2023-10-13',
    tweets: [],
    eventAssets: [],
    upcoming: false,
    hostAvatars: ['/roadshow/hosts/ruben.jpeg'],
    postShowLinks: [],
    description:
      'Discover how Runme can optimize your machine learning development workflows and streamline the deployment operations to Hugging Face platform.',
  },
  {
    id: 'node-conf-eu',
    location: 'Kilkenny, Ireland',
    date: '11/6/23 - 11/8/23',
    title: 'How to Use ChatGPT with Node.js',
    host: ['Bencho'],
    background: '/roadshow/medellin.jpg',
    link: '',
    tweets: [],
    eventAssets: [],
    upcoming: true,
    hostAvatars: ['/roadshow/hosts/ruben.jpeg'],
    postShowLinks: [],
    description:
      'Learn hacks on how to optimize your productivity with ChatGPT and have fun with artificial intelligence!',
  },
]

export const metadata = {
  title: 'Roadshow',
  description: 'Join us at an event on the Runme Roadshow.',
  openGraph: {
    images: [
      {
        url: 'https://runme.dev/img/runme-roadshow-unfurl.png',
        width: 1540,
        height: 866,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RUNME Roadshow',
    description: 'Runme roadshow, upcoming events.',
    siteId: '10765432100123456789',
    creator: '@runmedev',
    creatorId: '10765432100123456789',
    images: ['https://runme.dev/img/runme-roadshow-unfurl.png'],
  },
  keywords: [
    'runme',
    'jobs',
    'events',
    'runbooks',
    'collaboration',
    'community',
    'contributor',
    'discord',
    'meetups',
    'onboarding',
    'support',
    'personal development',
    'workflows',
    'schedule',
    'planning',
    'calendar',
    'email',
    'updates',
    'news',
    'inbox',
    'notification',
    'reminder',
    'features',
    'releases',
    'best practices',
    'tutorials',
  ],
}

const Roadshow = () => {
  return (
    <div className="py-32 pb-32 text-white bg-purpledk px-4">
      <div className="flex flex-col-reverse md:flex-row max-w-screen-xl px-10 mx-auto text-center md:text-left">
        <div className="flex flex-col justify-center md:w-1/2 space-y-4 pt-8 md:pt-0">
          <div className="font-plex text-3xl md:text-[56px] leading-tight">Runme Roadshow</div>
          <div className="text-[18px] font-normal tracking-widest">
            Join us as we visit developer events all over the place to talk about what you can do
            with interactive runbooks! This is a great way to learn about Runme, and meet our team.
          </div>
        </div>
        <div className="w-[178px] h-[204px] md:w-[355px] md:h-[407px] relative mx-auto">
          <Image fill src="/roadshow/roadshow-logo.svg" alt="Runme" />
        </div>
      </div>
      <div className="pt-32">
        <RoadShowUI shows={shows} />
      </div>
    </div>
  )
}

export default Roadshow
