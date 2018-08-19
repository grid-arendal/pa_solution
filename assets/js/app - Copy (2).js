

$(window).resize(function() {
  sizeLayerControl();
});


$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#full-extent-btn").click(function() {
  map.fitBounds(vanlong.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#legend-btn").click(function() {
  $("#legendModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#login-btn").click(function() {
  $("#loginModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#list-btn").click(function() {

  return false;
});

$("#nav-btn").click(function() {
  $(".navbar-collapse").collapse("toggle");
  return false;
});

$("#sidebar-toggle-btn").click(function() {

  return false;
});

$("#sidebar-hide-btn").click(function() {
  return false;
});



function sizeLayerControl() {
  $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);
}





/* Basemap Layers */
var cartoLight = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
  maxZoom: 30,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
});


var arcgisOnline= L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; arcgisonline.com',
            maxZoom: 30,
            });




//vanlong boundary
var vanlong = L.geoJson(null, {
  style: function (feature) {
    return {
      color: '#00FF40',
      fill: false,
      opacity: 1,
      clickable: false,
      weight:2,
      dashArray:4
      
    };
  }
});
$.getJSON("data/vanlong.geojson", function (data) {
  vanlong.addData(data);
});



map = L.map("map", {
  zoom: 20,
  center: [105.859116,20.392171],
  layers: [arcgisOnline, vanlong],
  zoomControl: false,
  attributionControl: false
});







/* Attribution control */
function updateAttribution(e) {
  $.each(map._layers, function(index, layer) {
    if (layer.getAttribution) {
      $("#attribution").html((layer.getAttribution()));
    }
  });
}
map.on("layeradd", updateAttribution);
map.on("layerremove", updateAttribution);


var attributionControl = L.control({
  position: "bottomright"
});
attributionControl.onAdd = function (map) {
  var div = L.DomUtil.create("div", "leaflet-control-attribution");
  div.innerHTML = "<span class='hidden-xs'>Developed by <a href='www.grida.no'>grida.no</a> | </span><a href='#' onclick='$(\"#attributionModal\").modal(\"show\"); return false;'>Attribution</a>";
  return div;
};
map.addControl(attributionControl);

var zoomControl = L.control.zoom({
  position: "bottomright"
}).addTo(map);



/* GPS enabled geolocation control set to follow the user's location 
var locateControl = L.control.locate({
  position: "bottomright",
  drawCircle: true,
  follow: true,
  setView: true,
  keepCurrentZoomLevel: true,
  markerStyle: {
    weight: 1,
    opacity: 0.8,
    fillOpacity: 0.8
  },
  circleStyle: {
    weight: 1,
    clickable: false
  },
  icon: "fa fa-location-arrow",
  metric: false,
  strings: {
    title: "My location",
    popup: "You are within {distance} {unit} from this point",
    outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
  },
  locateOptions: {
    maxZoom: 18,
    watch: true,
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 10000
  }
}).addTo(map); */

/* Larger screens get expanded layer control and visible sidebar */
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}

/*
var baseLayers = {
  "Aerial Imagery": arcgisOnline,
  "Street Map": cartoLight,
};

var groupedOverlays = {
  "Points of Interest": {
    "<img src='assets/img/museum.png' width='24' height='28'>&nbsp;Museums": vanlong
  },
  "Reference": {
    "vanlong": vanlong
  }
};

var layerControl = L.control.groupedLayers(baseLayers, groupedOverlays, {
  collapsed: isCollapsed
}).addTo(map); */



	var baseMaps = [      { 
								groupName : "Base Maps",
								expanded : true,
								layers    : {
									"Aerial Imagery" : arcgisOnline,
									"Street Map"  :cartoLight
									
								}
					        }/*, {
							    groupName : "OSM Base Maps",
								layers    : {
									"OpenStreetMaps" : osm
								}
                            }, {
							    groupName : "Bing Base Maps",
								layers    : {
									"Satellite" : bing1,
									"Road"      : bing2
							  }
                            } */							
			];



	var overlays = [
							 {
								groupName : "GIS Layers",
								expanded : true,
								layers    : { 
									"Vanlong Boundary" : vanlong ,
								}	
                             }/*, {
								groupName : "Rio de Janeiro",
								expanded : true,
								layers    : { 
									"Bean Plant"     : bean_rj,
									"Corn Plant" 	 : corn_rj,
									"Rice Plant"	 : rice_rj		
								}	
                             }, {
								groupName : "Belo Horizonte",
								layers    : { 
									"Sugar Cane Plant"	: sugar_bh		
								}	
                             }		*/					 
			];



/* Add legend */
	var options = {
				container_width 	: "300px",
				group_maxHeight     : "80px",
				//container_maxHeight : "350px", 
				exclusive       	: true
			};

var control = L.Control.styledLayerControl(baseMaps, overlays, options);
    map.addControl(control);











/* Load the content before map load */
$(document).one("ajaxStop", function () {
  $("#loading").hide();
  sizeLayerControl();
  /* Fit map to vanlong bounds */
  map.fitBounds(vanlong.getBounds());

});

// Leaflet patch to make layer control scrollable on touch browsers
var container = $(".leaflet-control-layers")[0];
if (!L.Browser.touch) {
  L.DomEvent
  .disableClickPropagation(container)
  .disableScrollPropagation(container);
} else {
  L.DomEvent.disableClickPropagation(container);
}
