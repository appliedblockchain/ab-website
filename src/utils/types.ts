import { type } from "os";

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

type RelatedProject = {
  type: 'project';
  name: string;
};

export type Related = RelatedProject;

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
  related: Array<Related>;
};

export type Filter = {
  title: string;
  value: string;
};

export type YamlPaths = 'projects' | 'our-story' | 'resources';

export type StoryContent = {
  title: string;
  description: string;
  image?: string;
  link?: {
    text?: string;
    url: string;
  };
};

export type TOurStory = {
  date: number;
  content: StoryContent[];
};

export type TResource = {
  date: Date
  type: string
  title: string
  description: string
  link: string
  image: string
  client: string
  industry: string
}


