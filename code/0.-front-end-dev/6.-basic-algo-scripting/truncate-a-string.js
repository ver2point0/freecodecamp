function truncateString(string, number) {
  if (string.length <= number) {
    return string;
  } else {
    return string.slice(0, number > 3 ? number - 3 : number) + '...';
  }
}