# grafcan-leaflet-geosearch

Grafcan search provider on top of https://github.com/smeijer/leaflet-geosearch

## Demo

http://fonts.cat/grafcan-leaflet-geosearch/dist/

## Usage

You will need two files (`js` and `css`) from the `dist/` folder in this repo.

Include Leaflet and this library in your html dependencies:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>

<link rel="stylesheet" href="dist/grafcan-leaflet-geosearch.css" />
<script src="dist/grafcan-leaflet-geosearch.js"></script>
```

Instantiate map and control:

```javascript
var map = L.map('map').setView([28, -16], 8);

new GeoSearch.GeoSearchControl({
  provider: new GeoSearch.GrafcanProvider()
}).addTo(map);
```

### Configuration options

The GeoSearchControl has many options:

```javascript
new GeoSearchControl({
  provider: myProvider,           // required!
  position: 'topleft',            // optional: topleft|topright|bottomleft|bottomright' - default 'topleft'
  style: 'button',                // optional: bar|button  - default button
  autoComplete: true,             // optional: true|false  - default true
  autoCompleteDelay: 250,         // optional: number      - default 250
  showMarker: true,               // optional: true|false  - default true
  showPopup: false,               // optional: true|false  - default false
  marker: {                       // optional: L.Marker    - default L.Icon.Default
    icon: new L.Icon.Default(),
    draggable: false
  },
  maxMarkers: 1,                  // optional: number      - default 1
  retainZoomLevel: false,         // optional: true|false  - default false
  animateZoom: true,              // optional: true|false  - default true
  autoClose: false                // optional: true|false  - default false
}).addTo(map);
```

For details see https://github.com/smeijer/leaflet-geosearch#geosearchcontrol


## Development tasks

* `npm start` to run a debug server (watch, rebuild, autoreload)
* `npm test` to run the tests
* `npm run build` to generate the bundle in `dist/grafcan-leaflet-geosearch.js`
