type PixoloJobPostingSchemaInput = {
  jobTitle: string;
  jobDescription: string;
  employmentType: string;
  city: string;
  state: string;
  countryCode: string;
  experienceMinMonths: number;
  openings: number;
};

export const getPixoloJobPostingSchema = ({
  jobTitle,
  jobDescription,
  employmentType,
  city,
  state,
  countryCode,
  experienceMinMonths,
  openings,
}: PixoloJobPostingSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "@id": `https://www.pixolotechnologies.com/careers/${jobTitle}/#job`,
  title: jobTitle,
  description: jobDescription,
  employmentType,
  hiringOrganization: {
    "@id": "https://www.pixolotechnologies.com/#organization",
  },
  jobLocationType: "ON_SITE",
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: state,
      addressCountry: countryCode,
    },
  },
  experienceRequirements: {
    "@type": "OccupationalExperienceRequirements",
    monthsOfExperience: experienceMinMonths,
  },
  totalJobOpenings: openings,
});
