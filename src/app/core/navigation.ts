export interface NavLink {
  label: string;
  path: string;
  exact: boolean;
}

export const primaryNav: NavLink[] = [
  { label: 'Home', path: '/', exact: true },
  { label: 'About', path: '/about-us', exact: false },
  { label: 'Programs', path: '/youth-skills-programs', exact: false },
  { label: 'Spaces', path: '/ksg-iyic-hub-youth-spaces', exact: false },
  { label: 'Gallery', path: '/ksg-iyic-gallery', exact: false },
  { label: 'Volunteer', path: '/become-a-volunteer', exact: false },
  { label: 'Contact', path: '/contact-us', exact: false },
];
