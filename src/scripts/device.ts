/** Get the current device type based on screen width */
export const getDeviceType = (): "mobile" | "desktop" => {
  return window.innerWidth < 768 ? "mobile" : "desktop";
};
