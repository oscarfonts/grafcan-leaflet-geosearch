//export * from 'leaflet-geosearch'; // Uncommenting this would export all providers - more functionality, bigger bundle

export { default as GeoSearchControl } from 'leaflet-geosearch/lib/leafletControl'; // Export only the leaflet control
export { default as GrafcanProvider } from './grafcanProvider'; // Add our specific provider
