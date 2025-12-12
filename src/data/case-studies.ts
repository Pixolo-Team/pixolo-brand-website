export interface CaseStudyItem {
  id: number;
  title: string;
  image: string;
}

export interface CaseStudiesData {
  caseStudiesItems: CaseStudyItem[];
}

export const caseStudies: CaseStudiesData = {
  caseStudiesItems: [
    {
      id: 1,
      title: "Simplifying Team Management for Coaches and Players",
      image: "default.jpg",
    },
    {
      id: 2,
      title: "Bridging Figma to Code Seamlessly in VS Code",
      image: "default.jpg",
    },
    {
      id: 3,
      title: "Making Billings Simpler for Startups",
      image: "default.jpg",
    },
  ],
};
