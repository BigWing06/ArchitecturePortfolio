fetch('navbar/navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById("navbarPlaceholder").innerHTML  = data
            })
            .catch(error => console.log('Error loading navbar:', error));
document.getElementsByTagName("head")[0].innerHTML = document.getElementsByTagName("head")[0].innerHTML + `
<link rel="icon" href="profilePicture.png">
`


