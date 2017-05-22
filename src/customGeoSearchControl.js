import {default as GeoSearchControl} from 'leaflet-geosearch/lib/leafletControl';
import {default as GeoSearchElement} from 'leaflet-geosearch/lib/searchElement';
import { createElement } from 'leaflet-geosearch/lib/domUtils';
import ResultList from 'leaflet-geosearch/lib/resultList';
import debounce from 'lodash.debounce';

import { ARROW_UP_KEY, ARROW_DOWN_KEY, ENTER_KEY } from 'leaflet-geosearch/lib/constants';

var defaultOptions = function defaultOptions() {
  return {
    position: 'topleft',
    style: 'button',
    showMarker: true,
    showPopup: false,
    marker: {
      icon: new L.Icon.Default(),
      draggable: false
    },
    maxMarkers: 1,
    retainZoomLevel: false,
    animateZoom: true,
    searchLabel: 'Enter address',
    notFoundMessage: 'Sorry, that address could not be found.',
    messageHideDelay: 3000,
    zoomLevel: 18,
    classNames: {
      container: 'leaflet-bar leaflet-control leaflet-control-geosearch',
      button: 'leaflet-bar-part leaflet-bar-part-single',
      msgbox: 'leaflet-bar message',
      form: '',
      input: ''
    },
    autoComplete: true,
    autoCompleteDelay: 250,
    autoClose: false
  };
};

let Control = Object.assign(Object.create(GeoSearchControl()), {
    initialize: function (options) {
        this.markers = new L.FeatureGroup();

        this.options = Object.assign({}, defaultOptions(), options);

        const {style, classNames, searchLabel, autoComplete, autoCompleteDelay} = this.options;
        if (style !== 'button') {
            this.options.classNames.container += ` ${options.style}`;
        }

        this.searchElement = new GeoSearchElement(Object.assign({}, this.options, {handleSubmit: query => this.onSubmit(query)}));

        const {container, form, input} = this.searchElement.elements;
        container.addEventListener('dblclick', (e) => {
            e.stopPropagation();
        });

        const button = createElement('a', classNames.button, container);
        button.title = searchLabel;
        button.href = '#';

        button.addEventListener('click', (e) => {
            this.onClick(e);
        }, false);

        if (autoComplete) {
            this.resultList = new ResultList({
                handleClick: ({result}) => {
                    input.value = result.label;
                    this.showResult(result); // FIXED
                },
            });

            form.appendChild(this.resultList.elements.container);

            input.addEventListener('keyup',
                debounce(e => this.autoSearch(e), autoCompleteDelay), true);
            input.addEventListener('keydown', e => this.selectResult(e), true);
            input.addEventListener('keydown', e => this.clearResults(e), true);
        }

        this.elements = {button};
    },
    selectResult: function (event) {
        if (![ARROW_DOWN_KEY, ARROW_UP_KEY, ENTER_KEY].includes(event.keyCode)) {  // FIXED
            return;
        }

        event.preventDefault();
        const {input} = this.searchElement.elements;

        const list = this.resultList;
        const max = this.resultList.count() - 1;

        // eslint-disable-next-line no-bitwise
        var next = event.code === 'ArrowDown' ? ~~list.selected + 1 : event.code === 'ArrowUp' ? ~~list.selected - 1 : ~~list.selected; // FIXED
        // eslint-disable-next-line no-nested-ternary
        const idx = (next < 0) ? max : (next > max) ? 0 : next;

        const item = list.select(idx);
        input.value = item.label;

        if (event.keyCode === ENTER_KEY) {
          this.showResult(item);  // FIXED
        }

    }
});

function CustomGeoSearchControl() {
    if (!L || !L.Control || !L.Control.extend) {
        throw new Error('Leaflet must be loaded before instantiating the GeoSearch control');
    }

    var LControl = L.Control.extend(Control);

    for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
        options[_key] = arguments[_key];
    }

    return new (Function.prototype.bind.apply(LControl, [null].concat(options)))();
}

export default CustomGeoSearchControl;
