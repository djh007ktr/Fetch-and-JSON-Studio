window.addEventListener('load', function() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(data) {
            console.log(data);

            const astronautDiv = document.getElementById("container");
            
            for(i=0; i<data.length; i++) {
            astronautDiv.innerHTML +=
            `<div class="astronaut">
                <div class="bio">
                    <h3>${data[i].firstName} ${data[i].lastName}</<h3>
                    <ul>
                        <li>Hours in space: ${data[i].hoursInSpace}</li>
                        <li>Active: ${data[i].active}</li>
                        <li>Skills: ${data[i].skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src="${data[i].picture}">
            </div>`
            }
        });
    });

});