// Variables --------------------------------------------------------

var mapSW = [0, 8192],
    mapNE = [8192, 0];

let addArr = [];

// Setup Map Object -------------------------------------------------
var map = L.map('map', {
    attributionControl: false,
    zoomControl: false,
}).setView([0, 0], 3);

// Map Tiles --------------------------------------------------------
L.tileLayer('./img/tiles/{z}/{x}/{y}.png', {
    minZoom: 2, 
    maxZoom: 5,
    continuousWorld: false,
    noWrap: true,
    crs: L.CRS.Simple,
}).addTo(map);

map.setMaxBounds(new L.LatLngBounds(
    map.unproject(mapSW, map.getMaxZoom()),
    map.unproject(mapNE, map.getMaxZoom())
));

// Marker Generation ------------------------------------------------

function renderIcons(data) {
    for (let i = 0; i < data.length; i++) {
        for (let x = 0; x < data[i].coords.length; x++) {
            marker = L.marker([data[i].coords[x][0], data[i].coords[x][1]], {
                icon: data[i].icon,
            }).addTo(data[i].layer)
            marker.bindTooltip(data[i].text, {
                className: 'tooltip-custom',
                opacity: 1,
                direction: 'right',
                offset: ([22.5, 0])
            }).update()
        }
    }
}

renderIcons(mapData);

// Debugging --------------------------------------------------------

// var popup = L.popup();

// function onMapClick(e) {
//     let coordinates = `[${Math.round(e.latlng.lat)}, ${Math.round(e.latlng.lng)}]`
//     popup.setLatLng(e.latlng).setContent(`${Math.round(e.latlng.lat)}, ${Math.round(e.latlng.lng)}`).openOn(map);
//     addArr.push([Math.round(e.latlng.lat), Math.round(e.latlng.lng)])
//     console.log(addArr)
//     navigator.clipboard.writeText(coordinates)
// }

// map.on('click', onMapClick);