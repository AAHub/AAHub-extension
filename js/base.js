var fa = document.createElement('style');
fa.type = 'text/css';
fa.textContent = '@font-face { font-family: "aahub"; src: url("https://storage.aahub.org/fonts/aahub_light.woff2") format("woff2"), url("https://storage.aahub.org/fonts/aahub_light.woff2") format("woff");}';
document.head.appendChild(fa);
var authorNode = document.querySelector(
  "dl"
);
if (authorNode) {
  authorNode.style.fontFamily = "aahub";
}
