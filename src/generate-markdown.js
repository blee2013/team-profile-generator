const fs = require('fs');

const generateTemplate = employeeArray =>{
    console.log(employeeArray)
    console.log("this works")
    let htmlTemplate=`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
        integrity="sha512-P5MgMn1jBN01asBgU0z60Qk4QxiXo86+wlFahKrsQf37c9cro517WzVSPPV1tDKzhku2iJ2FVgL67wG03SGnNA=="
        crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1 class="page-title text-white bg-secondary py-2 px-3">My Team</h1>

    </header>
    <div class="container">
        <div class="row">
    `;

    //run a map for each role make a specific card and add it to the htmlTemplate varaiable

    employeeArray.map(currEmpl=>{
        if(currEmpl.getRole()=="Engineer"){
            htmlTemplate +=`   <div class="card mb-4 border-primary" style="width: 18rem;">
                <div class="card-body bg-primary text-light">
                    <h3 class="card-title">${currEmpl.getName()}</h3>
                    <div class="personTitle">
                        <div class="nameCard">
                            <i class="fas fa-user-graduate" id="icon"></i>
                            <h3> Engineer</h3>
                        </div>

                    </div>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${currEmpl.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${currEmpl.getEmail()}">${currEmpl.getEmail()}</a></li>

                    <li class="list-group-item">Github: <a href="https://github.com/${currEmpl.getGithub()}" target="_blank">${currEmpl.getGithub()}</a>



                </ul>
            </div>
         
            `
            //Intern 
        } else if
            (currEmpl.getRole() == "Intern") {
                htmlTemplate +=`
                 <div class="card  mb-4 border-primary" style="width: 18rem;">
                <div class="card-body bg-primary text-light">
                    <h3 class="card-title">${currEmpl.getName()}</h3>
                    <div class="personTitle">
                        <div class="nameCard">
                            <i class="fas fa-user-graduate" id="icon"></i>
                            <h3> Intern</h3>
                        </div>
            
                    </div>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${currEmpl.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${currEmpl.getEmail()}">${currEmpl.getEmail()}</a></li>
            
                    <li class="list-group-item">Github: <a href="https://github.com/${currEmpl.getSchool()}" target="_blank">${currEmpl.getSchool()}</a>
            
                </ul>
            </div>`

        } else if
            (currEmpl.getRole() == "Manager"){
            htmlTemplate +=`<div class="card mb-4 border-primary" style="width: 18rem;">
                <div class="card-body bg-primary text-light">
                    <h3 class="card-title">${currEmpl.getName()}</h3>
                    <div class="personTitle">
                        <div class="nameCard">
                            <i class="fas fa-coffee" id="icon"></i>
                            <h3> Manager</h3>
                        </div>

                    </div>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${currEmpl.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${currEmpl.getEmail()}">${currEmpl.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: 1</li>

                </ul>
            </div>`
            }

    })
return htmlTemplate+=`


 </div >


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js"
        integrity="sha512-WNLxfP/8cVYL9sj8Jnp6et0BkubLP31jhTG9vhL/F5uEZmg5wEzKoXp1kJslzPQWwPT1eyMiSxlKCgzHLOTOTQ=="
        crossorigin="anonymous"></script>
</body >

</html >
`


}

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error, reject the promise and send error to the promise's .catch method
            if (err) {
                reject(err);
                // return out of function
                return;
            }

            // if successful, resolve the promise and send the successful date to the .then method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File Copied!"
            });

        });

    });
};

module.exports = { writeFile, copyFile, generateTemplate };