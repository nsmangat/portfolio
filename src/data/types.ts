export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  tags: string[];
  logo?: string;
}

interface ProjectBase {
  id: string;
  name: string;
  description: string;
  tags: string[];
  link: string;
}

// Project can have either a video, image, or neither
export type Project = ProjectBase &
  (
    | { image: string; video?: never }
    | { video: string; image?: never }
    | { image?: never; video?: never }
  );
