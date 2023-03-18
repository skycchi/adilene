$(".zindex").on("mousedown", function(event) { 
    $(".zindex").css("z-index","1");
    $( this ).css("z-index","1000");
});


function showMiku() {
    document.getElementById("mikuwrapper").style.display = "flex";
}
function hideMiku() {
   document.getElementById("mikuwrapper").style.display = "none";
}
function showIndex() {
   document.getElementById("index").style.display = "flex";
}
function hideIndex() {
   document.getElementById("index").style.display = "none";
}
function showAbout() {
   document.getElementById("about").style.display = "flex";
}
function hideAbout() {
   document.getElementById("about").style.display = "none";
}
function showSongs() {
   document.getElementById("songs").style.display = "flex";
}
function hideSongs() {
   document.getElementById("songs").style.display = "none";
}
function showFigRev() {
   document.getElementById("figrev").style.display = "flex";
}
function hideFigRev() {
   document.getElementById("figrev").style.display = "none";
}
function showShrines() {
   document.getElementById("shrines").style.display = "flex";
}
function hideShrines() {
   document.getElementById("shrines").style.display = "none";
}
function showWebring() {
   document.getElementById("webring").style.display = "flex";
}
function hideWebring() {
   document.getElementById("webring").style.display = "none";
}
function showSites() {
   document.getElementById("sites").style.display = "flex";
}
function hideSites() {
   document.getElementById("sites").style.display = "none";
}
function showGames() {
   document.getElementById("games").style.display = "flex";
}
function hideGames() {
   document.getElementById("games").style.display = "none";
}
function showResources() {
   document.getElementById("resources").style.display = "flex";
}
function hideResources() {
   document.getElementById("resources").style.display = "none";
}
function showGallery() {
   document.getElementById("gallery").style.display = "flex";
}
function hideGallery() {
   document.getElementById("gallery").style.display = "none";
}

function features(){
    document.getElementById("features").style.display = "flex"
}

function closefeatures(){
    document.getElementById("features").style.display = "none"
}

function closedraw(){
    document.getElementById("container").style.display = "none";
}

function drawing(){
    document.getElementById("container").style.display = "flex";
    document.getElementById("mikuwrapper").style.display = "none";
    document.getElementById("index").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("songs").style.display = "none";
    document.getElementById("figrev").style.display = "none";
    document.getElementById("shrines").style.display = "none";
    document.getElementById("webring").style.display = "none";
    document.getElementById("sites").style.display = "none";
    document.getElementById("features").style.display = "none";
    document.getElementById("games").style.display = "none";
    document.getElementById("resources").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    
    const canvas = document.getElementById('drawing-board');
    const toolbar = document.getElementById('toolbar');
    const ctx = canvas.getContext('2d');

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;

    let isPainting = false;
    let lineWidth = 3;
    let startX;
    let startY;

    toolbar.addEventListener('click', e => {
        if (e.target.id === 'clear') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        if (e.target.id === 'erase') {
            ctx.globalCompositeOperation = 'destination-out';
        }
        if (e.target.id === 'pen') {
            ctx.strokeStyle = e.target.value;
            ctx.globalCompositeOperation = 'source-over'
        }
    });

    toolbar.addEventListener('change', e => {
        if(e.target.id === 'stroke') {
            ctx.strokeStyle = e.target.value;
        }

        if(e.target.id === 'lineWidth') {
            lineWidth = e.target.value;
        }

    });


    const draw = (e) => {
        if(!isPainting) {
            return;
        }

        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
        ctx.stroke();
    }

    canvas.addEventListener('mousedown', (e) => {
        isPainting = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    canvas.addEventListener('mouseup', e => {
        isPainting = false;
        ctx.stroke();
        ctx.beginPath();
    });

    canvas.addEventListener('mousemove', draw);
}
