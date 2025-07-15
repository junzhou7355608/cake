export function getDistanceFromLatLonInKm(
  currentLat: number,
  currentLon: number,
  targetLat: number,
  targetLon: number
) {
  const R = 6371
  const dLat = deg2rad(targetLat - currentLat)
  const dLon = deg2rad(targetLon - currentLon)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(currentLat)) *
      Math.cos(deg2rad(targetLat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c
  return distance.toFixed(1)
}

export function deg2rad(deg: number) {
  return deg * (Math.PI / 180)
}

export function createNumberList(num: number) {
  return Array.from({ length: num }, (_, index) =>
    index.toString().padStart(2, '0')
  )
}
