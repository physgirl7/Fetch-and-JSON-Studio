window.addEventListener("load", function(event){
        fetch("https://handlers.education.launchcode.org/static/astronauts.json").then
        (function(response){
            // console.log(response);
            response.json().then
              (function(json){
                console.log(json);
                
              let astronautContainer = document.getElementById("container");
              let newString ="";
              for(let i=0; i< json.length; i++){
                let partString= `
                <div class = "astronaut">
                 <div class = "bio">
                      <h3>${json[i].firstName} ${json[i].lastName}</h3>
                     <ul>
                       <li>Hours in space: ${json[i].hoursInSpace}</li>
                       <li>Active: ${json[i].active}</li>
                       <li>Skills: ${json[i].skills}</li>
                     </ul>
                     </div>
                     <img class ="avatar" src =${json[i].picture}>
                    </div>`
            
                    // astronautContainer.innerHTML += newString;
                    newString = newString + partString;
                 
              }

              astronautContainer.innerHTML = newString;
              
            })
          })
        }) 