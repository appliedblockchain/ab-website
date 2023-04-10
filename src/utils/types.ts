export type Project = {
  title: string;
  subtitle: string;
  description: string;
  viewCaseStudyLink?: string;
  logo: {
    src: string;
    alt: string;
  };
  industry: string;
  type: string;
  important?: boolean;
  link: string;
};

export type Filter = {
  title: string;
  value: string;
};
