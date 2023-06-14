// type DetailsType = 'text' | 'testimonial'

export type TextDetails = {
  type: 'text';
  title: string;
  content: string[];
};

export type Media = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Testimonial = {
  subtitle: string;
  content: string[];
  media: Media;
  reviewer: {
    name: string;
    position: string;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
};

export type TestimonialDetails = {
  type: 'testimonial';
  testimonials: Testimonial[];
};

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
  position: number;
  category: string;
  details: Array<TextDetails | TestimonialDetails>;
};

export type Filter = {
  title: string;
  value: string;
};

export type YamlPaths = 'projects';
