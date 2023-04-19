// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
    "https://adilene.net/",
    "https://lhfm.neocities.org/",
    "https://pklucky.neocities.org/",
    "https://argoxi.neocities.org/",
    "https://burypink.neocities.org/",
    "https://sugarangel.neocities.org/",
    "https://snipertf2.neocities.org/",
    "https://hellokittyminigun.neocities.org/",
    "https://onlywonder.neocities.org/",
    "https://boothworldindustries.neocities.org/",
    "https://sleepy-sage.neocities.org/",
    "https://psychonauts.neocities.org/",
    "https://hunipyon.neocities.org/",
    "https://charliedarling.neocities.org/",
    "https://cozy-angels.neocities.org",
    "https://shiroganes.neocities.org/",
    "https://supernxva.neocities.org/",
    "https://bodhisattva.neocities.org/",
    "https://mystsaphyr.me/",
    "https://kipperkorner.neocities.org/",
    "https://moonlightgamingyt.neocities.org/",
    "https://haruokumura.neocities.org/",
    "https://90z-ash.neocities.org/",
    "https://puddingpudds.neocities.org/",
    "https://speedmaggots.neocities.org/",
    "https://meko.neocities.org/",
    "https://shadowfae.neocities.org/",
    "https://blanketcape.neocities.org/",
    "https://vocalopalooza.neocities.org/",
    "https://korekiyovillage.neocities.org/",
    "https://mirrorteru.neocities.org/",
    "https://rayofhope.neocities.org/",
    "https://ed1c24.neocities.org/",
    "https://cyberealm.neocities.org/",
    "https://rocktype.neocities.org/",
    "https://jojjo.neocities.org/",
    "https://xmenfan2001.neocities.org/",
    "https://timverse.neocities.org/",
    "https://superkirbylover.neocities.org/",
    "https://expectationemesis.neocities.org/",
    "https://amihan.neocities.org/",
    "https://followthewhiterabbit.neocities.org/",
    "https://sanguineroyal.com/",
    "https://bp119.neocities.org/",
    "https://thegvttr.neocities.org/",
    "https://stupidbutcoolwebsitename.neocities.org/",
    "https://25nightcord.neocities.org/",
    "https://shroom.ink/",
    "https://foreverliketh.is/",
    "https://wishiwashi.neocities.org/",
    "https://nonkiru.art/",
    "https://layercake.neocities.org/",
    "https://ruili.neocities.org/",
    "https://hellstarares.neocities.org/",
    "https://mikufan3939.neocities.org/",
    "https://crescentmirror.neocities.org/",
    "https://leanneu.neocities.org/",
    "https://sunny-cities.neocities.org/",
    "https://retrovampz.neocities.org/",
    "https://pirupi.neocities.org/",
    "https://ophanimkei.com/",
    "https://bebetcy.neocities.org/",
    "https://chipsfunfun.neocities.org/",
    "https://lovelyqats.neocities.org/",
    "https://eternities.neocities.org/",
    "https://mirrordomain.neocities.org/",
    "https://sodagirl.neocities.org/",
    "https://doqmeat.neocities.org/"
];

//the name of the ring
var ringName = "VOCALOID";

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = "vocaring";

//should the widget include a link to an index page?
var useIndex = false;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = "https://adilene.net";

//should the widget include a random button?
var useRandom = true;
