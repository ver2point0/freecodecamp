function spinalCase(str) {
  return str.replace(/\s+/g, "-") // This-Is-Spinal-Tap
  .split(/(?=[A-Z])/) // ["This-", "Is-", "Spinal-", "Tap"]
  .join("-") // This--Is--Spinal--Tap
  .replace(/\_+/g, "") // This--Is--Spinal--Tap
  .replace(/(--)+/g, "-") // This-Is-Spinal-Tap
  .toLowerCase(); // this-is-spinal-tap
}
