function confirmEnding(str, target) {
  return target === str.substr(str.length - target.length);
}