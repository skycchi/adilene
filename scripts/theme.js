document.addEventListener("DOMContentLoaded", function(event) { 
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
if(localStorage.getItem('theme') === 'sakura' || 'light')
changeTheme(localStorage.getItem('theme'))
else {
if(mediaQuery.matches)
changeTheme('sakura')
else
changeTheme('light')
} 
mediaQuery.addListener(e => {
if(e.matches)
changeTheme('sakura')
else
changeTheme('light')
})
});

function toggleTheme() {
if (document.documentElement.getAttribute('data-theme') === 'sakura'){
changeTheme('light')
document.getElementById("mikuheader").src="mikuheader.png";
}
else{
changeTheme('sakura')
document.getElementById("mikuheader").src="sakuraheader.jpg";
 document.getElementsByClassName("bullet").src="https://files.catbox.moe/xa9h1t.gif";
}
}
function changeTheme(theme) {
document.documentElement.setAttribute('data-theme', theme)
localStorage.setItem('theme', theme) 
}
