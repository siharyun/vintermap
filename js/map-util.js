map.addLayer(portLayer);

function toggleModal() {
    if (modal.style.display == 'none') {
        modal.style.display = 'block'
    } else {
        modal.style.display = 'none'
    }
}

var togglePort = new Boolean(true);
var toggleFish = new Boolean(false);
var toggleFeather = new Boolean(false);
var togglePlant = new Boolean(false);
var toggleShop = new Boolean(false);
var toggleMonument = new Boolean(false);

document.addEventListener('click', function handleClick(e) {
            var t = e.target                                        // Tidy this up!
            if (t.classList.contains("nav-btn-label")) {            // If user clicks the button label.
                t.parentNode.classList.toggle('active')
                t.parentNode.childNodes[0].classList.toggle('active')
                var i = t.closest('.nav-pill')
            }
            if (t.classList.contains("nav-btn")) {                  // If user clicks the main button.
                t.classList.toggle("active");
                t.childNodes[0].classList.toggle('active')
                var i = t.closest('.nav-pill')
            }
            if (t.classList.contains("fa-solid")) {                 // If user clicks the button icon.
                t.parentNode.classList.toggle("active")
                t.parentNode.parentNode.classList.toggle("active")
                var i = t.closest('.nav-pill')
            }
            if (t.classList.contains("nav-icon")) {                 // If user clicks the icon circle.
                t.classList.toggle("active")
                t.parentNode.classList.toggle("active")
                var i = t.closest('.nav-pill')
            }
            if (i.classList.contains("fish") && toggleFish == false) {
                map.addLayer(fishLayer);
                toggleFish = true;
            } else if (i.classList.contains("fish") && toggleFish == true) {
                map.removeLayer(fishLayer);
                toggleFish = false;
            } else if (i.classList.contains("port") && togglePort == false) {
                map.addLayer(portLayer);
                togglePort = true;
            } else if (i.classList.contains("port") && togglePort == true) {
                map.removeLayer(portLayer);
                togglePort = false;
            } else if (i.classList.contains("plant") && togglePlant == false) {
                map.addLayer(plantLayer);
                togglePlant = true;
            } else if (i.classList.contains("plant") && togglePlant == true) {
                map.removeLayer(plantLayer);
                togglePlant = false;
            } else if (i.classList.contains("feather") && toggleFeather == false) {
                map.addLayer(featherLayer);
                toggleFeather = true;
            } else if (i.classList.contains("feather") && toggleFeather== true) {
                map.removeLayer(featherLayer);
                toggleFeather = false;
            } else if (i.classList.contains("shop") && toggleShop == false) {
                map.addLayer(shopLayer);
                toggleShop = true;
            } else if (i.classList.contains("shop") && toggleShop == true) {
                map.removeLayer(shopLayer);
                toggleShop = false;
            } else if (i.classList.contains("monument") && toggleMonument == false) {
                map.addLayer(monumentLayer);
                toggleMonument = true;
            } else if (i.classList.contains("monument") && toggleMonument == true) {
                map.removeLayer(monumentLayer);
                toggleMonument = false;
            }
});