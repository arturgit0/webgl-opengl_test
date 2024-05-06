mapboxgl.accessToken = '';
const map = new mapboxgl.Map({
    container: 'map',
    zoom: 5,
    center: [-104, 38], 
    style: 'mapbox://styles/mapbox/dark-v11',
    antialias: true,
    projection: 'mercator'
});


import {
    generateCircles
} from './extracter.js'


map.on('load', function() {
    var circles = generateCircles();


    map.addSource('circles', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': circles
        }
    });
    const transparentColor = 'rgba(0, 0, 0, 0.1)';
    // Add a circle layer
    map.addLayer({
        'id': 'circle-layer',
        'type': 'circle',
        'source': 'circles',
        'paint': {
            'circle-radius': ['get', 'radius'],
            'circle-color': ['get', 'color'],
        }
    });
});