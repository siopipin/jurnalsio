const style = (props) =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const info = (props: any): { input: string; return: string }[] => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '"Medan, Indonesia"',
  },

  {
    input: 'self.interests',
    return: '["mobile and web dev", "Machine Learning and AI Stuff", "Teaching", "Reading"]',
  },
  {
    input: 'self.education',
    return: '"M.Kom Magister Teknologi Informasi - University Mikroskil"',
  },
  {
    input: 'self.skills',
    return:
      '[ "ML/AI", "FLutter", "React", "Next.JS", "PHP stuff", "research", "AWS, CI/CD", "git"]',
  },
  {
    input: 'self.contactMe()',
    return: `["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/siopipin/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/siopipin">Github</a>", "<a rel="noopener" style="${style(
      props
    )}" href="https://www.instagram.com/sio.pipin">Instagram</a>"]`,
  },
];

export default info;
