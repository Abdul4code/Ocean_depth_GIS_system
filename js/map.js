function lay_stamen_water_color(map){
    layer = L.tileLayer.provider('Stamen.Watercolor')
    layer.addTo(map);
}

function lay_esri_ocean(map){
    const apiKey = "AAPKbe0182629bc840faa59f0af8a969745dQouL1BbVsJhyBIF1Q72VSkIIxXO-bDRDWLgBjN7Wglp5Qv2gtxXAbd4ezjWytx_K";

    layer = L.esri.Vector.vectorBasemapLayer("ArcGIS:Oceans", {
    apikey: apiKey
    })

    layer.addTo(map);
}

function lay_gebco(map){
    layer = L.tileLayer.wms("https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv?", {
        layers: 'GEBCO_LATEST',
        format: 'image/png',
        transparent: true,
        attribution: "GEBCO Compilation Group (2022)"
    });

    layer.addTo(map)
}

function lay_osm_topo(map){
    layer = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
        layers: 'TOPO-OSM-WMS'
    })
    layer.addTo(map);
}

function lay_nlmaps_water(map){
    layer = L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
    });
    layer.addTo(map);
}

$(document).ready(function(){
    var overlays = {
        "GEBCO - Contours": L.tileLayer(
          "https://tiles.arcgis.com/tiles/C8EMgrsFcRFL6LrL/arcgis/rest/services/GEBCO_contours/MapServer/tile/{z}/{y}/{x}", {
        }),
          'IHO Mosaic': L.esri.imageMapLayer({
            url: 'https://gis.ngdc.noaa.gov/arcgis/rest/services/multibeam_mosaic/ImageServer',
            useCors: false
          }),
       "CHS NONNA-100": L.tileLayer.wms(
          "https://data.chs-shc.ca/geoserver/ows?", {
            layers: "nonna:NONNA 100",
            format: "image/png",
            transparent: true
          })
      };

    var map = L.map('mapDiv').setView([13.723304859405614, 9.807423115634194], 2);
    layer = ""
    lay_esri_ocean(map)

    $(document).on('click', '.layer-input', function(){
        selected = $(this).val()
        layer.remove()

        if(selected == 'esri'){
            lay_esri_ocean(map)
        }else if(selected == 'stamen'){
            lay_stamen_water_color(map)
        }else if(selected == 'gepco'){
            lay_gebco(map)
        }else if(selected == 'osm_topo'){
            lay_osm_topo(map)
        }else if(selected == 'nlmaps'){
            lay_nlmaps_water(map)
        }
    })

    $(document).on('click', '.overlay-chechbox', function(){
        selected = $(this).val()
        console.log(selected)

        if(selected == 'iho'){
            over_layer = overlays['IHO Mosaic']
            if (map.hasLayer(over_layer)) {
                map.removeLayer(over_layer);
            }
            else {
                over_layer.addTo(map);
            }

        }else if(selected == 'gepco'){
            over_layer = overlays["GEBCO - Contours"]
            if (map.hasLayer(over_layer)) {
                map.removeLayer(over_layer);
            }
            else {
                over_layer.addTo(map);
            }

        }else if(selected == 'nonna'){
            over_layer = overlays["CHS NONNA-100"]
            if (map.hasLayer(over_layer)) {
                map.removeLayer(over_layer);
            }
            else {
                over_layer.addTo(map);
            }
        }
    })

    // getting longitude and latitude of mouse move
    map.on('mousemove', function(e) {
        const apiKey = "AAPKbe0182629bc840faa59f0af8a969745dQouL1BbVsJhyBIF1Q72VSkIIxXO-bDRDWLgBjN7Wglp5Qv2gtxXAbd4ezjWytx_K";
        lat  = e.latlng.lat;
        long = e.latlng.lng;

        $('.lat-value').text(lat)
        $('.long-value').text(long)
    } );

    map.on('click', function(e){
        lat  = e.latlng.lat;
        long = e.latlng.lng;
    })
})