mapboxgl.accessToken = 'pk.eyJ1IjoieXVqZW9uZzIiLCJhIjoiY2swamRhMDNjMDlvNTNkbmoycjZudWRtdiJ9.kihZ3dv0cUG6FuvlPCw3qQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/yujeong2/ck0l1sppb4xhg1cqxgdbdykh9',
    center: [128.0882, 36.0824],
    zoom: 5.8
});

var size = 120;
 
var pulsingDot = {
width: size,
height: size,
data: new Uint8Array(size * size * 4),
 
onAdd: function() {
var canvas = document.createElement('canvas');
canvas.width = this.width;
canvas.height = this.height;
this.context = canvas.getContext('2d');
},
 
render: function() {
var duration = 1000;
var t = (performance.now() % duration) / duration;
 
var radius = size / 2 * 0.3;
var outerRadius = size / 2 * 0.7 * t + radius;
var context = this.context;
 
// draw outer circle
context.clearRect(0, 0, this.width, this.height);
context.beginPath();
context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
context.fill();
 
// draw inner circle
context.beginPath();
context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
context.fillStyle = 'rgba(255, 100, 100, 1)';
context.strokeStyle = 'white';
context.lineWidth = 2 + 4 * (1 - t);
context.fill();
context.stroke();
 
// update this image's data with data from the canvas
this.data = context.getImageData(0, 0, this.width, this.height).data;
 
// keep the map repainting
map.triggerRepaint();
 
// return `true` to let the map know that the image was updated
return true;
}
};

map.on('load', function () {

    map.addImage('pulsing-dot', pulsingDot, {
        pixelRatio: 2});

    map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [126.9783, 37.5667],
                        [129.0756, 35.1784]
                    ]
                }
            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#FF777A",
            "line-width": 5
        }
    });

    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [126.9783, 37.5667]
                },
                "properties": {
                    "title": "Seoul",
                }   
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                "coordinates": [129.0756, 35.1784]
                },
                "properties": {
                    "title": "Busan",
                }
            }]
            }
            },
            "layout": {
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.4],
                "text-anchor": "top",
                "text-size": 18,
                "icon-image": "pulsing-dot"
            },
            "paint": {
                "text-halo-color": "rgba(255,255,255,0.8)",
                "text-halo-width": 1.8
            }
    });
});

map.scrollZoom.disable();