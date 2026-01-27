export type ClientNumber = {
  title: string;
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
  badgeIcon: string;
  badgeTitle: string;
  title: string;
  description: string;
  logo: string;
  name: string;
  thumbnail: string;
  clientNumbers: ClientNumber[];
  clientVisionSectionMainImage: string;
  clientVisionSectionImageAlt: string;
  clientVisions: ClientVisionItem[];
  clientSolutions: ClientSolution[];
  clientIssues: ClientIssuesData[];
  aboutPointers: AboutPointer[];
  aboutImagesMainImage: string;
  aboutImagesOtherImages: AboutImage[];
  gallerySectionDetails: GallerySectionDetails;
  gallerySectionDetailsBadgeIcon: string;
  gallerySectionDetailsBadgeText: string;
  gallerySectionDetailsSectionTitle: string;
  galleryImages: GalleryImage[];
  clientTestimonialDetailsBadgeIcon: string;
  clientTestimonialDetailsBadgeText: string;
  clientTestimonialDetailsTitle: string;
  clientTestimonialDetailsImage: string;
  clientTestimonialDetailsName: string;
  clientTestimonialDetailsRole: string;
  clientTestimonialDetailsMessage: string;
  toolsUsedDetailsHeaderText: string;
  toolItems: ToolItem[];
  solutionNumbers: SolutionNumber[];
  keyTakeawaysDetailsBadgeIcon: string;
  keyTakeawaysDetailsBadgeTitle: string;
  keyTakeawaysDetailsTitle: string;
  learningItems: LearningItem[];
};

export type CaseStudyApiResponse = {
  template_structures: Record<string, any>;
  structure: {
    "case-studies": CaseStudyData[];
  };
};
