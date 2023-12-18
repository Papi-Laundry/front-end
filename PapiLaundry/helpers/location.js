import haversine from 'haversine-distance'

export function getDistance(locationA, locationB) {
  return (Math.round(haversine(locationA, locationB))/1000).toFixed(2)
}