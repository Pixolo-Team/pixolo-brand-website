export type ClientNumbersData = {
  title: string;
  description: string;
};

export type ClientVisionItem = {
  title: string;
  description: string;
};

export type ClientSolution = {
  title: string;
  description: string;
};

export type ClientIssuesData = {
  title: string;
  description: string;
  issue: string;
  stat: string;
};

export type AboutPointer = {
  title: string;
  description: string;
};

export type AboutImage = {
  imagePath: string;
  alt: string;
};

export type AboutImages = {
  mainImage: string;
  otherImages: AboutImage[]; // Assuming this is an array of strings (paths)
};

export type AboutClient = {
  aboutPointers: AboutPointer[];
  aboutImages: AboutImages;
};

export type GalleryImage = {
  imagePath: string;
  alt: string;
};

export type GallerySectionDetails = {
  badgeIcon: string;
  badgeText: string;
  sectionTitle: string;
  galleryImages: GalleryImage[];
};

export type ClientTestimonialDetails = {
  badgeIcon: string;
  badgeText: string;
  title: string;
  image: string;
  name: string;
  role: string;
  message: string;
};

export type ToolItem = {
  logo: string;
  title: string;
  description: string;
};

export type ToolsUsedDetails = {
  headerText: string;
};

export type SolutionNumber = {
  title: string;
  description: string;
  issue: string;
  stat: string;
};

export type LearningItem = {
  title: string;
  description: string;
};

export type KeyTakeawaysDetails = {
  badgeIcon: string;
  badgeTitle: string;
  title: string;
  learningItems: LearningItem[];
};

export type CaseStudyData = {
  showInHome: string;
  badgeTitle: string;
  title: string;
  description: string;
  name: string;
  thumbnail: string;
  websiteLink: string;

  /* Client Numbers */
  clientNumbersHeading: string;
  clientNumbers: ClientNumbersData[];

  /* Client Vision */
  clientVisionHeading: string;
  clientVisionSectionMainImage: string;
  clientVisionSectionImageAlt: string;
  clientVisions: ClientVisionItem[];

  /* Client Issues */
  clientIssuesHeading: string;
  clientIssues: ClientIssuesData[];

  /* Client Solutions */
  clientSolutions: ClientSolution[];

  /* About Client */
  aboutPointers: AboutPointer[];
  aboutImagesMainImage: string;
  aboutImagesOtherImages: AboutImage[];

  /* Gallery */
  galleryImages: GalleryImage[];

  /* Tools Used */
  toolItems: ToolItem[];

  /* Solution Timeline / Numbers */
  solutionNumbers: SolutionNumber[];

  /* Learnings */
  learningItems: LearningItem[];

  /* Client Testimonial (flat, as per JSON) */
  clientImage: string;
  clientName: string;
  clientRole: string;
  clientMessage: string;
};

export type CaseStudyApiResponse = {
  template_structures: Record<string, any>;
  structure: {
    "case-studies": CaseStudyData[];
  };
};
