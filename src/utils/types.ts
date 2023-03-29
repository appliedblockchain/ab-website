export type Project = {
  title: string;
  subtitle: string;
  description: string;
  viewCaseStudyLink?: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  industry: string;
  type: string;
  important?: boolean;
  link: string;
};
