/** Function to format date in dd MMM, yyyy format */
export const formattedDate = (date: string) => {
  const newDate = new Date(date);
  const day = newDate.getDate().toString().padStart(2, "0");
  const month = newDate.toLocaleDateString("en-IN", { month: "short" });
  const year = newDate.getFullYear();
  return `${day} ${month}, ${year}`;
};
