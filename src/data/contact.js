import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/LesterKim',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://facebook.com/lester.c.kim',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/lester.c.kim',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/lester-kim',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://angel.co/lester-kim',
    label: 'Angel List',
    icon: faAngellist,
  },
  {
    link: 'mailto:lester.c.kim@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
