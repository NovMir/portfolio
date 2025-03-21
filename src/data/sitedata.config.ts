export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
  url?: string;
  author?: string;
  social?: {
      twitter?: string;
      github?: string;
      [key: string]: string | undefined;
  };
};

const siteConfig: SiteConfig = {
  title: 'Noveen Astro Website',
  subtitle: 'Personal website and portfolio',
  description: 'Your site description that appears by default when no page-specific description is provided',
  url: 'https://noveenastro.com',
  author: 'Noveen',
  image: {
      src: '/images/default-social-image.jpg',
      alt: 'Default social image for your site'
  },
  social: {
      twitter: '@yourhandle',
      github: 'NovMir'
  },
  headerNavLinks: [
      {
          text: 'Home',
          href: '/'
      },
      {
          text: 'Projects',
          href: '/projects'
      },
      {
          text: 'Blog',
          href: '/blog'
      },
      {
          text: 'About',
          href: '/about'
      }
  ],
  footerNavLinks: [
      {
          text: 'About',
          href: '/about'
      },
      {
          text: 'Contact',
          href: '/contact'
      },
      {
          text: 'Terms',
          href: '/terms'
      }
  ],
  socialLinks: [
      {
          text: 'GitHub',
          href: 'https://github.com/NovMir'
      },
      {
          text: 'Twitter',
          href: 'https://twitter.com/yourhandle'
      }
  ],
  hero: {
      title: 'Welcome to My Personal Website!',
      text: "I'm **Noveen**, a web developer passionate about creating beautiful and functional websites. Explore my projects and blog posts to see what I've been working on.",
      image: {
          src: '/hero.jpeg',
          alt: 'Profile image'
      },
      actions: [
          {
              text: 'Get in Touch',
              href: '/contact'
          }
      ]
  },
  subscribe: {
      title: 'Subscribe to My Newsletter',
      text: 'Stay updated with my latest projects and blog posts.',
      formUrl: '#'
  },
  postsPerPage: 6,
  projectsPerPage: 6
};

export default siteConfig;