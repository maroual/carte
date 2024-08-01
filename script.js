var southWest = L.latLng(30, -10); // Much larger southern and western bounds
var northEast = L.latLng(35, -5); // Much larger northern and eastern bounds

var bounds = L.latLngBounds(southWest, northEast);

var map = L.map("map", {
  minZoom: 9,
  maxZoom: 14,
  // Set maxBounds to restrict panning
  maxBounds: bounds,
  maxBoundsViscosity: 0.5,
  touchZoom: true,
  dragging: true,
  zoomControl: true,
}).setView([32.2263, -8.0169], 10); // Center the map initially

// Set the map's bounds to fit within the defined area
// map.on("load", function () {
//   map.fitBounds(bounds);
// });

var Stadia_AlidadeSatellite = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}?api_key=82239787-e7cf-459c-b053-861edfbdd0eb",
  {
    attribution:
      '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: "jpg",
  }
).addTo(map);

// Event handler to enforce maxBounds during map drag

var data = [
  {
    id: 1,
    city: "Safi",
    coords: [32.664108, -9.006899],
    pH: 6.8,
    MO: 4.6,
    P2O5: 41.1,
    K2O: 276.3,
  },
  {
    id: 2,
    city: "Safi",
    coords: [32.664623, -9.036011],
    pH: 6.7,
    MO: 4.3,
    P2O5: 34.7,
    K2O: 280.6,
  },
  {
    id: 3,
    city: "Safi",
    coords: [32.664839, -9.068059],
    pH: 7.5,
    MO: 1.6,
    P2O5: 25.2,
    K2O: 346.9,
  },
  {
    id: 4,
    city: "Safi",
    coords: [32.663747, -9.0927],
    pH: 8.9,
    MO: 3.6,
    P2O5: 50.9,
    K2O: 343.4,
  },
  {
    id: 5,
    city: "Safi",
    coords: [32.640814, -9.114624],
    pH: 7.7,
    MO: 4.9,
    P2O5: 16.2,
    K2O: 316.4,
  },
  {
    id: 6,
    city: "Safi",
    coords: [32.605119, -9.0701],
    pH: 6.3,
    MO: 4.2,
    P2O5: 28.4,
    K2O: 246.2,
  },
  {
    id: 7,
    city: "Safi",
    coords: [32.560375, -9.035415],
    pH: 6.2,
    MO: 1.9,
    P2O5: 34.9,
    K2O: 237.7,
  },
  {
    id: 8,
    city: "Safi",
    coords: [32.560375, -9.035415],
    pH: 7.5,
    MO: 3.6,
    P2O5: 30.1,
    K2O: 323.5,
  },
  {
    id: 9,
    city: "Safi",
    coords: [32.513061, -8.964457],
    pH: 6.8,
    MO: 1.7,
    P2O5: 22.1,
    K2O: 336.6,
  },
  {
    id: 10,
    city: "Safi",
    coords: [32.459672, -8.885814],
    pH: 8.7,
    MO: 3.9,
    P2O5: 46.2,
    K2O: 319.9,
  },
  {
    id: 11,
    city: "Safi",
    coords: [32.420656, -8.813444],
    pH: 7.8,
    MO: 4.2,
    P2O5: 36.8,
    K2O: 333.5,
  },
  {
    id: 12,
    city: "Safi",
    coords: [32.401696, -8.74613],
    pH: 7.1,
    MO: 4.1,
    P2O5: 19.0,
    K2O: 291.6,
  },
  {
    id: 13,
    city: "Safi",
    coords: [32.358516, -8.686569],
    pH: 7.0,
    MO: 2.3,
    P2O5: 56.9,
    K2O: 215.2,
  },
  {
    id: 14,
    city: "Safi",
    coords: [32.32551, -8.628757],
    pH: 6.8,
    MO: 3.7,
    P2O5: 31.9,
    K2O: 336.0,
  },
  {
    id: 15,
    city: "Safi",
    coords: [32.476331, -8.746213],
    pH: 8.2,
    MO: 1.8,
    P2O5: 26.1,
    K2O: 284.2,
  },
  {
    id: 16,
    city: "Safi",
    coords: [32.446014, -8.694312],
    pH: 6.4,
    MO: 4.6,
    P2O5: 52.6,
    K2O: 274.2,
  },
  {
    id: 17,
    city: "Safi",
    coords: [32.412752, -8.645407],
    pH: 6.9,
    MO: 3.1,
    P2O5: 20.6,
    K2O: 194.5,
  },
  {
    id: 18,
    city: "Safi",
    coords: [32.495717, -8.669867],
    pH: 6.8,
    MO: 4.7,
    P2O5: 17.7,
    K2O: 280.1,
  },
  {
    id: 19,
    city: "Safi",
    coords: [32.561435, -9.187555],
    pH: 8.5,
    MO: 1.1,
    P2O5: 37.6,
    K2O: 216.0,
  },
  {
    id: 20,
    city: "Safi",
    coords: [32.562771, -9.195556],
    pH: 7.4,
    MO: 3.9,
    P2O5: 15.0,
    K2O: 324.9,
  },
  {
    id: 21,
    city: "Safi",
    coords: [32.543909, -9.151411],
    pH: 7.6,
    MO: 2.7,
    P2O5: 41.5,
    K2O: 227.5,
  },
  {
    id: 22,
    city: "Safi",
    coords: [32.52533, -9.132522],
    pH: 7.9,
    MO: 2.9,
    P2O5: 37.3,
    K2O: 233.5,
  },
  {
    id: 23,
    city: "Safi",
    coords: [32.50356, -9.084668],
    pH: 7.6,
    MO: 1.0,
    P2O5: 32.7,
    K2O: 342.8,
  },
  {
    id: 24,
    city: "Safi",
    coords: [32.443003, -9.014146],
    pH: 7.5,
    MO: 3.0,
    P2O5: 18.5,
    K2O: 225.6,
  },
  {
    id: 25,
    city: "Safi",
    coords: [32.397292, -8.953699],
    pH: 7.4,
    MO: 2.0,
    P2O5: 27.6,
    K2O: 320.3,
  },
  {
    id: 26,
    city: "Safi",
    coords: [32.362196, -8.898289],
    pH: 7.9,
    MO: 1.4,
    P2O5: 47.8,
    K2O: 251.3,
  },
  {
    id: 27,
    city: "Safi",
    coords: [32.332407, -8.849176],
    pH: 6.8,
    MO: 2.0,
    P2O5: 57.5,
    K2O: 318.4,
  },
  {
    id: 28,
    city: "Safi",
    coords: [32.301544, -8.773617],
    pH: 7.6,
    MO: 1.7,
    P2O5: 49.2,
    K2O: 287.5,
  },
  {
    id: 29,
    city: "Safi",
    coords: [32.2728, -8.710652],
    pH: 7.3,
    MO: 3.7,
    P2O5: 50.8,
    K2O: 182.0,
  },
  {
    id: 30,
    city: "Safi",
    coords: [32.210214, -8.837672],
    pH: 8.5,
    MO: 4.2,
    P2O5: 19.9,
    K2O: 249.8,
  },
  {
    id: 31,
    city: "Safi",
    coords: [32.251187, -8.90465],
    pH: 7.8,
    MO: 4.5,
    P2O5: 34.5,
    K2O: 272.3,
  },
  {
    id: 32,
    city: "Safi",
    coords: [32.28335, -8.987457],
    pH: 8.6,
    MO: 3.2,
    P2O5: 59.7,
    K2O: 208.2,
  },
  {
    id: 33,
    city: "Safi",
    coords: [32.298542, -9.026394],
    pH: 6.2,
    MO: 3.5,
    P2O5: 18.6,
    K2O: 282.1,
  },
  {
    id: 34,
    city: "Safi",
    coords: [32.317528, -9.059341],
    pH: 7.7,
    MO: 3.6,
    P2O5: 21.3,
    K2O: 199.3,
  },
  {
    id: 35,
    city: "Safi",
    coords: [32.345367, -9.110259],
    pH: 7.9,
    MO: 3.4,
    P2O5: 57.3,
    K2O: 182.9,
  },
  {
    id: 36,
    city: "Safi",
    coords: [32.363078, -9.158181],
    pH: 6.9,
    MO: 3.1,
    P2O5: 20.4,
    K2O: 280.8,
  },
  {
    id: 37,
    city: "Safi",
    coords: [32.384882, -9.223322],
    pH: 8.7,
    MO: 1.3,
    P2O5: 59.1,
    K2O: 290.6,
  },
  {
    id: 38,
    city: "Safi",
    coords: [32.27935, -9.186599],
    pH: 8.9,
    MO: 4.2,
    P2O5: 24.2,
    K2O: 191.0,
  },
  {
    id: 39,
    city: "Safi",
    coords: [32.2661, -9.13428],
    pH: 7.6,
    MO: 3.7,
    P2O5: 20.1,
    K2O: 341.9,
  },
  {
    id: 40,
    city: "Safi",
    coords: [32.248679, -9.066989],
    pH: 8.1,
    MO: 3.0,
    P2O5: 35.4,
    K2O: 338.6,
  },
  {
    id: 41,
    city: "Safi",
    coords: [32.238226, -9.012057],
    pH: 7.4,
    MO: 3.6,
    P2O5: 36.1,
    K2O: 264.1,
  },
  {
    id: 42,
    city: "Safi",
    coords: [32.217315, -8.966739],
    pH: 7.3,
    MO: 1.4,
    P2O5: 31.7,
    K2O: 320.4,
  },
  {
    id: 43,
    city: "Safi",
    coords: [32.181291, -8.931033],
    pH: 7.2,
    MO: 2.6,
    P2O5: 31.2,
    K2O: 221.6,
  },
  {
    id: 44,
    city: "Safi",
    coords: [32.143744, -8.862231],
    pH: 8.6,
    MO: 2.7,
    P2O5: 31.5,
    K2O: 200.7,
  },
  {
    id: 45,
    city: "Safi",
    coords: [32.120874, -8.886932],
    pH: 6.5,
    MO: 1.8,
    P2O5: 30.3,
    K2O: 190.5,
  },
  {
    id: 46,
    city: "Safi",
    coords: [32.123641, -8.926127],
    pH: 7.6,
    MO: 1.6,
    P2O5: 17.6,
    K2O: 309.1,
  },
  {
    id: 47,
    city: "Safi",
    coords: [32.130556, -8.983286],
    pH: 8.8,
    MO: 2.3,
    P2O5: 49.0,
    K2O: 307.5,
  },
  {
    id: 48,
    city: "Safi",
    coords: [32.138853, -9.030647],
    pH: 7.1,
    MO: 4.5,
    P2O5: 55.3,
    K2O: 306.7,
  },
  {
    id: 49,
    city: "Safi",
    coords: [32.119851, -9.113073],
    pH: 6.0,
    MO: 3.3,
    P2O5: 60.5,
    K2O: 332.8,
  },
  {
    id: 50,
    city: "Safi",
    coords: [32.126421, -9.143694],
    pH: 8.5,
    MO: 3.7,
    P2O5: 26.7,
    K2O: 203.9,
  },
  {
    id: 51,
    city: "Safi",
    coords: [32.135756, -9.193504],
    pH: 8.0,
    MO: 2.4,
    P2O5: 38.1,
    K2O: 316.3,
  },
  {
    id: 52,
    city: "Safi",
    coords: [32.140942, -9.220859],
    pH: 8.3,
    MO: 1.3,
    P2O5: 33.3,
    K2O: 221.3,
  },
  {
    id: 53,
    city: "Safi",
    coords: [32.14509, -9.255971],
    pH: 6.8,
    MO: 4.3,
    P2O5: 33.0,
    K2O: 328.3,
  },
  {
    id: 54,
    city: "Safi",
    coords: [32.124346, -9.285238],
    pH: 6.0,
    MO: 3.1,
    P2O5: 22.1,
    K2O: 340.7,
  },
  {
    id: 55,
    city: "Safi",
    coords: [32.100831, -9.23951],
    pH: 8.0,
    MO: 2.3,
    P2O5: 15.7,
    K2O: 309.3,
  },
  {
    id: 56,
    city: "Safi",
    coords: [32.089763, -9.177451],
    pH: 8.7,
    MO: 3.8,
    P2O5: 34.9,
    K2O: 325.6,
  },
  {
    id: 57,
    city: "Safi",
    coords: [32.069006, -9.102327],
    pH: 6.2,
    MO: 3.5,
    P2O5: 28.5,
    K2O: 261.2,
  },
  {
    id: 58,
    city: "Safi",
    coords: [32.053782, -9.063132],
    pH: 6.6,
    MO: 4.3,
    P2O5: 55.7,
    K2O: 269.7,
  },
  {
    id: 59,
    city: "Safi",
    coords: [32.03717, -9.017405],
    pH: 8.3,
    MO: 1.3,
    P2O5: 57.8,
    K2O: 256.4,
  },
  {
    id: 60,
    city: "Safi",
    coords: [32.026094, -8.960245],
    pH: 7.9,
    MO: 4.0,
    P2O5: 52.0,
    K2O: 336.1,
  },
  {
    id: 61,
    city: "Safi",
    coords: [32.009478, -8.893287],
    pH: 8.4,
    MO: 2.5,
    P2O5: 40.9,
    K2O: 234.4,
  },
  {
    id: 62,
    city: "Safi",
    coords: [31.973465, -8.891654],
    pH: 8.5,
    MO: 2.8,
    P2O5: 59.7,
    K2O: 222.7,
  },
  {
    id: 63,
    city: "Safi",
    coords: [31.976236, -8.935748],
    pH: 8.7,
    MO: 2.2,
    P2O5: 49.8,
    K2O: 350.5,
  },
  {
    id: 64,
    city: "Safi",
    coords: [31.980392, -8.989642],
    pH: 7.0,
    MO: 4.1,
    P2O5: 34.3,
    K2O: 201.1,
  },
  {
    id: 65,
    city: "Safi",
    coords: [31.990088, -9.054967],
    pH: 7.7,
    MO: 4.2,
    P2O5: 20.2,
    K2O: 258.5,
  },
  {
    id: 66,
    city: "Safi",
    coords: [31.998399, -9.10396],
    pH: 6.3,
    MO: 4.6,
    P2O5: 30.4,
    K2O: 248.9,
  },
  {
    id: 67,
    city: "Safi",
    coords: [32.009478, -9.154587],
    pH: 6.0,
    MO: 4.6,
    P2O5: 37.2,
    K2O: 216.1,
  },
  {
    id: 68,
    city: "Safi",
    coords: [32.006708, -9.193782],
    pH: 6.5,
    MO: 4.3,
    P2O5: 47.6,
    K2O: 325.7,
  },
  {
    id: 69,
    city: "Safi",
    coords: [32.006708, -9.23951],
    pH: 7.2,
    MO: 4.5,
    P2O5: 33.7,
    K2O: 181.5,
  },
  {
    id: 70,
    city: "Safi",
    coords: [32.009478, -9.290137],
    pH: 7.9,
    MO: 2.7,
    P2O5: 19.4,
    K2O: 302.5,
  },
  {
    id: 71,
    city: "Safi",
    coords: [31.914867, -8.951008],
    pH: 8.2,
    MO: 1.6,
    P2O5: 24.6,
    K2O: 221.4,
  },
  {
    id: 72,
    city: "Safi",
    coords: [31.925582, -9.01704],
    pH: 7.3,
    MO: 3.8,
    P2O5: 48.4,
    K2O: 342.4,
  },
  {
    id: 73,
    city: "Safi",
    coords: [31.928878, -9.085986],
    pH: 7.0,
    MO: 4.4,
    P2O5: 20.9,
    K2O: 188.5,
  },
  {
    id: 74,
    city: "Safi",
    coords: [31.94124, -9.143278],
    pH: 6.9,
    MO: 1.8,
    P2O5: 41.4,
    K2O: 243.4,
  },
  {
    id: 75,
    city: "Safi",
    coords: [31.947832, -9.19086],
    pH: 7.0,
    MO: 1.7,
    P2O5: 26.0,
    K2O: 288.8,
  },
  {
    id: 76,
    city: "Safi",
    coords: [31.944536, -9.2365],
    pH: 8.3,
    MO: 1.6,
    P2O5: 44.1,
    K2O: 221.3,
  },
  {
    id: 77,
    city: "Safi",
    coords: [31.950304, -9.292822],
    pH: 8.3,
    MO: 2.1,
    P2O5: 18.9,
    K2O: 211.1,
  },
  {
    id: 78,
    city: "Safi",
    coords: [31.952776, -9.348173],
    pH: 8.5,
    MO: 2.5,
    P2O5: 30.2,
    K2O: 182.8,
  },
  {
    id: 79,
    city: "Safi",
    coords: [31.960191, -9.403523],
    pH: 8.1,
    MO: 1.9,
    P2O5: 43.9,
    K2O: 342.3,
  },
  {
    id: 80,
    city: "Safi",
    coords: [31.932999, -9.421002],
    pH: 7.2,
    MO: 1.1,
    P2O5: 53.2,
    K2O: 281.2,
  },
  {
    id: 81,
    city: "Safi",
    coords: [31.91734, -9.37342],
    pH: 7.5,
    MO: 3.2,
    P2O5: 34.9,
    K2O: 217.9,
  },
  {
    id: 82,
    city: "Safi",
    coords: [31.900853, -9.351086],
    pH: 6.3,
    MO: 3.2,
    P2O5: 46.9,
    K2O: 337.0,
  },
  {
    id: 83,
    city: "Safi",
    coords: [31.914043, -9.279227],
    pH: 6.7,
    MO: 4.6,
    P2O5: 46.8,
    K2O: 335.0,
  },
  {
    id: 84,
    city: "Safi",
    coords: [31.943712, -9.205426],
    pH: 8.5,
    MO: 4.0,
    P2O5: 31.0,
    K2O: 296.9,
  },
  {
    id: 85,
    city: "Safi",
    coords: [31.940416, -9.171439],
    pH: 7.9,
    MO: 2.1,
    P2O5: 57.1,
    K2O: 297.8,
  },
  {
    id: 86,
    city: "Safi",
    coords: [31.920637, -9.143278],
    pH: 6.8,
    MO: 1.7,
    P2O5: 55.5,
    K2O: 257.2,
  },
  {
    id: 87,
    city: "Safi",
    coords: [31.907448, -9.112204],
    pH: 8.5,
    MO: 4.3,
    P2O5: 31.9,
    K2O: 192.6,
  },
  {
    id: 88,
    city: "Safi",
    coords: [31.912394, -9.063651],
    pH: 7.4,
    MO: 1.9,
    P2O5: 35.4,
    K2O: 304.4,
  },
  {
    id: 89,
    city: "Safi",
    coords: [31.893921, -8.946374],
    pH: 6.8,
    MO: 1.0,
    P2O5: 28.9,
    K2O: 308.4,
  },
  {
    id: 90,
    city: "Safi",
    coords: [31.888674, -9.008859],
    pH: 8.9,
    MO: 3.2,
    P2O5: 45.0,
    K2O: 221.5,
  },
  {
    id: 91,
    city: "Safi",
    coords: [31.865315, -9.008938],
    pH: 6.4,
    MO: 4.4,
    P2O5: 36.6,
    K2O: 348.0,
  },
  {
    id: 92,
    city: "Safi",
    coords: [31.862766, -8.980252],
    pH: 8.5,
    MO: 4.4,
    P2O5: 50.9,
    K2O: 194.0,
  },
  {
    id: 93,
    city: "Safi",
    coords: [31.863332, -8.951234],
    pH: 6.9,
    MO: 3.7,
    P2O5: 26.4,
    K2O: 180.8,
  },
  {
    id: 94,
    city: "Safi",
    coords: [31.839816, -8.960239],
    pH: 8.2,
    MO: 2.6,
    P2O5: 21.5,
    K2O: 301.4,
  },
  {
    id: 95,
    city: "Safi",
    coords: [31.840383, -8.993261],
    pH: 8.7,
    MO: 3.8,
    P2O5: 44.1,
    K2O: 310.6,
  },
  {
    id: 96,
    city: "Safi",
    coords: [31.8401, -9.014608],
    pH: 7.3,
    MO: 3.5,
    P2O5: 50.7,
    K2O: 348.2,
  },
  {
    id: 97,
    city: "Safi",
    coords: [31.826214, -9.024948],
    pH: 6.9,
    MO: 3.8,
    P2O5: 42.3,
    K2O: 329.5,
  },
  {
    id: 98,
    city: "Safi",
    coords: [31.819412, -9.000599],
    pH: 6.4,
    MO: 1.5,
    P2O5: 32.7,
    K2O: 346.6,
  },
  {
    id: 99,
    city: "Safi",
    coords: [31.80524, -8.979585],
    pH: 7.2,
    MO: 2.5,
    P2O5: 21.1,
    K2O: 252.7,
  },
  {
    id: 100,
    city: "Safi",
    coords: [31.789365, -8.999598],
    pH: 8.1,
    MO: 1.4,
    P2O5: 17.6,
    K2O: 253.1,
  },
];

var markers = [];
var currentMarker = null; // Track the currently active marker

data.forEach(function (point, index) {
  var marker = L.marker(point.coords)
    .bindPopup(
      `<div class='popup'>
        <strong>Informations du sol:</strong>
        <div>
          <span>PH </span>
          <span>:</span>
          <span>${point.pH}</span>
        </div>
        <div>
          <span>MO </span>
          <span>:</span>
          <span>${point.MO}</span>
        </div>
        <div>
          <span>P2O5 </span>
          <span>:</span>
          <span>${point.P2O5}</span>
        </div>
        <div>
          <span>K2O </span>
          <span>:</span>
          <span>${point.K2O}</span>
        </div>
      </div>`
    )
    .addTo(map);

  // Set opacity to 0.1 for all markers except the first one
  if (index !== 0) {
    marker.setOpacity(0.2);
  }

  // Add event listeners to change opacity on hover and click
  marker.on("mouseover", function () {
    marker.setOpacity(1);
  });
  marker.on("mouseout", function () {
    if (!marker.isPopupOpen() && marker !== currentMarker) {
      marker.setOpacity(0.2);
    }
  });
  marker.on("click", function () {
    updateMarkerDetails(point);
    if (currentMarker && currentMarker !== marker) {
      currentMarker.setOpacity(0.2); // Reset the opacity of the previously clicked marker
    }
    marker.setOpacity(1); // Set opacity of the currently clicked marker
    currentMarker = marker; // Update the current marker
  });

  markers.push(marker.getLatLng());
});

// Fit map bounds to markers
if (markers.length > 0) {
  var markerBounds = L.latLngBounds(markers);
  map.fitBounds(markerBounds);
}

function updateMarkerDetails(point) {
  var markerInfo = document.getElementById("marker-info");
  markerInfo.innerHTML = `
  <h2>Information du sol :</h2>
  <div>
  <span>Lat/Lng</span>
    <span>:</span>
    <span>${point.coords[0]} / ${point.coords[1]}</span>
  </div>
  <div>
    <span>PH </span>
    <span>:</span>
    <span>${point.pH}</span>
  </div>
  <div>
    <span>Matiere Organique </span>
    <span>:</span>
    <span>${point.MO}</span>
  </div>
  <div>
    <span>Oxyde de Phosphore </span>
    <span>:</span>
    <span>${point.P2O5}</span>
  </div>
  <div>
    <span>Oxyde de Potassium </span>
    <span>:</span>
    <span>${point.K2O}</span>
  </div>
`;
}