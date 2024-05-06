class MathUtility {
    static calculateDestinationPoint(Lng1, Lat1, distance, bearing) {
        // Earth's radius in meters
        const R = 6378137; // meters

        // Convert latitude and longitude from degrees to radians
        const lat1Rad = Lat1 * Math.PI / 180;
        const lon1Rad = Lng1 * Math.PI / 180;
        const brngRad = (270 - bearing) * Math.PI / 180; // Adjusted bearing calculation

        // Calculate the destination point
        const lat2Rad = Math.asin(Math.sin(lat1Rad) * Math.cos(distance / R) +
            Math.cos(lat1Rad) * Math.sin(distance / R) * Math.cos(brngRad));
        const lon2Rad = lon1Rad + Math.atan2(Math.sin(brngRad) * Math.sin(distance / R) * Math.cos(lat1Rad),
            Math.cos(distance / R) - Math.sin(lat1Rad) * Math.sin(lat2Rad));

        // Convert latitude and longitude from radians to degrees
        const lat2 = lat2Rad * 180 / Math.PI;
        const lon2 = lon2Rad * 180 / Math.PI;

        // Return the coordinates of the destination point
        return {
            lat: lat2,
            lng: lon2
        };
    }
}


export {
    MathUtility
};