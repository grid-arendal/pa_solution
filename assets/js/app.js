

$(window).resize(function() {
  sizeLayerControl();
});


$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#full-extent-btn").click(function() {
  map.fitBounds(vanlong_bb.getBounds());
  map.zoomIn(0.4);
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


//controlling the legend size /popup
function sizeLayerControl() {
  $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);
 
  if (($("#navcol").is(":visible")))
  {
 
   map.removeControl(control);
   control.options.collapsed=false;
   map.addControl(control);
  }
  else
  {
    map.removeControl(control);
	control.options.collapsed=true;
    map.addControl(control);
	
  }
}


/* Basemap Layers */
// var cartoLight1 = new L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
//   maxZoom: 30,
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
// });


   var heremap = L.tileLayer("http://1.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=PX6SlYxSsHCHftXe3mwW&app_code=4pSNtf-dSsuyZb2BAu7fMQ"
        , {
        styleId: 997
      })


// var arcgisOnline= new L.tileLayer(
//             'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//             attribution: '&copy; arcgisonline.com',
//             maxZoom: 30,
//             });




//vanlong boundary for reading extent
var vanlong_bb = new L.geoJson(null, {
  // style: function (feature) {
  //   return {
  //     color: '#00FF40',
  //     fill: true,
  //     opacity: 1,
  //     clickable: true,
  //     weight:3,
  //     dashArray:4,
	//   fillOpacity:0
      
  //   };
  // },
  // onEachFeature: function (feature, layer) {
  //   layer.bindPopup('<h6>Van Long Protected Area</h6>');
  // }
});
$.getJSON("data/vanlong.geojson", function (data) {
  vanlong_bb.addData(data);
});


//KB area

//natural forest
var natural_forest = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:natural_forest',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//natural forest
var planned_mining_zone = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:planned_mining_zone',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//natural forest
var plantation_forest = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:plantation_forest',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//natural forest
var agricultural_land = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:agricultural_land',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//natural forest
var village = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:village',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


//Contextualizing Data

//Roadsmn 
var mainroad = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:mainroad',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//Roadsmn 
var minorroad = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:minorroad',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//Roadsmn 
var rivers = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:rivers',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//Roadsmn 
var streams = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:streams',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});





//delacour_KB  
var delacour_KB  =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:kim_bang_survey',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//new digitized tourist road
var road2 =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:digitized_road_from_map',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//vanlong boundary 
var vanlong =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:vanlong_boundary',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//	cement factory layer
var cement =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:cement',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

// houses
var houses =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:houses',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//	tourist_road_project layer
var tourist_road_project =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:tourist_road_project',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


//	temple layer
var temple =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:temple',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//	resort_project layer
var resort_project =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:resort_project',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//	relocation_plan layer
var relocation_plan =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:relocation_plan',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//	guard_tracks layer
var guard_tracks =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:guard_tracks',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//	guard_tracks layer
var golf_course =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:golf_course',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//	cement_concession layer
var cement_concession =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:cement_concession',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});



//	geonode:villages_in_vlnr layer
var villages_in_vlnr =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:villages_in_vlnr',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});



//	geonode:mining_roads layer
var mining_roads =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:mining_roads',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});



//pseudo boundary to tigger click cursor
var pseudo_layer = new L.geoJson(null, {
  style: function (feature) {
    return {
      color: '#00FF40',
      fill: true,
      opacity: 0,
      clickable: true,
      weight:0,
      fillOpacity:0,
      
    };
  }
});
$.getJSON("data/pseudo_layer.geojson", function (data) {
  pseudo_layer.addData(data);
});



//hoa_binh_ppa_v2
var hoa_binh_ppa_v2 =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:hoa_binh_ppa_v2',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});

//proposed_kim_bang_ppa_v2
var proposed_kim_bang_ppa_v2 =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:proposed_kim_bang_ppa_v2',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'1'
});


//Commune_boundary_GADM
var Commune_boundary_GADM =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: '	geonode:Commune_boundary_GADM',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,

});


//District_boundary_GADM
var District_boundary_GADM =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: '	geonode:District_boundary_GADM',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,

});

//Province_boundary_GADM
var Province_boundary_GADM =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: '	geonode:Province_boundary_GADM',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
});



//Commune_boundaryWGS84
var Commune_boundary84 = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:communewgs84',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,

});


//District_boundaryWGS84
var District_boundary84 =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:districtswgs84',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,

});

//Province_boundaryWGS84
var Province_boundary84 =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:provinceswgs84',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
});




//add fish net layers

//grid_1km 
var grid_1km =  L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:grid_1km',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  //crs:L.CRS.EPSG4326,
  opacity:'0.7'
});



//ggrid_100m 
var grid_100m = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:grid_100m',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  opacity:'0.7'
});


//vanlong_field1 
var vanlong_field1 = L.tileLayer.wms("http://tuvalu.grida.no/arcgis/services/ECS/pa_solutions/MapServer/WMSServer", {
  layers: '1',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  opacity:'1'
  
});

//vanlong_field2 
var vanlong_field2 = L.tileLayer.wms("http://tuvalu.grida.no/arcgis/services/ECS/pa_solutions/MapServer/WMSServer", {
  layers: '0',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  opacity:'1'
  
});

//landsat_1999_tif 
var landsat_1999 = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:Landsat_1999_RGB',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
 
});

//landsat_2005_tif 
var landsat_2005 = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:Landsat_2005_RGB',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
 
});

//landsat_2010_tif 
var landsat_2010 = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:Landsat_2010_RGB',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  
});


//sentinel_2015_tif 
var sentinel_2015 = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:Sentinel_2015_RGB',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
 
});

//sentinel_2016_tif 
var sentinel_2016 = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:Sentinel_2016_RGB',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  
});

//SPOT6_RGB
var SPOT6_RGB = L.tileLayer.wms("http://tuvalu.grida.no/arcgis/services/ECS/pa_solutions/MapServer/WMSServer", {
  layers: '2',
  format: 'image/png',
  transparent: true,
  version: '1.1.1',
  attribution: "geonode.grida.no",
  title: true,
  
});

//sentinel_2017_tif 
var sentinel_2017 = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:Sentinel_2017_RGB',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  
});

//sentinel_2018_tif 
var sentinel_2018 = L.tileLayer.wms("http://82.116.78.168/geoserver/geonode/ows", {
  layers: 'geonode:Sentinel_2018_RGB',
  format: 'image/png',
  transparent: true,
  version: '1.0.0',
  attribution: "geonode.grida.no",
  title: true,
  
});


//polygon highlight
var polyhighlightStyle = {

  weight: 6,
  color: "#00FFFF",
  opacity: 1,
  dashArray: '2,2',
  lineJoin: 'round'
};

/* Overlay Layers */
var highlight = L.geoJson(null);
var highlightStyle = {
  stroke: false,
  fillColor: "#00FFFF",
  fillOpacity: 0.4,
  radius: 10
};




//add the map control and center it

map = L.map('map', {
  zoom: 20,
  center: [20.392171,105.859116],
  layers: [SPOT6_RGB,vanlong,highlight],
  zoomControl: false,
  attributionControl: false
});


//handling map event to enable click event on addLayer
map.on("layeradd", function(e) {
	if(map.hasLayer(grid_1km) || map.hasLayer(grid_100m))
	{
		map.addLayer(pseudo_layer);
}
	updateAttribution();		
});



//handling map event to enable click event on removeLayer
map.on("layerremove", function(e) {
	
	if((map.hasLayer(grid_1km) || map.hasLayer(grid_100m))  && (!map.hasLayer(pseudo_layer)))
	{
	map.addLayer(pseudo_layer);
    }
	else
	{
	map.removeLayer(pseudo_layer);
	highlight.clearLayers();
	map.closePopup()
	}
	updateAttribution();	
	
});






/* Attribution control */
function updateAttribution(e) {
  $.each(map._layers, function(index, layer) {
    if (layer.getAttribution) {
      $("#attribution").html((layer.getAttribution()));
    }
  });
}
//map.on("layeradd", updateAttribution);
//map.on("layerremove", updateAttribution);


var attributionControl = L.control({
  position: "bottomright"
});
attributionControl.onAdd = function (map) {
  var div = L.DomUtil.create("div", "leaflet-control-attribution");
  // div.innerHTML = "<span class='hidden-xs'>Developed by <a href='www.grida.no'>grida.no</a> | </span><a href='#' onclick='$(\"#attributionModal\").modal(\"show\"); return false;'>Attribution</a>";
  div.innerHTML = "<span class='hidden-xs'><a href='http://www.grida.no/' target='blank'>GRID-Arendal</a>   | </span><a href='#' onclick='$(\"#attributionModal\").modal(\"show\"); return false;'>Attribution</a>";
  return div;
};




map.addControl(attributionControl);

var zoomControl = L.control.zoom({
  position: "bottomright"
}).addTo(map);

//add print option in map
// var printer = L.easyPrint({
//       		sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
//       		filename: 'myMap',
//       		exportOnly: true,
//       		hideControlContainer: true,
// 			position:'bottomright',
// 		}).addTo(map);





//GPS enabled geolocation control set to follow the user's location 
// var locateControl = L.control.locate({
//   position: "bottomright",
//   drawCircle: true,
//   follow: true,
//   setView: true,
//   keepCurrentZoomLevel: true,
//   markerStyle: {
//     weight: 1,
//     opacity: 0.8,
//     fillOpacity: 0.8
//   },
//   circleStyle: {
//     weight: 1,
//     clickable: false
//   },
//   icon: "fa fa-location-arrow",
//   metric: false,
//   strings: {
//     title: "My location",
//     popup: "You are within {distance} {unit} from this point",
//     outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
//   },
//   locateOptions: {
//     maxZoom: 18,
//     watch: true,
//     enableHighAccuracy: true,
//     maximumAge: 10000,
//     timeout: 10000
//   }
// }).addTo(map);

L.control.scale({maxWidth:200, position: 'bottomleft'}).addTo(map);

/* Larger screens get expanded layer control and visible sidebar */
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}




	var baseMaps = [      { 
								groupName : "Satellite Images",
								expanded : false,
								layers    : {
									// "Aerial Imagery": arcgisOnline,
                  //  "Here Map" :heremap,
                  "Sentinel-2A, 2018-01-19"	: sentinel_2018,
                  "Sentinel-2A, 2017-12-20"	: sentinel_2017,
                  "SPOT-6, 2016-12-08"	: SPOT6_RGB,
									// "Sentinel-2A, 2016-11-05"	: sentinel_2016,
									"Sentinel-2A, 2015-12-01"	: sentinel_2015,
									"Landsat-5, 2010-11-08"	: landsat_2010,
									"Landsat-5, 2005-11-26"	: landsat_2005,
									"Landsat-5, 1999-09-23"	: landsat_1999
									
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
								groupName : "Boundaries",
								expanded : false,
								layers    : {
                  "Province Boundaries GADM":Province_boundary_GADM,
                  "District Boundaries GADM":District_boundary_GADM,    
                  "Commune Boundaries GADM":Commune_boundary_GADM,

                  "Province Boundaries Tu":Province_boundary84,
                  "District Boundaries Tu":District_boundary84,    
                  "Commune Boundaries Tu":Commune_boundary84, 

                  "Proposed Kim Bang PPA v2":proposed_kim_bang_ppa_v2,
                  "Proposed Hoa Binh PPA v2":hoa_binh_ppa_v2,
									"Van Long Nature Reserve" : vanlong 
								}	
                             }


,{
                groupName : "Context Data",
                expanded : false,
                layers    : { 
                  "Main Roads": mainroad,
                  "Minor Roads": minorroad,
                  "Rivers": rivers,
                  "Streams": streams, 
                } 
                } 

                ,{
                groupName : "Kim Bang data",
                expanded : true,
                layers    : { 
                  "Natural forest": natural_forest,
                  "Planned mining Zone": planned_mining_zone,
                  "Plantation forest": plantation_forest,
                  "Agricultural land": agricultural_land,
                  "Village": village
                } 

                                           }


                             ,{
                groupName : "Delacour's Langur",
                expanded : true,
                layers    : { 
                  "Kim Bang Survey": delacour_KB    
                } 
                                           },
                {
                groupName : "SPOT6 Digitized Activities",
                expanded : false,
                layers    : { 
                  "Mining Activities": cement,
                  'Mining Roads':mining_roads,
                  'Habitations in AOI': houses       
                }	
                                           },{
								groupName : "Participatory Maps & Data",
                expanded : false,
								layers    : { 
                  
                  "Scanned Map 1"	: vanlong_field1,
									"Scanned Map 2" : vanlong_field2,
                  'Villages':villages_in_vlnr,
                  'Guard Tracks':guard_tracks,
                  'Cement Concession':cement_concession,
                  'Tourist Road Project':tourist_road_project,
                  'Tourist Road Project 2': road2,
                  'Resort Project':resort_project,
                  'Golf Course':golf_course,
                  'Relocation Plan':relocation_plan,
                  'Temple':temple
								}	
                             }, 
                //              {
								// groupName : "Satellite imagery",
								// expanded : false,
								// layers    : {
								// 	"SPOT-6"	: heremap,								
								// }	
                //              },
                             	{
								groupName : "Grid system for planning",
								expanded : false,
								layers    : { 
								    "100 Square meters" 	: grid_100m,
									"1 Square Kilometers"     : grid_1km										
								}	
                             }						 
			];




/* Add legend */
	var options = {
				container_width 	: "250px",
				group_maxHeight     : "200px",
				container_maxHeight : "300px", 
				exclusive       	: false,
				collapsed	:false
			};

var control = L.Control.styledLayerControl(baseMaps, overlays, options);
map.addControl(control);





//retrive on click info
/* Clear feature highlight when map is clicked */
pseudo_layer.on("click", function(e) {
  highlight.clearLayers();
  
   
   //add grid_1km layer 
   if (map.hasLayer(grid_1km) && map.hasLayer(pseudo_layer)) {
    $("#loading").show();
    var url = getFeatureInfoUrl(map, grid_1km, e.latlng, {
      'info_format': 'application/json',
      //'propertyName': 'Exclusive Economic Zone,Territory 1'
    });
	// Write ajex query to retrive data from wms layer
    $.ajax({
      url: url,
      async: false,
      dataType: 'json',

      success: function(data) {
      
        if(data.features.length > 0)
      {

        var content = "<table class='table table-striped table-bordered table-condensed'>";
        content = content + "<tr><td><b>Major Grid ID:</b></td>"
		content = content + "<td>"+data.features[0].properties.grid_1kmsq+"</td></tr>"
		content = content + "<table>";
		
        L.popup({ maxWidth: 800}).setLatLng(e.latlng).setContent(content).openOn(map);
        var polygon = L.multiPolygon(data.features[0].geometry.coordinates.map(function(d) {  return mapPolygon(d); }));
        highlight.clearLayers().addLayer(L.multiPolygon(polygon.getLatLngs(), polyhighlightStyle));
        $("#loading").hide();
     
}
else
{
$("#loading").hide();
}
 }, error: function(xhr, status, error) {
        console.log(error);
        $("#loading").hide();
      }
    });
  }
  
  
   //add grid_100m layer 
   if (map.hasLayer(grid_100m) && map.hasLayer(pseudo_layer)) {
    $("#loading").show();
    var url = getFeatureInfoUrl(map, grid_100m, e.latlng, {
      'info_format': 'application/json',
      //'propertyName': 'Exclusive Economic Zone,Territory 1'
    });
	// Write ajex query to retrive data from wms layer
    $.ajax({
      url: url,
      async: false,
      dataType: 'json',

      success: function(data) {
      
      if(data.features.length > 0)
      {

        var content = "<table class='table table-striped table-bordered table-condensed'>";        
		content = content + "<tr><td><b>Minor Grid ID:</b></td>"
		content = content + "<td>"+data.features[0].properties.grid_1kmsq+"</td></tr>"
		content = content + "<table>";

        L.popup({ maxWidth: 800}).setLatLng(e.latlng).setContent(content).openOn(map);
        var polygon = L.multiPolygon(data.features[0].geometry.coordinates.map(function(d) {  return mapPolygon(d); }));
        highlight.clearLayers().addLayer(L.multiPolygon(polygon.getLatLngs(), polyhighlightStyle));
        $("#loading").hide();
     
}
else
{
$("#loading").hide();
}
 }, error: function(xhr, status, error) {
        console.log(error);
        $("#loading").hide();
      }
    });
  }
  
 
  
  
});






//Functions will return the  feture from the wms layer and also its geometries to hilight

function mapPolygon(poly) {
  return poly.map(function(line) {
    return mapLineString(line);
  });
}

function mapLineString(line) {
  return line.map(function(d) {
    return [d[1], d[0]];
  });
}

function getFeatureInfoUrl(map, layer, latlng, params) {



  var point = map.latLngToContainerPoint(latlng, map.getZoom()),
    size = map.getSize();


  var defaultParams = {
    request: 'GetFeatureInfo',
    service: 'WMS',
    srs: 'EPSG:4326',
    styles: '',
    transparent: layer.options.transparent,
    version: layer.options.version,
    format: layer.options.format,
    bbox: map.getBounds().toBBoxString(),
    height: size.y,
    width: size.x,
    layers: layer.options.layers,
    query_layers: layer.options.layers,
    info_format: 'text/html',
  };

  params = L.Util.extend(defaultParams, params || {});

  params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
  params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;

  return layer._url + L.Util.getParamString(defaultParams, layer._url, true);

}

//********************Wms getfeture function end



/* Load the content before map load */
$(document).one("ajaxStop", function () {
  $("#loading").hide();
  sizeLayerControl();
  /* Fit map to vanlong bounds */
  map.fitBounds(vanlong_bb.getBounds());
  map.zoomIn(0.4);

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
