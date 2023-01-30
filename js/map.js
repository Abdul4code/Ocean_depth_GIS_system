function lay_stamen_water_color(map){
    L.tileLayer.provider('Stamen.Watercolor').addTo(map);
}

function lay_esri_ocean(map){
    const apiKey = "AAPKbe0182629bc840faa59f0af8a969745dQouL1BbVsJhyBIF1Q72VSkIIxXO-bDRDWLgBjN7Wglp5Qv2gtxXAbd4ezjWytx_K";

    L.esri.Vector.vectorBasemapLayer("ArcGIS:Oceans", {
    apikey: apiKey
    }).addTo(map);
}

function lay_gebco(map){
    var gebco = L.tileLayer.wms("https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv?", {
        layers: 'GEBCO_LATEST',
        format: 'image/png',
        transparent: true,
        attribution: "GEBCO Compilation Group (2022)"
    });

    gebco.addTo(map)
}

function lay_osm_topo(map){
    var wmsLayer = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
        layers: 'TOPO-OSM-WMS'
    }).addTo(map);
}

function lay_nlmaps_water(map){
    var OpenSeaMap = L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
    });
    OpenSeaMap.addTo(map);
}

$(document).ready(function(){
    var map = L.map('mapDiv').setView([13.723304859405614, 9.807423115634194], 2);

    lay_esri_ocean(map)

    // getting longitude and latitude of mouse move
    map.on('mousemove', function(e) {
        lat  = e.latlng.lat;
        long = e.latlng.lng;

        $('.lat-value').text(lat)
        $('.long-value').text(long)
    } );
})