function convertHTML(str) {
  var items = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\'': '&quot;',
    '\'': '&apos;'
  };
  
  return str.split("").map(function(character) {
    return items[character] || character;
  });
}