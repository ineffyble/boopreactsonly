function boopStyles() {
    return `
    /**
     * Boop
     */
    ._2p7a._3j7q, ._9--._3j7q, /* www bling */
    sp_Jnt3vJul-6Q.sx_95ad2a, .sp_Jnt3vJul-6Q_2x.sx_5dc616 { /* touch bling */ 
        background-image: url('https://boopevan.com/boop32.png') !important;
        background-size: 16px 16px !important;
        background-position: 0 0 !important;            
    }
    ._2jry ._9-_._3j7q, ._9-y._3j7q { /* www buttons */
        background-image: url('https://boopevan.com/boop32.png') !important;
        background-size: 13px 13px !important;
        background-position: 0 0 !important;            
    }

    ._iuz ._2p78._3j7q  { /* www button image, non-HiDPI */
        background-image: url('https://boopevan.com/boop48.png') !important;
        background-position: 0 0 !important;                    
    }
    ._iuw ._2p78._3j7q  { /* www button image, HiDPI */
        background-image: url('https://boopevan.com/boop96.png') !important;
        background-size: 48px 48px !important;
        background-position: 0 0 !important;                    
    }
    ._uah ._2p78._3j7q  { /* touch toolbar */
        background-size: 100% 100% !important;
        background-position: 0 0 !important;                    
    }
    `;
}


function createBoopReactStyleElement() {
    const styleElem = document.createElement('style');
    styleElem.id = 'boop-reacts-only';
    styleElem.type = 'text/css';
    document.documentElement.appendChild(styleElem);
    return styleElem;
}


function setPageStyle(sheet) {
    const styleElem = document.getElementById('boop-reacts-only') || createBoopReactStyleElement();
    styleElem.textContent = sheet;
}

const stylesheet = boopStyles();
setPageStyle(stylesheet);



document.addEventListener( "pointerover", function(event) {
    if (event.target.classList.contains("_39n")) {
        event.target.parentElement.querySelectorAll("._39n ._3j7q").forEach(function(el) {
            el.parentElement.parentElement.querySelector("._4sm1").innerText = "Boop";
        });
    }
});


document.addEventListener( "click", function(event) {
    if (event.target.classList.contains("_39n")) {
        event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".UFILikeLink").forEach(function(el) {
            if (el.innerText == "Angry") {
                el.innerHTML = el.innerHTML.replace("Angry", "Boop");
            }
        });
    }
});