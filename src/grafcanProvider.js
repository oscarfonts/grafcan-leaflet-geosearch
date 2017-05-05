import BaseProvider from 'leaflet-geosearch/lib/providers/provider';

import XML from './XML';

export default class Provider extends BaseProvider {
  endpoint({ query, protocol } = {}) {
    const { params } = this.options;

    const paramString = this.getParamString({
      ...params,
      start: 0,
      limit: 20,
      texto: query,
    });

    //return `${protocol}//visor.grafcan.es/busquedas/toponimo/?${paramString}`;
    return `${protocol}//demo.fonts.cat/grafcan/?${paramString}`;
  }

  search(_ref) { // Overwrite search method, base class expects a JSON response, we have an XML response
      return new Promise(function ($return, $error) {
          var query, protocol, url, request, json;
          query = _ref.query;

          protocol = ~location.protocol.indexOf('http') ? location.protocol : 'https:';
          url = this.endpoint({query: query, protocol: protocol});

          return fetch(url).then(function ($await_1) {
              request = $await_1;
              const response = request.text().then((xml) => XML.read(xml).rows); // This is the added processing
              return response.then(function ($await_2) {
                  json = $await_2;
                  return $return(this.parse({data: json}));
              }.$asyncbind(this, $error), $error);
          }.$asyncbind(this, $error), $error);
      }.$asyncbind(this));
  }

  parse({ data }) {
    const results = 'row' in data ? [...data.row] : [];
    console.log(results.length);
    return results.map(this.removeCDATA).map(r => ({
      x: parseFloat(r.x),
      y: parseFloat(r.y),
      label: r.nombre,
      bounds: [
        [parseFloat(r.y), parseFloat(r.x)], // s, w
        [parseFloat(r.y), parseFloat(r.x)], // n, e
      ],
      raw: r,
    }));
  }

  removeCDATA(obj) {
      return Object.assign({}, ...Object.keys(obj).map(k => ({[k]: '#cdata' in obj[k] ? obj[k]['#cdata'] : obj[k]})));
  }
}
