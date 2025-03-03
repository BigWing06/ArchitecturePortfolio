class ProjectDiv{
    constructor(projectKey, data){
        this.title = data.title;
        this.description = data.description;
        this.imagePath = "projectImages/"+projectKey+"/main.png";
        this.projectKey = projectKey;
        this.createDisplay();
    }
    createDisplay(){
        this.projectDiv = document.createElement("div");
        this.projectDiv.className = "projectDiv";
        console.log('projectDisplay.html?project=' + this.projectKey)
        this.projectDiv.addEventListener("click", (event) => {
            window.location.href='projectDisplay.html?project=' + this.projectKey;
            })
        this.heading = document.createElement("h3");
        this.heading.innerText = this.title;
        this.projectDiv.appendChild(this.heading);
        this.innerProjectDiv = document.createElement("div");
        this.innerProjectDiv.className = "innerProjectDiv";
        this.projectImage = document.createElement("img");
        this.projectImage.src = this.imagePath;
        this.projectImage.className = "projectImage"
        this.innerProjectDiv.appendChild(this.projectImage);
        this.projectDescription = document.createElement("p");
        this.projectDescription.innerText = this.description;
        this.projectDescription.className = "projectDescription";
        this.innerProjectDiv.appendChild(this.projectDescription);
        this.projectDiv.appendChild(this.innerProjectDiv);
        projectDivDisplay.appendChild(this.projectDiv)
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var projectDivDisplay = document.getElementById("projectDivDisplay");
});

fetch("projectMain.json")
  .then(response => response.json())
  .then(data=>{
    for (project of Object.keys(data)){
        new ProjectDiv(project, data[project])
    }})