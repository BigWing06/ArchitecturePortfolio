const urlString = window.location.search;
const urlPrams = new URLSearchParams(urlString);
const project = urlPrams.get("project");
console.log(project);
fetch("projectMain.json")
  .then(response => response.json())
  .then(data=>{
    pageData = data[project];
    document.getElementById("pageHeader").textContent = pageData.title
    fetch("projectData/" + project + "/projectInfo.json")
      .then(response => response.json())
      .then(data=>{
        console.log(data)
        for(var obj of Object.keys(data)){
          var type = obj.toString().substring(0,2);
          var div = document.createElement("div");
          if (type=="bd"){
            var text = document.createElement("p");
            text.textContent = data[obj];
            text.className = "bodyText";
            div.appendChild(text)
          }else if(type=="im"){
            var image = document.createElement("img");
            image.src = "projectData/" + project + "/" + data[obj];
            div.appendChild(image)
          }
          document.body.appendChild(div)
        }
      })
    })