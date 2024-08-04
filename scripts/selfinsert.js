             
var nameSelfWebring = "Adilene";
var relationshipSelfWebring = "is best friends with";
var charnameSelfWebring = "Joe Tazuna";
var seriesSelfWebring = "Your Turn To Die";
var imgurlSelfWebring = "https://files.catbox.moe/tje5x7.png";

var templateWebring = document.createElement("selfinsertwebring");
 templateWebring.innerHTML = "<div id='templateWebring'> <div id='flex'> <div id='webringiconbox'> <img id='iconWebring' src='" + imgurlSelfWebring + "'/> </div> <div id='webringdescbox'> <p id='webringdesc'> <strong>" + nameSelfWebring + "</strong> " + relationshipSelfWebring + "<br /> <strong>" + charnameSelfWebring + "</strong> from <strong>" + seriesSelfWebring + "</strong>! </p> </div> </div> <div id='webringlinks'>	<p id='linkparaWebring'> | <a href='https://webring.koinuko.pink/members.php' target='_blank'>Members List</a> | <br/>	Part of the <a href='https://webring.koinuko.pink/' target='_blank'>Self-Insert Webring</a></p> </div> </div>"; 
  document.getElementById("selfinsertwebring").appendChild(templateWebring);  
         
       