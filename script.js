window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
     return response.json().then( function(json) {
         console.log(json);
        let missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = "";
      //   for (let i = 0; i < json.length; i++) {
           missionTarget.innerHTML += `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[2].name}</li>
            <li>Diameter: ${json[2].diameter}</li>
            <li>Star: ${json[2].star}</li>
            <li>Distance from Earth: ${json[2].distance}</li>
            <li>Number of Moons: ${json[2].moons}</li>
         </ol>
         <img src=${json[2].image}>
         </img>` 
   //   }
   });
});
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel] ")
      let cargoLoad = document.querySelector("input[name=cargoMass]")
      let list = document.getElementById("faultyItems");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      

      if (pilotName.value === "" || coPilotName.value === "" || fuel.value === "" || cargoLoad.value === "") {
         alert("All fields are required!");
         // event.preventDefault();

      } else if (isNaN(pilotName.value) === false || isNaN(coPilotName.value) === false || isNaN(fuel.value) || isNaN(cargoLoad.value)) {
         console.log(pilotName.value);
               alert("Valid Entry Please!");  
               // event.preventDefault();             
      } else {

               if (cargoLoad.value > 10000 && fuel.value < 10000) {
               list.style.visibility = "visible";             
               cargoStatus.innerHTML = "We are too heavy for liftoff!";
               fuelStatus.innerHTML = "There is not enough fuel for the journey";
               launchStatus.style.color = "red"; 
               launchStatus.innerHTML = "Shuttle not ready for launch";
               pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
               copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} is ready for launch`;
                  
            } else if (cargoLoad.value < 10000 && fuel.value < 10000) {
                  cargoStatus.innerHTML = "Cargo mass low enough for launch";
                  list.style.visibility = "visible"; 
                  fuelStatus.innerHTML = "There is not enough fuel for the journey.";
                  launchStatus.style.color = "red"; 
                  launchStatus.innerHTML = "Shuttle not ready for launch";
                  pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
                  copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} is ready for launch`;
            } 
            else if (cargoLoad.value > 10000 && fuel.value > 10000) {
                  list.style.visibility = "visible";
                  cargoStatus.innerHTML = "We are too heavy for takeoff!";
                  fuelStatus.innerHTML = "Fuel level high enough for launch";
                  launchStatus.style.color = "red"; 
                  launchStatus.innerHTML = "Shuttle not ready for launch";
                  pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
                  copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} is ready for launch`;

            } else  {
                  list.style.visibility = "visible";
                  launchStatus.style.color = "green"; 
                  launchStatus.innerHTML = "Shuttle is ready for launch";
                  pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
                  copilotStatus.innerHTML = `Co-pilot ${coPilotName.value} is ready for launch`;
                  fuelStatus.innerHTML = "Fuel level high enough for launch";
                  cargoStatus.innerHTML = "Cargo mass low enough for launch";
            }}
         });
      });
   

     
