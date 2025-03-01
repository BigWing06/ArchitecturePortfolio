class ProjectDiv{
    constructor(title_, description_, imagePath_){
        console.log(title_)
        this.title = title_;
        this.description = description_;
        this.imagePath = imagePath_;
        this.createDisplay();
    }
    createDisplay(){
        this.projectDiv = document.createElement("div");
        this.projectDiv.className = "projectDiv";
        this.heading = document.createElement("h3");
        this.heading.innerText = this.title;
        this.projectDiv.appendChild(this.heading);
        this.innerProjectDiv = document.createElement("div");
        this.innerProjectDiv.className = "innerProjectDiv";
        this.projectImage = document.createElement("p");
        this.projectImage.innerText = this.imagePath;
        this.projectImage.className = "projectImage"
        this.innerProjectDiv.appendChild(this.projectImage);
        this.projectDescription = document.createElement("p");
        this.projectDescription.innerText = this.description;
        this.innerProjectDiv.appendChild(this.projectDescription);
        this.projectDiv.appendChild(this.innerProjectDiv);
        projectDivDisplay.appendChild(this.projectDiv)
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var projectDivDisplay = document.getElementById("projectDivDisplay");
    console.log(projectDivDisplay); // Should not be null
});

fetch("projectMain.json")
  .then(response => response.json())
  .then(data=>{
    console.log(Object.keys(data))
    for (project of Object.keys(data)){
        console.log(data[project].title)
        new ProjectDiv(data[project].title, data[project].description, data[project].imagePath)
    }})