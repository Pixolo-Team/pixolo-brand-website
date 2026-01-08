export interface ProjectSnapshotData {
  client?: string;
  services?: string[];
  platforms?: string[];
  timeline?: string;
  industry?: string;
  techStack?: string[];
}

export const snapshotData: ProjectSnapshotData = {
  client: "Sai International School",
  services: ["UI/UX Design", "Development", "Quality Assurance"],
  platforms: ["Web", "Ios", "Android"],
  timeline: "36 weeks",
  industry: "Sports",
  techStack: [
    "/src/icons/react.svg",
    "/src/icons/node-js.svg",
    "/src/icons/figma.svg",
    "/src/icons/tailwind.svg",
  ],
};
