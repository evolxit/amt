import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Products',

      links: [
        {
          text: 'All Products',
          href: getPermalink('products'),
        },
        {
          text: 'Correction & Adhesion',
          href: getPermalink('#'),
        },
        {
          text: 'Office Supplies',
          href: getPermalink('#'),
        },
        {
          text: 'Shearing & Cutting',
          href: getPermalink('#'),
        },
        {
          text: 'Stapling & Punching',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },

    {
      text: 'Partners',
      href: getPermalink('/partners'),
    },

    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },

    {
      text: 'Blog',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: '',
      links: [
        { text: 'Programs', href: getPermalink('/programs') },
        { text: 'Activity', href: getPermalink('/activity') },
      ],
    },
    {
      title: '',
      links: [
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Testimonials', href: getPermalink('/reviews') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Activity', href: getPermalink('/activity') },
    { text: 'Testimonials', href: getPermalink('/reviews') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: '#',
    },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: '#',
    },
    {
      ariaLabel: 'Twitter',
      icon: 'tabler:brand-twitter',
      href: '#',
    },
    {
      ariaLabel: 'Youtube',
      icon: 'tabler:brand-youtube',
      href: '#',
    },
  ],
  footNote: '2024 Aung Myittar Co., Ltd. All Rights Reserved',
};
