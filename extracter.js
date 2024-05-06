import data from './data.json' assert { type: 'json' };
import colortable from './colortable.json'  assert { type: 'json' };
import { MathUtility } from './mathutility.js';

function createCircle(markerLng, markerLat, radius, colour) {
    // Create a circle object
    const circle = {
        'type': 'Feature',
        'properties': {
            'color': colour,
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [markerLng, markerLat],
        },
        'radius': radius,
    };
    return circle;
}


function generateCircles()
{
    const tower_lng = -104.18
    const tower_lat = 38.45
    const metersToFirstGate = data.meters_to_first_gate;
    const metersBetweenGates = data.meters_between_gates;
    var circles = [] 
    circles.push(createCircle(tower_lng, tower_lat, 100, '#ff'))
    const values = data.values  
    const n = values.length
    const m = values[0].length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let point = MathUtility.calculateDestinationPoint(tower_lng,tower_lat, metersToFirstGate + j * metersBetweenGates, i);
            circles.push(createCircle(parseFloat(point.lng.toFixed(2)), parseFloat(point.lat.toFixed(2)), metersBetweenGates, colortable[values[i][j] + 11]));
        }
    } 
    return circles
}


export { generateCircles };
//generateCircles();