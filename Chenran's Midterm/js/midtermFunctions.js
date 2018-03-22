/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [40.000, -75.1190],
  zoom: 12
});
var defaultsetting = ([40.000, -75.1190],12);

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by < a href=" ">Stamen Design</ a>, < a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</ a> &mdash; Map data &copy; < a href="http://www.openstreetmap.org/copyright">OpenStreetMap</ a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var dataset = "https://raw.githubusercontent.com/chenranwu/Chenran-s-Midterm/master/data/data.geojson";
var featureGroup;
var parsedData;
var nextButton = $("#next");
var previousButton = $("#previous");
var pagenumber=1;
var map1, map2, map3, map4, map5, map6;

function median(values) {
    values.sort( function(a,b) {return a - b;} );
    var half = Math.floor(values.length/2);
    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}

var pricegroup = [];
var pricefucntion = function(data){_.each(data.features,function(point){
  pricegroup.push(point.properties.prices);
});};

var sizegroup = [];
var sqftfunction = function(data){_.each(data.features,function(point){
  sizegroup.push(point.properties.sqft);
});};

var bedgroup = [];
var bedfunction = function(data){_.each(data.features,function(point){
  bedgroup.push(point.properties.beds);
});};

var mypoint;
var pointGroup = L.featureGroup();
var resetMap = function() {
       map.removeLayer(pointGroup);
       pointGroup = L.featureGroup();
};
