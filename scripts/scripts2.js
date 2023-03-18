 function updateTime(){
                var b = moment().format('h:mm', {useGrouping: false});
                document.getElementById("currenttime").innerHTML = b;
            }
            
            updateTime();
            setInterval(function(){
            updateTime();
            },1000);

function showMiku1() {
   document.getElementById("mikuwrapper1").style.display = "flex";
}
function hideMiku1() {
   document.getElementById("mikuwrapper1").style.display = "none";
}
function showIndex1() {
   document.getElementById("index1").style.display = "flex";
}
function hideIndex1() {
   document.getElementById("index1").style.display = "none";
}
function showAbout1() {
   document.getElementById("about1").style.display = "flex";
}
function hideAbout1() {
   document.getElementById("about1").style.display = "none";
}
function showSongs1() {
   document.getElementById("songs1").style.display = "flex";
}
function hideSongs1() {
   document.getElementById("songs1").style.display = "none";
}
function showFigRev1() {
   document.getElementById("figrev1").style.display = "flex";
}
function hideFigRev1() {
   document.getElementById("figrev1").style.display = "none";
}
function showShrines1() {
   document.getElementById("shrines1").style.display = "flex";
}
function hideShrines1() {
   document.getElementById("shrines1").style.display = "none";
}
function showWebring1() {
   document.getElementById("webring1").style.display = "flex";
}
function hideWebring1() {
   document.getElementById("webring1").style.display = "none";
}
function showChatbox1() {
   document.getElementById("chatbox1").style.display = "flex";
}
function hideChatbox1() {
   document.getElementById("chatbox1").style.display = "none";
}
function showSites1() {
   document.getElementById("sites1").style.display = "flex";
}
function hideSites1() {
   document.getElementById("sites1").style.display = "none";
}
function showGames1() {
   document.getElementById("games1").style.display = "flex";
}
function hideGames1() {
   document.getElementById("games1").style.display = "none";
}
function showResources1() {
   document.getElementById("resources1").style.display = "flex";
}
function hideResources1() {
   document.getElementById("resources1").style.display = "none";
}
function showGallery1() {
   document.getElementById("gallery1").style.display = "flex";
}
function hideGallery1() {
   document.getElementById("gallery1").style.display = "none";
}