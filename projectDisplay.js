const urlString = window.location.search;
const urlPrams = new URLSearchParams(urlString);
const project = urlPrams.get("project");
console.log(project);
fetch("projectMain.json")
  .then(response => response.json())
  .then(data=>{
    pageData = data[project];
    document.getElementById("pageHeader").textContent = pageData.title
    })