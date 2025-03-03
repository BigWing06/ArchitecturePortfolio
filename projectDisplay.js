const urlString = window.localStorage.search;
const urlPrams = new URLSearchParams(urlString);
const project = urlPrams.get("project");
console.log(project);