// initialize the map
var map = L.map('map').setView([42.3299, -71.0705], 3);

// load a tile layer
L.tileLayer('',
    {
        maxZoom: 18,
        minZoom: 12
    }).addTo(map);

function onEachFeature(feature, layer) {
    var popupContent = '<p><strong>Year Built:</strong> '+feature.properties.year_built+'</p>' +
        '<p><strong>Address:</strong> '+feature.properties.address+'</p>' +
        '<p><strong>Owners:</strong> '+feature.properties.owners+'</p>';
    layer.bindPopup(popupContent);
}