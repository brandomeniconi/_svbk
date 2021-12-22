/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@react-google-maps/api/dist/esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@react-google-maps/api/dist/esm.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Autocomplete": function() { return /* binding */ Autocomplete; },
/* harmony export */   "BicyclingLayer": function() { return /* binding */ BicyclingLayer; },
/* harmony export */   "Circle": function() { return /* binding */ Circle; },
/* harmony export */   "Data": function() { return /* binding */ Data; },
/* harmony export */   "DirectionsRenderer": function() { return /* binding */ DirectionsRenderer; },
/* harmony export */   "DirectionsService": function() { return /* binding */ DirectionsService; },
/* harmony export */   "DistanceMatrixService": function() { return /* binding */ DistanceMatrixService; },
/* harmony export */   "DrawingManager": function() { return /* binding */ DrawingManager; },
/* harmony export */   "GoogleMap": function() { return /* binding */ GoogleMap; },
/* harmony export */   "GoogleMapsMarkerClusterer": function() { return /* binding */ index_esm; },
/* harmony export */   "GoogleMarkerClusterer": function() { return /* binding */ GoogleMarkerClusterer; },
/* harmony export */   "GroundOverlay": function() { return /* binding */ GroundOverlay; },
/* harmony export */   "HeatmapLayer": function() { return /* binding */ HeatmapLayer; },
/* harmony export */   "InfoBox": function() { return /* binding */ InfoBoxComponent; },
/* harmony export */   "InfoWindow": function() { return /* binding */ InfoWindow; },
/* harmony export */   "KmlLayer": function() { return /* binding */ KmlLayer; },
/* harmony export */   "LoadScript": function() { return /* binding */ LoadScript; },
/* harmony export */   "LoadScriptNext": function() { return /* binding */ LoadScriptNext$1; },
/* harmony export */   "MapContext": function() { return /* binding */ MapContext; },
/* harmony export */   "Marker": function() { return /* binding */ Marker; },
/* harmony export */   "MarkerClusterer": function() { return /* binding */ ClustererComponent; },
/* harmony export */   "OverlayView": function() { return /* binding */ OverlayView; },
/* harmony export */   "Polygon": function() { return /* binding */ Polygon; },
/* harmony export */   "Polyline": function() { return /* binding */ Polyline; },
/* harmony export */   "Rectangle": function() { return /* binding */ Rectangle; },
/* harmony export */   "StandaloneSearchBox": function() { return /* binding */ StandaloneSearchBox; },
/* harmony export */   "StreetViewPanorama": function() { return /* binding */ StreetViewPanorama; },
/* harmony export */   "StreetViewService": function() { return /* binding */ StreetViewService; },
/* harmony export */   "TrafficLayer": function() { return /* binding */ TrafficLayer; },
/* harmony export */   "TransitLayer": function() { return /* binding */ TransitLayer; },
/* harmony export */   "useGoogleMap": function() { return /* binding */ useGoogleMap; },
/* harmony export */   "useJsApiLoader": function() { return /* binding */ useJsApiLoader; },
/* harmony export */   "useLoadScript": function() { return /* binding */ useLoadScript; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);




var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "development";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant;

const MapContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function useGoogleMap() {
    invariant_1(!!react__WEBPACK_IMPORTED_MODULE_0__.useContext, 'useGoogleMap is React hook and requires React version 16.8+');
    const map = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MapContext);
    invariant_1(!!map, 'useGoogleMap needs a GoogleMap available up in the tree');
    return map;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reduce = (obj, fn, acc) => {
    return Object.keys(obj).reduce(function reducer(newAcc, key) {
        return fn(newAcc, obj[key], key);
    }, acc);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forEach(obj, fn) {
    Object.keys(obj).forEach(function iterator(key) {
        return fn(obj[key], key);
    });
}

/* global google */
const applyUpdaterToNextProps = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
updaterMap, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
prevProps, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
nextProps, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
instance
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const map = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const iter = (fn, key) => {
        const nextValue = nextProps[key];
        if (nextValue !== prevProps[key]) {
            map[key] = nextValue;
            fn(instance, nextValue);
        }
    };
    forEach(updaterMap, iter);
    return map;
};
function registerEvents(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
instance, eventMap) {
    const registeredList = reduce(eventMap, function reducer(acc, googleEventName, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onEventName) {
        if (typeof props[onEventName] === 'function') {
            acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]));
        }
        return acc;
    }, []);
    return registeredList;
}
function unregisterEvent(registered) {
    google.maps.event.removeListener(registered);
}
function unregisterEvents(events = []) {
    events.forEach(unregisterEvent);
}
function applyUpdatersToPropsAndRegisterEvents({ updaterMap, eventMap, prevProps, nextProps, instance, }) {
    const registeredEvents = registerEvents(nextProps, instance, eventMap);
    applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance);
    return registeredEvents;
}

const eventMap$i = {
    onDblClick: 'dblclick',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMapTypeIdChanged: 'maptypeid_changed',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseDown: 'mousedown',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
    onTilesLoaded: 'tilesloaded',
    onBoundsChanged: 'bounds_changed',
    onCenterChanged: 'center_changed',
    onClick: 'click',
    onDrag: 'drag',
    onHeadingChanged: 'heading_changed',
    onIdle: 'idle',
    onProjectionChanged: 'projection_changed',
    onResize: 'resize',
    onTiltChanged: 'tilt_changed',
    onZoomChanged: 'zoom_changed',
};
const updaterMap$i = {
    extraMapTypes(map, extra) {
        extra.forEach(function forEachExtra(it, i) {
            map.mapTypes.set(String(i), it);
        });
    },
    center(map, center) {
        map.setCenter(center);
    },
    clickableIcons(map, clickable) {
        map.setClickableIcons(clickable);
    },
    heading(map, heading) {
        map.setHeading(heading);
    },
    mapTypeId(map, mapTypeId) {
        map.setMapTypeId(mapTypeId);
    },
    options(map, options) {
        map.setOptions(options);
    },
    streetView(map, streetView) {
        map.setStreetView(streetView);
    },
    tilt(map, tilt) {
        map.setTilt(tilt);
    },
    zoom(map, zoom) {
        map.setZoom(zoom);
    },
};
// function GoogleMapFunctional({ children, options, id, mapContainerStyle, center, clickableIcons, extraMapTypes, heading, mapContainerClassName, mapTypeId, onBoundsChanged, onCenterChanged, onClick, onDblClick, onDrag, onDragEnd, onDragStart, onHeadingChanged, onIdle, onProjectionChanged, onResize, onTiltChanged, onLoad }: GoogleMapProps): JSX.Element {
//   const [map, setMap] = React.useState<google.maps.Map | null>(null)
//   const ref = React.useRef<HTMLDivElement | null>(null)
//   const getInstance = React.useCallback(() => {
//     if (ref.current === null) {
//       return null
//     }
//     return new google.maps.Map(ref.current, options)
//   }, [options])
//   React.useEffect(() => {
//   }, [])
//   const panTo = React.useCallback((latLng: google.maps.LatLng | google.maps.LatLngLiteral): void => {
//     const map = getInstance()
//     if (map) {
//       map.panTo(latLng)
//     }
//   }, [])
//   React.useEffect(() => {
//     const map = getInstance()
//   }, [])
//   return (
//     <div
//         id={id}
//         ref={ref}
//         style={mapContainerStyle}
//         className={mapContainerClassName}
//       >
//         <MapContext.Provider value={map}>
//           {map !== null ? children : <></>}
//         </MapContext.Provider>
//       </div>
//   )
// }
class GoogleMap extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            map: null,
        };
        this.registeredEvents = [];
        this.mapRef = null;
        this.getInstance = () => {
            if (this.mapRef === null) {
                return null;
            }
            return new google.maps.Map(this.mapRef, this.props.options);
        };
        this.panTo = (latLng) => {
            const map = this.getInstance();
            if (map) {
                map.panTo(latLng);
            }
        };
        this.setMapCallback = () => {
            if (this.state.map !== null) {
                if (this.props.onLoad) {
                    this.props.onLoad(this.state.map);
                }
            }
        };
        this.getRef = (ref) => {
            this.mapRef = ref;
        };
    }
    componentDidMount() {
        const map = this.getInstance();
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$i,
            eventMap: eventMap$i,
            prevProps: {},
            nextProps: this.props,
            instance: map,
        });
        this.setState(function setMap() {
            return {
                map,
            };
        }, this.setMapCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.map !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$i,
                eventMap: eventMap$i,
                prevProps,
                nextProps: this.props,
                instance: this.state.map,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.map !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.map);
            }
            unregisterEvents(this.registeredEvents);
        }
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: this.props.id, ref: this.getRef, style: this.props.mapContainerStyle, className: this.props.mapContainerClassName },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(MapContext.Provider, { value: this.state.map }, this.state.map !== null ? this.props.children : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null))));
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest$1(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const isBrowser = typeof document !== 'undefined';

const injectScript = ({ url, id, nonce }) => {
    if (!isBrowser) {
        return Promise.reject(new Error('document is undefined'));
    }
    return new Promise(function injectScriptCallback(resolve, reject) {
        const existingScript = document.getElementById(id);
        const windowWithGoogleMap = window;
        if (existingScript) {
            // Same script id/url: keep same script
            const dataStateAttribute = existingScript.getAttribute('data-state');
            if (existingScript.src === url && dataStateAttribute !== 'error') {
                if (dataStateAttribute === 'ready') {
                    return resolve(id);
                }
                else {
                    const originalInitMap = windowWithGoogleMap.initMap;
                    const originalErrorCallback = existingScript.onerror;
                    windowWithGoogleMap.initMap = function initMap() {
                        if (originalInitMap) {
                            originalInitMap();
                        }
                        resolve(id);
                    };
                    existingScript.onerror = function (err) {
                        if (originalErrorCallback) {
                            originalErrorCallback(err);
                        }
                        reject(err);
                    };
                    return;
                }
            }
            // Same script id, but either
            // 1. requested URL is different
            // 2. script failed to load
            else {
                existingScript.remove();
            }
        }
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.id = id;
        script.async = true;
        script.nonce = nonce;
        script.onerror = function onerror(err) {
            script.setAttribute('data-state', 'error');
            reject(err);
        };
        windowWithGoogleMap.initMap = function onload() {
            script.setAttribute('data-state', 'ready');
            resolve(id);
        };
        document.head.appendChild(script);
    }).catch(err => {
        console.error('injectScript error: ', err);
        throw err;
    });
};

const isRobotoStyle = (element) => {
    // roboto font download
    if (element.href &&
        element.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') ===
            0) {
        return true;
    }
    // roboto style elements
    if (element.tagName.toLowerCase() === 'style' &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        element.styleSheet &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        element.styleSheet.cssText &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        element.styleSheet.cssText.replace('\r\n', '').indexOf('.gm-style') === 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        element.styleSheet.cssText = '';
        return true;
    }
    // roboto style elements for other browsers
    if (element.tagName.toLowerCase() === 'style' &&
        element.innerHTML &&
        element.innerHTML.replace('\r\n', '').indexOf('.gm-style') === 0) {
        element.innerHTML = '';
        return true;
    }
    // when google tries to add empty style
    if (element.tagName.toLowerCase() === 'style' &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        !element.styleSheet &&
        !element.innerHTML) {
        return true;
    }
    return false;
};
// Preventing the Google Maps library from downloading an extra font
const preventGoogleFonts = () => {
    // we override these methods only for one particular head element
    // default methods for other elements are not affected
    const head = document.getElementsByTagName('head')[0];
    const trueInsertBefore = head.insertBefore.bind(head);
    // TODO: adding return before reflect solves the TS issue
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    head.insertBefore = function insertBefore(newElement, referenceElement) {
        if (!isRobotoStyle(newElement)) {
            Reflect.apply(trueInsertBefore, head, [newElement, referenceElement]);
        }
    };
    const trueAppend = head.appendChild.bind(head);
    // TODO: adding return before reflect solves the TS issue
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    head.appendChild = function appendChild(textNode) {
        if (!isRobotoStyle(textNode)) {
            Reflect.apply(trueAppend, head, [textNode]);
        }
    };
};

function makeLoadScriptUrl({ googleMapsApiKey, googleMapsClientId, version = 'weekly', language, region, libraries, channel, mapIds }) {
    const params = [];
    invariant_1((googleMapsApiKey && googleMapsClientId) || !(googleMapsApiKey && googleMapsClientId), 'You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time.');
    if (googleMapsApiKey) {
        params.push(`key=${googleMapsApiKey}`);
    }
    else if (googleMapsClientId) {
        params.push(`client=${googleMapsClientId}`);
    }
    if (version) {
        params.push(`v=${version}`);
    }
    if (language) {
        params.push(`language=${language}`);
    }
    if (region) {
        params.push(`region=${region}`);
    }
    if (libraries && libraries.length) {
        params.push(`libraries=${libraries.sort().join(',')}`);
    }
    if (channel) {
        params.push(`channel=${channel}`);
    }
    if (mapIds && mapIds.length) {
        params.push(`map_ids=${mapIds.join(',')}`);
    }
    params.push('callback=initMap');
    return `https://maps.googleapis.com/maps/api/js?${params.join('&')}`;
}

let cleaningUp = false;
function DefaultLoadingElement() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, `Loading...`);
}
const defaultLoadScriptProps = {
    id: 'script-loader',
    version: 'weekly',
};
class LoadScript extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.check = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        this.state = {
            loaded: false,
        };
        this.cleanupCallback = () => {
            // @ts-ignore
            delete window.google.maps;
            this.injectScript();
        };
        this.isCleaningUp = () => __awaiter(this, void 0, void 0, function* () {
            function promiseCallback(resolve) {
                if (!cleaningUp) {
                    resolve();
                }
                else {
                    if (isBrowser) {
                        const timer = window.setInterval(function interval() {
                            if (!cleaningUp) {
                                window.clearInterval(timer);
                                resolve();
                            }
                        }, 1);
                    }
                }
                return;
            }
            return new Promise(promiseCallback);
        });
        this.cleanup = () => {
            cleaningUp = true;
            const script = document.getElementById(this.props.id);
            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
            Array.prototype.slice
                .call(document.getElementsByTagName('script'))
                .filter(function filter(script) {
                return typeof script.src === 'string' && script.src.includes('maps.googleapis');
            })
                .forEach(function forEach(script) {
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            });
            Array.prototype.slice
                .call(document.getElementsByTagName('link'))
                .filter(function filter(link) {
                return (link.href === 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans');
            })
                .forEach(function forEach(link) {
                if (link.parentNode) {
                    link.parentNode.removeChild(link);
                }
            });
            Array.prototype.slice
                .call(document.getElementsByTagName('style'))
                .filter(function filter(style) {
                return (style.innerText !== undefined &&
                    style.innerText.length > 0 &&
                    style.innerText.includes('.gm-'));
            })
                .forEach(function forEach(style) {
                if (style.parentNode) {
                    style.parentNode.removeChild(style);
                }
            });
        };
        this.injectScript = () => {
            if (this.props.preventGoogleFontsLoading) {
                preventGoogleFonts();
            }
            invariant_1(!!this.props.id, 'LoadScript requires "id" prop to be a string: %s', this.props.id);
            const injectScriptOptions = {
                id: this.props.id,
                nonce: this.props.nonce,
                url: makeLoadScriptUrl(this.props),
            };
            injectScript(injectScriptOptions)
                .then(() => {
                if (this.props.onLoad) {
                    this.props.onLoad();
                }
                this.setState(function setLoaded() {
                    return {
                        loaded: true,
                    };
                });
                return;
            })
                .catch(err => {
                if (this.props.onError) {
                    this.props.onError(err);
                }
                console.error(`
          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (${this
                    .props.googleMapsApiKey || '-'}) or Client ID (${this.props.googleMapsClientId ||
                    '-'}) to <LoadScript />
          Otherwise it is a Network issue.
        `);
            });
        };
    }
    componentDidMount() {
        if (isBrowser) {
            if (window.google && window.google.maps && !cleaningUp) {
                console.error('google api is already presented');
                return;
            }
            this.isCleaningUp()
                .then(this.injectScript)
                .catch(function error(err) {
                console.error('Error at injecting script after cleaning up: ', err);
            });
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.libraries !== prevProps.libraries) {
            console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
        }
        if (isBrowser && prevProps.language !== this.props.language) {
            this.cleanup();
            // TODO: refactor to use gDSFP maybe... wait for hooks refactoring.
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState(function setLoaded() {
                return {
                    loaded: false,
                };
            }, this.cleanupCallback);
        }
    }
    componentWillUnmount() {
        if (isBrowser) {
            this.cleanup();
            const timeoutCallback = () => {
                if (!this.check.current) {
                    // @ts-ignore
                    delete window.google;
                    cleaningUp = false;
                }
            };
            window.setTimeout(timeoutCallback, 1);
            if (this.props.onUnmount) {
                this.props.onUnmount();
            }
        }
    }
    render() {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.check }),
            this.state.loaded
                ? this.props.children
                : this.props.loadingElement || react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultLoadingElement, null)));
    }
}
LoadScript.defaultProps = defaultLoadScriptProps;

/* eslint-disable filenames/match-regex */
let previouslyLoadedUrl;
function useLoadScript({ id = defaultLoadScriptProps.id, version = defaultLoadScriptProps.version, nonce, googleMapsApiKey, googleMapsClientId, language, region, libraries, preventGoogleFontsLoading, channel, mapIds, }) {
    const isMounted = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const [isLoaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [loadError, setLoadError] = react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function trackMountedState() {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function applyPreventGoogleFonts() {
        if (isBrowser && preventGoogleFontsLoading) {
            preventGoogleFonts();
        }
    }, [preventGoogleFontsLoading]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function validateLoadedState() {
        if (isLoaded) {
            invariant_1(!!window.google, 'useLoadScript was marked as loaded, but window.google is not present. Something went wrong.');
        }
    }, [isLoaded]);
    const url = makeLoadScriptUrl({
        version,
        googleMapsApiKey,
        googleMapsClientId,
        language,
        region,
        libraries,
        channel,
        mapIds
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function loadScriptAndModifyLoadedState() {
        if (!isBrowser) {
            return;
        }
        function setLoadedIfMounted() {
            if (isMounted.current) {
                setLoaded(true);
                previouslyLoadedUrl = url;
            }
        }
        if (window.google && window.google.maps && previouslyLoadedUrl === url) {
            setLoadedIfMounted();
            return;
        }
        injectScript({ id, url, nonce })
            .then(setLoadedIfMounted)
            .catch(function handleInjectError(err) {
            if (isMounted.current) {
                setLoadError(err);
            }
            console.warn(`
        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (${googleMapsApiKey ||
                '-'}) or Client ID (${googleMapsClientId || '-'})
        Otherwise it is a Network issue.
      `);
            console.error(err);
        });
    }, [id, url, nonce]);
    const prevLibraries = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function checkPerformance() {
        if (prevLibraries.current && libraries !== prevLibraries.current) {
            console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
        }
        prevLibraries.current = libraries;
    }, [libraries]);
    return { isLoaded, loadError, url };
}

const defaultLoadingElement = react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultLoadingElement, null);
function LoadScriptNext(_a) {
    var { loadingElement, onLoad, onError, onUnmount, children } = _a, hookOptions = __rest$1(_a, ["loadingElement", "onLoad", "onError", "onUnmount", "children"]);
    const { isLoaded, loadError } = useLoadScript(hookOptions);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function handleOnLoad() {
        if (isLoaded && typeof onLoad === 'function') {
            onLoad();
        }
    }, [isLoaded, onLoad]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function handleOnError() {
        if (loadError && typeof onError === 'function') {
            onError(loadError);
        }
    }, [loadError, onError]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function handleOnUnmount() {
        return () => {
            if (onUnmount) {
                onUnmount();
            }
        };
    }, [onUnmount]);
    return isLoaded ? children : loadingElement || defaultLoadingElement;
}
var LoadScriptNext$1 = react__WEBPACK_IMPORTED_MODULE_0__.memo(LoadScriptNext);

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID = "__googleMapsScriptId";
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, channel, client, id = DEFAULT_ID, libraries = [], language, region, version, mapIds, nonce, retries = 3, url = "https://maps.googleapis.com/maps/api/js", }) {
        this.CALLBACK = "__googleMapsCallback";
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.version = version;
        this.apiKey = apiKey;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.libraries = libraries;
        this.language = language;
        this.region = region;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.retries = retries;
        this.url = url;
        if (Loader.instance) {
            if (!fastDeepEqual(this.options, Loader.instance.options)) {
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            }
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
        };
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     */
    createUrl() {
        let url = this.url;
        url += `?callback=${this.CALLBACK}`;
        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
            url += `&channel=${this.channel}`;
        }
        if (this.client) {
            url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
            url += `&language=${this.language}`;
        }
        if (this.region) {
            url += `&region=${this.region}`;
        }
        if (this.version) {
            url += `&v=${this.version}`;
        }
        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }
        return url;
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
            script.remove();
        }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     */
    load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve(window.google);
                }
                else {
                    reject(err.error);
                }
            });
        });
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const url = this.createUrl();
        const script = document.createElement("script");
        script.id = this.id;
        script.type = "text/javascript";
        script.src = url;
        script.onerror = this.loadErrorCallback.bind(this);
        script.defer = true;
        script.async = true;
        if (this.nonce) {
            script.nonce = this.nonce;
        }
        document.head.appendChild(script);
    }
    /**
     * Reset the loader state.
     */
    reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) {
            this.reset();
        }
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(() => {
                this.deleteScript();
                this.setScript();
            }, delay);
        }
        else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    setCallback() {
        window.__googleMapsCallback = this.callback.bind(this);
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
            this.callback();
        }
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                    "This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            if (this.loading) ;
            else {
                this.loading = true;
                this.setCallback();
                this.setScript();
            }
        }
    }
}

/* eslint-disable filenames/match-regex */
function useJsApiLoader({ id = defaultLoadScriptProps.id, version = defaultLoadScriptProps.version, nonce, googleMapsApiKey, 
// googleMapsClientId,
language, region, libraries, preventGoogleFontsLoading, 
// channel,
mapIds, }) {
    const isMounted = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const [isLoaded, setLoaded] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [loadError, setLoadError] = react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function trackMountedState() {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    const loader = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function memo() {
        return new Loader({
            id,
            apiKey: googleMapsApiKey,
            version,
            libraries,
            language,
            region,
            mapIds,
            nonce,
        });
    }, [id, googleMapsApiKey, version, libraries, language, region, mapIds, nonce]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function effect() {
        if (isLoaded) {
            return;
        }
        else {
            loader.load().then(function then() {
                if (isMounted.current)
                    setLoaded(true);
            })
                .catch(function onrejected(error) {
                setLoadError(error);
            });
        }
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function applyPreventGoogleFonts() {
        if (isBrowser && preventGoogleFontsLoading) {
            preventGoogleFonts();
        }
    }, [preventGoogleFontsLoading]);
    const prevLibraries = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function effect() {
        if (prevLibraries.current && libraries !== prevLibraries.current) {
            console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
        }
        prevLibraries.current = libraries;
    }, [libraries]);
    return { isLoaded, loadError };
}

const eventMap$h = {};
const updaterMap$h = {
    options(instance, options) {
        instance.setOptions(options);
    },
};
class TrafficLayer extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            trafficLayer: null,
        };
        this.setTrafficLayerCallback = () => {
            if (this.state.trafficLayer !== null) {
                if (this.props.onLoad) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    this.props.onLoad(this.state.trafficLayer);
                }
            }
        };
        this.registeredEvents = [];
    }
    componentDidMount() {
        const trafficLayer = new google.maps.TrafficLayer(Object.assign(Object.assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$h,
            eventMap: eventMap$h,
            prevProps: {},
            nextProps: this.props,
            instance: trafficLayer,
        });
        this.setState(function setTrafficLayer() {
            return {
                trafficLayer,
            };
        }, this.setTrafficLayerCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.trafficLayer !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$h,
                eventMap: eventMap$h,
                prevProps,
                nextProps: this.props,
                instance: this.state.trafficLayer,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.trafficLayer !== null) {
            if (this.props.onUnmount) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                this.props.onUnmount(this.state.trafficLayer);
            }
            unregisterEvents(this.registeredEvents);
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.state.trafficLayer.setMap(null);
        }
    }
    render() {
        return null;
    }
}
TrafficLayer.contextType = MapContext;

class BicyclingLayer extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            bicyclingLayer: null,
        };
        this.setBicyclingLayerCallback = () => {
            if (this.state.bicyclingLayer !== null) {
                // TODO: how is this possibly null if we're doing a null check
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                this.state.bicyclingLayer.setMap(this.context);
                if (this.props.onLoad) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    this.props.onLoad(this.state.bicyclingLayer);
                }
            }
        };
    }
    componentDidMount() {
        const bicyclingLayer = new google.maps.BicyclingLayer();
        this.setState(function setBicyclingLayer() {
            return {
                bicyclingLayer,
            };
        }, this.setBicyclingLayerCallback);
    }
    componentWillUnmount() {
        if (this.state.bicyclingLayer !== null) {
            if (this.props.onUnmount) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                this.props.onUnmount(this.state.bicyclingLayer);
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.state.bicyclingLayer.setMap(null);
        }
    }
    render() {
        return null;
    }
}
BicyclingLayer.contextType = MapContext;

class TransitLayer extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            transitLayer: null,
        };
        this.setTransitLayerCallback = () => {
            if (this.state.transitLayer !== null) {
                // TODO: how is this possibly null if we're doing a null check
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                this.state.transitLayer.setMap(this.context);
                if (this.props.onLoad) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    this.props.onLoad(this.state.transitLayer);
                }
            }
        };
    }
    componentDidMount() {
        const transitLayer = new google.maps.TransitLayer();
        this.setState(function setTransitLayer() {
            return {
                transitLayer,
            };
        }, this.setTransitLayerCallback);
    }
    componentWillUnmount() {
        if (this.state.transitLayer !== null) {
            if (this.props.onUnmount) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                this.props.onUnmount(this.state.transitLayer);
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.state.transitLayer.setMap(null);
        }
    }
    render() {
        return null;
    }
}
TransitLayer.contextType = MapContext;

/* globals google */
const eventMap$g = {
    onCircleComplete: 'circlecomplete',
    onMarkerComplete: 'markercomplete',
    onOverlayComplete: 'overlaycomplete',
    onPolygonComplete: 'polygoncomplete',
    onPolylineComplete: 'polylinecomplete',
    onRectangleComplete: 'rectanglecomplete',
};
const updaterMap$g = {
    drawingMode(instance, drawingMode) {
        instance.setDrawingMode(drawingMode);
    },
    options(instance, options) {
        instance.setOptions(options);
    },
};
class DrawingManager extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor(props) {
        super(props);
        this.registeredEvents = [];
        this.state = {
            drawingManager: null,
        };
        this.setDrawingManagerCallback = () => {
            if (this.state.drawingManager !== null && this.props.onLoad) {
                this.props.onLoad(this.state.drawingManager);
            }
        };
        invariant_1(!!google.maps.drawing, `Did you include prop libraries={['drawing']} in the URL? %s`, google.maps.drawing);
    }
    componentDidMount() {
        const drawingManager = new google.maps.drawing.DrawingManager(Object.assign(Object.assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$g,
            eventMap: eventMap$g,
            prevProps: {},
            nextProps: this.props,
            instance: drawingManager,
        });
        this.setState(function setDrawingManager() {
            return {
                drawingManager,
            };
        }, this.setDrawingManagerCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.drawingManager !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$g,
                eventMap: eventMap$g,
                prevProps,
                nextProps: this.props,
                instance: this.state.drawingManager,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.drawingManager !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.drawingManager);
            }
            unregisterEvents(this.registeredEvents);
            this.state.drawingManager.setMap(null);
        }
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    }
}
DrawingManager.contextType = MapContext;

const eventMap$f = {
    onAnimationChanged: 'animation_changed',
    onClick: 'click',
    onClickableChanged: 'clickable_changed',
    onCursorChanged: 'cursor_changed',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDraggableChanged: 'draggable_changed',
    onDragStart: 'dragstart',
    onFlatChanged: 'flat_changed',
    onIconChanged: 'icon_changed',
    onMouseDown: 'mousedown',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onPositionChanged: 'position_changed',
    onRightClick: 'rightclick',
    onShapeChanged: 'shape_changed',
    onTitleChanged: 'title_changed',
    onVisibleChanged: 'visible_changed',
    onZindexChanged: 'zindex_changed',
};
const updaterMap$f = {
    animation(instance, animation) {
        instance.setAnimation(animation);
    },
    clickable(instance, clickable) {
        instance.setClickable(clickable);
    },
    cursor(instance, cursor) {
        instance.setCursor(cursor);
    },
    draggable(instance, draggable) {
        instance.setDraggable(draggable);
    },
    icon(instance, icon) {
        instance.setIcon(icon);
    },
    label(instance, label) {
        instance.setLabel(label);
    },
    map(instance, map) {
        instance.setMap(map);
    },
    opacity(instance, opacity) {
        instance.setOpacity(opacity);
    },
    options(instance, options) {
        instance.setOptions(options);
    },
    position(instance, position) {
        instance.setPosition(position);
    },
    shape(instance, shape) {
        instance.setShape(shape);
    },
    title(instance, title) {
        instance.setTitle(title);
    },
    visible(instance, visible) {
        instance.setVisible(visible);
    },
    zIndex(instance, zIndex) {
        instance.setZIndex(zIndex);
    },
};
class Marker extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
    }
    componentDidMount() {
        const markerOptions = Object.assign(Object.assign(Object.assign({}, (this.props.options || {})), (this.props.clusterer ? {} : { map: this.context })), { position: this.props.position });
        // Unfortunately we can't just do this in the contstructor, because the
        // `MapContext` might not be filled in yet.
        this.marker = new google.maps.Marker(markerOptions);
        if (this.props.clusterer) {
            this.props.clusterer.addMarker(this.marker, !!this.props.noClustererRedraw);
        }
        else {
            this.marker.setMap(this.context);
        }
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$f,
            eventMap: eventMap$f,
            prevProps: {},
            nextProps: this.props,
            instance: this.marker,
        });
        if (this.props.onLoad) {
            this.props.onLoad(this.marker);
        }
    }
    componentDidUpdate(prevProps) {
        if (this.marker) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$f,
                eventMap: eventMap$f,
                prevProps,
                nextProps: this.props,
                instance: this.marker,
            });
        }
    }
    componentWillUnmount() {
        if (this.marker) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.marker);
            }
            unregisterEvents(this.registeredEvents);
            if (this.props.clusterer) {
                this.props.clusterer.removeMarker(this.marker, !!this.props.noClustererRedraw);
            }
            else {
                this.marker && this.marker.setMap(null);
            }
        }
    }
    render() {
        let children = null;
        if (this.props.children) {
            children = react__WEBPACK_IMPORTED_MODULE_0__.Children.map(this.props.children, child => {
                if (!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
                    return child;
                }
                let elementChild = child;
                return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(elementChild, { anchor: this.marker });
            });
        }
        return children || null;
    }
}
Marker.contextType = MapContext;

var ClusterIcon = /** @class */ (function () {
    function ClusterIcon(cluster, styles) {
        cluster.getClusterer().extend(ClusterIcon, google.maps.OverlayView);
        this.cluster = cluster;
        this.clusterClassName = this.cluster.getClusterer().getClusterClass();
        this.className = this.clusterClassName;
        this.styles = styles;
        this.center = undefined;
        this.div = null;
        this.sums = null;
        this.visible = false;
        this.boundsChangedListener = null;
        this.url = '';
        this.height = 0;
        this.width = 0;
        this.anchorText = [0, 0];
        this.anchorIcon = [0, 0];
        this.textColor = 'black';
        this.textSize = 11;
        this.textDecoration = 'none';
        this.fontWeight = 'bold';
        this.fontStyle = 'normal';
        this.fontFamily = 'Arial,sans-serif';
        this.backgroundPosition = '0 0';
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.setMap(cluster.getMap()); // Note: this causes onAdd to be called
    }
    ClusterIcon.prototype.onAdd = function () {
        var _this = this;
        var cMouseDownInCluster;
        var cDraggingMapByCluster;
        this.div = document.createElement('div');
        this.div.className = this.className;
        if (this.visible) {
            this.show();
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.getPanes().overlayMouseTarget.appendChild(this.div);
        // Fix for Issue 157
        this.boundsChangedListener = google.maps.event.addListener(
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.getMap(), 'boundschanged', function boundsChanged() {
            cDraggingMapByCluster = cMouseDownInCluster;
        });
        google.maps.event.addDomListener(this.div, 'mousedown', function onMouseDown() {
            cMouseDownInCluster = true;
            cDraggingMapByCluster = false;
        });
        // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
        google.maps.event.addDomListener(this.div, 'click', 
        // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
        function (event) {
            cMouseDownInCluster = false;
            if (!cDraggingMapByCluster) {
                var markerClusterer_1 = _this.cluster.getClusterer();
                /**
                 * This event is fired when a cluster marker is clicked.
                 * @name MarkerClusterer#click
                 * @param {Cluster} c The cluster that was clicked.
                 * @event
                 */
                google.maps.event.trigger(markerClusterer_1, 'click', _this.cluster);
                google.maps.event.trigger(markerClusterer_1, 'clusterclick', _this.cluster); // deprecated name
                // The default click handler follows. Disable it by setting
                // the zoomOnClick property to false.
                if (markerClusterer_1.getZoomOnClick()) {
                    // Zoom into the cluster.
                    var maxZoom_1 = markerClusterer_1.getMaxZoom();
                    var bounds_1 = _this.cluster.getBounds();
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    markerClusterer_1.getMap().fitBounds(bounds_1);
                    // There is a fix for Issue 170 here:
                    setTimeout(function timeout() {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        markerClusterer_1.getMap().fitBounds(bounds_1);
                        // Don't zoom beyond the max zoom level
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        if (maxZoom_1 !== null && markerClusterer_1.getMap().getZoom() > maxZoom_1) {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                            // @ts-ignore
                            markerClusterer_1.getMap().setZoom(maxZoom_1 + 1);
                        }
                    }, 100);
                }
                // Prevent event propagation to the map:
                event.cancelBubble = true;
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
            }
        });
        google.maps.event.addDomListener(this.div, 'mouseover', 
        // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
        function () {
            /**
             * This event is fired when the mouse moves over a cluster marker.
             * @name MarkerClusterer#mouseover
             * @param {Cluster} c The cluster that the mouse moved over.
             * @event
             */
            google.maps.event.trigger(_this.cluster.getClusterer(), 'mouseover', _this.cluster);
        });
        // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
        google.maps.event.addDomListener(this.div, 'mouseout', 
        // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
        function () {
            /**
             * This event is fired when the mouse moves out of a cluster marker.
             * @name MarkerClusterer#mouseout
             * @param {Cluster} c The cluster that the mouse moved out of.
             * @event
             */
            google.maps.event.trigger(_this.cluster.getClusterer(), 'mouseout', _this.cluster);
        });
    };
    ClusterIcon.prototype.onRemove = function () {
        if (this.div && this.div.parentNode) {
            this.hide();
            if (this.boundsChangedListener !== null) {
                google.maps.event.removeListener(this.boundsChangedListener);
            }
            google.maps.event.clearInstanceListeners(this.div);
            this.div.parentNode.removeChild(this.div);
            this.div = null;
        }
    };
    ClusterIcon.prototype.draw = function () {
        if (this.visible && this.div !== null && this.center) {
            var _a = this.getPosFromLatLng(this.center), x = _a.x, y = _a.y;
            this.div.style.top = y + 'px';
            this.div.style.left = x + 'px';
        }
    };
    ClusterIcon.prototype.hide = function () {
        if (this.div) {
            this.div.style.display = 'none';
        }
        this.visible = false;
    };
    ClusterIcon.prototype.show = function () {
        if (this.div && this.center) {
            var img = '', divTitle = '';
            // NOTE: values must be specified in px units
            var bp = this.backgroundPosition.split(' ');
            var spriteH = parseInt(bp[0].replace(/^\s+|\s+$/g, ''), 10);
            var spriteV = parseInt(bp[1].replace(/^\s+|\s+$/g, ''), 10);
            var pos = this.getPosFromLatLng(this.center);
            if (this.sums === null || typeof this.sums.title === 'undefined' || this.sums.title === '') {
                divTitle = this.cluster.getClusterer().getTitle();
            }
            else {
                divTitle = this.sums.title;
            }
            this.div.style.cssText = this.createCss(pos);
            img =
                "<img alt='" +
                    divTitle +
                    "' src='" +
                    this.url +
                    "' style='position: absolute; top: " +
                    spriteV +
                    'px; left: ' +
                    spriteH +
                    'px; ';
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            //@ts-ignore
            if (!this.cluster.getClusterer().enableRetinaIcons) {
                img +=
                    'clip: rect(' +
                        -1 * spriteV +
                        'px, ' +
                        (-1 * spriteH + this.width) +
                        'px, ' +
                        (-1 * spriteV + this.height) +
                        'px, ' +
                        -1 * spriteH +
                        'px);';
            }
            img += "'>";
            this.div.innerHTML =
                img +
                    "<div style='" +
                    'position: absolute;' +
                    'top: ' +
                    this.anchorText[0] +
                    'px;' +
                    'left: ' +
                    this.anchorText[1] +
                    'px;' +
                    'color: ' +
                    this.textColor +
                    ';' +
                    'font-size: ' +
                    this.textSize +
                    'px;' +
                    'font-family: ' +
                    this.fontFamily +
                    ';' +
                    'font-weight: ' +
                    this.fontWeight +
                    ';' +
                    'font-style: ' +
                    this.fontStyle +
                    ';' +
                    'text-decoration: ' +
                    this.textDecoration +
                    ';' +
                    'text-align: center;' +
                    'width: ' +
                    this.width +
                    'px;' +
                    'line-height:' +
                    this.height +
                    'px;' +
                    "'>" +
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    this.sums.text +
                    '</div>';
            this.div.title = divTitle;
            this.div.style.display = '';
        }
        this.visible = true;
    };
    ClusterIcon.prototype.useStyle = function (sums) {
        this.sums = sums;
        var styles = this.cluster.getClusterer().getStyles();
        var style = styles[Math.min(styles.length - 1, Math.max(0, sums.index - 1))];
        this.url = style.url;
        this.height = style.height;
        this.width = style.width;
        if (style.className)
            this.className = this.clusterClassName + " " + style.className;
        this.anchorText = style.anchorText || [0, 0];
        this.anchorIcon = style.anchorIcon || [this.height / 2, this.width / 2];
        this.textColor = style.textColor || 'black';
        this.textSize = style.textSize || 11;
        this.textDecoration = style.textDecoration || 'none';
        this.fontWeight = style.fontWeight || 'bold';
        this.fontStyle = style.fontStyle || 'normal';
        this.fontFamily = style.fontFamily || 'Arial,sans-serif';
        this.backgroundPosition = style.backgroundPosition || '0 0';
    };
    ClusterIcon.prototype.setCenter = function (center) {
        this.center = center;
    };
    ClusterIcon.prototype.createCss = function (pos) {
        var style = [];
        style.push('cursor: pointer;');
        style.push('position: absolute; top: ' + pos.y + 'px; left: ' + pos.x + 'px;');
        style.push('width: ' + this.width + 'px; height: ' + this.height + 'px;');
        return style.join('');
    };
    ClusterIcon.prototype.getPosFromLatLng = function (latlng) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        var pos = this.getProjection().fromLatLngToDivPixel(latlng);
        pos.x -= this.anchorIcon[1];
        pos.y -= this.anchorIcon[0];
        // pos.x = pos.x
        // pos.y = pos.y
        return pos;
    };
    return ClusterIcon;
}());

var Cluster$1 = /** @class */ (function () {
    function Cluster(markerClusterer) {
        this.markerClusterer = markerClusterer;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.map = this.markerClusterer.getMap();
        this.gridSize = this.markerClusterer.getGridSize();
        this.minClusterSize = this.markerClusterer.getMinimumClusterSize();
        this.averageCenter = this.markerClusterer.getAverageCenter();
        this.markers = [];
        this.center = undefined;
        this.bounds = null;
        this.clusterIcon = new ClusterIcon(this, this.markerClusterer.getStyles());
    }
    Cluster.prototype.getSize = function () {
        return this.markers.length;
    };
    Cluster.prototype.getMarkers = function () {
        return this.markers;
    };
    Cluster.prototype.getCenter = function () {
        return this.center;
    };
    Cluster.prototype.getMap = function () {
        return this.map;
    };
    Cluster.prototype.getClusterer = function () {
        return this.markerClusterer;
    };
    Cluster.prototype.getBounds = function () {
        var bounds = new google.maps.LatLngBounds(this.center, this.center);
        var markers = this.getMarkers();
        for (var i = 0; i < markers.length; i++) {
            var position = markers[i].getPosition();
            if (position) {
                bounds.extend(position);
            }
        }
        return bounds;
    };
    Cluster.prototype.remove = function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.clusterIcon.setMap(null);
        this.markers = [];
        // @ts-ignore
        delete this.markers;
    };
    Cluster.prototype.addMarker = function (marker) {
        if (this.isMarkerAlreadyAdded(marker)) {
            return false;
        }
        if (!this.center) {
            var position = marker.getPosition();
            if (position) {
                this.center = position;
                this.calculateBounds();
            }
        }
        else {
            if (this.averageCenter) {
                var position = marker.getPosition();
                if (position) {
                    var length_1 = this.markers.length + 1;
                    this.center = new google.maps.LatLng((this.center.lat() * (length_1 - 1) + position.lat()) / length_1, (this.center.lng() * (length_1 - 1) + position.lng()) / length_1);
                    this.calculateBounds();
                }
            }
        }
        marker.isAdded = true;
        this.markers.push(marker);
        var mCount = this.markers.length;
        var maxZoom = this.markerClusterer.getMaxZoom();
        var zoom = this.map.getZoom();
        if (maxZoom !== null && typeof zoom !== 'undefined' && zoom > maxZoom) {
            // Zoomed in past max zoom, so show the marker.
            if (marker.getMap() !== this.map) {
                marker.setMap(this.map);
            }
        }
        else if (mCount < this.minClusterSize) {
            // Min cluster size not reached so show the marker.
            if (marker.getMap() !== this.map) {
                marker.setMap(this.map);
            }
        }
        else if (mCount === this.minClusterSize) {
            // Hide the markers that were showing.
            for (var i = 0; i < mCount; i++) {
                this.markers[i].setMap(null);
            }
        }
        else {
            marker.setMap(null);
        }
        return true;
    };
    Cluster.prototype.isMarkerInClusterBounds = function (marker) {
        if (this.bounds !== null) {
            var position = marker.getPosition();
            if (position) {
                return this.bounds.contains(position);
            }
        }
        return false;
    };
    Cluster.prototype.calculateBounds = function () {
        this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
    };
    Cluster.prototype.updateIcon = function () {
        var mCount = this.markers.length;
        var maxZoom = this.markerClusterer.getMaxZoom();
        var zoom = this.map.getZoom();
        if (maxZoom !== null && typeof zoom !== 'undefined' && zoom > maxZoom) {
            this.clusterIcon.hide();
            return;
        }
        if (mCount < this.minClusterSize) {
            // Min cluster size not yet reached.
            this.clusterIcon.hide();
            return;
        }
        if (this.center) {
            this.clusterIcon.setCenter(this.center);
        }
        this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length));
        this.clusterIcon.show();
    };
    Cluster.prototype.isMarkerAlreadyAdded = function (marker) {
        if (this.markers.includes) {
            return this.markers.includes(marker);
        }
        else {
            for (var i = 0; i < this.markers.length; i++) {
                if (marker === this.markers[i]) {
                    return true;
                }
            }
        }
        return false;
    };
    return Cluster;
}());

/* global google */
/**
 * Supports up to 9007199254740991 (Number.MAX_SAFE_INTEGER) markers
 * which is not a problem as max array length is 4294967296 (2**32)
 */
var CALCULATOR = function CALCULATOR(markers, numStyles) {
    var count = markers.length;
    var numberOfDigits = count.toString().length;
    var index = Math.min(numberOfDigits, numStyles);
    return {
        text: count.toString(),
        index: index,
        title: '',
    };
};
var BATCH_SIZE = 2000;
var BATCH_SIZE_IE = 500;
var IMAGE_PATH = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
var IMAGE_EXTENSION = 'png';
var IMAGE_SIZES = [53, 56, 66, 78, 90];
var CLUSTERER_CLASS = 'cluster';
var Clusterer = /** @class */ (function () {
    function Clusterer(map, optMarkers, optOptions) {
        if (optMarkers === void 0) { optMarkers = []; }
        if (optOptions === void 0) { optOptions = {}; }
        this.extend(Clusterer, google.maps.OverlayView);
        this.markers = [];
        this.clusters = [];
        this.listeners = [];
        this.activeMap = null;
        this.ready = false;
        this.gridSize = optOptions.gridSize || 60;
        this.minClusterSize = optOptions.minimumClusterSize || 2;
        this.maxZoom = optOptions.maxZoom || null;
        this.styles = optOptions.styles || [];
        this.title = optOptions.title || '';
        this.zoomOnClick = true;
        if (optOptions.zoomOnClick !== undefined) {
            this.zoomOnClick = optOptions.zoomOnClick;
        }
        this.averageCenter = false;
        if (optOptions.averageCenter !== undefined) {
            this.averageCenter = optOptions.averageCenter;
        }
        this.ignoreHidden = false;
        if (optOptions.ignoreHidden !== undefined) {
            this.ignoreHidden = optOptions.ignoreHidden;
        }
        this.enableRetinaIcons = false;
        if (optOptions.enableRetinaIcons !== undefined) {
            this.enableRetinaIcons = optOptions.enableRetinaIcons;
        }
        this.imagePath = optOptions.imagePath || IMAGE_PATH;
        this.imageExtension = optOptions.imageExtension || IMAGE_EXTENSION;
        this.imageSizes = optOptions.imageSizes || IMAGE_SIZES;
        this.calculator = optOptions.calculator || CALCULATOR;
        this.batchSize = optOptions.batchSize || BATCH_SIZE;
        this.batchSizeIE = optOptions.batchSizeIE || BATCH_SIZE_IE;
        this.clusterClass = optOptions.clusterClass || CLUSTERER_CLASS;
        if (navigator.userAgent.toLowerCase().indexOf('msie') !== -1) {
            // Try to avoid IE timeout when processing a huge number of markers:
            this.batchSize = this.batchSizeIE;
        }
        this.timerRefStatic = null;
        this.setupStyles();
        this.addMarkers(optMarkers, true);
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.setMap(map); // Note: this causes onAdd to be called
    }
    Clusterer.prototype.onAdd = function () {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.activeMap = this.getMap();
        this.ready = true;
        this.repaint();
        // Add the map event listeners
        this.listeners = [
            google.maps.event.addListener(
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.getMap(), 'zoom_changed', 
            // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
            function () {
                _this.resetViewport(false);
                // Workaround for this Google bug: when map is at level 0 and "-" of
                // zoom slider is clicked, a "zoom_changed" event is fired even though
                // the map doesn't zoom out any further. In this situation, no "idle"
                // event is triggered so the cluster markers that have been removed
                // do not get redrawn. Same goes for a zoom in at maxZoom.
                if (
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                _this.getMap().getZoom() === (_this.get('minZoom') || 0) ||
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    _this.getMap().getZoom() === _this.get('maxZoom')) {
                    google.maps.event.trigger(_this, 'idle');
                }
            }),
            google.maps.event.addListener(
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.getMap(), 'idle', 
            // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
            function () {
                _this.redraw();
            }),
        ];
    };
    // eslint-disable-next-line @getify/proper-arrows/this
    Clusterer.prototype.onRemove = function () {
        // Put all the managed markers back on the map:
        for (var i = 0; i < this.markers.length; i++) {
            if (this.markers[i].getMap() !== this.activeMap) {
                this.markers[i].setMap(this.activeMap);
            }
        }
        // Remove all clusters:
        for (var i = 0; i < this.clusters.length; i++) {
            this.clusters[i].remove();
        }
        this.clusters = [];
        // Remove map event listeners:
        for (var i = 0; i < this.listeners.length; i++) {
            google.maps.event.removeListener(this.listeners[i]);
        }
        this.listeners = [];
        this.activeMap = null;
        this.ready = false;
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    Clusterer.prototype.draw = function () { };
    Clusterer.prototype.setupStyles = function () {
        if (this.styles.length > 0) {
            return;
        }
        for (var i = 0; i < this.imageSizes.length; i++) {
            this.styles.push({
                url: this.imagePath + (i + 1) + '.' + this.imageExtension,
                height: this.imageSizes[i],
                width: this.imageSizes[i],
            });
        }
    };
    Clusterer.prototype.fitMapToMarkers = function () {
        var markers = this.getMarkers();
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            var position = markers[i].getPosition();
            if (position) {
                bounds.extend(position);
            }
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.getMap().fitBounds(bounds);
    };
    Clusterer.prototype.getGridSize = function () {
        return this.gridSize;
    };
    Clusterer.prototype.setGridSize = function (gridSize) {
        this.gridSize = gridSize;
    };
    Clusterer.prototype.getMinimumClusterSize = function () {
        return this.minClusterSize;
    };
    Clusterer.prototype.setMinimumClusterSize = function (minimumClusterSize) {
        this.minClusterSize = minimumClusterSize;
    };
    Clusterer.prototype.getMaxZoom = function () {
        return this.maxZoom;
    };
    Clusterer.prototype.setMaxZoom = function (maxZoom) {
        this.maxZoom = maxZoom;
    };
    Clusterer.prototype.getStyles = function () {
        return this.styles;
    };
    Clusterer.prototype.setStyles = function (styles) {
        this.styles = styles;
    };
    Clusterer.prototype.getTitle = function () {
        return this.title;
    };
    Clusterer.prototype.setTitle = function (title) {
        this.title = title;
    };
    Clusterer.prototype.getZoomOnClick = function () {
        return this.zoomOnClick;
    };
    Clusterer.prototype.setZoomOnClick = function (zoomOnClick) {
        this.zoomOnClick = zoomOnClick;
    };
    Clusterer.prototype.getAverageCenter = function () {
        return this.averageCenter;
    };
    Clusterer.prototype.setAverageCenter = function (averageCenter) {
        this.averageCenter = averageCenter;
    };
    Clusterer.prototype.getIgnoreHidden = function () {
        return this.ignoreHidden;
    };
    Clusterer.prototype.setIgnoreHidden = function (ignoreHidden) {
        this.ignoreHidden = ignoreHidden;
    };
    Clusterer.prototype.getEnableRetinaIcons = function () {
        return this.enableRetinaIcons;
    };
    Clusterer.prototype.setEnableRetinaIcons = function (enableRetinaIcons) {
        this.enableRetinaIcons = enableRetinaIcons;
    };
    Clusterer.prototype.getImageExtension = function () {
        return this.imageExtension;
    };
    Clusterer.prototype.setImageExtension = function (imageExtension) {
        this.imageExtension = imageExtension;
    };
    Clusterer.prototype.getImagePath = function () {
        return this.imagePath;
    };
    Clusterer.prototype.setImagePath = function (imagePath) {
        this.imagePath = imagePath;
    };
    Clusterer.prototype.getImageSizes = function () {
        return this.imageSizes;
    };
    Clusterer.prototype.setImageSizes = function (imageSizes) {
        this.imageSizes = imageSizes;
    };
    Clusterer.prototype.getCalculator = function () {
        return this.calculator;
    };
    Clusterer.prototype.setCalculator = function (calculator) {
        this.calculator = calculator;
    };
    Clusterer.prototype.getBatchSizeIE = function () {
        return this.batchSizeIE;
    };
    Clusterer.prototype.setBatchSizeIE = function (batchSizeIE) {
        this.batchSizeIE = batchSizeIE;
    };
    Clusterer.prototype.getClusterClass = function () {
        return this.clusterClass;
    };
    Clusterer.prototype.setClusterClass = function (clusterClass) {
        this.clusterClass = clusterClass;
    };
    Clusterer.prototype.getMarkers = function () {
        return this.markers;
    };
    Clusterer.prototype.getTotalMarkers = function () {
        return this.markers.length;
    };
    Clusterer.prototype.getClusters = function () {
        return this.clusters;
    };
    Clusterer.prototype.getTotalClusters = function () {
        return this.clusters.length;
    };
    Clusterer.prototype.addMarker = function (marker, optNoDraw) {
        this.pushMarkerTo(marker);
        if (!optNoDraw) {
            this.redraw();
        }
    };
    Clusterer.prototype.addMarkers = function (markers, optNoDraw) {
        for (var key in markers) {
            if (markers.hasOwnProperty(key)) {
                this.pushMarkerTo(markers[key]);
            }
        }
        if (!optNoDraw) {
            this.redraw();
        }
    };
    Clusterer.prototype.pushMarkerTo = function (marker) {
        var _this = this;
        // If the marker is draggable add a listener so we can update the clusters on the dragend:
        if (marker.getDraggable()) {
            // eslint-disable-next-line @getify/proper-arrows/name, @getify/proper-arrows/this
            google.maps.event.addListener(marker, 'dragend', function () {
                if (_this.ready) {
                    marker.isAdded = false;
                    _this.repaint();
                }
            });
        }
        marker.isAdded = false;
        this.markers.push(marker);
    };
    Clusterer.prototype.removeMarker_ = function (marker) {
        var index = -1;
        if (this.markers.indexOf) {
            index = this.markers.indexOf(marker);
        }
        else {
            for (var i = 0; i < this.markers.length; i++) {
                if (marker === this.markers[i]) {
                    index = i;
                    break;
                }
            }
        }
        if (index === -1) {
            // Marker is not in our list of markers, so do nothing:
            return false;
        }
        marker.setMap(null);
        this.markers.splice(index, 1); // Remove the marker from the list of managed markers
        return true;
    };
    Clusterer.prototype.removeMarker = function (marker, optNoDraw) {
        var removed = this.removeMarker_(marker);
        if (!optNoDraw && removed) {
            this.repaint();
        }
        return removed;
    };
    Clusterer.prototype.removeMarkers = function (markers, optNoDraw) {
        var removed = false;
        for (var i = 0; i < markers.length; i++) {
            removed = removed || this.removeMarker_(markers[i]);
        }
        if (!optNoDraw && removed) {
            this.repaint();
        }
        return removed;
    };
    Clusterer.prototype.clearMarkers = function () {
        this.resetViewport(true);
        this.markers = [];
    };
    Clusterer.prototype.repaint = function () {
        var oldClusters = this.clusters.slice();
        this.clusters = [];
        this.resetViewport(false);
        this.redraw();
        // Remove the old clusters.
        // Do it in a timeout to prevent blinking effect.
        setTimeout(function timeout() {
            for (var i = 0; i < oldClusters.length; i++) {
                oldClusters[i].remove();
            }
        }, 0);
    };
    Clusterer.prototype.getExtendedBounds = function (bounds) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        var projection = this.getProjection();
        // Convert the points to pixels and the extend out by the grid size.
        var trPix = projection.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng()));
        trPix.x += this.gridSize;
        trPix.y -= this.gridSize;
        var blPix = projection.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng()));
        blPix.x -= this.gridSize;
        blPix.y += this.gridSize;
        // Extend the bounds to contain the new bounds.
        bounds.extend(
        // Convert the pixel points back to LatLng nw
        projection.fromDivPixelToLatLng(trPix));
        bounds.extend(
        // Convert the pixel points back to LatLng sw
        projection.fromDivPixelToLatLng(blPix));
        return bounds;
    };
    Clusterer.prototype.redraw = function () {
        // Redraws all the clusters.
        this.createClusters(0);
    };
    Clusterer.prototype.resetViewport = function (optHide) {
        // Remove all the clusters
        for (var i = 0; i < this.clusters.length; i++) {
            this.clusters[i].remove();
        }
        this.clusters = [];
        // Reset the markers to not be added and to be removed from the map.
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            marker.isAdded = false;
            if (optHide) {
                marker.setMap(null);
            }
        }
    };
    Clusterer.prototype.distanceBetweenPoints = function (p1, p2) {
        var R = 6371; // Radius of the Earth in km
        var dLat = ((p2.lat() - p1.lat()) * Math.PI) / 180;
        var dLon = ((p2.lng() - p1.lng()) * Math.PI) / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((p1.lat() * Math.PI) / 180) *
                Math.cos((p2.lat() * Math.PI) / 180) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
    };
    Clusterer.prototype.isMarkerInBounds = function (marker, bounds) {
        var position = marker.getPosition();
        if (position) {
            return bounds.contains(position);
        }
        return false;
    };
    Clusterer.prototype.addToClosestCluster = function (marker) {
        var cluster;
        var distance = 40000; // Some large number
        var clusterToAddTo = null;
        for (var i = 0; i < this.clusters.length; i++) {
            cluster = this.clusters[i];
            var center = cluster.getCenter();
            var position = marker.getPosition();
            if (center && position) {
                var d = this.distanceBetweenPoints(center, position);
                if (d < distance) {
                    distance = d;
                    clusterToAddTo = cluster;
                }
            }
        }
        if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
            clusterToAddTo.addMarker(marker);
        }
        else {
            cluster = new Cluster$1(this);
            cluster.addMarker(marker);
            this.clusters.push(cluster);
        }
    };
    Clusterer.prototype.createClusters = function (iFirst) {
        var _this = this;
        if (!this.ready) {
            return;
        }
        // Cancel previous batch processing if we're working on the first batch:
        if (iFirst === 0) {
            /**
             * This event is fired when the <code>Clusterer</code> begins
             *  clustering markers.
             * @name Clusterer#clusteringbegin
             * @param {Clusterer} mc The Clusterer whose markers are being clustered.
             * @event
             */
            google.maps.event.trigger(this, 'clusteringbegin', this);
            if (this.timerRefStatic !== null) {
                window.clearTimeout(this.timerRefStatic);
                // @ts-ignore
                delete this.timerRefStatic;
            }
        }
        // Get our current map view bounds.
        // Create a new bounds object so we don't affect the map.
        //
        // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:
        var mapBounds = 
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.getMap().getZoom() > 3
            ? new google.maps.LatLngBounds(
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.getMap()
                .getBounds()
                .getSouthWest(), 
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.getMap()
                .getBounds()
                .getNorthEast())
            : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
        var bounds = this.getExtendedBounds(mapBounds);
        var iLast = Math.min(iFirst + this.batchSize, this.markers.length);
        for (var i = iFirst; i < iLast; i++) {
            var marker = this.markers[i];
            if (!marker.isAdded && this.isMarkerInBounds(marker, bounds)) {
                if (!this.ignoreHidden || (this.ignoreHidden && marker.getVisible())) {
                    this.addToClosestCluster(marker);
                }
            }
        }
        if (iLast < this.markers.length) {
            this.timerRefStatic = window.setTimeout(
            // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name
            function () {
                _this.createClusters(iLast);
            }, 0);
        }
        else {
            this.timerRefStatic = null;
            /**
             * This event is fired when the <code>Clusterer</code> stops
             *  clustering markers.
             * @name Clusterer#clusteringend
             * @param {Clusterer} mc The Clusterer whose markers are being clustered.
             * @event
             */
            google.maps.event.trigger(this, 'clusteringend', this);
            for (var i = 0; i < this.clusters.length; i++) {
                this.clusters[i].updateIcon();
            }
        }
    };
    Clusterer.prototype.extend = function (obj1, obj2) {
        return function applyExtend(object) {
            // eslint-disable-next-line guard-for-in
            for (var property in object.prototype) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                this.prototype[property] = object.prototype[property];
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            return this;
        }.apply(obj1, [obj2]);
    };
    return Clusterer;
}());

/* eslint-disable filenames/match-exported */
const eventMap$e = {
    onClick: 'click',
    onClusteringBegin: 'clusteringbegin',
    onClusteringEnd: 'clusteringend',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
};
const updaterMap$e = {
    averageCenter(instance, averageCenter) {
        instance.setAverageCenter(averageCenter);
    },
    batchSizeIE(instance, batchSizeIE) {
        instance.setBatchSizeIE(batchSizeIE);
    },
    calculator(instance, calculator) {
        instance.setCalculator(calculator);
    },
    clusterClass(instance, clusterClass) {
        instance.setClusterClass(clusterClass);
    },
    enableRetinaIcons(instance, enableRetinaIcons) {
        instance.setEnableRetinaIcons(enableRetinaIcons);
    },
    gridSize(instance, gridSize) {
        instance.setGridSize(gridSize);
    },
    ignoreHidden(instance, ignoreHidden) {
        instance.setIgnoreHidden(ignoreHidden);
    },
    imageExtension(instance, imageExtension) {
        instance.setImageExtension(imageExtension);
    },
    imagePath(instance, imagePath) {
        instance.setImagePath(imagePath);
    },
    imageSizes(instance, imageSizes) {
        instance.setImageSizes(imageSizes);
    },
    maxZoom(instance, maxZoom) {
        instance.setMaxZoom(maxZoom);
    },
    minimumClusterSize(instance, minimumClusterSize) {
        instance.setMinimumClusterSize(minimumClusterSize);
    },
    styles(instance, styles) {
        instance.setStyles(styles);
    },
    title(instance, title) {
        instance.setTitle(title);
    },
    zoomOnClick(instance, zoomOnClick) {
        instance.setZoomOnClick(zoomOnClick);
    },
};
class ClustererComponent extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.state = {
            markerClusterer: null,
        };
        this.setClustererCallback = () => {
            if (this.state.markerClusterer !== null && this.props.onLoad) {
                this.props.onLoad(this.state.markerClusterer);
            }
        };
    }
    componentDidMount() {
        if (this.context) {
            const markerClusterer = new Clusterer(this.context, [], this.props.options);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$e,
                eventMap: eventMap$e,
                prevProps: {},
                nextProps: this.props,
                instance: markerClusterer,
            });
            this.setState(function setClusterer() {
                return {
                    markerClusterer,
                };
            }, this.setClustererCallback);
        }
    }
    componentDidUpdate(prevProps) {
        if (this.state.markerClusterer) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$e,
                eventMap: eventMap$e,
                prevProps,
                nextProps: this.props,
                instance: this.state.markerClusterer,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.markerClusterer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.markerClusterer);
            }
            unregisterEvents(this.registeredEvents);
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.state.markerClusterer.setMap(null);
        }
    }
    render() {
        return this.state.markerClusterer !== null
            ? this.props.children(this.state.markerClusterer)
            : null;
    }
}
ClustererComponent.contextType = MapContext;

var InfoBox = /** @class */ (function () {
    function InfoBox(options) {
        if (options === void 0) { options = {}; }
        this.extend(InfoBox, google.maps.OverlayView);
        // Standard options (in common with google.maps.InfoWindow):
        this.content = options.content || '';
        this.disableAutoPan = options.disableAutoPan || false;
        this.maxWidth = options.maxWidth || 0;
        this.pixelOffset = options.pixelOffset || new google.maps.Size(0, 0);
        this.position = options.position || new google.maps.LatLng(0, 0);
        this.zIndex = options.zIndex || null;
        // Additional options (unique to InfoBox):
        this.boxClass = options.boxClass || 'infoBox';
        this.boxStyle = options.boxStyle || {};
        this.closeBoxMargin = options.closeBoxMargin || '2px';
        this.closeBoxURL = options.closeBoxURL || 'http://www.google.com/intl/en_us/mapfiles/close.gif';
        if (options.closeBoxURL === '') {
            this.closeBoxURL = '';
        }
        this.infoBoxClearance = options.infoBoxClearance || new google.maps.Size(1, 1);
        if (typeof options.visible === 'undefined') {
            if (typeof options.isHidden === 'undefined') {
                options.visible = true;
            }
            else {
                options.visible = !options.isHidden;
            }
        }
        this.isHidden = !options.visible;
        this.alignBottom = options.alignBottom || false;
        this.pane = options.pane || 'floatPane';
        this.enableEventPropagation = options.enableEventPropagation || false;
        this.div = null;
        this.closeListener = null;
        this.moveListener = null;
        this.mapListener = null;
        this.contextListener = null;
        this.eventListeners = null;
        this.fixedWidthSet = null;
    }
    InfoBox.prototype.createInfoBoxDiv = function () {
        var _this = this;
        // This handler prevents an event in the InfoBox from being passed on to the map.
        function cancelHandler(event) {
            event.cancelBubble = true;
            if (event.stopPropagation) {
                event.stopPropagation();
            }
        }
        // This handler ignores the current event in the InfoBox and conditionally prevents
        // the event from being passed on to the map. It is used for the contextmenu event.
        // eslint-disable-next-line  @getify/proper-arrows/this
        var ignoreHandler = function (event) {
            event.returnValue = false;
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (!_this.enableEventPropagation) {
                cancelHandler(event);
            }
        };
        if (!this.div) {
            this.div = document.createElement('div');
            this.setBoxStyle();
            if (typeof this.content === 'string') {
                this.div.innerHTML = this.getCloseBoxImg() + this.content;
            }
            else {
                this.div.innerHTML = this.getCloseBoxImg();
                this.div.appendChild(this.content);
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            var panes = this.getPanes();
            panes[this.pane].appendChild(this.div); // Add the InfoBox div to the DOM
            this.addClickHandler();
            if (this.div.style.width) {
                this.fixedWidthSet = true;
            }
            else {
                if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth) {
                    this.div.style.width = this.maxWidth + 'px';
                    this.fixedWidthSet = true;
                }
                else {
                    // The following code is needed to overcome problems with MSIE
                    var bw = this.getBoxWidths();
                    this.div.style.width = this.div.offsetWidth - bw.left - bw.right + 'px';
                    this.fixedWidthSet = false;
                }
            }
            this.panBox(this.disableAutoPan);
            if (!this.enableEventPropagation) {
                this.eventListeners = [];
                // Cancel event propagation.
                // Note: mousemove not included (to resolve Issue 152)
                var events = [
                    'mousedown',
                    'mouseover',
                    'mouseout',
                    'mouseup',
                    'click',
                    'dblclick',
                    'touchstart',
                    'touchend',
                    'touchmove',
                ];
                for (var i = 0; i < events.length; i++) {
                    this.eventListeners.push(google.maps.event.addDomListener(this.div, events[i], cancelHandler));
                }
                // Workaround for Google bug that causes the cursor to change to a pointer
                // when the mouse moves over a marker underneath InfoBox.
                this.eventListeners.push(google.maps.event.addDomListener(this.div, 'mouseover', 
                // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
                function () {
                    if (_this.div) {
                        _this.div.style.cursor = 'default';
                    }
                }));
            }
            this.contextListener = google.maps.event.addDomListener(this.div, 'contextmenu', ignoreHandler);
            /**
             * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
             * @name InfoBox#domready
             * @event
             */
            google.maps.event.trigger(this, 'domready');
        }
    };
    InfoBox.prototype.getCloseBoxImg = function () {
        var img = '';
        if (this.closeBoxURL !== '') {
            img = '<img alt=""';
            img += ' aria-hidden="true"';
            img += " src='" + this.closeBoxURL + "'";
            img += ' align=right'; // Do this because Opera chokes on style='float: right;'
            img += " style='";
            img += ' position: relative;'; // Required by MSIE
            img += ' cursor: pointer;';
            img += ' margin: ' + this.closeBoxMargin + ';';
            img += "'>";
        }
        return img;
    };
    InfoBox.prototype.addClickHandler = function () {
        if (this.div && this.div.firstChild && this.closeBoxURL !== '') {
            var closeBox = this.div.firstChild;
            this.closeListener = google.maps.event.addDomListener(closeBox, 'click', this.getCloseClickHandler());
        }
        else {
            this.closeListener = null;
        }
    };
    InfoBox.prototype.getCloseClickHandler = function () {
        var _this = this;
        // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
        return function (event) {
            // 1.0.3 fix: Always prevent propagation of a close box click to the map:
            event.cancelBubble = true;
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            /**
             * This event is fired when the InfoBox's close box is clicked.
             * @name InfoBox#closeclick
             * @event
             */
            google.maps.event.trigger(_this, 'closeclick');
            _this.close();
        };
    };
    InfoBox.prototype.panBox = function (disablePan) {
        if (this.div && !disablePan) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            var map = this.getMap();
            // Only pan if attached to map, not panorama
            if (map instanceof google.maps.Map) {
                var xOffset = 0;
                var yOffset = 0;
                var bounds = map.getBounds();
                if (bounds && !bounds.contains(this.position)) {
                    // Marker not in visible area of map, so set center
                    // of map to the marker position first.
                    map.setCenter(this.position);
                }
                var mapDiv = map.getDiv();
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                var mapWidth = mapDiv.offsetWidth;
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                var mapHeight = mapDiv.offsetHeight;
                var iwOffsetX = this.pixelOffset.width;
                var iwOffsetY = this.pixelOffset.height;
                var iwWidth = this.div.offsetWidth;
                var iwHeight = this.div.offsetHeight;
                var padX = this.infoBoxClearance.width;
                var padY = this.infoBoxClearance.height;
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                var projection = this.getProjection();
                var pixPosition = projection.fromLatLngToContainerPixel(this.position);
                if (pixPosition !== null) {
                    if (pixPosition.x < -iwOffsetX + padX) {
                        xOffset = pixPosition.x + iwOffsetX - padX;
                    }
                    else if (pixPosition.x + iwWidth + iwOffsetX + padX > mapWidth) {
                        xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
                    }
                    if (this.alignBottom) {
                        if (pixPosition.y < -iwOffsetY + padY + iwHeight) {
                            yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
                        }
                        else if (pixPosition.y + iwOffsetY + padY > mapHeight) {
                            yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
                        }
                    }
                    else {
                        if (pixPosition.y < -iwOffsetY + padY) {
                            yOffset = pixPosition.y + iwOffsetY - padY;
                        }
                        else if (pixPosition.y + iwHeight + iwOffsetY + padY > mapHeight) {
                            yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
                        }
                    }
                }
                if (!(xOffset === 0 && yOffset === 0)) {
                    // Move the map to the shifted center.
                    map.panBy(xOffset, yOffset);
                }
            }
        }
    };
    InfoBox.prototype.setBoxStyle = function () {
        if (this.div) {
            // Apply style values from the style sheet defined in the boxClass parameter:
            this.div.className = this.boxClass;
            // Clear existing inline style values:
            this.div.style.cssText = '';
            // Apply style values defined in the boxStyle parameter:
            var boxStyle = this.boxStyle;
            for (var i in boxStyle) {
                if (boxStyle.hasOwnProperty(i)) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    this.div.style[i] = boxStyle[i];
                }
            }
            // Fix for iOS disappearing InfoBox problem
            // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad
            this.div.style.webkitTransform = 'translateZ(0)';
            // Fix up opacity style for benefit of MSIE
            if (typeof this.div.style.opacity !== 'undefined' && this.div.style.opacity !== '') {
                // See http://www.quirksmode.org/css/opacity.html
                var opacity = parseFloat(this.div.style.opacity || '');
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                this.div.style.msFilter =
                    '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity * 100 + ')"';
                this.div.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
            }
            // Apply required styles
            this.div.style.position = 'absolute';
            this.div.style.visibility = 'hidden';
            if (this.zIndex !== null) {
                this.div.style.zIndex = this.zIndex + '';
            }
            if (!this.div.style.overflow) {
                this.div.style.overflow = 'auto';
            }
        }
    };
    InfoBox.prototype.getBoxWidths = function () {
        var bw = { top: 0, bottom: 0, left: 0, right: 0 };
        if (!this.div) {
            return bw;
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            var ownerDocument = this.div.ownerDocument;
            var computedStyle = ownerDocument && ownerDocument.defaultView
                ? ownerDocument.defaultView.getComputedStyle(this.div, '')
                : null;
            if (computedStyle) {
                // The computed styles are always in pixel units (good!)
                bw.top = parseInt(computedStyle.borderTopWidth || '', 10) || 0;
                bw.bottom = parseInt(computedStyle.borderBottomWidth || '', 10) || 0;
                bw.left = parseInt(computedStyle.borderLeftWidth || '', 10) || 0;
                bw.right = parseInt(computedStyle.borderRightWidth || '', 10) || 0;
            }
        }
        else if (
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        document.documentElement.currentStyle // MSIE
        ) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            var currentStyle = this.div.currentStyle;
            if (currentStyle) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // The current styles may not be in pixel units, but assume they are (bad!)
                bw.top = parseInt(currentStyle.borderTopWidth || '', 10) || 0;
                bw.bottom = parseInt(currentStyle.borderBottomWidth || '', 10) || 0;
                bw.left = parseInt(currentStyle.borderLeftWidth || '', 10) || 0;
                bw.right = parseInt(currentStyle.borderRightWidth || '', 10) || 0;
            }
        }
        return bw;
    };
    InfoBox.prototype.onRemove = function () {
        if (this.div && this.div.parentNode) {
            this.div.parentNode.removeChild(this.div);
            this.div = null;
        }
    };
    InfoBox.prototype.draw = function () {
        this.createInfoBoxDiv();
        if (this.div) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            var projection = this.getProjection();
            var pixPosition = projection.fromLatLngToDivPixel(this.position);
            if (pixPosition !== null) {
                this.div.style.left = pixPosition.x + this.pixelOffset.width + 'px';
                if (this.alignBottom) {
                    this.div.style.bottom = -(pixPosition.y + this.pixelOffset.height) + 'px';
                }
                else {
                    this.div.style.top = pixPosition.y + this.pixelOffset.height + 'px';
                }
            }
            if (this.isHidden) {
                this.div.style.visibility = 'hidden';
            }
            else {
                this.div.style.visibility = 'visible';
            }
        }
    };
    InfoBox.prototype.setOptions = function (options) {
        if (options === void 0) { options = {}; }
        if (typeof options.boxClass !== 'undefined') {
            // Must be first
            this.boxClass = options.boxClass;
            this.setBoxStyle();
        }
        if (typeof options.boxStyle !== 'undefined') {
            // Must be second
            this.boxStyle = options.boxStyle;
            this.setBoxStyle();
        }
        if (typeof options.content !== 'undefined') {
            this.setContent(options.content);
        }
        if (typeof options.disableAutoPan !== 'undefined') {
            this.disableAutoPan = options.disableAutoPan;
        }
        if (typeof options.maxWidth !== 'undefined') {
            this.maxWidth = options.maxWidth;
        }
        if (typeof options.pixelOffset !== 'undefined') {
            this.pixelOffset = options.pixelOffset;
        }
        if (typeof options.alignBottom !== 'undefined') {
            this.alignBottom = options.alignBottom;
        }
        if (typeof options.position !== 'undefined') {
            this.setPosition(options.position);
        }
        if (typeof options.zIndex !== 'undefined') {
            this.setZIndex(options.zIndex);
        }
        if (typeof options.closeBoxMargin !== 'undefined') {
            this.closeBoxMargin = options.closeBoxMargin;
        }
        if (typeof options.closeBoxURL !== 'undefined') {
            this.closeBoxURL = options.closeBoxURL;
        }
        if (typeof options.infoBoxClearance !== 'undefined') {
            this.infoBoxClearance = options.infoBoxClearance;
        }
        if (typeof options.isHidden !== 'undefined') {
            this.isHidden = options.isHidden;
        }
        if (typeof options.visible !== 'undefined') {
            this.isHidden = !options.visible;
        }
        if (typeof options.enableEventPropagation !== 'undefined') {
            this.enableEventPropagation = options.enableEventPropagation;
        }
        if (this.div) {
            this.draw();
        }
    };
    InfoBox.prototype.setContent = function (content) {
        this.content = content;
        if (this.div) {
            if (this.closeListener) {
                google.maps.event.removeListener(this.closeListener);
                this.closeListener = null;
            }
            // Odd code required to make things work with MSIE.
            if (!this.fixedWidthSet) {
                this.div.style.width = '';
            }
            if (typeof content === 'string') {
                this.div.innerHTML = this.getCloseBoxImg() + content;
            }
            else {
                this.div.innerHTML = this.getCloseBoxImg();
                this.div.appendChild(content);
            }
            // Perverse code required to make things work with MSIE.
            // (Ensures the close box does, in fact, float to the right.)
            if (!this.fixedWidthSet) {
                this.div.style.width = this.div.offsetWidth + 'px';
                if (typeof content === 'string') {
                    this.div.innerHTML = this.getCloseBoxImg() + content;
                }
                else {
                    this.div.innerHTML = this.getCloseBoxImg();
                    this.div.appendChild(content);
                }
            }
            this.addClickHandler();
        }
        /**
         * This event is fired when the content of the InfoBox changes.
         * @name InfoBox#content_changed
         * @event
         */
        google.maps.event.trigger(this, 'content_changed');
    };
    InfoBox.prototype.setPosition = function (latLng) {
        this.position = latLng;
        if (this.div) {
            this.draw();
        }
        /**
         * This event is fired when the position of the InfoBox changes.
         * @name InfoBox#position_changed
         * @event
         */
        google.maps.event.trigger(this, 'position_changed');
    };
    InfoBox.prototype.setVisible = function (isVisible) {
        this.isHidden = !isVisible;
        if (this.div) {
            this.div.style.visibility = this.isHidden ? 'hidden' : 'visible';
        }
    };
    InfoBox.prototype.setZIndex = function (index) {
        this.zIndex = index;
        if (this.div) {
            this.div.style.zIndex = index + '';
        }
        /**
         * This event is fired when the zIndex of the InfoBox changes.
         * @name InfoBox#zindex_changed
         * @event
         */
        google.maps.event.trigger(this, 'zindex_changed');
    };
    InfoBox.prototype.getContent = function () {
        return this.content;
    };
    InfoBox.prototype.getPosition = function () {
        return this.position;
    };
    InfoBox.prototype.getZIndex = function () {
        return this.zIndex;
    };
    InfoBox.prototype.getVisible = function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        var map = this.getMap();
        var isVisible;
        if (typeof map === 'undefined' || map === null) {
            isVisible = false;
        }
        else {
            isVisible = !this.isHidden;
        }
        return isVisible;
    };
    InfoBox.prototype.show = function () {
        this.isHidden = false;
        if (this.div) {
            this.div.style.visibility = 'visible';
        }
    };
    InfoBox.prototype.hide = function () {
        this.isHidden = true;
        if (this.div) {
            this.div.style.visibility = 'hidden';
        }
    };
    InfoBox.prototype.open = function (map, anchor) {
        var _this = this;
        if (anchor) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.position = anchor.getPosition();
            this.moveListener = google.maps.event.addListener(anchor, 'position_changed', 
            // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
            function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                var position = anchor.getPosition();
                _this.setPosition(position);
            });
            this.mapListener = google.maps.event.addListener(anchor, 'map_changed', 
            // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
            function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                _this.setMap(anchor.map);
            });
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.setMap(map);
        if (this.div) {
            this.panBox();
        }
    };
    InfoBox.prototype.close = function () {
        if (this.closeListener) {
            google.maps.event.removeListener(this.closeListener);
            this.closeListener = null;
        }
        if (this.eventListeners) {
            for (var i = 0; i < this.eventListeners.length; i++) {
                google.maps.event.removeListener(this.eventListeners[i]);
            }
            this.eventListeners = null;
        }
        if (this.moveListener) {
            google.maps.event.removeListener(this.moveListener);
            this.moveListener = null;
        }
        if (this.mapListener) {
            google.maps.event.removeListener(this.mapListener);
            this.mapListener = null;
        }
        if (this.contextListener) {
            google.maps.event.removeListener(this.contextListener);
            this.contextListener = null;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.setMap(null);
    };
    InfoBox.prototype.extend = function (obj1, obj2) {
        return function applyExtend(object) {
            // eslint-disable-next-line guard-for-in
            for (var property in object.prototype) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                if (!this.prototype.hasOwnProperty(property)) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    this.prototype[property] = object.prototype[property];
                }
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            return this;
        }.apply(obj1, [obj2]);
    };
    return InfoBox;
}());

const eventMap$d = {
    onCloseClick: 'closeclick',
    onContentChanged: 'content_changed',
    onDomReady: 'domready',
    onPositionChanged: 'position_changed',
    onZindexChanged: 'zindex_changed',
};
const updaterMap$d = {
    options(instance, options) {
        instance.setOptions(options);
    },
    position(instance, position) {
        if (position instanceof google.maps.LatLng) {
            instance.setPosition(position);
        }
        else {
            instance.setPosition(new google.maps.LatLng(position.lat, position.lng));
        }
    },
    visible(instance, visible) {
        instance.setVisible(visible);
    },
    zIndex(instance, zIndex) {
        instance.setZIndex(zIndex);
    },
};
class InfoBoxComponent extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.containerElement = null;
        this.state = {
            infoBox: null,
        };
        this.open = (infoBox, anchor) => {
            if (anchor) {
                infoBox.open(this.context, anchor);
            }
            else if (infoBox.getPosition()) {
                infoBox.open(this.context);
            }
            else {
                invariant_1(false, 'You must provide either an anchor or a position prop for <InfoBox>.');
            }
        };
        this.setInfoBoxCallback = () => {
            const { anchor, onLoad } = this.props;
            const { infoBox } = this.state;
            if (infoBox !== null && this.containerElement !== null) {
                infoBox.setContent(this.containerElement);
                this.open(infoBox, anchor);
                if (onLoad) {
                    onLoad(infoBox);
                }
            }
        };
    }
    componentDidMount() {
        const { options } = this.props;
        const _a = options || {}, { position } = _a, infoBoxOptions = __rest$1(_a, ["position"]);
        let positionLatLng;
        if (position && !(position instanceof google.maps.LatLng)) {
            positionLatLng = new google.maps.LatLng(position.lat, position.lng);
        }
        const infoBox = new InfoBox(Object.assign(Object.assign({}, infoBoxOptions), (positionLatLng ? { position: positionLatLng } : {})));
        this.containerElement = document.createElement('div');
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$d,
            eventMap: eventMap$d,
            prevProps: {},
            nextProps: this.props,
            instance: infoBox,
        });
        this.setState({ infoBox }, this.setInfoBoxCallback);
    }
    componentDidUpdate(prevProps) {
        const { infoBox } = this.state;
        if (infoBox !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$d,
                eventMap: eventMap$d,
                prevProps,
                nextProps: this.props,
                instance: infoBox,
            });
        }
    }
    componentWillUnmount() {
        const { onUnmount } = this.props;
        const { infoBox } = this.state;
        if (infoBox !== null) {
            if (onUnmount) {
                onUnmount(infoBox);
            }
            unregisterEvents(this.registeredEvents);
            infoBox.close();
        }
    }
    render() {
        if (!this.containerElement) {
            return null;
        }
        return react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children), this.containerElement);
    }
}
InfoBoxComponent.contextType = MapContext;

/**
 * @module helpers
 */
/**
 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
 *
 * @memberof helpers
 * @type {number}
 */
var earthRadius = 6371008.8;
/**
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 *
 * @memberof helpers
 * @type {Object}
 */
var factors = {
    centimeters: earthRadius * 100,
    centimetres: earthRadius * 100,
    degrees: earthRadius / 111325,
    feet: earthRadius * 3.28084,
    inches: earthRadius * 39.37,
    kilometers: earthRadius / 1000,
    kilometres: earthRadius / 1000,
    meters: earthRadius,
    metres: earthRadius,
    miles: earthRadius / 1609.344,
    millimeters: earthRadius * 1000,
    millimetres: earthRadius * 1000,
    nauticalmiles: earthRadius / 1852,
    radians: 1,
    yards: earthRadius * 1.0936,
};
/**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @name feature
 * @param {Geometry} geometry input geometry
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature} a GeoJSON Feature
 * @example
 * var geometry = {
 *   "type": "Point",
 *   "coordinates": [110, 50]
 * };
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */
function feature(geom, properties, options) {
    if (options === void 0) { options = {}; }
    var feat = { type: "Feature" };
    if (options.id === 0 || options.id) {
        feat.id = options.id;
    }
    if (options.bbox) {
        feat.bbox = options.bbox;
    }
    feat.properties = properties || {};
    feat.geometry = geom;
    return feat;
}
/**
 * Creates a {@link Point} {@link Feature} from a Position.
 *
 * @name point
 * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Point>} a Point feature
 * @example
 * var point = turf.point([-75.343, 39.984]);
 *
 * //=point
 */
function point(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (!coordinates) {
        throw new Error("coordinates is required");
    }
    if (!Array.isArray(coordinates)) {
        throw new Error("coordinates must be an Array");
    }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be at least 2 numbers long");
    }
    if (!isNumber(coordinates[0]) || !isNumber(coordinates[1])) {
        throw new Error("coordinates must contain numbers");
    }
    var geom = {
        type: "Point",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
 *
 * @name featureCollection
 * @param {Feature[]} features input features
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {FeatureCollection} FeatureCollection of Features
 * @example
 * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
 * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
 * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
 *
 * var collection = turf.featureCollection([
 *   locationA,
 *   locationB,
 *   locationC
 * ]);
 *
 * //=collection
 */
function featureCollection(features, options) {
    if (options === void 0) { options = {}; }
    var fc = { type: "FeatureCollection" };
    if (options.id) {
        fc.id = options.id;
    }
    if (options.bbox) {
        fc.bbox = options.bbox;
    }
    fc.features = features;
    return fc;
}
/**
 * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name radiansToLength
 * @param {number} radians in radians across the sphere
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} distance
 */
function radiansToLength(radians, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return radians * factor;
}
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} radians
 */
function lengthToRadians(distance, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return distance / factor;
}
/**
 * Converts an angle in degrees to radians
 *
 * @name degreesToRadians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
function degreesToRadians(degrees) {
    var radians = degrees % 360;
    return (radians * Math.PI) / 180;
}
/**
 * Converts a length to the requested unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @param {number} length to be converted
 * @param {Units} [originalUnit="kilometers"] of the length
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted length
 */
function convertLength(length, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "kilometers"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(length >= 0)) {
        throw new Error("length must be a positive number");
    }
    return radiansToLength(lengthToRadians(length, originalUnit), finalUnit);
}
/**
 * isNumber
 *
 * @param {*} num Number to validate
 * @returns {boolean} true/false
 * @example
 * turf.isNumber(123)
 * //=true
 * turf.isNumber('foo')
 * //=false
 */
function isNumber(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num);
}

/**
 * Returns a cloned copy of the passed GeoJSON Object, including possible 'Foreign Members'.
 * ~3-5x faster than the common JSON.parse + JSON.stringify combo method.
 *
 * @name clone
 * @param {GeoJSON} geojson GeoJSON Object
 * @returns {GeoJSON} cloned GeoJSON Object
 * @example
 * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]], {color: 'red'});
 *
 * var lineCloned = turf.clone(line);
 */
function clone(geojson) {
    if (!geojson) {
        throw new Error("geojson is required");
    }
    switch (geojson.type) {
        case "Feature":
            return cloneFeature(geojson);
        case "FeatureCollection":
            return cloneFeatureCollection(geojson);
        case "Point":
        case "LineString":
        case "Polygon":
        case "MultiPoint":
        case "MultiLineString":
        case "MultiPolygon":
        case "GeometryCollection":
            return cloneGeometry(geojson);
        default:
            throw new Error("unknown GeoJSON type");
    }
}
/**
 * Clone Feature
 *
 * @private
 * @param {Feature<any>} geojson GeoJSON Feature
 * @returns {Feature<any>} cloned Feature
 */
function cloneFeature(geojson) {
    var cloned = { type: "Feature" };
    // Preserve Foreign Members
    Object.keys(geojson).forEach(function (key) {
        switch (key) {
            case "type":
            case "properties":
            case "geometry":
                return;
            default:
                cloned[key] = geojson[key];
        }
    });
    // Add properties & geometry last
    cloned.properties = cloneProperties(geojson.properties);
    cloned.geometry = cloneGeometry(geojson.geometry);
    return cloned;
}
/**
 * Clone Properties
 *
 * @private
 * @param {Object} properties GeoJSON Properties
 * @returns {Object} cloned Properties
 */
function cloneProperties(properties) {
    var cloned = {};
    if (!properties) {
        return cloned;
    }
    Object.keys(properties).forEach(function (key) {
        var value = properties[key];
        if (typeof value === "object") {
            if (value === null) {
                // handle null
                cloned[key] = null;
            }
            else if (Array.isArray(value)) {
                // handle Array
                cloned[key] = value.map(function (item) {
                    return item;
                });
            }
            else {
                // handle generic Object
                cloned[key] = cloneProperties(value);
            }
        }
        else {
            cloned[key] = value;
        }
    });
    return cloned;
}
/**
 * Clone Feature Collection
 *
 * @private
 * @param {FeatureCollection<any>} geojson GeoJSON Feature Collection
 * @returns {FeatureCollection<any>} cloned Feature Collection
 */
function cloneFeatureCollection(geojson) {
    var cloned = { type: "FeatureCollection" };
    // Preserve Foreign Members
    Object.keys(geojson).forEach(function (key) {
        switch (key) {
            case "type":
            case "features":
                return;
            default:
                cloned[key] = geojson[key];
        }
    });
    // Add features
    cloned.features = geojson.features.map(function (feature) {
        return cloneFeature(feature);
    });
    return cloned;
}
/**
 * Clone Geometry
 *
 * @private
 * @param {Geometry<any>} geometry GeoJSON Geometry
 * @returns {Geometry<any>} cloned Geometry
 */
function cloneGeometry(geometry) {
    var geom = { type: geometry.type };
    if (geometry.bbox) {
        geom.bbox = geometry.bbox;
    }
    if (geometry.type === "GeometryCollection") {
        geom.geometries = geometry.geometries.map(function (g) {
            return cloneGeometry(g);
        });
        return geom;
    }
    geom.coordinates = deepSlice(geometry.coordinates);
    return geom;
}
/**
 * Deep Slice coordinates
 *
 * @private
 * @param {Coordinates} coords Coordinates
 * @returns {Coordinates} all coordinates sliced
 */
function deepSlice(coords) {
    var cloned = coords;
    if (typeof cloned[0] !== "object") {
        return cloned.slice();
    }
    return cloned.map(function (coord) {
        return deepSlice(coord);
    });
}

/**
 * Callback for coordEach
 *
 * @callback coordEachCallback
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
 *
 * @name coordEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function coordEach(geojson, callback, excludeWrapCoord) {
  // Handles null Geometry -- Skips this GeoJSON
  if (geojson === null) return;
  var j,
    k,
    l,
    geometry,
    stopG,
    coords,
    geometryMaybeCollection,
    wrapShrink = 0,
    coordIndex = 0,
    isGeometryCollection,
    type = geojson.type,
    isFeatureCollection = type === "FeatureCollection",
    isFeature = type === "Feature",
    stop = isFeatureCollection ? geojson.features.length : 1;

  // This logic may look a little weird. The reason why it is that way
  // is because it's trying to be fast. GeoJSON supports multiple kinds
  // of objects at its root: FeatureCollection, Features, Geometries.
  // This function has the responsibility of handling all of them, and that
  // means that some of the `for` loops you see below actually just don't apply
  // to certain inputs. For instance, if you give this just a
  // Point geometry, then both loops are short-circuited and all we do
  // is gradually rename the input until it's called 'geometry'.
  //
  // This also aims to allocate as few resources as possible: just a
  // few numbers and booleans, rather than any temporary arrays as would
  // be required with the normalization approach.
  for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
    geometryMaybeCollection = isFeatureCollection
      ? geojson.features[featureIndex].geometry
      : isFeature
      ? geojson.geometry
      : geojson;
    isGeometryCollection = geometryMaybeCollection
      ? geometryMaybeCollection.type === "GeometryCollection"
      : false;
    stopG = isGeometryCollection
      ? geometryMaybeCollection.geometries.length
      : 1;

    for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
      var multiFeatureIndex = 0;
      var geometryIndex = 0;
      geometry = isGeometryCollection
        ? geometryMaybeCollection.geometries[geomIndex]
        : geometryMaybeCollection;

      // Handles null Geometry -- Skips this geometry
      if (geometry === null) continue;
      coords = geometry.coordinates;
      var geomType = geometry.type;

      wrapShrink =
        excludeWrapCoord &&
        (geomType === "Polygon" || geomType === "MultiPolygon")
          ? 1
          : 0;

      switch (geomType) {
        case null:
          break;
        case "Point":
          if (
            callback(
              coords,
              coordIndex,
              featureIndex,
              multiFeatureIndex,
              geometryIndex
            ) === false
          )
            return false;
          coordIndex++;
          multiFeatureIndex++;
          break;
        case "LineString":
        case "MultiPoint":
          for (j = 0; j < coords.length; j++) {
            if (
              callback(
                coords[j],
                coordIndex,
                featureIndex,
                multiFeatureIndex,
                geometryIndex
              ) === false
            )
              return false;
            coordIndex++;
            if (geomType === "MultiPoint") multiFeatureIndex++;
          }
          if (geomType === "LineString") multiFeatureIndex++;
          break;
        case "Polygon":
        case "MultiLineString":
          for (j = 0; j < coords.length; j++) {
            for (k = 0; k < coords[j].length - wrapShrink; k++) {
              if (
                callback(
                  coords[j][k],
                  coordIndex,
                  featureIndex,
                  multiFeatureIndex,
                  geometryIndex
                ) === false
              )
                return false;
              coordIndex++;
            }
            if (geomType === "MultiLineString") multiFeatureIndex++;
            if (geomType === "Polygon") geometryIndex++;
          }
          if (geomType === "Polygon") multiFeatureIndex++;
          break;
        case "MultiPolygon":
          for (j = 0; j < coords.length; j++) {
            geometryIndex = 0;
            for (k = 0; k < coords[j].length; k++) {
              for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
                if (
                  callback(
                    coords[j][k][l],
                    coordIndex,
                    featureIndex,
                    multiFeatureIndex,
                    geometryIndex
                  ) === false
                )
                  return false;
                coordIndex++;
              }
              geometryIndex++;
            }
            multiFeatureIndex++;
          }
          break;
        case "GeometryCollection":
          for (j = 0; j < geometry.geometries.length; j++)
            if (
              coordEach(geometry.geometries[j], callback, excludeWrapCoord) ===
              false
            )
              return false;
          break;
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
  }
}

/**
 * Callback for featureEach
 *
 * @callback featureEachCallback
 * @param {Feature<any>} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name featureEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.featureEach(features, function (currentFeature, featureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 * });
 */
function featureEach(geojson, callback) {
  if (geojson.type === "Feature") {
    callback(geojson, 0);
  } else if (geojson.type === "FeatureCollection") {
    for (var i = 0; i < geojson.features.length; i++) {
      if (callback(geojson.features[i], i) === false) break;
    }
  }
}

/**
 * Get all coordinates from any GeoJSON object.
 *
 * @name coordAll
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @returns {Array<Array<number>>} coordinate position array
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * var coords = turf.coordAll(features);
 * //= [[26, 37], [36, 53]]
 */
function coordAll(geojson) {
  var coords = [];
  coordEach(geojson, function (coord) {
    coords.push(coord);
  });
  return coords;
}

var distance$1 = {
	/**
  * Euclidean distance
  */
	eudist: function eudist(v1, v2, sqrt) {
		var len = v1.length;
		var sum = 0;

		for (var i = 0; i < len; i++) {
			var d = (v1[i] || 0) - (v2[i] || 0);
			sum += d * d;
		}
		// Square root not really needed
		return sqrt ? Math.sqrt(sum) : sum;
	},
	mandist: function mandist(v1, v2, sqrt) {
		var len = v1.length;
		var sum = 0;

		for (var i = 0; i < len; i++) {
			sum += Math.abs((v1[i] || 0) - (v2[i] || 0));
		}

		// Square root not really needed
		return sqrt ? Math.sqrt(sum) : sum;
	},


	/**
  * Unidimensional distance
  */
	dist: function dist(v1, v2, sqrt) {
		var d = Math.abs(v1 - v2);
		return sqrt ? d : d * d;
	}
};

var Distance$1 = distance$1,
    eudist$1 = Distance$1.eudist,
    dist = Distance$1.dist;

var kinit = {
	kmrand: function kmrand(data, k) {
		var map = {},
		    ks = [],
		    t = k << 2;
		var len = data.length;
		var multi = data[0].length > 0;

		while (ks.length < k && t-- > 0) {
			var d = data[Math.floor(Math.random() * len)];
			var key = multi ? d.join("_") : "" + d;
			if (!map[key]) {
				map[key] = true;
				ks.push(d);
			}
		}

		if (ks.length < k) throw new Error("Error initializating clusters");else return ks;
	},


	/**
  * K-means++ initial centroid selection
  */
	kmpp: function kmpp(data, k) {
		var distance = data[0].length ? eudist$1 : dist;
		var ks = [],
		    len = data.length;
		var multi = data[0].length > 0;
		var map = {};

		// First random centroid
		var c = data[Math.floor(Math.random() * len)];
		var key = multi ? c.join("_") : "" + c;
		ks.push(c);
		map[key] = true;

		// Retrieve next centroids
		while (ks.length < k) {
			// Min Distances between current centroids and data points
			var dists = [],
			    lk = ks.length;
			var dsum = 0,
			    prs = [];

			for (var i = 0; i < len; i++) {
				var min = Infinity;
				for (var j = 0; j < lk; j++) {
					var _dist = distance(data[i], ks[j]);
					if (_dist <= min) min = _dist;
				}
				dists[i] = min;
			}

			// Sum all min distances
			for (var _i = 0; _i < len; _i++) {
				dsum += dists[_i];
			}

			// Probabilities and cummulative prob (cumsum)
			for (var _i2 = 0; _i2 < len; _i2++) {
				prs[_i2] = { i: _i2, v: data[_i2], pr: dists[_i2] / dsum, cs: 0 };
			}

			// Sort Probabilities
			prs.sort(function (a, b) {
				return a.pr - b.pr;
			});

			// Cummulative Probabilities
			prs[0].cs = prs[0].pr;
			for (var _i3 = 1; _i3 < len; _i3++) {
				prs[_i3].cs = prs[_i3 - 1].cs + prs[_i3].pr;
			}

			// Randomize
			var rnd = Math.random();

			// Gets only the items whose cumsum >= rnd
			var idx = 0;
			while (idx < len - 1 && prs[idx++].cs < rnd) {}
			ks.push(prs[idx - 1].v);
			/*
   let done = false;
   while(!done) {
   	// this is our new centroid
   	c = prs[idx-1].v
   	key = multi? c.join("_") : `${c}`;
   	if(!map[key]) {
   		map[key] = true;
   		ks.push(c);
   		done = true;
   	}
   	else {
   		idx++;
   	}
   }
   */
		}

		return ks;
	}
};

/*jshint esversion: 6 */

var Distance = distance$1,
    ClusterInit = kinit,
    eudist = Distance.eudist,
    kmrand = ClusterInit.kmrand,
    kmpp = ClusterInit.kmpp;

var MAX = 10000;

/**
 * Inits an array with values
 */
function init(len, val, v) {
	v = v || [];
	for (var i = 0; i < len; i++) {
		v[i] = val;
	}return v;
}

function skmeans(data, k, initial, maxit) {
	var ks = [],
	    old = [],
	    idxs = [],
	    dist = [];
	var conv = false,
	    it = maxit || MAX;
	var len = data.length,
	    vlen = data[0].length,
	    multi = vlen > 0;
	var count = [];

	if (!initial) {
		var _idxs = {};
		while (ks.length < k) {
			var idx = Math.floor(Math.random() * len);
			if (!_idxs[idx]) {
				_idxs[idx] = true;
				ks.push(data[idx]);
			}
		}
	} else if (initial == "kmrand") {
		ks = kmrand(data, k);
	} else if (initial == "kmpp") {
		ks = kmpp(data, k);
	} else {
		ks = initial;
	}

	do {
		// Reset k count
		init(k, 0, count);

		// For each value in data, find the nearest centroid
		for (var i = 0; i < len; i++) {
			var min = Infinity,
			    _idx = 0;
			for (var j = 0; j < k; j++) {
				// Multidimensional or unidimensional
				var dist = multi ? eudist(data[i], ks[j]) : Math.abs(data[i] - ks[j]);
				if (dist <= min) {
					min = dist;
					_idx = j;
				}
			}
			idxs[i] = _idx; // Index of the selected centroid for that value
			count[_idx]++; // Number of values for this centroid
		}

		// Recalculate centroids
		var sum = [],
		    old = [];
		for (var _j = 0; _j < k; _j++) {
			// Multidimensional or unidimensional
			sum[_j] = multi ? init(vlen, 0, sum[_j]) : 0;
			old[_j] = ks[_j];
		}

		// If multidimensional
		if (multi) {
			for (var _j2 = 0; _j2 < k; _j2++) {
				ks[_j2] = [];
			} // Sum values and count for each centroid
			for (var _i = 0; _i < len; _i++) {
				var _idx2 = idxs[_i],
				    // Centroid for that item
				vsum = sum[_idx2],
				    // Sum values for this centroid
				vect = data[_i]; // Current vector

				// Accumulate value on the centroid for current vector
				for (var h = 0; h < vlen; h++) {
					vsum[h] += vect[h];
				}
			}
			// Calculate the average for each centroid
			conv = true;
			for (var _j3 = 0; _j3 < k; _j3++) {
				var ksj = ks[_j3],
				    // Current centroid
				sumj = sum[_j3],
				    // Accumulated centroid values
				oldj = old[_j3],
				    // Old centroid value
				cj = count[_j3]; // Number of elements for this centroid

				// New average
				for (var _h = 0; _h < vlen; _h++) {
					ksj[_h] = sumj[_h] / cj || 0; // New centroid
				}

				// Find if centroids have moved
				if (conv) {
					for (var _h2 = 0; _h2 < vlen; _h2++) {
						if (oldj[_h2] != ksj[_h2]) {
							conv = false;
							break;
						}
					}
				}
			}
		}
		// If unidimensional
		else {
				// Sum values and count for each centroid
				for (var _i2 = 0; _i2 < len; _i2++) {
					var _idx3 = idxs[_i2];
					sum[_idx3] += data[_i2];
				}
				// Calculate the average for each centroid
				for (var _j4 = 0; _j4 < k; _j4++) {
					ks[_j4] = sum[_j4] / count[_j4] || 0; // New centroid
				}
				// Find if centroids have moved
				conv = true;
				for (var _j5 = 0; _j5 < k; _j5++) {
					if (old[_j5] != ks[_j5]) {
						conv = false;
						break;
					}
				}
			}

		conv = conv || --it <= 0;
	} while (!conv);

	return {
		it: MAX - it,
		k: k,
		idxs: idxs,
		centroids: ks
	};
}

var main = skmeans;

/**
 * Takes a set of {@link Point|points} and partition them into clusters using the k-mean .
 * It uses the [k-means algorithm](https://en.wikipedia.org/wiki/K-means_clustering)
 *
 * @name clustersKmeans
 * @param {FeatureCollection<Point>} points to be clustered
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.numberOfClusters=Math.sqrt(numberOfPoints/2)] numberOfClusters that will be generated
 * @param {boolean} [options.mutate=false] allows GeoJSON input to be mutated (significant performance increase if true)
 * @returns {FeatureCollection<Point>} Clustered Points with an additional two properties associated to each Feature:
 * - {number} cluster - the associated clusterId
 * - {[number, number]} centroid - Centroid of the cluster [Longitude, Latitude]
 * @example
 * // create random points with random z-values in their properties
 * var points = turf.randomPoint(100, {bbox: [0, 30, 20, 50]});
 * var options = {numberOfClusters: 7};
 * var clustered = turf.clustersKmeans(points, options);
 *
 * //addToMap
 * var addToMap = [clustered];
 */
function clustersKmeans(points, options) {
    if (options === void 0) { options = {}; }
    // Default Params
    var count = points.features.length;
    options.numberOfClusters =
        options.numberOfClusters || Math.round(Math.sqrt(count / 2));
    // numberOfClusters can't be greater than the number of points
    // fallbacks to count
    if (options.numberOfClusters > count)
        options.numberOfClusters = count;
    // Clone points to prevent any mutations (enabled by default)
    if (options.mutate !== true)
        points = clone(points);
    // collect points coordinates
    var data = coordAll(points);
    // create seed to avoid skmeans to drift
    var initialCentroids = data.slice(0, options.numberOfClusters);
    // create skmeans clusters
    var skmeansResult = main(data, options.numberOfClusters, initialCentroids);
    // store centroids {clusterId: [number, number]}
    var centroids = {};
    skmeansResult.centroids.forEach(function (coord, idx) {
        centroids[idx] = coord;
    });
    // add associated cluster number
    featureEach(points, function (point, index) {
        var clusterId = skmeansResult.idxs[index];
        point.properties.cluster = clusterId;
        point.properties.centroid = centroids[clusterId];
    });
    return points;
}

/**
 * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
 *
 * @name getCoord
 * @param {Array<number>|Geometry<Point>|Feature<Point>} coord GeoJSON Point or an Array of numbers
 * @returns {Array<number>} coordinates
 * @example
 * var pt = turf.point([10, 10]);
 *
 * var coord = turf.getCoord(pt);
 * //= [10, 10]
 */
function getCoord(coord) {
    if (!coord) {
        throw new Error("coord is required");
    }
    if (!Array.isArray(coord)) {
        if (coord.type === "Feature" &&
            coord.geometry !== null &&
            coord.geometry.type === "Point") {
            return coord.geometry.coordinates;
        }
        if (coord.type === "Point") {
            return coord.coordinates;
        }
    }
    if (Array.isArray(coord) &&
        coord.length >= 2 &&
        !Array.isArray(coord[0]) &&
        !Array.isArray(coord[1])) {
        return coord;
    }
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
}

//http://en.wikipedia.org/wiki/Haversine_formula
//http://www.movable-type.co.uk/scripts/latlong.html
/**
 * Calculates the distance between two {@link Point|points} in degrees, radians, miles, or kilometers.
 * This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
 *
 * @name distance
 * @param {Coord | Point} from origin point or coordinate
 * @param {Coord | Point} to destination point or coordinate
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
 * @returns {number} distance between the two points
 * @example
 * var from = turf.point([-75.343, 39.984]);
 * var to = turf.point([-75.534, 39.123]);
 * var options = {units: 'miles'};
 *
 * var distance = turf.distance(from, to, options);
 *
 * //addToMap
 * var addToMap = [from, to];
 * from.properties.distance = distance;
 * to.properties.distance = distance;
 */
function distance(from, to, options) {
    if (options === void 0) { options = {}; }
    var coordinates1 = getCoord(from);
    var coordinates2 = getCoord(to);
    var dLat = degreesToRadians(coordinates2[1] - coordinates1[1]);
    var dLon = degreesToRadians(coordinates2[0] - coordinates1[0]);
    var lat1 = degreesToRadians(coordinates1[1]);
    var lat2 = degreesToRadians(coordinates2[1]);
    var a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    return radiansToLength(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), options.units);
}

var lib = {exports: {}};

var DBSCAN = {exports: {}};

/**
 * DBSCAN - Density based clustering
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */

(function (module) {
/**
 * DBSCAN class construcotr
 * @constructor
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distanceFunction
 * @returns {DBSCAN}
 */
function DBSCAN(dataset, epsilon, minPts, distanceFunction) {
  /** @type {Array} */
  this.dataset = [];
  /** @type {number} */
  this.epsilon = 1;
  /** @type {number} */
  this.minPts = 2;
  /** @type {function} */
  this.distance = this._euclideanDistance;
  /** @type {Array} */
  this.clusters = [];
  /** @type {Array} */
  this.noise = [];

  // temporary variables used during computation

  /** @type {Array} */
  this._visited = [];
  /** @type {Array} */
  this._assigned = [];
  /** @type {number} */
  this._datasetLength = 0;

  this._init(dataset, epsilon, minPts, distanceFunction);
}
/******************************************************************************/
// public functions

/**
 * Start clustering
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distanceFunction
 * @returns {undefined}
 * @access public
 */
DBSCAN.prototype.run = function(dataset, epsilon, minPts, distanceFunction) {
  this._init(dataset, epsilon, minPts, distanceFunction);

  for (var pointId = 0; pointId < this._datasetLength; pointId++) {
    // if point is not visited, check if it forms a cluster
    if (this._visited[pointId] !== 1) {
      this._visited[pointId] = 1;

      // if closest neighborhood is too small to form a cluster, mark as noise
      var neighbors = this._regionQuery(pointId);

      if (neighbors.length < this.minPts) {
        this.noise.push(pointId);
      } else {
        // create new cluster and add point
        var clusterId = this.clusters.length;
        this.clusters.push([]);
        this._addToCluster(pointId, clusterId);

        this._expandCluster(clusterId, neighbors);
      }
    }
  }

  return this.clusters;
};

/******************************************************************************/
// protected functions

/**
 * Set object properties
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distance
 * @returns {undefined}
 * @access protected
 */
DBSCAN.prototype._init = function(dataset, epsilon, minPts, distance) {

  if (dataset) {

    if (!(dataset instanceof Array)) {
      throw Error('Dataset must be of type array, ' +
        typeof dataset + ' given');
    }

    this.dataset = dataset;
    this.clusters = [];
    this.noise = [];

    this._datasetLength = dataset.length;
    this._visited = new Array(this._datasetLength);
    this._assigned = new Array(this._datasetLength);
  }

  if (epsilon) {
    this.epsilon = epsilon;
  }

  if (minPts) {
    this.minPts = minPts;
  }

  if (distance) {
    this.distance = distance;
  }
};

/**
 * Expand cluster to closest points of given neighborhood
 *
 * @param {number} clusterId
 * @param {Array} neighbors
 * @returns {undefined}
 * @access protected
 */
DBSCAN.prototype._expandCluster = function(clusterId, neighbors) {

  /**
   * It's very important to calculate length of neighbors array each time,
   * as the number of elements changes over time
   */
  for (var i = 0; i < neighbors.length; i++) {
    var pointId2 = neighbors[i];

    if (this._visited[pointId2] !== 1) {
      this._visited[pointId2] = 1;
      var neighbors2 = this._regionQuery(pointId2);

      if (neighbors2.length >= this.minPts) {
        neighbors = this._mergeArrays(neighbors, neighbors2);
      }
    }

    // add to cluster
    if (this._assigned[pointId2] !== 1) {
      this._addToCluster(pointId2, clusterId);
    }
  }
};

/**
 * Add new point to cluster
 *
 * @param {number} pointId
 * @param {number} clusterId
 */
DBSCAN.prototype._addToCluster = function(pointId, clusterId) {
  this.clusters[clusterId].push(pointId);
  this._assigned[pointId] = 1;
};

/**
 * Find all neighbors around given point
 *
 * @param {number} pointId,
 * @param {number} epsilon
 * @returns {Array}
 * @access protected
 */
DBSCAN.prototype._regionQuery = function(pointId) {
  var neighbors = [];

  for (var id = 0; id < this._datasetLength; id++) {
    var dist = this.distance(this.dataset[pointId], this.dataset[id]);
    if (dist < this.epsilon) {
      neighbors.push(id);
    }
  }

  return neighbors;
};

/******************************************************************************/
// helpers

/**
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 * @access protected
 */
DBSCAN.prototype._mergeArrays = function(a, b) {
  var len = b.length;

  for (var i = 0; i < len; i++) {
    var P = b[i];
    if (a.indexOf(P) < 0) {
      a.push(P);
    }
  }

  return a;
};

/**
 * Calculate euclidean distance in multidimensional space
 *
 * @param {Array} p
 * @param {Array} q
 * @returns {number}
 * @access protected
 */
DBSCAN.prototype._euclideanDistance = function(p, q) {
  var sum = 0;
  var i = Math.min(p.length, q.length);

  while (i--) {
    sum += (p[i] - q[i]) * (p[i] - q[i]);
  }

  return Math.sqrt(sum);
};

if (module.exports) {
  module.exports = DBSCAN;
}
}(DBSCAN));

var KMEANS = {exports: {}};

(function (module) {
/**
 * KMEANS clustering
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */

/**
 * KMEANS class constructor
 * @constructor
 *
 * @param {Array} dataset
 * @param {number} k - number of clusters
 * @param {function} distance - distance function
 * @returns {KMEANS}
 */
 function KMEANS(dataset, k, distance) {
  this.k = 3; // number of clusters
  this.dataset = []; // set of feature vectors
  this.assignments = []; // set of associated clusters for each feature vector
  this.centroids = []; // vectors for our clusters

  this.init(dataset, k, distance);
}

/**
 * @returns {undefined}
 */
KMEANS.prototype.init = function(dataset, k, distance) {
  this.assignments = [];
  this.centroids = [];

  if (typeof dataset !== 'undefined') {
    this.dataset = dataset;
  }

  if (typeof k !== 'undefined') {
    this.k = k;
  }

  if (typeof distance !== 'undefined') {
    this.distance = distance;
  }
};

/**
 * @returns {undefined}
 */
KMEANS.prototype.run = function(dataset, k) {
  this.init(dataset, k);

  var len = this.dataset.length;

  // initialize centroids
  for (var i = 0; i < this.k; i++) {
    this.centroids[i] = this.randomCentroid();
	}

  var change = true;
  while(change) {

    // assign feature vectors to clusters
    change = this.assign();

    // adjust location of centroids
    for (var centroidId = 0; centroidId < this.k; centroidId++) {
      var mean = new Array(maxDim);
      var count = 0;

      // init mean vector
      for (var dim = 0; dim < maxDim; dim++) {
        mean[dim] = 0;
      }

      for (var j = 0; j < len; j++) {
        var maxDim = this.dataset[j].length;

        // if current cluster id is assigned to point
        if (centroidId === this.assignments[j]) {
          for (var dim = 0; dim < maxDim; dim++) {
            mean[dim] += this.dataset[j][dim];
          }
          count++;
        }
      }

      if (count > 0) {
        // if cluster contain points, adjust centroid position
        for (var dim = 0; dim < maxDim; dim++) {
          mean[dim] /= count;
        }
        this.centroids[centroidId] = mean;
      } else {
        // if cluster is empty, generate new random centroid
        this.centroids[centroidId] = this.randomCentroid();
        change = true;
      }
    }
  }

  return this.getClusters();
};

/**
 * Generate random centroid
 *
 * @returns {Array}
 */
KMEANS.prototype.randomCentroid = function() {
  var maxId = this.dataset.length -1;
  var centroid;
  var id;

  do {
    id = Math.round(Math.random() * maxId);
    centroid = this.dataset[id];
  } while (this.centroids.indexOf(centroid) >= 0);

  return centroid;
};

/**
 * Assign points to clusters
 *
 * @returns {boolean}
 */
KMEANS.prototype.assign = function() {
  var change = false;
  var len = this.dataset.length;
  var closestCentroid;

  for (var i = 0; i < len; i++) {
    closestCentroid = this.argmin(this.dataset[i], this.centroids, this.distance);

    if (closestCentroid != this.assignments[i]) {
      this.assignments[i] = closestCentroid;
      change = true;
    }
  }

  return change;
};

/**
 * Extract information about clusters
 *
 * @returns {undefined}
 */
KMEANS.prototype.getClusters = function() {
  var clusters = new Array(this.k);
  var centroidId;

  for (var pointId = 0; pointId < this.assignments.length; pointId++) {
    centroidId = this.assignments[pointId];

    // init empty cluster
    if (typeof clusters[centroidId] === 'undefined') {
      clusters[centroidId] = [];
    }

    clusters[centroidId].push(pointId);
  }

  return clusters;
};

// utils

/**
 * @params {Array} point
 * @params {Array.<Array>} set
 * @params {Function} f
 * @returns {number}
 */
KMEANS.prototype.argmin = function(point, set, f) {
  var min = Number.MAX_VALUE;
  var arg = 0;
  var len = set.length;
  var d;

  for (var i = 0; i < len; i++) {
    d = f(point, set[i]);
    if (d < min) {
      min = d;
      arg = i;
    }
  }

  return arg;
};

/**
 * Euclidean distance
 *
 * @params {number} p
 * @params {number} q
 * @returns {number}
 */
KMEANS.prototype.distance = function(p, q) {
  var sum = 0;
  var i = Math.min(p.length, q.length);

  while (i--) {
    var diff = p[i] - q[i];
    sum += diff * diff;
  }

  return Math.sqrt(sum);
};

if (module.exports) {
  module.exports = KMEANS;
}
}(KMEANS));

var OPTICS = {exports: {}};

var PriorityQueue = {exports: {}};

/**
 * PriorityQueue
 * Elements in this queue are sorted according to their value
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */

(function (module) {
/**
 * PriorityQueue class construcotr
 * @constructor
 *
 * @example
 * queue: [1,2,3,4]
 * priorities: [4,1,2,3]
 * > result = [1,4,2,3]
 *
 * @param {Array} elements
 * @param {Array} priorities
 * @param {string} sorting - asc / desc
 * @returns {PriorityQueue}
 */
function PriorityQueue(elements, priorities, sorting) {
  /** @type {Array} */
  this._queue = [];
  /** @type {Array} */
  this._priorities = [];
  /** @type {string} */
  this._sorting = 'desc';

  this._init(elements, priorities, sorting);
}
/**
 * Insert element
 *
 * @param {Object} ele
 * @param {Object} priority
 * @returns {undefined}
 * @access public
 */
PriorityQueue.prototype.insert = function(ele, priority) {
  var indexToInsert = this._queue.length;
  var index = indexToInsert;

  while (index--) {
    var priority2 = this._priorities[index];
    if (this._sorting === 'desc') {
      if (priority > priority2) {
        indexToInsert = index;
      }
    } else {
      if (priority < priority2) {
        indexToInsert = index;
      }
    }
  }

  this._insertAt(ele, priority, indexToInsert);
};

/**
 * Remove element
 *
 * @param {Object} ele
 * @returns {undefined}
 * @access public
 */
PriorityQueue.prototype.remove = function(ele) {
  var index = this._queue.length;

  while (index--) {
    var ele2 = this._queue[index];
    if (ele === ele2) {
      this._queue.splice(index, 1);
      this._priorities.splice(index, 1);
      break;
    }
  }
};

/**
 * For each loop wrapper
 *
 * @param {function} func
 * @returs {undefined}
 * @access public
 */
PriorityQueue.prototype.forEach = function(func) {
  this._queue.forEach(func);
};

/**
 * @returns {Array}
 * @access public
 */
PriorityQueue.prototype.getElements = function() {
  return this._queue;
};

/**
 * @param {number} index
 * @returns {Object}
 * @access public
 */
PriorityQueue.prototype.getElementPriority = function(index) {
  return this._priorities[index];
};

/**
 * @returns {Array}
 * @access public
 */
PriorityQueue.prototype.getPriorities = function() {
  return this._priorities;
};

/**
 * @returns {Array}
 * @access public
 */
PriorityQueue.prototype.getElementsWithPriorities = function() {
  var result = [];

  for (var i = 0, l = this._queue.length; i < l; i++) {
    result.push([this._queue[i], this._priorities[i]]);
  }

  return result;
};

/**
 * Set object properties
 *
 * @param {Array} elements
 * @param {Array} priorities
 * @returns {undefined}
 * @access protected
 */
PriorityQueue.prototype._init = function(elements, priorities, sorting) {

  if (elements && priorities) {
    this._queue = [];
    this._priorities = [];

    if (elements.length !== priorities.length) {
      throw new Error('Arrays must have the same length');
    }

    for (var i = 0; i < elements.length; i++) {
      this.insert(elements[i], priorities[i]);
    }
  }

  if (sorting) {
    this._sorting = sorting;
  }
};

/**
 * Insert element at given position
 *
 * @param {Object} ele
 * @param {number} index
 * @returns {undefined}
 * @access protected
 */
PriorityQueue.prototype._insertAt = function(ele, priority, index) {
  if (this._queue.length === index) {
    this._queue.push(ele);
    this._priorities.push(priority);
  } else {
    this._queue.splice(index, 0, ele);
    this._priorities.splice(index, 0, priority);
  }
};

if (module.exports) {
  module.exports = PriorityQueue;
}
}(PriorityQueue));

(function (module) {
/**
 * @requires ./PriorityQueue.js
 */

if (module.exports) {
      var PriorityQueue$1 = PriorityQueue.exports;
}

/**
 * OPTICS - Ordering points to identify the clustering structure
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */

/**
 * OPTICS class constructor
 * @constructor
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distanceFunction
 * @returns {OPTICS}
 */
function OPTICS(dataset, epsilon, minPts, distanceFunction) {
  /** @type {number} */
  this.epsilon = 1;
  /** @type {number} */
  this.minPts = 1;
  /** @type {function} */
  this.distance = this._euclideanDistance;

  // temporary variables used during computation

  /** @type {Array} */
  this._reachability = [];
  /** @type {Array} */
  this._processed = [];
  /** @type {number} */
  this._coreDistance = 0;
  /** @type {Array} */
  this._orderedList = [];

  this._init(dataset, epsilon, minPts, distanceFunction);
}

/******************************************************************************/
// pulic functions

/**
 * Start clustering
 *
 * @param {Array} dataset
 * @returns {undefined}
 * @access public
 */
OPTICS.prototype.run = function(dataset, epsilon, minPts, distanceFunction) {
  this._init(dataset, epsilon, minPts, distanceFunction);

  for (var pointId = 0, l = this.dataset.length; pointId < l; pointId++) {
    if (this._processed[pointId] !== 1) {
      this._processed[pointId] = 1;
      this.clusters.push([pointId]);
      var clusterId = this.clusters.length - 1;

      this._orderedList.push(pointId);
      var priorityQueue = new PriorityQueue$1(null, null, 'asc');
      var neighbors = this._regionQuery(pointId);

      // using priority queue assign elements to new cluster
      if (this._distanceToCore(pointId) !== undefined) {
        this._updateQueue(pointId, neighbors, priorityQueue);
        this._expandCluster(clusterId, priorityQueue);
      }
    }
  }

  return this.clusters;
};

/**
 * Generate reachability plot for all points
 *
 * @returns {array}
 * @access public
 */
OPTICS.prototype.getReachabilityPlot = function() {
  var reachabilityPlot = [];

  for (var i = 0, l = this._orderedList.length; i < l; i++) {
    var pointId = this._orderedList[i];
    var distance = this._reachability[pointId];

    reachabilityPlot.push([pointId, distance]);
  }

  return reachabilityPlot;
};

/******************************************************************************/
// protected functions

/**
 * Set object properties
 *
 * @param {Array} dataset
 * @param {number} epsilon
 * @param {number} minPts
 * @param {function} distance
 * @returns {undefined}
 * @access protected
 */
OPTICS.prototype._init = function(dataset, epsilon, minPts, distance) {

  if (dataset) {

    if (!(dataset instanceof Array)) {
      throw Error('Dataset must be of type array, ' +
        typeof dataset + ' given');
    }

    this.dataset = dataset;
    this.clusters = [];
    this._reachability = new Array(this.dataset.length);
    this._processed = new Array(this.dataset.length);
    this._coreDistance = 0;
    this._orderedList = [];
  }

  if (epsilon) {
    this.epsilon = epsilon;
  }

  if (minPts) {
    this.minPts = minPts;
  }

  if (distance) {
    this.distance = distance;
  }
};

/**
 * Update information in queue
 *
 * @param {number} pointId
 * @param {Array} neighbors
 * @param {PriorityQueue} queue
 * @returns {undefined}
 * @access protected
 */
OPTICS.prototype._updateQueue = function(pointId, neighbors, queue) {
  var self = this;

  this._coreDistance = this._distanceToCore(pointId);
  neighbors.forEach(function(pointId2) {
    if (self._processed[pointId2] === undefined) {
      var dist = self.distance(self.dataset[pointId], self.dataset[pointId2]);
      var newReachableDistance = Math.max(self._coreDistance, dist);

      if (self._reachability[pointId2] === undefined) {
        self._reachability[pointId2] = newReachableDistance;
        queue.insert(pointId2, newReachableDistance);
      } else {
        if (newReachableDistance < self._reachability[pointId2]) {
          self._reachability[pointId2] = newReachableDistance;
          queue.remove(pointId2);
          queue.insert(pointId2, newReachableDistance);
        }
      }
    }
  });
};

/**
 * Expand cluster
 *
 * @param {number} clusterId
 * @param {PriorityQueue} queue
 * @returns {undefined}
 * @access protected
 */
OPTICS.prototype._expandCluster = function(clusterId, queue) {
  var queueElements = queue.getElements();

  for (var p = 0, l = queueElements.length; p < l; p++) {
    var pointId = queueElements[p];
    if (this._processed[pointId] === undefined) {
      var neighbors = this._regionQuery(pointId);
      this._processed[pointId] = 1;

      this.clusters[clusterId].push(pointId);
      this._orderedList.push(pointId);

      if (this._distanceToCore(pointId) !== undefined) {
        this._updateQueue(pointId, neighbors, queue);
        this._expandCluster(clusterId, queue);
      }
    }
  }
};

/**
 * Calculating distance to cluster core
 *
 * @param {number} pointId
 * @returns {number}
 * @access protected
 */
OPTICS.prototype._distanceToCore = function(pointId) {
  var l = this.epsilon;
  for (var coreDistCand = 0; coreDistCand < l; coreDistCand++) {
    var neighbors = this._regionQuery(pointId, coreDistCand);
    if (neighbors.length >= this.minPts) {
      return coreDistCand;
    }
  }

  return;
};

/**
 * Find all neighbors around given point
 *
 * @param {number} pointId
 * @param {number} epsilon
 * @returns {Array}
 * @access protected
 */
OPTICS.prototype._regionQuery = function(pointId, epsilon) {
  epsilon = epsilon || this.epsilon;
  var neighbors = [];

  for (var id = 0, l = this.dataset.length; id < l; id++) {
    if (this.distance(this.dataset[pointId], this.dataset[id]) < epsilon) {
      neighbors.push(id);
    }
  }

  return neighbors;
};

/******************************************************************************/
// helpers

/**
 * Calculate euclidean distance in multidimensional space
 *
 * @param {Array} p
 * @param {Array} q
 * @returns {number}
 * @access protected
 */
OPTICS.prototype._euclideanDistance = function(p, q) {
  var sum = 0;
  var i = Math.min(p.length, q.length);

  while (i--) {
    sum += (p[i] - q[i]) * (p[i] - q[i]);
  }

  return Math.sqrt(sum);
};

if (module.exports) {
  module.exports = OPTICS;
}
}(OPTICS));

(function (module) {
if (module.exports) {
    module.exports = {
      DBSCAN: DBSCAN.exports,
      KMEANS: KMEANS.exports,
      OPTICS: OPTICS.exports,
      PriorityQueue: PriorityQueue.exports
    };
}
}(lib));

var clustering = lib.exports;

/**
 * Takes a set of {@link Point|points} and partition them into clusters according to {@link DBSCAN's|https://en.wikipedia.org/wiki/DBSCAN} data clustering algorithm.
 *
 * @name clustersDbscan
 * @param {FeatureCollection<Point>} points to be clustered
 * @param {number} maxDistance Maximum Distance between any point of the cluster to generate the clusters (kilometers only)
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units="kilometers"] in which `maxDistance` is expressed, can be degrees, radians, miles, or kilometers
 * @param {boolean} [options.mutate=false] Allows GeoJSON input to be mutated
 * @param {number} [options.minPoints=3] Minimum number of points to generate a single cluster,
 * points which do not meet this requirement will be classified as an 'edge' or 'noise'.
 * @returns {FeatureCollection<Point>} Clustered Points with an additional two properties associated to each Feature:
 * - {number} cluster - the associated clusterId
 * - {string} dbscan - type of point it has been classified as ('core'|'edge'|'noise')
 * @example
 * // create random points with random z-values in their properties
 * var points = turf.randomPoint(100, {bbox: [0, 30, 20, 50]});
 * var maxDistance = 100;
 * var clustered = turf.clustersDbscan(points, maxDistance);
 *
 * //addToMap
 * var addToMap = [clustered];
 */
function clustersDbscan(points, maxDistance, options) {
    // Input validation being handled by Typescript
    // collectionOf(points, 'Point', 'points must consist of a FeatureCollection of only Points');
    // if (maxDistance === null || maxDistance === undefined) throw new Error('maxDistance is required');
    // if (!(Math.sign(maxDistance) > 0)) throw new Error('maxDistance is invalid');
    // if (!(minPoints === undefined || minPoints === null || Math.sign(minPoints) > 0)) throw new Error('options.minPoints is invalid');
    if (options === void 0) { options = {}; }
    // Clone points to prevent any mutations
    if (options.mutate !== true)
        points = clone(points);
    // Defaults
    options.minPoints = options.minPoints || 3;
    // create clustered ids
    var dbscan = new clustering.DBSCAN();
    var clusteredIds = dbscan.run(coordAll(points), convertLength(maxDistance, options.units), options.minPoints, distance);
    // Tag points to Clusters ID
    var clusterId = -1;
    clusteredIds.forEach(function (clusterIds) {
        clusterId++;
        // assign cluster ids to input points
        clusterIds.forEach(function (idx) {
            var clusterPoint = points.features[idx];
            if (!clusterPoint.properties)
                clusterPoint.properties = {};
            clusterPoint.properties.cluster = clusterId;
            clusterPoint.properties.dbscan = "core";
        });
    });
    // handle noise points, if any
    // edges points are tagged by DBSCAN as both 'noise' and 'cluster' as they can "reach" less than 'minPoints' number of points
    dbscan.noise.forEach(function (noiseId) {
        var noisePoint = points.features[noiseId];
        if (!noisePoint.properties)
            noisePoint.properties = {};
        if (noisePoint.properties.cluster)
            noisePoint.properties.dbscan = "edge";
        else
            noisePoint.properties.dbscan = "noise";
    });
    return points;
}

var supercluster = {exports: {}};

(function (module, exports) {
(function (global, factory) {
module.exports = factory() ;
})(commonjsGlobal, (function () {
function sortKD(ids, coords, nodeSize, left, right, depth) {
    if (right - left <= nodeSize) { return; }

    var m = (left + right) >> 1;

    select(ids, coords, m, left, right, depth % 2);

    sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
    sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
}

function select(ids, coords, k, left, right, inc) {

    while (right > left) {
        if (right - left > 600) {
            var n = right - left + 1;
            var m = k - left + 1;
            var z = Math.log(n);
            var s = 0.5 * Math.exp(2 * z / 3);
            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            select(ids, coords, k, newLeft, newRight, inc);
        }

        var t = coords[2 * k + inc];
        var i = left;
        var j = right;

        swapItem(ids, coords, left, k);
        if (coords[2 * right + inc] > t) { swapItem(ids, coords, left, right); }

        while (i < j) {
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while (coords[2 * i + inc] < t) { i++; }
            while (coords[2 * j + inc] > t) { j--; }
        }

        if (coords[2 * left + inc] === t) { swapItem(ids, coords, left, j); }
        else {
            j++;
            swapItem(ids, coords, j, right);
        }

        if (j <= k) { left = j + 1; }
        if (k <= j) { right = j - 1; }
    }
}

function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var x, y;

    while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();

        if (right - left <= nodeSize) {
            for (var i = left; i <= right; i++) {
                x = coords[2 * i];
                y = coords[2 * i + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) { result.push(ids[i]); }
            }
            continue;
        }

        var m = Math.floor((left + right) / 2);

        x = coords[2 * m];
        y = coords[2 * m + 1];

        if (x >= minX && x <= maxX && y >= minY && y <= maxY) { result.push(ids[m]); }

        var nextAxis = (axis + 1) % 2;

        if (axis === 0 ? minX <= x : minY <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

function within(ids, coords, qx, qy, r, nodeSize) {
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var r2 = r * r;

    while (stack.length) {
        var axis = stack.pop();
        var right = stack.pop();
        var left = stack.pop();

        if (right - left <= nodeSize) {
            for (var i = left; i <= right; i++) {
                if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) { result.push(ids[i]); }
            }
            continue;
        }

        var m = Math.floor((left + right) / 2);

        var x = coords[2 * m];
        var y = coords[2 * m + 1];

        if (sqDist(x, y, qx, qy) <= r2) { result.push(ids[m]); }

        var nextAxis = (axis + 1) % 2;

        if (axis === 0 ? qx - r <= x : qy - r <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

function sqDist(ax, ay, bx, by) {
    var dx = ax - bx;
    var dy = ay - by;
    return dx * dx + dy * dy;
}

var defaultGetX = function (p) { return p[0]; };
var defaultGetY = function (p) { return p[1]; };

var KDBush = function KDBush(points, getX, getY, nodeSize, ArrayType) {
    if ( getX === void 0 ) getX = defaultGetX;
    if ( getY === void 0 ) getY = defaultGetY;
    if ( nodeSize === void 0 ) nodeSize = 64;
    if ( ArrayType === void 0 ) ArrayType = Float64Array;

    this.nodeSize = nodeSize;
    this.points = points;

    var IndexArrayType = points.length < 65536 ? Uint16Array : Uint32Array;

    var ids = this.ids = new IndexArrayType(points.length);
    var coords = this.coords = new ArrayType(points.length * 2);

    for (var i = 0; i < points.length; i++) {
        ids[i] = i;
        coords[2 * i] = getX(points[i]);
        coords[2 * i + 1] = getY(points[i]);
    }

    sortKD(ids, coords, nodeSize, 0, ids.length - 1, 0);
};

KDBush.prototype.range = function range$1 (minX, minY, maxX, maxY) {
    return range(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
};

KDBush.prototype.within = function within$1 (x, y, r) {
    return within(this.ids, this.coords, x, y, r, this.nodeSize);
};

var defaultOptions = {
    minZoom: 0,   // min zoom to generate clusters on
    maxZoom: 16,  // max zoom level to cluster the points on
    minPoints: 2, // minimum points to form a cluster
    radius: 40,   // cluster radius in pixels
    extent: 512,  // tile extent (radius is calculated relative to it)
    nodeSize: 64, // size of the KD-tree leaf node, affects performance
    log: false,   // whether to log timing info

    // whether to generate numeric ids for input features (in vector tiles)
    generateId: false,

    // a reduce function for calculating custom cluster properties
    reduce: null, // (accumulated, props) => { accumulated.sum += props.sum; }

    // properties to use for individual points when running the reducer
    map: function (props) { return props; } // props => ({sum: props.my_value})
};

var fround = Math.fround || (function (tmp) { return (function (x) { tmp[0] = +x; return tmp[0]; }); })(new Float32Array(1));

var Supercluster = function Supercluster(options) {
    this.options = extend(Object.create(defaultOptions), options);
    this.trees = new Array(this.options.maxZoom + 1);
};

Supercluster.prototype.load = function load (points) {
    var ref = this.options;
        var log = ref.log;
        var minZoom = ref.minZoom;
        var maxZoom = ref.maxZoom;
        var nodeSize = ref.nodeSize;

    if (log) { console.time('total time'); }

    var timerId = "prepare " + (points.length) + " points";
    if (log) { console.time(timerId); }

    this.points = points;

    // generate a cluster object for each point and index input points into a KD-tree
    var clusters = [];
    for (var i = 0; i < points.length; i++) {
        if (!points[i].geometry) { continue; }
        clusters.push(createPointCluster(points[i], i));
    }
    this.trees[maxZoom + 1] = new KDBush(clusters, getX, getY, nodeSize, Float32Array);

    if (log) { console.timeEnd(timerId); }

    // cluster points on max zoom, then cluster the results on previous zoom, etc.;
    // results in a cluster hierarchy across zoom levels
    for (var z = maxZoom; z >= minZoom; z--) {
        var now = +Date.now();

        // create a new set of clusters for the zoom and index them with a KD-tree
        clusters = this._cluster(clusters, z);
        this.trees[z] = new KDBush(clusters, getX, getY, nodeSize, Float32Array);

        if (log) { console.log('z%d: %d clusters in %dms', z, clusters.length, +Date.now() - now); }
    }

    if (log) { console.timeEnd('total time'); }

    return this;
};

Supercluster.prototype.getClusters = function getClusters (bbox, zoom) {
    var minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
    var minLat = Math.max(-90, Math.min(90, bbox[1]));
    var maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
    var maxLat = Math.max(-90, Math.min(90, bbox[3]));

    if (bbox[2] - bbox[0] >= 360) {
        minLng = -180;
        maxLng = 180;
    } else if (minLng > maxLng) {
        var easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
        var westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
        return easternHem.concat(westernHem);
    }

    var tree = this.trees[this._limitZoom(zoom)];
    var ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
    var clusters = [];
    for (var i = 0, list = ids; i < list.length; i += 1) {
        var id = list[i];

            var c = tree.points[id];
        clusters.push(c.numPoints ? getClusterJSON(c) : this.points[c.index]);
    }
    return clusters;
};

Supercluster.prototype.getChildren = function getChildren (clusterId) {
    var originId = this._getOriginId(clusterId);
    var originZoom = this._getOriginZoom(clusterId);
    var errorMsg = 'No cluster with the specified id.';

    var index = this.trees[originZoom];
    if (!index) { throw new Error(errorMsg); }

    var origin = index.points[originId];
    if (!origin) { throw new Error(errorMsg); }

    var r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
    var ids = index.within(origin.x, origin.y, r);
    var children = [];
    for (var i = 0, list = ids; i < list.length; i += 1) {
        var id = list[i];

            var c = index.points[id];
        if (c.parentId === clusterId) {
            children.push(c.numPoints ? getClusterJSON(c) : this.points[c.index]);
        }
    }

    if (children.length === 0) { throw new Error(errorMsg); }

    return children;
};

Supercluster.prototype.getLeaves = function getLeaves (clusterId, limit, offset) {
    limit = limit || 10;
    offset = offset || 0;

    var leaves = [];
    this._appendLeaves(leaves, clusterId, limit, offset, 0);

    return leaves;
};

Supercluster.prototype.getTile = function getTile (z, x, y) {
    var tree = this.trees[this._limitZoom(z)];
    var z2 = Math.pow(2, z);
    var ref = this.options;
        var extent = ref.extent;
        var radius = ref.radius;
    var p = radius / extent;
    var top = (y - p) / z2;
    var bottom = (y + 1 + p) / z2;

    var tile = {
        features: []
    };

    this._addTileFeatures(
        tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),
        tree.points, x, y, z2, tile);

    if (x === 0) {
        this._addTileFeatures(
            tree.range(1 - p / z2, top, 1, bottom),
            tree.points, z2, y, z2, tile);
    }
    if (x === z2 - 1) {
        this._addTileFeatures(
            tree.range(0, top, p / z2, bottom),
            tree.points, -1, y, z2, tile);
    }

    return tile.features.length ? tile : null;
};

Supercluster.prototype.getClusterExpansionZoom = function getClusterExpansionZoom (clusterId) {
    var expansionZoom = this._getOriginZoom(clusterId) - 1;
    while (expansionZoom <= this.options.maxZoom) {
        var children = this.getChildren(clusterId);
        expansionZoom++;
        if (children.length !== 1) { break; }
        clusterId = children[0].properties.cluster_id;
    }
    return expansionZoom;
};

Supercluster.prototype._appendLeaves = function _appendLeaves (result, clusterId, limit, offset, skipped) {
    var children = this.getChildren(clusterId);

    for (var i = 0, list = children; i < list.length; i += 1) {
        var child = list[i];

            var props = child.properties;

        if (props && props.cluster) {
            if (skipped + props.point_count <= offset) {
                // skip the whole cluster
                skipped += props.point_count;
            } else {
                // enter the cluster
                skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
                // exit the cluster
            }
        } else if (skipped < offset) {
            // skip a single point
            skipped++;
        } else {
            // add a single point
            result.push(child);
        }
        if (result.length === limit) { break; }
    }

    return skipped;
};

Supercluster.prototype._addTileFeatures = function _addTileFeatures (ids, points, x, y, z2, tile) {
    for (var i$1 = 0, list = ids; i$1 < list.length; i$1 += 1) {
        var i = list[i$1];

            var c = points[i];
        var isCluster = c.numPoints;

        var tags = (void 0), px = (void 0), py = (void 0);
        if (isCluster) {
            tags = getClusterProperties(c);
            px = c.x;
            py = c.y;
        } else {
            var p = this.points[c.index];
            tags = p.properties;
            px = lngX(p.geometry.coordinates[0]);
            py = latY(p.geometry.coordinates[1]);
        }

        var f = {
            type: 1,
            geometry: [[
                Math.round(this.options.extent * (px * z2 - x)),
                Math.round(this.options.extent * (py * z2 - y))
            ]],
            tags: tags
        };

        // assign id
        var id = (void 0);
        if (isCluster) {
            id = c.id;
        } else if (this.options.generateId) {
            // optionally generate id
            id = c.index;
        } else if (this.points[c.index].id) {
            // keep id if already assigned
            id = this.points[c.index].id;
        }

        if (id !== undefined) { f.id = id; }

        tile.features.push(f);
    }
};

Supercluster.prototype._limitZoom = function _limitZoom (z) {
    return Math.max(this.options.minZoom, Math.min(+z, this.options.maxZoom + 1));
};

Supercluster.prototype._cluster = function _cluster (points, zoom) {
    var clusters = [];
    var ref = this.options;
        var radius = ref.radius;
        var extent = ref.extent;
        var reduce = ref.reduce;
        var minPoints = ref.minPoints;
    var r = radius / (extent * Math.pow(2, zoom));

    // loop through each point
    for (var i = 0; i < points.length; i++) {
        var p = points[i];
        // if we've already visited the point at this zoom level, skip it
        if (p.zoom <= zoom) { continue; }
        p.zoom = zoom;

        // find all nearby points
        var tree = this.trees[zoom + 1];
        var neighborIds = tree.within(p.x, p.y, r);

        var numPointsOrigin = p.numPoints || 1;
        var numPoints = numPointsOrigin;

        // count the number of points in a potential cluster
        for (var i$1 = 0, list = neighborIds; i$1 < list.length; i$1 += 1) {
            var neighborId = list[i$1];

                var b = tree.points[neighborId];
            // filter out neighbors that are already processed
            if (b.zoom > zoom) { numPoints += b.numPoints || 1; }
        }

        // if there were neighbors to merge, and there are enough points to form a cluster
        if (numPoints > numPointsOrigin && numPoints >= minPoints) {
            var wx = p.x * numPointsOrigin;
            var wy = p.y * numPointsOrigin;

            var clusterProperties = reduce && numPointsOrigin > 1 ? this._map(p, true) : null;

            // encode both zoom and point index on which the cluster originated -- offset by total length of features
            var id = (i << 5) + (zoom + 1) + this.points.length;

            for (var i$2 = 0, list$1 = neighborIds; i$2 < list$1.length; i$2 += 1) {
                var neighborId$1 = list$1[i$2];

                    var b$1 = tree.points[neighborId$1];

                if (b$1.zoom <= zoom) { continue; }
                b$1.zoom = zoom; // save the zoom (so it doesn't get processed twice)

                var numPoints2 = b$1.numPoints || 1;
                wx += b$1.x * numPoints2; // accumulate coordinates for calculating weighted center
                wy += b$1.y * numPoints2;

                b$1.parentId = id;

                if (reduce) {
                    if (!clusterProperties) { clusterProperties = this._map(p, true); }
                    reduce(clusterProperties, this._map(b$1));
                }
            }

            p.parentId = id;
            clusters.push(createCluster(wx / numPoints, wy / numPoints, id, numPoints, clusterProperties));

        } else { // left points as unclustered
            clusters.push(p);

            if (numPoints > 1) {
                for (var i$3 = 0, list$2 = neighborIds; i$3 < list$2.length; i$3 += 1) {
                    var neighborId$2 = list$2[i$3];

                        var b$2 = tree.points[neighborId$2];
                    if (b$2.zoom <= zoom) { continue; }
                    b$2.zoom = zoom;
                    clusters.push(b$2);
                }
            }
        }
    }

    return clusters;
};

// get index of the point from which the cluster originated
Supercluster.prototype._getOriginId = function _getOriginId (clusterId) {
    return (clusterId - this.points.length) >> 5;
};

// get zoom of the point from which the cluster originated
Supercluster.prototype._getOriginZoom = function _getOriginZoom (clusterId) {
    return (clusterId - this.points.length) % 32;
};

Supercluster.prototype._map = function _map (point, clone) {
    if (point.numPoints) {
        return clone ? extend({}, point.properties) : point.properties;
    }
    var original = this.points[point.index].properties;
    var result = this.options.map(original);
    return clone && result === original ? extend({}, result) : result;
};

function createCluster(x, y, id, numPoints, properties) {
    return {
        x: fround(x), // weighted cluster center; round for consistency with Float32Array index
        y: fround(y),
        zoom: Infinity, // the last zoom the cluster was processed at
        id: id, // encodes index of the first child of the cluster and its zoom level
        parentId: -1, // parent cluster id
        numPoints: numPoints,
        properties: properties
    };
}

function createPointCluster(p, id) {
    var ref = p.geometry.coordinates;
    var x = ref[0];
    var y = ref[1];
    return {
        x: fround(lngX(x)), // projected point coordinates
        y: fround(latY(y)),
        zoom: Infinity, // the last zoom the point was processed at
        index: id, // index of the source feature in the original input array,
        parentId: -1 // parent cluster id
    };
}

function getClusterJSON(cluster) {
    return {
        type: 'Feature',
        id: cluster.id,
        properties: getClusterProperties(cluster),
        geometry: {
            type: 'Point',
            coordinates: [xLng(cluster.x), yLat(cluster.y)]
        }
    };
}

function getClusterProperties(cluster) {
    var count = cluster.numPoints;
    var abbrev =
        count >= 10000 ? ((Math.round(count / 1000)) + "k") :
        count >= 1000 ? ((Math.round(count / 100) / 10) + "k") : count;
    return extend(extend({}, cluster.properties), {
        cluster: true,
        cluster_id: cluster.id,
        point_count: count,
        point_count_abbreviated: abbrev
    });
}

// longitude/latitude to spherical mercator in [0..1] range
function lngX(lng) {
    return lng / 360 + 0.5;
}
function latY(lat) {
    var sin = Math.sin(lat * Math.PI / 180);
    var y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);
    return y < 0 ? 0 : y > 1 ? 1 : y;
}

// spherical mercator to longitude/latitude
function xLng(x) {
    return (x - 0.5) * 360;
}
function yLat(y) {
    var y2 = (180 - y * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}

function extend(dest, src) {
    for (var id in src) { dest[id] = src[id]; }
    return dest;
}

function getX(p) {
    return p.x;
}
function getY(p) {
    return p.y;
}

return Supercluster;

}));
}(supercluster));

var SuperCluster = supercluster.exports;

var es6 = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cluster {
    constructor({ markers, position }) {
        this.markers = markers;
        if (position) {
            if (position instanceof google.maps.LatLng) {
                this._position = position;
            }
            else {
                this._position = new google.maps.LatLng(position);
            }
        }
    }
    get bounds() {
        if (this.markers.length === 0 && !this._position) {
            return undefined;
        }
        return this.markers.reduce((bounds, marker) => {
            return bounds.extend(marker.getPosition());
        }, new google.maps.LatLngBounds(this._position, this._position));
    }
    get position() {
        return this._position || this.bounds.getCenter();
    }
    /**
     * Get the count of **visible** markers.
     */
    get count() {
        return this.markers.filter((m) => m.getVisible())
            .length;
    }
    /**
     * Add a marker to the cluster.
     */
    push(marker) {
        this.markers.push(marker);
    }
    /**
     * Cleanup references and remove marker from map.
     */
    delete() {
        if (this.marker) {
            this.marker.setMap(null);
            delete this.marker;
        }
        this.markers.length = 0;
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const filterMarkersToPaddedViewport = (map, mapCanvasProjection, markers, viewportPadding) => {
    const extendedMapBounds = extendBoundsToPaddedViewport(map.getBounds(), mapCanvasProjection, viewportPadding);
    return markers.filter((marker) => extendedMapBounds.contains(marker.getPosition()));
};
/**
 * Extends a bounds by a number of pixels in each direction.
 */
const extendBoundsToPaddedViewport = (bounds, projection, pixels) => {
    const { northEast, southWest } = latLngBoundsToPixelBounds(bounds, projection);
    const extendedPixelBounds = extendPixelBounds({ northEast, southWest }, pixels);
    return pixelBoundsToLatLngBounds(extendedPixelBounds, projection);
};
/**
 * @hidden
 */
const distanceBetweenPoints = (p1, p2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((p2.lat - p1.lat) * Math.PI) / 180;
    const dLon = ((p2.lng - p1.lng) * Math.PI) / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((p1.lat * Math.PI) / 180) *
            Math.cos((p2.lat * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};
/**
 * @hidden
 */
const latLngBoundsToPixelBounds = (bounds, projection) => {
    return {
        northEast: projection.fromLatLngToDivPixel(bounds.getNorthEast()),
        southWest: projection.fromLatLngToDivPixel(bounds.getSouthWest()),
    };
};
/**
 * @hidden
 */
const extendPixelBounds = ({ northEast, southWest }, pixels) => {
    northEast.x += pixels;
    northEast.y -= pixels;
    southWest.x -= pixels;
    southWest.y += pixels;
    return { northEast, southWest };
};
/**
 * @hidden
 */
const pixelBoundsToLatLngBounds = ({ northEast, southWest }, projection) => {
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(projection.fromDivPixelToLatLng(northEast));
    bounds.extend(projection.fromDivPixelToLatLng(southWest));
    return bounds;
};

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @hidden
 */
class AbstractAlgorithm {
    constructor({ maxZoom = 16 }) {
        this.maxZoom = maxZoom;
    }
    /**
     * Helper function to bypass clustering based upon some map state such as
     * zoom, number of markers, etc.
     *
     * ```typescript
     *  cluster({markers, map}: AlgorithmInput): Cluster[] {
     *    if (shouldBypassClustering(map)) {
     *      return this.noop({markers, map})
     *    }
     * }
     * ```
     */
    noop({ markers }) {
        return noop$1(markers);
    }
}
/**
 * Abstract viewport algorithm proves a class to filter markers by a padded
 * viewport. This is a common optimization.
 *
 * @hidden
 */
class AbstractViewportAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
        var { viewportPadding = 60 } = _a, options = __rest(_a, ["viewportPadding"]);
        super(options);
        this.viewportPadding = 60;
        this.viewportPadding = viewportPadding;
    }
    calculate({ markers, map, mapCanvasProjection, }) {
        if (map.getZoom() >= this.maxZoom) {
            return {
                clusters: this.noop({
                    markers,
                    map,
                    mapCanvasProjection,
                }),
                changed: false,
            };
        }
        return {
            clusters: this.cluster({
                markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
                map,
                mapCanvasProjection,
            }),
        };
    }
}
/**
 * @hidden
 */
const noop$1 = (markers) => {
    const clusters = markers.map((marker) => new Cluster({
        position: marker.getPosition(),
        markers: [marker],
    }));
    return clusters;
};

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default Grid algorithm historically used in Google Maps marker
 * clustering.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 */
class GridAlgorithm extends AbstractViewportAlgorithm {
    constructor(_a) {
        var { maxDistance = 40000, gridSize = 40 } = _a, options = __rest(_a, ["maxDistance", "gridSize"]);
        super(options);
        this.clusters = [];
        this.maxDistance = maxDistance;
        this.gridSize = gridSize;
    }
    cluster({ markers, map, mapCanvasProjection, }) {
        this.clusters = [];
        markers.forEach((marker) => {
            this.addToClosestCluster(marker, map, mapCanvasProjection);
        });
        return this.clusters;
    }
    addToClosestCluster(marker, map, projection) {
        let maxDistance = this.maxDistance; // Some large number
        let cluster = null;
        for (let i = 0; i < this.clusters.length; i++) {
            const candidate = this.clusters[i];
            const distance = distanceBetweenPoints(candidate.bounds.getCenter().toJSON(), marker.getPosition().toJSON());
            if (distance < maxDistance) {
                maxDistance = distance;
                cluster = candidate;
            }
        }
        if (cluster &&
            extendBoundsToPaddedViewport(cluster.bounds, projection, this.gridSize).contains(marker.getPosition())) {
            cluster.push(marker);
        }
        else {
            const cluster = new Cluster({ markers: [marker] });
            this.clusters.push(cluster);
        }
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Noop algorithm does not generate any clusters or filter markers by the an extended viewport.
 */
class NoopAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
        var options = __rest(_a, []);
        super(options);
    }
    calculate({ markers, map, mapCanvasProjection, }) {
        return {
            clusters: this.cluster({ markers, map, mapCanvasProjection }),
            changed: false,
        };
    }
    cluster(input) {
        return this.noop(input);
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Experimental algorithm using Kmeans.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 *
 * @see https://www.npmjs.com/package/@turf/clusters-kmeans
 */
class KmeansAlgorithm extends AbstractViewportAlgorithm {
    constructor(_a) {
        var { numberOfClusters } = _a, options = __rest(_a, ["numberOfClusters"]);
        super(options);
        this.numberOfClusters = numberOfClusters;
    }
    cluster({ markers, map }) {
        const clusters = [];
        if (markers.length === 0) {
            return clusters;
        }
        const points = featureCollection(markers.map((marker) => {
            return point([marker.getPosition().lng(), marker.getPosition().lat()]);
        }));
        let numberOfClusters;
        if (this.numberOfClusters instanceof Function) {
            numberOfClusters = this.numberOfClusters(markers.length, map.getZoom());
        }
        else {
            numberOfClusters = this.numberOfClusters;
        }
        clustersKmeans(points, { numberOfClusters }).features.forEach((point, i) => {
            if (!clusters[point.properties.cluster]) {
                clusters[point.properties.cluster] = new Cluster({
                    position: {
                        lng: point.properties.centroid[0],
                        lat: point.properties.centroid[1],
                    },
                    markers: [],
                });
            }
            clusters[point.properties.cluster].push(markers[i]);
        });
        return clusters;
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_INTERNAL_DBSCAN_OPTION = {
    units: "kilometers",
    mutate: false,
    minPoints: 1,
};
/**
 *
 * **This algorithm is not yet ready for use!**
 *
 * Experimental algorithm using DBScan.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 *
 * @see https://www.npmjs.com/package/@turf/clusters-dbscan
 */
class DBScanAlgorithm extends AbstractViewportAlgorithm {
    constructor(_a) {
        var { maxDistance = 200, minPoints = DEFAULT_INTERNAL_DBSCAN_OPTION.minPoints } = _a, options = __rest(_a, ["maxDistance", "minPoints"]);
        super(options);
        this.maxDistance = maxDistance;
        this.options = Object.assign(Object.assign({}, DEFAULT_INTERNAL_DBSCAN_OPTION), { minPoints });
    }
    cluster({ markers, mapCanvasProjection, }) {
        const points = featureCollection(markers.map((marker) => {
            const projectedPoint = mapCanvasProjection.fromLatLngToContainerPixel(marker.getPosition());
            return point([projectedPoint.x, projectedPoint.y]);
        }));
        const grouped = [];
        clustersDbscan(points, this.maxDistance, this.options).features.forEach((point, i) => {
            if (!grouped[point.properties.cluster]) {
                grouped[point.properties.cluster] = [];
            }
            grouped[point.properties.cluster].push(markers[i]);
        });
        return grouped.map((markers) => new Cluster({ markers }));
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A very fast JavaScript algorithm for geospatial point clustering using KD trees.
 *
 * @see https://www.npmjs.com/package/supercluster for more information on options.
 */
class SuperClusterAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
        var { maxZoom, radius = 60 } = _a, options = __rest(_a, ["maxZoom", "radius"]);
        super({ maxZoom });
        this.superCluster = new SuperCluster(Object.assign({ maxZoom: this.maxZoom, radius }, options));
        this.state = { zoom: null };
    }
    calculate(input) {
        let changed = false;
        if (!es6(input.markers, this.markers)) {
            changed = true;
            // TODO use proxy to avoid copy?
            this.markers = [...input.markers];
            const points = this.markers.map((marker) => {
                return {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [
                            marker.getPosition().lng(),
                            marker.getPosition().lat(),
                        ],
                    },
                    properties: { marker },
                };
            });
            this.superCluster.load(points);
        }
        const state = { zoom: input.map.getZoom() };
        if (!changed) {
            if (this.state.zoom > this.maxZoom && state.zoom > this.maxZoom) ;
            else {
                changed = changed || !es6(this.state, state);
            }
        }
        this.state = state;
        if (changed) {
            this.clusters = this.cluster(input);
        }
        return { clusters: this.clusters, changed };
    }
    cluster({ map }) {
        return this.superCluster
            .getClusters([-180, -90, 180, 90], map.getZoom())
            .map(this.transformCluster.bind(this));
    }
    transformCluster({ geometry: { coordinates: [lng, lat], }, properties, }) {
        if (properties.cluster) {
            return new Cluster({
                markers: this.superCluster
                    .getLeaves(properties.cluster_id, Infinity)
                    .map((leaf) => leaf.properties.marker),
                position: new google.maps.LatLng({ lat, lng }),
            });
        }
        else {
            const marker = properties.marker;
            return new Cluster({
                markers: [marker],
                position: marker.getPosition(),
            });
        }
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides statistics on all clusters in the current render cycle for use in {@link Renderer.render}.
 */
class ClusterStats {
    constructor(markers, clusters) {
        this.markers = { sum: markers.length };
        const clusterMarkerCounts = clusters.map((a) => a.count);
        const clusterMarkerSum = clusterMarkerCounts.reduce((a, b) => a + b, 0);
        this.clusters = {
            count: clusters.length,
            markers: {
                mean: clusterMarkerSum / clusters.length,
                sum: clusterMarkerSum,
                min: Math.min(...clusterMarkerCounts),
                max: Math.max(...clusterMarkerCounts),
            },
        };
    }
}
class DefaultRenderer {
    /**
     * The default render function for the library used by {@link MarkerClusterer}.
     *
     * Currently set to use the following:
     *
     * ```typescript
     * // change color if this cluster has more markers than the mean cluster
     * const color =
     *   count > Math.max(10, stats.clusters.markers.mean)
     *     ? "#ff0000"
     *     : "#0000ff";
     *
     * // create svg url with fill color
     * const svg = window.btoa(`
     * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
     *   <circle cx="120" cy="120" opacity=".6" r="70" />
     *   <circle cx="120" cy="120" opacity=".3" r="90" />
     *   <circle cx="120" cy="120" opacity=".2" r="110" />
     *   <circle cx="120" cy="120" opacity=".1" r="130" />
     * </svg>`);
     *
     * // create marker using svg icon
     * return new google.maps.Marker({
     *   position,
     *   icon: {
     *     url: `data:image/svg+xml;base64,${svg}`,
     *     scaledSize: new google.maps.Size(45, 45),
     *   },
     *   label: {
     *     text: String(count),
     *     color: "rgba(255,255,255,0.9)",
     *     fontSize: "12px",
     *   },
     *   // adjust zIndex to be above other markers
     *   zIndex: 1000 + count,
     * });
     * ```
     */
    render({ count, position }, stats) {
        // change color if this cluster has more markers than the mean cluster
        const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
        // create svg url with fill color
        const svg = window.btoa(`
  <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`);
        // create marker using svg icon
        return new google.maps.Marker({
            position,
            icon: {
                url: `data:image/svg+xml;base64,${svg}`,
                scaledSize: new google.maps.Size(45, 45),
            },
            label: {
                text: String(count),
                color: "rgba(255,255,255,0.9)",
                fontSize: "12px",
            },
            // adjust zIndex to be above other markers
            zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
        });
    }
}

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Extends an object's prototype by another's.
 *
 * @param type1 The Type to be extended.
 * @param type2 The Type to extend with.
 * @ignore
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extend(type1, type2) {
    /* istanbul ignore next */
    // eslint-disable-next-line prefer-const
    for (let property in type2.prototype) {
        type1.prototype[property] = type2.prototype[property];
    }
}
/**
 * @ignore
 */
class OverlayViewSafe {
    constructor() {
        // MarkerClusterer implements google.maps.OverlayView interface. We use the
        // extend function to extend MarkerClusterer with google.maps.OverlayView
        // because it might not always be available when the code is defined so we
        // look for it at the last possible moment. If it doesn't exist now then
        // there is no point going ahead :)
        extend(OverlayViewSafe, google.maps.OverlayView);
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MarkerClustererEvents;
(function (MarkerClustererEvents) {
    MarkerClustererEvents["CLUSTERING_BEGIN"] = "clusteringbegin";
    MarkerClustererEvents["CLUSTERING_END"] = "clusteringend";
    MarkerClustererEvents["CLUSTER_CLICK"] = "click";
})(MarkerClustererEvents || (MarkerClustererEvents = {}));
const defaultOnClusterClickHandler = (_, cluster, map) => {
    map.fitBounds(cluster.bounds);
};
/**
 * MarkerClusterer creates and manages per-zoom-level clusters for large amounts
 * of markers. See {@link MarkerClustererOptions} for more details.
 *
 * <iframe src="https://googlemaps.github.io/js-three/public/anchor/index.html"></iframe>
 */
class MarkerClusterer extends OverlayViewSafe {
    constructor({ map, markers = [], algorithm = new SuperClusterAlgorithm({}), renderer = new DefaultRenderer(), onClusterClick = defaultOnClusterClickHandler, }) {
        super();
        this.markers = [...markers];
        this.clusters = [];
        this.algorithm = algorithm;
        this.renderer = renderer;
        this.onClusterClick = onClusterClick;
        if (map) {
            this.setMap(map);
        }
    }
    addMarker(marker, noDraw) {
        if (this.markers.includes(marker)) {
            return;
        }
        this.markers.push(marker);
        if (!noDraw) {
            this.render();
        }
    }
    addMarkers(markers, noDraw) {
        markers.forEach((marker) => {
            this.addMarker(marker, true);
        });
        if (!noDraw) {
            this.render();
        }
    }
    removeMarker(marker, noDraw) {
        const index = this.markers.indexOf(marker);
        if (index === -1) {
            // Marker is not in our list of markers, so do nothing:
            return false;
        }
        marker.setMap(null);
        this.markers.splice(index, 1); // Remove the marker from the list of managed markers
        if (!noDraw) {
            this.render();
        }
        return true;
    }
    removeMarkers(markers, noDraw) {
        let removed = false;
        markers.forEach((marker) => {
            removed = this.removeMarker(marker, true) || removed;
        });
        if (removed && !noDraw) {
            this.render();
        }
        return removed;
    }
    clearMarkers(noDraw) {
        this.markers.length = 0;
        if (!noDraw) {
            this.render();
        }
    }
    /**
     * Recalculates and draws all the marker clusters.
     */
    render() {
        const map = this.getMap();
        if (map instanceof google.maps.Map && this.getProjection()) {
            google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
            const { clusters, changed } = this.algorithm.calculate({
                markers: this.markers,
                map,
                mapCanvasProjection: this.getProjection(),
            });
            // allow algorithms to return flag on whether the clusters/markers have changed
            if (changed || changed == undefined) {
                // reset visibility of markers and clusters
                this.reset();
                // store new clusters
                this.clusters = clusters;
                this.renderClusters();
            }
            google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
        }
    }
    onAdd() {
        this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
        this.render();
    }
    onRemove() {
        google.maps.event.removeListener(this.idleListener);
        this.reset();
    }
    reset() {
        this.markers.forEach((marker) => marker.setMap(null));
        this.clusters.forEach((cluster) => cluster.delete());
        this.clusters = [];
    }
    renderClusters() {
        // generate stats to pass to renderers
        const stats = new ClusterStats(this.markers, this.clusters);
        const map = this.getMap();
        this.clusters.forEach((cluster) => {
            if (cluster.markers.length === 1) {
                cluster.marker = cluster.markers[0];
            }
            else {
                cluster.marker = this.renderer.render(cluster, stats);
                if (this.onClusterClick) {
                    cluster.marker.addListener("click", 
                    /* istanbul ignore next */
                    (event) => {
                        google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
                        this.onClusterClick(event, cluster, map);
                    });
                }
            }
            cluster.marker.setMap(map);
        });
    }
}

var index_esm = /*#__PURE__*/Object.freeze({
	__proto__: null,
	AbstractAlgorithm: AbstractAlgorithm,
	AbstractViewportAlgorithm: AbstractViewportAlgorithm,
	Cluster: Cluster,
	ClusterStats: ClusterStats,
	DBScanAlgorithm: DBScanAlgorithm,
	DefaultRenderer: DefaultRenderer,
	GridAlgorithm: GridAlgorithm,
	KmeansAlgorithm: KmeansAlgorithm,
	MarkerClusterer: MarkerClusterer,
	get MarkerClustererEvents () { return MarkerClustererEvents; },
	NoopAlgorithm: NoopAlgorithm,
	SuperClusterAlgorithm: SuperClusterAlgorithm,
	defaultOnClusterClickHandler: defaultOnClusterClickHandler,
	distanceBetweenPoints: distanceBetweenPoints,
	extendBoundsToPaddedViewport: extendBoundsToPaddedViewport,
	extendPixelBounds: extendPixelBounds,
	filterMarkersToPaddedViewport: filterMarkersToPaddedViewport,
	noop: noop$1,
	pixelBoundsToLatLngBounds: pixelBoundsToLatLngBounds
});

const useGoogleMarkerClusterer = (options) => {
    const map = useGoogleMap();
    const [markerClusterer, setMarkerClusterer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (map && markerClusterer === null) {
            const markerCluster = new MarkerClusterer(Object.assign(Object.assign({}, options), { map }));
            setMarkerClusterer(markerCluster);
        }
    }, [map]);
    return markerClusterer;
};
/** Wrapper around [@googlemaps/markerclusterer](https://github.com/googlemaps/js-markerclusterer)
 *
 * Accepts {@link  MarkerClustererOptionsSubset} which is a subset of  {@link MarkerClustererOptions}
 */
const GoogleMarkerClusterer = ({ children, options }) => {
    const markerClusterer = useGoogleMarkerClusterer(options);
    return markerClusterer !== null ? children(markerClusterer) : null;
};

/* global google */
const eventMap$c = {
    onCloseClick: 'closeclick',
    onContentChanged: 'content_changed',
    onDomReady: 'domready',
    onPositionChanged: 'position_changed',
    onZindexChanged: 'zindex_changed',
};
const updaterMap$c = {
    options(instance, options) {
        instance.setOptions(options);
    },
    position(instance, position) {
        instance.setPosition(position);
    },
    zIndex(instance, zIndex) {
        instance.setZIndex(zIndex);
    },
};
class InfoWindow extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.containerElement = null;
        this.state = {
            infoWindow: null,
        };
        this.open = (infoWindow, anchor) => {
            if (anchor) {
                infoWindow.open(this.context, anchor);
            }
            else if (infoWindow.getPosition()) {
                infoWindow.open(this.context);
            }
            else {
                invariant_1(false, `You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.`);
            }
        };
        this.setInfoWindowCallback = () => {
            if (this.state.infoWindow !== null && this.containerElement !== null) {
                this.state.infoWindow.setContent(this.containerElement);
                this.open(this.state.infoWindow, this.props.anchor);
                if (this.props.onLoad) {
                    this.props.onLoad(this.state.infoWindow);
                }
            }
        };
    }
    componentDidMount() {
        const infoWindow = new google.maps.InfoWindow(Object.assign({}, (this.props.options || {})));
        this.containerElement = document.createElement('div');
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$c,
            eventMap: eventMap$c,
            prevProps: {},
            nextProps: this.props,
            instance: infoWindow,
        });
        this.setState(function setInfoWindow() {
            return {
                infoWindow,
            };
        }, this.setInfoWindowCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.infoWindow !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$c,
                eventMap: eventMap$c,
                prevProps,
                nextProps: this.props,
                instance: this.state.infoWindow,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.infoWindow !== null) {
            unregisterEvents(this.registeredEvents);
            this.state.infoWindow.close();
        }
    }
    render() {
        return this.containerElement ? (react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children), this.containerElement)) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null));
    }
}
InfoWindow.contextType = MapContext;

const eventMap$b = {
    onClick: 'click',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
};
const updaterMap$b = {
    draggable(instance, draggable) {
        instance.setDraggable(draggable);
    },
    editable(instance, editable) {
        instance.setEditable(editable);
    },
    map(instance, map) {
        instance.setMap(map);
    },
    options(instance, options) {
        instance.setOptions(options);
    },
    path(instance, path) {
        instance.setPath(path);
    },
    visible(instance, visible) {
        instance.setVisible(visible);
    },
};
class Polyline extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.state = {
            polyline: null,
        };
        this.setPolylineCallback = () => {
            if (this.state.polyline !== null && this.props.onLoad) {
                this.props.onLoad(this.state.polyline);
            }
        };
    }
    componentDidMount() {
        const polyline = new google.maps.Polyline(Object.assign(Object.assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$b,
            eventMap: eventMap$b,
            prevProps: {},
            nextProps: this.props,
            instance: polyline,
        });
        this.setState(function setPolyline() {
            return {
                polyline,
            };
        }, this.setPolylineCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.polyline !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$b,
                eventMap: eventMap$b,
                prevProps,
                nextProps: this.props,
                instance: this.state.polyline,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.polyline !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.polyline);
            }
            unregisterEvents(this.registeredEvents);
            this.state.polyline.setMap(null);
        }
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    }
}
Polyline.contextType = MapContext;

/* global google */
const eventMap$a = {
    onClick: 'click',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
};
const updaterMap$a = {
    draggable(instance, draggable) {
        instance.setDraggable(draggable);
    },
    editable(instance, editable) {
        instance.setEditable(editable);
    },
    map(instance, map) {
        instance.setMap(map);
    },
    options(instance, options) {
        instance.setOptions(options);
    },
    path(instance, path) {
        instance.setPath(path);
    },
    paths(instance, paths) {
        instance.setPaths(paths);
    },
    visible(instance, visible) {
        instance.setVisible(visible);
    },
};
class Polygon extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.state = {
            polygon: null,
        };
        this.setPolygonCallback = () => {
            if (this.state.polygon !== null && this.props.onLoad) {
                this.props.onLoad(this.state.polygon);
            }
        };
    }
    componentDidMount() {
        const polygon = new google.maps.Polygon(Object.assign(Object.assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$a,
            eventMap: eventMap$a,
            prevProps: {},
            nextProps: this.props,
            instance: polygon,
        });
        this.setState(function setPolygon() {
            return {
                polygon,
            };
        }, this.setPolygonCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.polygon !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$a,
                eventMap: eventMap$a,
                prevProps,
                nextProps: this.props,
                instance: this.state.polygon,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.polygon !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.polygon);
            }
            unregisterEvents(this.registeredEvents);
            this.state.polygon && this.state.polygon.setMap(null);
        }
    }
    render() {
        return null;
    }
}
Polygon.contextType = MapContext;

const eventMap$9 = {
    onBoundsChanged: 'bounds_changed',
    onClick: 'click',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
};
const updaterMap$9 = {
    bounds(instance, bounds) {
        instance.setBounds(bounds);
    },
    draggable(instance, draggable) {
        instance.setDraggable(draggable);
    },
    editable(instance, editable) {
        instance.setEditable(editable);
    },
    map(instance, map) {
        instance.setMap(map);
    },
    options(instance, options) {
        instance.setOptions(options);
    },
    visible(instance, visible) {
        instance.setVisible(visible);
    },
};
class Rectangle extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.state = {
            rectangle: null,
        };
        this.setRectangleCallback = () => {
            if (this.state.rectangle !== null && this.props.onLoad) {
                this.props.onLoad(this.state.rectangle);
            }
        };
    }
    componentDidMount() {
        const rectangle = new google.maps.Rectangle(Object.assign(Object.assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$9,
            eventMap: eventMap$9,
            prevProps: {},
            nextProps: this.props,
            instance: rectangle,
        });
        this.setState(function setRectangle() {
            return {
                rectangle,
            };
        }, this.setRectangleCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.rectangle !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$9,
                eventMap: eventMap$9,
                prevProps,
                nextProps: this.props,
                instance: this.state.rectangle,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.rectangle !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.rectangle);
            }
            unregisterEvents(this.registeredEvents);
            this.state.rectangle.setMap(null);
        }
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    }
}
Rectangle.contextType = MapContext;

const eventMap$8 = {
    onCenterChanged: 'center_changed',
    onClick: 'click',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRadiusChanged: 'radius_changed',
    onRightClick: 'rightclick',
};
const updaterMap$8 = {
    center(instance, center) {
        instance.setCenter(center);
    },
    draggable(instance, draggable) {
        instance.setDraggable(draggable);
    },
    editable(instance, editable) {
        instance.setEditable(editable);
    },
    map(instance, map) {
        instance.setMap(map);
    },
    options(instance, options) {
        instance.setOptions(options);
    },
    radius(instance, radius) {
        instance.setRadius(radius);
    },
    visible(instance, visible) {
        instance.setVisible(visible);
    },
};
class Circle extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.state = {
            circle: null,
        };
        this.setCircleCallback = () => {
            if (this.state.circle !== null && this.props.onLoad) {
                this.props.onLoad(this.state.circle);
            }
        };
    }
    componentDidMount() {
        const circle = new google.maps.Circle(Object.assign(Object.assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$8,
            eventMap: eventMap$8,
            prevProps: {},
            nextProps: this.props,
            instance: circle,
        });
        this.setState(function setCircle() {
            return {
                circle,
            };
        }, this.setCircleCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.circle !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$8,
                eventMap: eventMap$8,
                prevProps,
                nextProps: this.props,
                instance: this.state.circle,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.circle !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.circle);
            }
            unregisterEvents(this.registeredEvents);
            this.state.circle && this.state.circle.setMap(null);
        }
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    }
}
Circle.contextType = MapContext;

const eventMap$7 = {
    onAddFeature: 'addfeature',
    onClick: 'click',
    onDblClick: 'dblclick',
    onMouseDown: 'mousedown',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRemoveFeature: 'removefeature',
    onRemoveProperty: 'removeproperty',
    onRightClick: 'rightclick',
    onSetGeometry: 'setgeometry',
    onSetProperty: 'setproperty',
};
const updaterMap$7 = {
    add(instance, features) {
        instance.add(features);
    },
    addgeojson(instance, geojson, options) {
        instance.addGeoJson(geojson, options);
    },
    contains(instance, feature) {
        instance.contains(feature);
    },
    foreach(instance, callback) {
        instance.forEach(callback);
    },
    loadgeojson(instance, url, options, callback) {
        instance.loadGeoJson(url, options, callback);
    },
    overridestyle(instance, feature, style) {
        instance.overrideStyle(feature, style);
    },
    remove(instance, feature) {
        instance.remove(feature);
    },
    revertstyle(instance, feature) {
        instance.revertStyle(feature);
    },
    controlposition(instance, controlPosition) {
        instance.setControlPosition(controlPosition);
    },
    controls(instance, controls) {
        instance.setControls(controls);
    },
    drawingmode(instance, mode) {
        instance.setDrawingMode(mode);
    },
    map(instance, map) {
        instance.setMap(map);
    },
    style(instance, style) {
        instance.setStyle(style);
    },
    togeojson(instance, callback) {
        instance.toGeoJson(callback);
    },
};
class Data extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.state = {
            data: null,
        };
        this.setDataCallback = () => {
            if (this.state.data !== null && this.props.onLoad) {
                this.props.onLoad(this.state.data);
            }
        };
    }
    componentDidMount() {
        const data = new google.maps.Data(Object.assign(Object.assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$7,
            eventMap: eventMap$7,
            prevProps: {},
            nextProps: this.props,
            instance: data,
        });
        this.setState(function setData() {
            return {
                data,
            };
        }, this.setDataCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.data !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$7,
                eventMap: eventMap$7,
                prevProps,
                nextProps: this.props,
                instance: this.state.data,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.data !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.data);
            }
            unregisterEvents(this.registeredEvents);
            if (this.state.data) {
                this.state.data.setMap(null);
            }
        }
    }
    render() {
        return null;
    }
}
Data.contextType = MapContext;

const eventMap$6 = {
    onClick: 'click',
    onDefaultViewportChanged: 'defaultviewport_changed',
    onStatusChanged: 'status_changed',
};
const updaterMap$6 = {
    options(instance, options) {
        instance.setOptions(options);
    },
    url(instance, url) {
        instance.setUrl(url);
    },
    zIndex(instance, zIndex) {
        instance.setZIndex(zIndex);
    },
};
class KmlLayer extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.state = {
            kmlLayer: null,
        };
        this.setKmlLayerCallback = () => {
            if (this.state.kmlLayer !== null && this.props.onLoad) {
                this.props.onLoad(this.state.kmlLayer);
            }
        };
    }
    componentDidMount() {
        const kmlLayer = new google.maps.KmlLayer(Object.assign(Object.assign({}, this.props.options), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$6,
            eventMap: eventMap$6,
            prevProps: {},
            nextProps: this.props,
            instance: kmlLayer,
        });
        this.setState(function setLmlLayer() {
            return {
                kmlLayer,
            };
        }, this.setKmlLayerCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.kmlLayer !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$6,
                eventMap: eventMap$6,
                prevProps,
                nextProps: this.props,
                instance: this.state.kmlLayer,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.kmlLayer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.kmlLayer);
            }
            unregisterEvents(this.registeredEvents);
            this.state.kmlLayer.setMap(null);
        }
    }
    render() {
        return null;
    }
}
KmlLayer.contextType = MapContext;

/* eslint-disable filenames/match-regex */
function getOffsetOverride(containerElement, getPixelPositionOffset) {
    return typeof getPixelPositionOffset === 'function'
        ? getPixelPositionOffset(containerElement.offsetWidth, containerElement.offsetHeight)
        : {};
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createLatLng = (inst, Type) => new Type(inst.lat, inst.lng);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createLatLngBounds = (inst, Type) => new Type(new google.maps.LatLng(inst.ne.lat, inst.ne.lng), new google.maps.LatLng(inst.sw.lat, inst.sw.lng));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ensureOfType = (inst, type, factory) => {
    return inst instanceof type ? inst : factory(inst, type);
};
const getLayoutStylesByBounds = (mapCanvasProjection, offset, bounds) => {
    const ne = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast());
    const sw = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest());
    if (ne && sw) {
        return {
            left: `${sw.x + offset.x}px`,
            top: `${ne.y + offset.y}px`,
            width: `${ne.x - sw.x - offset.x}px`,
            height: `${sw.y - ne.y - offset.y}px`,
        };
    }
    return {
        left: '-9999px',
        top: '-9999px',
    };
};
const getLayoutStylesByPosition = (mapCanvasProjection, offset, position) => {
    const point = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(position);
    if (point) {
        const { x, y } = point;
        return {
            left: `${x + offset.x}px`,
            top: `${y + offset.y}px`,
        };
    }
    return {
        left: '-9999px',
        top: '-9999px',
    };
};
const getLayoutStyles = (mapCanvasProjection, offset, bounds, position) => {
    return bounds !== undefined
        ? getLayoutStylesByBounds(mapCanvasProjection, offset, ensureOfType(bounds, google.maps.LatLngBounds, createLatLngBounds))
        : getLayoutStylesByPosition(mapCanvasProjection, offset, ensureOfType(position, google.maps.LatLng, createLatLng));
};
const arePositionsEqual = (currentPosition, previousPosition) => {
    return currentPosition.left === previousPosition.left
        && currentPosition.top === previousPosition.top
        && currentPosition.width === previousPosition.height
        && currentPosition.height === previousPosition.height;
};

function convertToLatLngString(latLngLike) {
    if (!latLngLike) {
        return '';
    }
    const latLng = latLngLike instanceof google.maps.LatLng
        ? latLngLike
        : new google.maps.LatLng(latLngLike.lat, latLngLike.lng);
    return latLng + '';
}
function convertToLatLngBoundsString(latLngBoundsLike) {
    if (!latLngBoundsLike) {
        return '';
    }
    const latLngBounds = latLngBoundsLike instanceof google.maps.LatLngBounds
        ? latLngBoundsLike
        : new google.maps.LatLngBounds(new google.maps.LatLng(latLngBoundsLike.south, latLngBoundsLike.east), new google.maps.LatLng(latLngBoundsLike.north, latLngBoundsLike.west));
    return latLngBounds + '';
}
class OverlayView extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            paneEl: null,
            containerStyle: {
                // set initial position
                position: 'absolute'
            },
        };
        this.updatePane = () => {
            const mapPaneName = this.props.mapPaneName;
            // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes
            const mapPanes = this.overlayView.getPanes();
            invariant_1(!!mapPaneName, `OverlayView requires props.mapPaneName but got %s`, mapPaneName);
            if (mapPanes) {
                this.setState({
                    paneEl: mapPanes[mapPaneName]
                });
            }
            else {
                this.setState({
                    paneEl: null
                });
            }
        };
        this.onAdd = () => {
            var _a, _b;
            this.updatePane();
            (_b = (_a = this.props).onLoad) === null || _b === void 0 ? void 0 : _b.call(_a, this.overlayView);
        };
        this.onPositionElement = () => {
            const mapCanvasProjection = this.overlayView.getProjection();
            const offset = Object.assign({ x: 0, y: 0 }, (this.containerRef.current
                ? getOffsetOverride(this.containerRef.current, this.props.getPixelPositionOffset)
                : {}));
            const layoutStyles = getLayoutStyles(mapCanvasProjection, offset, this.props.bounds, this.props.position);
            const { left, top, width, height } = this.state.containerStyle;
            if (!arePositionsEqual(layoutStyles, { left, top, width, height })) {
                this.setState({
                    containerStyle: Object.assign(Object.assign({}, layoutStyles), { position: 'absolute' }),
                });
            }
        };
        this.draw = () => {
            this.onPositionElement();
        };
        this.onRemove = () => {
            var _a, _b;
            this.setState(() => ({
                paneEl: null
            }));
            // this.mapPaneEl = null
            (_b = (_a = this.props).onUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, this.overlayView);
        };
        this.containerRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        // You must implement three methods: onAdd(), draw(), and onRemove().
        const overlayView = new google.maps.OverlayView();
        overlayView.onAdd = this.onAdd;
        overlayView.draw = this.draw;
        overlayView.onRemove = this.onRemove;
        this.overlayView = overlayView;
    }
    componentDidMount() {
        // You must call setMap() with a valid Map object to trigger the call to
        // the onAdd() method and setMap(null) in order to trigger the onRemove() method.
        this.overlayView.setMap(this.context);
    }
    componentDidUpdate(prevProps) {
        const prevPositionString = convertToLatLngString(prevProps.position);
        const positionString = convertToLatLngString(this.props.position);
        const prevBoundsString = convertToLatLngBoundsString(prevProps.bounds);
        const boundsString = convertToLatLngBoundsString(this.props.bounds);
        if (prevPositionString !== positionString || prevBoundsString !== boundsString) {
            this.overlayView.draw();
        }
        if (prevProps.mapPaneName !== this.props.mapPaneName) {
            this.updatePane();
        }
    }
    componentWillUnmount() {
        this.overlayView.setMap(null);
    }
    render() {
        const paneEl = this.state.paneEl;
        if (paneEl) {
            return react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.containerRef, style: this.state.containerStyle }, react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children)), paneEl);
        }
        else {
            return null;
        }
    }
}
OverlayView.FLOAT_PANE = `floatPane`;
OverlayView.MAP_PANE = `mapPane`;
OverlayView.MARKER_LAYER = `markerLayer`;
OverlayView.OVERLAY_LAYER = `overlayLayer`;
OverlayView.OVERLAY_MOUSE_TARGET = `overlayMouseTarget`;
OverlayView.contextType = MapContext;

function noop() { }

const eventMap$5 = {
    onDblClick: 'dblclick',
    onClick: 'click',
};
const updaterMap$5 = {
    opacity(instance, opacity) {
        instance.setOpacity(opacity);
    },
};
class GroundOverlay extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.state = {
            groundOverlay: null,
        };
        this.setGroundOverlayCallback = () => {
            if (this.state.groundOverlay !== null && this.props.onLoad) {
                this.props.onLoad(this.state.groundOverlay);
            }
        };
    }
    componentDidMount() {
        invariant_1(!!this.props.url || !!this.props.bounds, `For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by \`react-google-maps-api\`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just \`key={url}\` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655`);
        const groundOverlay = new google.maps.GroundOverlay(this.props.url, this.props.bounds, Object.assign(Object.assign({}, this.props.options), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$5,
            eventMap: eventMap$5,
            prevProps: {},
            nextProps: this.props,
            instance: groundOverlay,
        });
        this.setState(function setGroundOverlay() {
            return {
                groundOverlay,
            };
        }, this.setGroundOverlayCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.groundOverlay !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$5,
                eventMap: eventMap$5,
                prevProps,
                nextProps: this.props,
                instance: this.state.groundOverlay,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.groundOverlay) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.groundOverlay);
            }
            this.state.groundOverlay.setMap(null);
        }
    }
    render() {
        return null;
    }
}
GroundOverlay.defaultProps = {
    onLoad: noop,
};
GroundOverlay.contextType = MapContext;

const eventMap$4 = {};
const updaterMap$4 = {
    data(instance, data) {
        instance.setData(data);
    },
    map(instance, map) {
        instance.setMap(map);
    },
    options(instance, options) {
        instance.setOptions(options);
    },
};
class HeatmapLayer extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.state = {
            heatmapLayer: null,
        };
        this.setHeatmapLayerCallback = () => {
            if (this.state.heatmapLayer !== null && this.props.onLoad) {
                this.props.onLoad(this.state.heatmapLayer);
            }
        };
    }
    componentDidMount() {
        invariant_1(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization);
        invariant_1(!!this.props.data, 'data property is required in HeatmapLayer %s', this.props.data);
        const heatmapLayer = new google.maps.visualization.HeatmapLayer(Object.assign(Object.assign({}, (this.props.options || {})), { data: this.props.data, map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$4,
            eventMap: eventMap$4,
            prevProps: {},
            nextProps: this.props,
            instance: heatmapLayer,
        });
        this.setState(function setHeatmapLayer() {
            return {
                heatmapLayer,
            };
        }, this.setHeatmapLayerCallback);
    }
    componentDidUpdate(prevProps) {
        unregisterEvents(this.registeredEvents);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$4,
            eventMap: eventMap$4,
            prevProps,
            nextProps: this.props,
            instance: this.state.heatmapLayer,
        });
    }
    componentWillUnmount() {
        if (this.state.heatmapLayer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.heatmapLayer);
            }
            unregisterEvents(this.registeredEvents);
            this.state.heatmapLayer.setMap(null);
        }
    }
    render() {
        return null;
    }
}
HeatmapLayer.contextType = MapContext;

const eventMap$3 = {
    onCloseClick: 'closeclick',
    onPanoChanged: 'pano_changed',
    onPositionChanged: 'position_changed',
    onPovChanged: 'pov_changed',
    onResize: 'resize',
    onStatusChanged: 'status_changed',
    onVisibleChanged: 'visible_changed',
    onZoomChanged: 'zoom_changed',
};
const updaterMap$3 = {
    register(instance, provider, options) {
        instance.registerPanoProvider(provider, options);
    },
    links(instance, links) {
        instance.setLinks(links);
    },
    motionTracking(instance, motionTracking) {
        instance.setMotionTracking(motionTracking);
    },
    options(instance, options) {
        instance.setOptions(options);
    },
    pano(instance, pano) {
        instance.setPano(pano);
    },
    position(instance, position) {
        instance.setPosition(position);
    },
    pov(instance, pov) {
        instance.setPov(pov);
    },
    visible(instance, visible) {
        instance.setVisible(visible);
    },
    zoom(instance, zoom) {
        instance.setZoom(zoom);
    },
};
class StreetViewPanorama extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.state = {
            streetViewPanorama: null,
        };
        this.setStreetViewPanoramaCallback = () => {
            if (this.state.streetViewPanorama !== null && this.props.onLoad) {
                this.props.onLoad(this.state.streetViewPanorama);
            }
        };
    }
    componentDidMount() {
        const streetViewPanorama = this.context.getStreetView();
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$3,
            eventMap: eventMap$3,
            prevProps: {},
            nextProps: this.props,
            instance: streetViewPanorama,
        });
        this.setState(function setStreetViewPanorama() {
            return {
                streetViewPanorama,
            };
        }, this.setStreetViewPanoramaCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.streetViewPanorama !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$3,
                eventMap: eventMap$3,
                prevProps,
                nextProps: this.props,
                instance: this.state.streetViewPanorama,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.streetViewPanorama !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.streetViewPanorama);
            }
            unregisterEvents(this.registeredEvents);
            this.state.streetViewPanorama.setVisible(false);
        }
    }
    render() {
        return null;
    }
}
StreetViewPanorama.contextType = MapContext;

class StreetViewService extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            streetViewService: null,
        };
        this.setStreetViewServiceCallback = () => {
            if (this.state.streetViewService !== null && this.props.onLoad) {
                this.props.onLoad(this.state.streetViewService);
            }
        };
    }
    componentDidMount() {
        const streetViewService = new google.maps.StreetViewService();
        this.setState(function setStreetViewService() {
            return {
                streetViewService,
            };
        }, this.setStreetViewServiceCallback);
    }
    componentWillUnmount() {
        if (this.state.streetViewService !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.streetViewService);
            }
        }
    }
    render() {
        return null;
    }
}
StreetViewService.contextType = MapContext;

class DirectionsService extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            directionsService: null,
        };
        this.setDirectionsServiceCallback = () => {
            if (this.state.directionsService !== null && this.props.onLoad) {
                this.props.onLoad(this.state.directionsService);
            }
        };
    }
    componentDidMount() {
        invariant_1(!!this.props.options, 'DirectionsService expected options object as parameter, but got %s', this.props.options);
        const directionsService = new google.maps.DirectionsService();
        this.setState(function setDirectionsService() {
            return {
                directionsService,
            };
        }, this.setDirectionsServiceCallback);
    }
    componentDidUpdate() {
        if (this.state.directionsService !== null) {
            this.state.directionsService.route(this.props.options, this.props.callback);
        }
    }
    componentWillUnmount() {
        if (this.state.directionsService !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.directionsService);
            }
        }
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    }
}

const eventMap$2 = {
    onDirectionsChanged: 'directions_changed',
};
const updaterMap$2 = {
    directions(instance, directions) {
        instance.setDirections(directions);
    },
    map(instance, map) {
        instance.setMap(map);
    },
    options(instance, options) {
        instance.setOptions(options);
    },
    panel(instance, panel) {
        instance.setPanel(panel);
    },
    routeIndex(instance, routeIndex) {
        instance.setRouteIndex(routeIndex);
    },
};
class DirectionsRenderer extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.state = {
            directionsRenderer: null,
        };
        this.setDirectionsRendererCallback = () => {
            if (this.state.directionsRenderer !== null) {
                this.state.directionsRenderer.setMap(this.context);
                if (this.props.onLoad) {
                    this.props.onLoad(this.state.directionsRenderer);
                }
            }
        };
    }
    componentDidMount() {
        const directionsRenderer = new google.maps.DirectionsRenderer(this.props.options);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$2,
            eventMap: eventMap$2,
            prevProps: {},
            nextProps: this.props,
            instance: directionsRenderer,
        });
        this.setState(function setDirectionsRenderer() {
            return {
                directionsRenderer,
            };
        }, this.setDirectionsRendererCallback);
    }
    componentDidUpdate(prevProps) {
        if (this.state.directionsRenderer !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$2,
                eventMap: eventMap$2,
                prevProps,
                nextProps: this.props,
                instance: this.state.directionsRenderer,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.directionsRenderer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.directionsRenderer);
            }
            unregisterEvents(this.registeredEvents);
            if (this.state.directionsRenderer) {
                this.state.directionsRenderer.setMap(null);
            }
        }
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    }
}
DirectionsRenderer.contextType = MapContext;

class DistanceMatrixService extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            distanceMatrixService: null,
        };
        this.setDistanceMatrixServiceCallback = () => {
            if (this.state.distanceMatrixService !== null && this.props.onLoad) {
                this.props.onLoad(this.state.distanceMatrixService);
            }
        };
    }
    componentDidMount() {
        invariant_1(!!this.props.options, 'DistanceMatrixService expected options object as parameter, but go %s', this.props.options);
        const distanceMatrixService = new google.maps.DistanceMatrixService();
        this.setState(function setDistanceMatrixService() {
            return {
                distanceMatrixService,
            };
        }, this.setDistanceMatrixServiceCallback);
    }
    componentDidUpdate() {
        if (this.state.distanceMatrixService !== null) {
            this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback);
        }
    }
    componentWillUnmount() {
        if (this.state.distanceMatrixService !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.distanceMatrixService);
            }
        }
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    }
}

const eventMap$1 = {
    onPlacesChanged: 'places_changed',
};
const updaterMap$1 = {
    bounds(instance, bounds) {
        instance.setBounds(bounds);
    },
};
class StandaloneSearchBox extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.containerElement = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        this.state = {
            searchBox: null,
        };
        this.setSearchBoxCallback = () => {
            if (this.state.searchBox !== null && this.props.onLoad) {
                this.props.onLoad(this.state.searchBox);
            }
        };
    }
    componentDidMount() {
        invariant_1(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
        if (this.containerElement !== null && this.containerElement.current !== null) {
            const input = this.containerElement.current.querySelector('input');
            if (input !== null) {
                const searchBox = new google.maps.places.SearchBox(input, this.props.options);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$1,
                    eventMap: eventMap$1,
                    prevProps: {},
                    nextProps: this.props,
                    instance: searchBox,
                });
                this.setState(function setSearchBox() {
                    return {
                        searchBox,
                    };
                }, this.setSearchBoxCallback);
            }
        }
    }
    componentDidUpdate(prevProps) {
        if (this.state.searchBox !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$1,
                eventMap: eventMap$1,
                prevProps,
                nextProps: this.props,
                instance: this.state.searchBox,
            });
        }
    }
    componentWillUnmount() {
        if (this.state.searchBox !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.searchBox);
            }
            unregisterEvents(this.registeredEvents);
        }
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.containerElement }, react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children));
    }
}
StandaloneSearchBox.contextType = MapContext;

const eventMap = {
    onPlaceChanged: 'place_changed',
};
const updaterMap = {
    bounds(instance, bounds) {
        instance.setBounds(bounds);
    },
    restrictions(instance, restrictions) {
        instance.setComponentRestrictions(restrictions);
    },
    fields(instance, fields) {
        instance.setFields(fields);
    },
    options(instance, options) {
        instance.setOptions(options);
    },
    types(instance, types) {
        instance.setTypes(types);
    },
};
class Autocomplete extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor() {
        super(...arguments);
        this.registeredEvents = [];
        this.containerElement = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        this.state = {
            autocomplete: null,
        };
        this.setAutocompleteCallback = () => {
            if (this.state.autocomplete !== null && this.props.onLoad) {
                this.props.onLoad(this.state.autocomplete);
            }
        };
    }
    componentDidMount() {
        invariant_1(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
        // TODO: why current could be equal null?
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        const input = this.containerElement.current.querySelector('input');
        if (input) {
            const autocomplete = new google.maps.places.Autocomplete(input, this.props.options);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap,
                eventMap,
                prevProps: {},
                nextProps: this.props,
                instance: autocomplete,
            });
            this.setState(function setAutocomplete() {
                return {
                    autocomplete,
                };
            }, this.setAutocompleteCallback);
        }
    }
    componentDidUpdate(prevProps) {
        unregisterEvents(this.registeredEvents);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap,
            eventMap,
            prevProps,
            nextProps: this.props,
            instance: this.state.autocomplete,
        });
    }
    componentWillUnmount() {
        if (this.state.autocomplete !== null) {
            unregisterEvents(this.registeredEvents);
        }
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.containerElement, className: this.props.className || '' }, react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children));
    }
}
Autocomplete.contextType = MapContext;


//# sourceMappingURL=esm.js.map


/***/ }),

/***/ "./blocks/bullet/edit.js":
/*!*******************************!*\
  !*** ./blocks/bullet/edit.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/editor */ "./blocks/icon/editor.js");
/* harmony import */ var _common_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/heading */ "./blocks/common/heading.js");


/* global wp */

/* global lodash */
const {
  Fragment,
  Component
} = wp.element;
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText,
  InspectorControls,
  BlockControls,
  ContrastChecker,
  PanelColorSettings,
  AlignmentToolbar,
  withColors
} = wp.blockEditor;
const {
  compose
} = wp.compose;



class BulletEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected,
      backgroundColor,
      textColor,
      setBackgroundColor,
      setTextColor
    } = this.props;
    const {
      align,
      title,
      titleLevel,
      content
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-selected': isSelected,
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class
    });
    const style = {
      backgroundColor: backgroundColor.color,
      color: textColor.color,
      textAlign: align
    };
    const titleTag = titleLevel ? 'h' + titleLevel : 'h2';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon_editor__WEBPACK_IMPORTED_MODULE_2__["default"], this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: titleTag,
      value: title,
      onChange: value => setAttributes({
        title: value
      }),
      placeholder: __('This is my title..', '_svbk'),
      className: 'wp-block-svbk-bullet__title'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'div',
      value: content,
      onChange: value => setAttributes({
        content: value
      }),
      placeholder: __('Content..', '_svbk'),
      className: 'wp-block-svbk-bullet__content'
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_heading__WEBPACK_IMPORTED_MODULE_3__.HeadingToolbar, {
      minLevel: 2,
      maxLevel: 5,
      selectedLevel: titleLevel,
      onChange: newLevel => {
        setAttributes({
          titleLevel: newLevel
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
      value: align,
      onChange: nextAlign => {
        setAttributes({
          align: nextAlign
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Color Settings'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: __('Background Color')
      }, {
        value: textColor.color,
        onChange: setTextColor,
        label: __('Text Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContrastChecker, {
      textColor: textColor.color,
      backgroundColor: backgroundColor.color
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
})])(BulletEdit));

/***/ }),

/***/ "./blocks/bullet/index.js":
/*!********************************!*\
  !*** ./blocks/bullet/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/bullet/edit.js");


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText,
  getColorClassName
} = wp.blockEditor;
const {
  RawHTML
} = wp.element;
/**
 * Internal dependencies
 */


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

const name = 'svbk/bullet';
const settings = {
  title: __('Bullet', '_svbk'),
  icon: 'pressthis',
  category: 'common',
  keywords: [__('bullet'), __('card')],
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'offset',
    label: __('Offset', '_svbk')
  }],
  attributes: {
    icon: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-bullet__icon'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-bullet__title'
    },
    titleLevel: {
      type: 'number',
      default: 2
    },
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-bullet__content'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    align: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function (_ref) {
    let {
      attributes
    } = _ref;
    const {
      icon,
      title,
      titleLevel,
      content,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor,
      align
    } = attributes;
    const titleTag = titleLevel ? 'h' + titleLevel : 'h2';
    const backgroundClass = getColorClassName('background-color', backgroundColor);
    const textClass = getColorClassName('color', textColor);
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor,
      [textClass]: textClass,
      [backgroundClass]: backgroundClass
    });
    const style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      textAlign: align
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-bullet__icon'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, icon)), title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: titleTag,
      className: 'wp-block-svbk-bullet__title',
      value: title
    }), content && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-bullet__content',
      value: content
    }));
  }
};

/***/ }),

/***/ "./blocks/call-us/deprecated.js":
/*!**************************************!*\
  !*** ./blocks/call-us/deprecated.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const {
  RichText
} = wp.blockEditor;
const {
  Fragment
} = wp.element;
/**
 * External dependencies
 */


const deprecated = [{
  attributes: {
    callus_title: {
      type: 'string',
      source: 'text',
      selector: '.callus__title',
      default: __('Preferisci parlarne a voce?', '_svbk')
    },
    callus_text: {
      type: 'string',
      source: 'text',
      selector: '.callus__text',
      default: __('Chiamaci al numero', '_svbk')
    },
    callus_number: {
      type: 'string',
      source: 'text',
      selector: '.callus__number',
      default: __('(+39) 000 00000000', '_svbk')
    }
  },
  supports: {
    html: false
  },

  migrate(attributes) {
    const {
      callus_title,
      callus_text,
      callus_number
    } = attributes;
    const repls = /\(|\)|\+39|\s/gi;
    return {
      title: callus_title,
      text: callus_text,
      number: callus_number.replace(repls, ''),
      action: __('Chiamaci', '_svbk')
    };
  },

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      callus_title,
      callus_text,
      callus_number,
      className
    } = attributes;
    var callus_href = callus_number.replace("+", "00").replace(/[\s\(\)]/g, "");
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "callus__title"
    }, callus_title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "callus__text"
    }, callus_text), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "tel:" + callus_href,
      className: "callus__number"
    }, callus_number));
  }

}, {
  attributes: {
    callus_title: {
      type: 'string',
      source: 'text',
      selector: '.callus__title',
      default: __('Preferisci parlarne a voce?', '_svbk')
    },
    callus_text: {
      type: 'string',
      source: 'text',
      selector: '.callus__text',
      default: __('Chiamaci al numero', '_svbk')
    },
    callus_number: {
      type: 'string',
      source: 'text',
      selector: '.callus__number',
      default: __('(+39) 000 00000000', '_svbk')
    }
  },
  supports: {
    html: false
  },

  migrate(attributes) {
    const {
      callus_title,
      callus_text,
      callus_number
    } = attributes;
    const repls = /\(|\)|\+39|\s/gi;
    return {
      title: callus_title,
      text: callus_text,
      number: callus_number.replace(repls, ''),
      action: __('Chiamaci', '_svbk')
    };
  },

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    const {
      callus_title,
      callus_text,
      callus_number,
      className
    } = attributes;
    var callus_href = callus_number.replace("+", "00").replace(/[\s\(\)]/g, "");
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "callus__title"
    }, callus_title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "callus__text"
    }, callus_text), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "tel:0039" + callus_href,
      className: "callus__number"
    }, callus_number));
  }

}, {
  supports: {
    html: false
  },
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__title'
    },
    text: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__text',
      default: __('Chiamaci al numero', '_svbk')
    },
    number: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__number'
    },
    action: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__action'
    }
  },

  save(_ref3) {
    let {
      attributes
    } = _ref3;
    const {
      title,
      text,
      number,
      action,
      className
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'h3',
      className: 'wp-block-svbk-call-us__title callus__title',
      value: title
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-call-us__text callus__text',
      value: text
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "tel:" + number,
      className: "wp-block-svbk-call-us__button callus__number"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'span',
      className: 'wp-block-svbk-call-us__action wp-block-button__action',
      value: action
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "wp-block-svbk-call-us__number wp-block-button__value"
    }, number)));
  }

}, {
  supports: {
    html: false
  },
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__title'
    },
    text: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__text',
      default: __('Chiamaci al numero', '_svbk')
    },
    number: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__number'
    },
    action: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__action'
    }
  },

  save(_ref4) {
    let {
      attributes
    } = _ref4;
    const {
      title,
      text,
      number,
      action,
      className
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      [`has-action`]: action
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'h3',
      className: 'wp-block-svbk-call-us__title callus__title',
      value: title
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-call-us__text callus__text',
      value: text
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "tel:" + number,
      className: "wp-block-svbk-call-us__button callus__number"
    }, action && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'span',
      className: 'wp-block-svbk-call-us__action wp-block-button__action',
      value: action
    }), "\xA0"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "wp-block-svbk-call-us__number wp-block-button__value"
    }, number)));
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./blocks/call-us/edit.js":
/*!********************************!*\
  !*** ./blocks/call-us/edit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/* global wp */

/* global lodash */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  Component
} = wp.element;
const {
  Dashicon,
  IconButton
} = wp.components;
const {
  RichText,
  BlockControls,
  AlignmentToolbar
} = wp.blockEditor;
/**
 * Internal dependencies
 */

class CallUsEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected
    } = this.props;
    const {
      number,
      action,
      actionWide,
      align
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      [`has-action`]: action,
      [`has-action-wide`]: actionWide,
      [`has-align-${align}`]: align
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      classNames: classNames
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      placeholder: __('Action text…'),
      value: action,
      onChange: value => setAttributes({
        action: value
      }),
      formattingControls: ['bold', 'italic', 'strikethrough'],
      className: 'wp-block-svbk-hero__link block-library-button'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      placeholder: __('Wide button action text…'),
      value: actionWide,
      onChange: value => setAttributes({
        actionWide: value
      }),
      formattingControls: ['bold', 'italic', 'strikethrough'],
      className: 'wp-block-svbk-hero__link block-library-button'
    }), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      className: "block-library-button__inline-link",
      onSubmit: event => event.preventDefault()
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
      icon: "phone"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'block-editor-call-button-input'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      "aria-label": __('Phone Number', '_svbk'),
      required: true,
      value: number,
      onChange: event => setAttributes({
        number: event.target.value
      }),
      placeholder: __('01 23456789'),
      role: "combobox"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      icon: "editor-break",
      label: __('Apply'),
      type: "submit"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
      value: align,
      onChange: nextAlign => {
        setAttributes({
          align: nextAlign
        });
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CallUsEdit);

/***/ }),

/***/ "./blocks/call-us/index.js":
/*!*********************************!*\
  !*** ./blocks/call-us/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deprecated */ "./blocks/call-us/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/call-us/edit.js");


/**
 * BLOCK: call-us
 *
 * Shows a phone call button with number
 * @author: Costanza Focardi <c.focardi@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  RichText
} = wp.blockEditor;
const {
  Fragment
} = wp.element;
/**
 * Internal dependencies
 */



const name = 'svbk/call-us';
const settings = {
  title: __('Call Us', '_svbk'),
  description: __('Display fancy phone contact', '_svbk'),
  icon: 'phone',
  category: 'common',
  keywords: [__('phone', '_svbk'), __('contacts', '_svbk')],
  supports: {
    html: false
  },
  multiple: false,
  attributes: {
    action: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__action--default'
    },
    actionWide: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__action--wide',
      default: __('Chiama il', '_svbk')
    },
    number: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-call-us__number'
    },
    align: {
      type: 'string'
    }
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      number,
      action,
      actionWide,
      align
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [`has-action`]: action,
      [`has-action-wide`]: actionWide,
      [`has-align-${align}`]: align
    });
    const normalizedNumber = number.replace("+", "00").replace(/[\s\(\)]/g, "");
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "tel:" + normalizedNumber,
      className: 'wp-block-svbk-call-us__link'
    }, action && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'span',
      className: 'wp-block-svbk-call-us__action wp-block-svbk-call-us__action--default',
      value: action
    }), actionWide && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'span',
      className: ' wp-block-svbk-call-us__action wp-block-svbk-call-us__action--wide',
      value: actionWide
    }), "\xA0", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      class: "wp-block-svbk-call-us__number"
    }, number))));
  }

};

/***/ }),

/***/ "./blocks/card/edit.js":
/*!*****************************!*\
  !*** ./blocks/card/edit.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");
/* harmony import */ var _icon_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/edit */ "./blocks/icon/edit.js");
/* harmony import */ var _common_heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/heading */ "./blocks/common/heading.js");


/* global wp */

/* global lodash */
const {
  Fragment,
  Component
} = wp.element;
/**
 * External dependencies
 */

const {
  pick,
  mapKeys,
  capitalize
} = lodash;

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText,
  URLInput,
  InspectorControls,
  BlockControls,
  ContrastChecker,
  PanelColorSettings,
  FontSizePicker,
  AlignmentToolbar,
  withColors,
  withFontSizes,
  InnerBlocks
} = wp.blockEditor;
const {
  Dashicon,
  IconButton,
  Panel,
  PanelBody,
  Placeholder,
  TextControl,
  Button
} = wp.components;
const {
  compose
} = wp.compose;
/**
 * Internal dependencies
 */




/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
*/

const ALLOWED_BLOCKS = ['core/paragraph', 'core/list', 'core/heading', 'core/group'];
/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/

const TEMPLATE = [['core/paragraph', {
  content: 'Lorem ipsum sit amet...'
}]];

class CardEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected,
      backgroundColor,
      textColor,
      ribbonColor,
      setBackgroundColor,
      setTextColor,
      setRibbonColor,
      fontSize,
      setFontSize
    } = this.props;
    const {
      align,
      pictureUrl,
      pictureAlt,
      pictureId,
      pictureSize,
      title,
      titleLevel,
      subtitle,
      buttonUrl,
      buttonText,
      imageType,
      ribbonText
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-selected': isSelected,
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class,
      [fontSize.class]: fontSize.class
    });

    const pictureUpdate = update => {
      const localUpdate = mapKeys(pick(update, ['id', 'url', 'alt', 'size']), function (value, key) {
        // Convert url to pictureUrl, id to pictureId, etc
        return 'picture' + capitalize(key);
      });
      setAttributes(localUpdate);
    };

    const style = {
      backgroundColor: backgroundColor.color,
      color: textColor.color,
      fontSize: fontSize.size ? fontSize.size + 'px' : undefined,
      textAlign: align
    };
    const ribbonStyle = {
      backgroundColor: ribbonColor ? ribbonColor.color : undefined
    };
    const titleTag = titleLevel ? 'h' + titleLevel : 'h3';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, ribbonText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-card__ribbon',
      style: ribbonStyle
    }, ribbonText), !imageType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Placeholder, {
      icon: "format-image",
      label: __('Image'),
      instructions: __('Please select if you want to use an image or an icon')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isLarge: true,
      onClick: () => {
        setAttributes({
          imageType: 'picture'
        });
      }
    }, __('Image')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isLarge: true,
      onClick: () => {
        setAttributes({
          imageType: 'icon'
        });
      }
    }, __('Icon'))), imageType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      icon: "no",
      label: __('Back to picture type choice'),
      onClick: () => {
        setAttributes({
          imageType: null
        });
      }
    }), 'picture' == imageType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setAttributes: pictureUpdate,
      url: pictureUrl,
      id: pictureId,
      size: pictureSize,
      alt: pictureAlt,
      isMain: true
    }), 'icon' == imageType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon_edit__WEBPACK_IMPORTED_MODULE_3__["default"], this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: titleTag,
      value: title,
      onChange: value => setAttributes({
        title: value
      }),
      placeholder: __('This is my title..', '_svbk'),
      className: 'wp-block-svbk-card__title'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'div',
      value: subtitle,
      onChange: value => setAttributes({
        subtitle: value
      }),
      placeholder: __('Subtitle..', '_svbk'),
      className: 'wp-block-svbk-card__subtitle'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS,
      template: TEMPLATE
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      placeholder: __('Button text…'),
      value: buttonText,
      onChange: value => setAttributes({
        buttonText: value
      }),
      formattingControls: ['bold', 'italic', 'strikethrough'],
      className: 'wp-block-svbk-card__link block-library-button'
    }), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      className: "block-library-button__inline-link",
      onSubmit: event => event.preventDefault()
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
      icon: "admin-links"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLInput, {
      value: buttonUrl,
      onChange: value => setAttributes({
        buttonUrl: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      icon: "editor-break",
      label: __('Apply'),
      type: "submit"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_heading__WEBPACK_IMPORTED_MODULE_4__.HeadingToolbar, {
      minLevel: 2,
      maxLevel: 5,
      selectedLevel: titleLevel,
      onChange: newLevel => {
        setAttributes({
          titleLevel: newLevel
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
      value: align,
      onChange: nextAlign => {
        setAttributes({
          align: nextAlign
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Text Settings'),
      className: "blocks-font-size"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(FontSizePicker, {
      value: fontSize.size,
      onChange: setFontSize
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Color Settings'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: __('Background Color')
      }, {
        value: textColor.color,
        onChange: setTextColor,
        label: __('Text Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContrastChecker, {
      textColor: textColor.color,
      backgroundColor: backgroundColor.color,
      fontSize: fontSize.size
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Ribbon Settings', '_svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Ribbon Text', '_svbk'),
      value: ribbonText,
      onChange: value => setAttributes({
        ribbonText: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Ribbon Color Settings', '_svbk'),
      initialOpen: false,
      colorSettings: [{
        value: ribbonColor.color,
        onChange: setRibbonColor,
        label: __('Ribbon Color')
      }]
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
}, 'ribbonColor'), withFontSizes('fontSize')])(CardEdit));

/***/ }),

/***/ "./blocks/card/index.js":
/*!******************************!*\
  !*** ./blocks/card/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/card/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText,
  getColorClassName,
  getFontSizeClass,
  InnerBlocks
} = wp.blockEditor;
const {
  RawHTML
} = wp.element;
/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

/**
 * Internal dependencies
 */

const name = 'svbk/card';
const settings = {
  title: __('Card', '_svbk'),
  icon: 'id',
  category: 'common',
  keywords: [__('card'), __('block'), __('content')],
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'featured',
    label: __('Featured')
  }],
  attributes: {
    pictureUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.wp-block-svbk-card__picture img'
    },
    pictureAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: '.wp-block-svbk-card__picture img'
    },
    pictureId: {
      type: 'number'
    },
    pictureSize: {
      type: 'string'
    },
    imageType: {
      type: 'string'
    },
    icon: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-card__icon'
    },
    title: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-card__title'
    },
    titleLevel: {
      type: 'number',
      default: 3
    },
    subtitle: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-card__subtitle'
    },
    buttonUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: '.wp-block-svbk-card__link'
    },
    ribbonText: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-card__ribbon'
    },
    ribbonColor: {
      type: 'string'
    },
    customRibbonColor: {
      type: 'string'
    },
    buttonText: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-card__link'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    fontSize: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    },
    align: {
      type: 'string'
    },
    contentAlign: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function (_ref) {
    let {
      attributes
    } = _ref;
    const {
      imageType,
      pictureUrl,
      pictureAlt,
      pictureId,
      icon,
      title,
      titleLevel,
      subtitle,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor,
      fontSize,
      customFontSize,
      align,
      contentAlign,
      buttonUrl,
      buttonText,
      ribbonColor,
      customRibbonColor,
      ribbonText
    } = attributes;
    const titleTag = titleLevel ? 'h' + titleLevel : 'h3';
    const backgroundClass = getColorClassName('background-color', backgroundColor);
    const textClass = getColorClassName('color', textColor);
    const ribbonClass = getColorClassName('ribbon', ribbonColor);
    const fontSizeClass = getFontSizeClass(fontSize);
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor,
      'has-image': imageType === 'image',
      'has-icon': imageType === 'icon',
      [fontSizeClass]: fontSizeClass,
      [textClass]: textClass,
      [backgroundClass]: backgroundClass
    });
    const style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      fontSize: fontSizeClass ? undefined : customFontSize,
      textAlign: align
    };
    const ribbonStyle = {
      backgroundColor: ribbonClass ? undefined : customRibbonColor
    };
    const contentStyle = {
      textAlign: contentAlign
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, ribbonText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-svbk-card__ribbon', {
        [ribbonClass]: ribbonClass
      }),
      style: ribbonStyle
    }, ribbonText), 'picture' == imageType && pictureUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: 'wp-block-svbk-card__picture'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: pictureUrl,
      alt: pictureAlt,
      className: pictureId ? `wp-image-${pictureId}` : null
    })), 'icon' == imageType && icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-card__icon'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, icon)), title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: titleTag,
      className: 'wp-block-svbk-card__title',
      value: title
    }), subtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: 'wp-block-svbk-card__subtitle'
    }, subtitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-card__content',
      style: contentStyle
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)), buttonText && buttonUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-button wp-block-svbk-card__button'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: 'wp-block-button__link wp-block-svbk-card__link',
      href: buttonUrl
    }, buttonText)));
  }
};

/***/ }),

/***/ "./blocks/collapse/edit.js":
/*!*********************************!*\
  !*** ./blocks/collapse/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/* global wp */

/* global lodash */
const {
  Fragment,
  Component
} = wp.element;
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  RichText,
  PlainText,
  InnerBlocks,
  InspectorControls
} = wp.blockEditor;
const {
  ToggleControl,
  PanelBody
} = wp.components;
/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/

const TEMPLATE = [['core/paragraph', {
  content: 'Lorem ipsum sit amet...'
}]];

class CollapseEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected
    } = this.props;
    const {
      title,
      defaultOpen,
      buttonClose,
      buttonOpen
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-selected': isSelected
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'h3',
      value: title,
      onChange: value => setAttributes({
        title: value
      }),
      placeholder: __('Insert title here..', '_svbk'),
      className: 'wp-block-svbk-collapse__title'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      templateLock: false,
      template: TEMPLATE
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-collapse__button'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      value: buttonOpen,
      onChange: value => setAttributes({
        buttonOpen: value
      }),
      placeholder: __('Open me..', '_svbk'),
      className: 'wp-block-svbk-collapse__label wp-block-svbk-collapse__label--open'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      value: buttonClose,
      onChange: value => setAttributes({
        buttonClose: value
      }),
      placeholder: __('Close me..', '_svbk'),
      className: 'wp-block-svbk-collapse__label wp-block-svbk-collapse__label--close'
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Collapse Settings', '_svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Default Open', '_svbk'),
      help: defaultOpen ? __('Leave the collapse open on page load', '_svbk') : __('Leave the collapse close on page load', '_svbk'),
      checked: defaultOpen,
      onChange: checked => setAttributes({
        defaultOpen: Boolean(checked)
      })
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CollapseEdit);

/***/ }),

/***/ "./blocks/collapse/index.js":
/*!**********************************!*\
  !*** ./blocks/collapse/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/collapse/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  InnerBlocks,
  RichText
} = wp.blockEditor;
/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

/**
 * Internal dependencies
 */

const name = 'svbk/collapse';
const settings = {
  title: __('Collapse', '_svbk'),
  icon: 'feedback',
  category: 'common',
  keywords: [__('collapse'), __('accordion')],
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'accordion',
    label: __('Accordion', '_svbk')
  }, {
    name: 'faq',
    label: __('FAQ', '_svbk')
  }, {
    name: 'button',
    label: __('Button', '_svbk')
  }],
  attributes: {
    defaultOpen: {
      type: 'boolean',
      default: false
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-collapse__title'
    },
    buttonOpen: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-collapse__label--open'
    },
    buttonClose: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-collapse__label--close'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function (_ref) {
    let {
      attributes,
      className
    } = _ref;
    const {
      title,
      defaultOpen,
      buttonOpen,
      buttonClose
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      'wp-block-svbk-collapse--open': defaultOpen
    });
    const buttonClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(['wp-block-svbk-collapse__button', 'wp-block-svbk-collapse__trigger'], {
      'wp-block-svbk-collapse__button--has-open': buttonOpen,
      'wp-block-svbk-collapse__button--has-close': buttonClose
    });
    const style = {
      display: defaultOpen ? undefined : 'none'
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'h3',
      value: title,
      className: 'wp-block-svbk-collapse__title wp-block-svbk-collapse__trigger'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-collapse__content',
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)), (buttonOpen || buttonClose) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: buttonClassNames
    }, buttonOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'wp-block-svbk-collapse__label wp-block-svbk-collapse__label--open'
    }, buttonOpen), buttonClose && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'wp-block-svbk-collapse__label wp-block-svbk-collapse__label--close'
    }, buttonClose)));
  }
};

/***/ }),

/***/ "./blocks/common/Post.js":
/*!*******************************!*\
  !*** ./blocks/common/Post.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const {
  Component
} = wp.element;
/**
 * WordPress dependencies
 */

const {
  RawHTML
} = wp.element;
const {
  __
} = wp.i18n;
const {
  Spinner
} = wp.components;
const {
  withSelect
} = wp.data;
const {
  compose
} = wp.compose;

class Post extends Component {
  getThumbnailImage(thumbnailMedia) {
    if (!thumbnailMedia || !thumbnailMedia.description) {
      return false;
    } // Never return a text node of whitespace as the result


    const template = document.createElement('template');
    template.innerHTML = thumbnailMedia.description.rendered.trim();
    return template.content.querySelector('img').outerHTML;
  }

  render() {
    const {
      postType,
      display,
      excerptLength,
      post,
      thumbnailMedia
    } = this.props;
    const titleTrimmed = post.title.rendered.trim();
    let excerpt = post.excerpt ? post.excerpt.rendered : '';

    if (post.excerpt && post.excerpt.raw === '') {
      excerpt = post.content.raw;
    }

    const excerptElement = document.createElement('div');
    excerptElement.innerHTML = excerpt;
    excerpt = excerptElement.textContent || excerptElement.innerText || '';
    const thumbnailImg = this.getThumbnailImage(thumbnailMedia);
    const postContent = post.content.raw ? post.content.raw : post.content.rendered;
    const containerClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      post: true,
      [`post--${post.type}`]: post.type,
      [`post--format-${post.format}`]: post.format,
      ['has-thumbnail']: post.featured_media
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: containerClasses
    }, Boolean(post.featured_media && !thumbnailMedia) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null), post.featured_media && !thumbnailMedia && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null), thumbnailMedia && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, thumbnailImg), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, titleTrimmed ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, titleTrimmed) : __('(no title)')), display === 'excerpt' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `wp-block-${postType}__post-excerpt`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, {
      key: "html"
    }, excerptLength < excerpt.trim().split(' ').length ? excerpt.trim().split(' ', excerptLength).join(' ') + ' ... <a href=' + post.link + 'target="_blank" rel="noopener noreferrer">' + __('Read more') + '</a>' : excerpt.trim().split(' ', excerptLength).join(' '))), display === 'full_post' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `wp-block-${postType}__full-content`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, {
      key: "html"
    }, postContent.trim())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect((select, props) => {
  const {
    getMedia
  } = select('core');
  const {
    post
  } = props;
  const {
    featured_media
  } = post;
  return {
    thumbnailMedia: featured_media ? getMedia(featured_media) : null
  };
})])(Post));

/***/ }),

/***/ "./blocks/common/PostEdit.js":
/*!***********************************!*\
  !*** ./blocks/common/PostEdit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ "./blocks/common/Post.js");



/* global wp */

/* global lodash */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
const {
  Component,
  Fragment
} = wp.element;
const {
  PanelBody,
  Placeholder,
  RadioControl,
  TextControl,
  Spinner,
  Popover
} = wp.components;
const apiFetch = wp.apiFetch;
const {
  addQueryArgs
} = wp.url;
const {
  __
} = wp.i18n;
const {
  InspectorControls
} = wp.blockEditor;


class PostList extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      loading: false,
      posts: [],
      postPreview: false
    };
  }

  componentDidMount() {
    this.isStillMounted = true;
    const {
      attributes
    } = this.props;

    if (attributes && attributes.id) {
      this.selectPost(attributes.id);
    }
  }

  componentWillUnmount() {
    this.isStillMounted = false;
  }

  updatePosts(search) {
    this.setState({
      loading: true
    });
    this.fetchRequest = apiFetch({
      path: addQueryArgs('/wp/v2/search', {
        search,
        per_page: 20,
        type: 'post',
        subtype: this.props.postType
      })
    }).then(posts => {
      if (this.isStillMounted) {
        this.setState({
          posts,
          loading: false
        });
      }
    }).catch(() => {
      if (this.isStillMounted) {
        this.setState({
          posts: [],
          loading: false
        });
      }
    });
  }

  selectPost(postId) {
    const {
      setAttributes
    } = this.props;
    setAttributes({
      id: postId
    });

    if (!this.props.postType) {
      return;
    }

    this.setState({
      postLoading: true
    });
    this.fetchRequest = apiFetch({
      path: addQueryArgs(`/wp/v2/${this.props.postType}/${postId}`, {
        _locale: 'user'
      })
    }).then(postContent => {
      if (this.isStillMounted) {
        this.setState({
          postContent,
          postLoading: false
        });
      }
    }).catch(() => {
      if (this.isStillMounted) {
        this.setState({
          postContent: false,
          postLoading: false
        });
      }
    });
  }

  render() {
    const {
      attributes,
      setAttributes,
      className
    } = this.props;
    const {
      posts,
      loading,
      postContent,
      postLoading
    } = this.state;
    const {
      display,
      id
    } = attributes;
    const inspectorControls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __('Post Content Settings')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioControl, {
      label: "Show:",
      selected: display,
      options: [{
        label: 'Excerpt',
        value: 'excerpt'
      }, {
        label: 'Full Post',
        value: 'full_post'
      }],
      onChange: value => setAttributes({
        display: value
      })
    })));

    if (!id) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Placeholder, {
        icon: "admin-post"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
        label: __("Search", '_svbk'),
        onChange: search => this.updatePosts(search)
      }), posts.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Popover, {
        position: "bottom",
        noArrow: true,
        focusOnMount: false
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: `${className}__suggestions`,
        role: "listbox"
      }, posts.map((post, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
        key: post.id,
        role: "option",
        tabIndex: "-1",
        id: `post-${index}`,
        onClick: () => this.selectPost(post.id),
        "aria-selected": post.id === id
      }, post.title)))), loading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Spinner, null)));
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, inspectorControls, postLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Spinner, null), postContent && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Post__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      post: postContent
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ }),

/***/ "./blocks/common/PostListEdit.js":
/*!***************************************!*\
  !*** ./blocks/common/PostListEdit.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post */ "./blocks/common/Post.js");



/* global wp */

/* global lodash */

/**
 * External dependencies
 */
const {
  isUndefined,
  pickBy
} = lodash;

/**
 * WordPress dependencies
 */

const {
  Component,
  Fragment
} = wp.element;
const {
  PanelBody,
  Placeholder,
  QueryControls,
  RangeControl,
  RadioControl,
  Spinner,
  ToggleControl,
  Toolbar
} = wp.components;
const apiFetch = wp.apiFetch;
const {
  addQueryArgs
} = wp.url;
const {
  __
} = wp.i18n;
const {
  InspectorControls,
  BlockAlignmentToolbar,
  BlockControls
} = wp.blockEditor;
const {
  withSelect
} = wp.data;

/**
 * Module Constants
 */

const CATEGORIES_LIST_QUERY = {
  per_page: -1
};
const MAX_POSTS_COLUMNS = 6;

class PostListEdit extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      categoriesList: []
    };
    this.toggleDisplayPostDate = this.toggleDisplayPostDate.bind(this);
  }

  componentDidMount() {
    this.isStillMounted = true;

    if (this.props.taxonomy) {
      this.fetchRequest = apiFetch({
        path: addQueryArgs(`/wp/v2/${this.props.taxonomy}`, CATEGORIES_LIST_QUERY)
      }).then(categoriesList => {
        if (this.isStillMounted) {
          this.setState({
            categoriesList
          });
        }
      }).catch(() => {
        if (this.isStillMounted) {
          this.setState({
            categoriesList: []
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.isStillMounted = false;
  }

  toggleDisplayPostDate() {
    const {
      displayPostDate
    } = this.props.attributes;
    const {
      setAttributes
    } = this.props;
    setAttributes({
      displayPostDate: !displayPostDate
    });
  }

  render() {
    const {
      attributes,
      setAttributes,
      posts,
      taxonomy,
      children
    } = this.props;
    const {
      categoriesList
    } = this.state;
    const {
      display,
      align,
      postLayout,
      columns,
      order,
      orderBy,
      categories,
      postsToShow,
      offset,
      loadMore
    } = attributes;
    const inspectorControls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __('Post Content Settings')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioControl, {
      label: "Show:",
      selected: display,
      options: [{
        label: 'Excerpt',
        value: 'excerpt'
      }, {
        label: 'Full Post',
        value: 'full_post'
      }],
      onChange: value => setAttributes({
        display: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __('Filter & Sorting', '_svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(QueryControls, {
      order,
      orderBy,
      numberOfItems: postsToShow,
      categoriesList: categoriesList,
      selectedCategoryId: taxonomy ? categories : undefined,
      onOrderChange: value => setAttributes({
        order: value
      }),
      onOrderByChange: value => setAttributes({
        orderBy: value
      }),
      onCategoryChange: value => setAttributes({
        categories: '' !== value ? value : undefined
      }),
      onNumberOfItemsChange: value => setAttributes({
        postsToShow: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
      label: __('Offset', '_svbk'),
      value: offset,
      onChange: value => setAttributes({
        offset: value
      }),
      min: 0,
      max: 10
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: __('Show Load More', '_svbk'),
      checked: loadMore,
      onChange: value => setAttributes({
        loadMore: Boolean(value)
      })
    })), postLayout === 'grid' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __('Layout')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
      label: __('Columns', '_svbk'),
      value: columns,
      onChange: value => setAttributes({
        columns: value
      }),
      min: 2,
      max: !hasPosts ? MAX_POSTS_COLUMNS : Math.min(MAX_POSTS_COLUMNS, posts.length)
    })));
    const hasPosts = Array.isArray(posts) && posts.length;

    if (!hasPosts) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Placeholder, {
        icon: "admin-post"
      }, !Array.isArray(posts) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Spinner, null) : __('No posts found.')));
    } // Removing posts from display should be instant.


    const displayPosts = posts.length > postsToShow ? posts.slice(0, postsToShow) : posts;
    const layoutControls = [{
      icon: 'list-view',
      title: __('List View'),
      onClick: () => setAttributes({
        postLayout: 'list'
      }),
      isActive: postLayout === 'list'
    }, {
      icon: 'grid-view',
      title: __('Grid View'),
      onClick: () => setAttributes({
        postLayout: 'grid'
      }),
      isActive: postLayout === 'grid'
    }];
    let PostComponent = _Post__WEBPACK_IMPORTED_MODULE_3__["default"];

    if (typeof children !== 'undefined') {
      PostComponent = children;
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockAlignmentToolbar, {
      value: align,
      onChange: nextAlign => {
        setAttributes({
          align: nextAlign
        });
      },
      controls: ['center', 'wide', 'full']
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Toolbar, {
      controls: layoutControls
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(this.props.className, {
        'is-grid': postLayout === 'grid',
        [`columns-${columns}`]: postLayout === 'grid'
      })
    }, displayPosts.map((post, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PostComponent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
      post: post,
      postType: this.props.postType,
      key: i
    }))), loadMore && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: `wp-block-${this.props.postType}s__loadmore`
    }, __('Load more', '_svbk'))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (withSelect((select, props) => {
  const {
    postsToShow,
    order,
    orderBy,
    categories
  } = props.attributes;
  const {
    getEntityRecords
  } = select('core');
  const postsQuery = pickBy({
    categories,
    order,
    orderby: orderBy,
    per_page: postsToShow
  }, value => !isUndefined(value));
  return {
    posts: getEntityRecords('postType', props.postType, postsQuery)
  };
})(PostListEdit));

/***/ }),

/***/ "./blocks/common/appearance-controls.js":
/*!**********************************************!*\
  !*** ./blocks/common/appearance-controls.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl
} = wp.components;
const {
  __
} = wp.i18n;
const withAppearanceControls = createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      setAttributes,
      attributes: {
        mobileHidden,
        criticalRendering,
        enableAnimation,
        className
      }
    } = props;
    props.attributes.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-critical-rendering': criticalRendering,
      'is-mobile-hidden': mobileHidden,
      'is-animated': enableAnimation
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Appearance', '_svbk'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Critical Rendering'),
      onChange: value => setAttributes({
        criticalRendering: value
      }),
      checked: criticalRendering
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Hide on Mobile'),
      onChange: value => setAttributes({
        mobileHidden: value
      }),
      checked: mobileHidden
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Enable Animation'),
      onChange: value => setAttributes({
        enableAnimation: value
      }),
      checked: enableAnimation
    }))));
  };
}, "withAppearanceControls");

const withAppearanceSettings = (settings, name) => {
  lodash.assign(settings, {
    edit: withAppearanceControls(settings.edit),
    attributes: lodash.assign({}, settings.attributes, {
      criticalRendering: {
        type: 'boolean',
        default: false
      },
      mobileHidden: {
        type: 'boolean',
        default: false
      },
      enableAnimation: {
        type: 'boolean',
        default: false
      }
    })
  });
  return settings;
};

/* harmony default export */ __webpack_exports__["default"] = (withAppearanceSettings);

/***/ }),

/***/ "./blocks/common/heading.js":
/*!**********************************!*\
  !*** ./blocks/common/heading.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadingToolbar": function() { return /* binding */ HeadingToolbar; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/* global wp */

/* global lodash */

/**
 * External dependencies
 */
const {
  range
} = lodash;
/**
 * WordPress dependencies
 */

const {
  __,
  sprintf
} = wp.i18n;
const {
  Fragment,
  Component
} = wp.element;
const {
  Toolbar
} = wp.components;
const {
  RichText
} = wp.blockEditor;

class HeadingToolbar extends Component {
  createLevelControl(targetLevel, selectedLevel, onChange) {
    return {
      icon: 'heading',
      // translators: %s: heading level e.g: "1", "2", "3"
      title: sprintf(__('Heading %d'), targetLevel),
      isActive: targetLevel === selectedLevel,
      onClick: () => onChange(targetLevel),
      subscript: String(targetLevel)
    };
  }

  render() {
    const {
      minLevel,
      maxLevel,
      selectedLevel,
      onChange
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Toolbar, {
      controls: range(minLevel, maxLevel).map(index => this.createLevelControl(index, selectedLevel, onChange))
    });
  }

}



class Heading extends Component {
  constructor() {
    super(...arguments);
    this.onLevelChange = this.onLevelChange.bind(this);
    this.state = {
      isSelected: false
    };
  }

  onLevelChange(newLevel) {
    this.props.onLevelChange(newLevel);
  }

  render() {
    const {
      level,
      isSelected
    } = this.props;
    const titleTag = level ? 'h' + level : 'h2';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(HeadingToolbar, {
      minLevel: 2,
      maxLevel: 5,
      selectedLevel: level,
      onChange: this.onLevelChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      tagName: titleTag
    }, this.props)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./blocks/common/image.js":
/*!********************************!*\
  !*** ./blocks/common/image.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pickRelevantMediaFiles": function() { return /* binding */ pickRelevantMediaFiles; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/* global wp */

/* global lodash */
const {
  get,
  isEmpty,
  pick
} = lodash;
const {
  __
} = wp.i18n;
const {
  Fragment,
  Component
} = wp.element;
const {
  IconButton,
  PanelBody,
  SelectControl,
  TextareaControl,
  Toolbar,
  SVG,
  Rect,
  Path,
  Spinner
} = wp.components;
const {
  InspectorControls,
  BlockControls,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
const {
  withSelect
} = wp.data;
const {
  compose
} = wp.compose;
const LINK_DESTINATION_NONE = 'none';
const LINK_DESTINATION_MEDIA = 'media';
const LINK_DESTINATION_ATTACHMENT = 'attachment';
const ALLOWED_MEDIA_TYPES = ['image'];
const editImageIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Rect, {
  x: 11,
  y: 3,
  width: 7,
  height: 5,
  rx: 1
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Rect, {
  x: 2,
  y: 12,
  width: 7,
  height: 5,
  rx: 1
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M13,12h1a3,3,0,0,1-3,3v2a5,5,0,0,0,5-5h1L15,9Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
  d: "M4,8H3l2,3L7,8H6A3,3,0,0,1,9,5V3A5,5,0,0,0,4,8Z"
}));
const pickRelevantMediaFiles = image => {
  const imageProps = pick(image, ['alt', 'id', 'link', 'caption']);
  imageProps.url = get(image, ['sizes', 'medium', 'url']) || get(image, ['media_details', 'sizes', 'medium', 'source_url']) || image.url;
  return imageProps;
};

class ImageEdit extends Component {
  constructor() {
    super(...arguments);
    this.updateAlt = this.updateAlt.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onSelectURL = this.onSelectURL.bind(this);
    this.updateImageSize = this.updateImageSize.bind(this);
    this.onSetLinkDestination = this.onSetLinkDestination.bind(this);
    this.state = {
      isEditing: false
    };
  }

  updateAlt(newAlt) {
    this.props.setAttributes({
      alt: newAlt
    });
  }

  onUploadError(message) {
    const {
      noticeOperations
    } = this.props;
    noticeOperations.createErrorNotice(message);
    this.setState({
      isEditing: true
    });
  }

  onSelectImage(media) {
    if (!media || !media.id) {
      this.props.setAttributes({
        url: undefined,
        alt: undefined,
        id: undefined,
        caption: undefined
      });
      return;
    }

    this.setState({
      isEditing: false
    });
    this.props.setAttributes({ ...pickRelevantMediaFiles(media),
      width: undefined,
      height: undefined
    });
  }

  onSetLinkDestination(value) {
    let href;

    if (value === LINK_DESTINATION_NONE) {
      href = undefined;
    } else if (value === LINK_DESTINATION_MEDIA) {
      href = this.props.image && this.props.image.source_url || this.props.url;
    } else if (value === LINK_DESTINATION_ATTACHMENT) {
      href = this.props.image && this.props.image.link;
    } else {
      href = this.props.href;
    }

    this.props.setAttributes({
      linkDestination: value,
      href
    });
  }

  onSelectURL(newURL) {
    const {
      url
    } = this.props.attributes;

    if (newURL !== url) {
      this.props.setAttributes({
        url: newURL,
        id: undefined
      });
    }

    this.setState({
      isEditing: false
    });
  }

  updateImageSize(size) {
    const {
      image
    } = this.props;
    const sizedImage = get(image, ['media_details', 'sizes', size]);
    this.props.setAttributes({
      url: sizedImage.source_url,
      width: sizedImage.width,
      height: sizedImage.height,
      size: size
    });
  }

  getImageSizes() {
    const {
      imageSizes,
      image
    } = this.props;

    if (!image) {
      return [];
    }

    const currentImageSizes = get(image, ['media_details', 'sizes']);

    if (!currentImageSizes) {
      return [];
    }

    return imageSizes.reduce((results, imageSize) => {
      let sizeSpec = currentImageSizes[imageSize.slug];

      if (sizeSpec) {
        results.push({
          value: imageSize.slug,
          label: `${imageSize.name} (${sizeSpec.width} x ${sizeSpec.height})`
        });
      }

      return results;
    }, []);
  }

  render() {
    const {
      url,
      alt,
      id,
      size = 'medium',
      inInspector = false,
      isMain = false,
      changeSize = true,
      image
    } = this.props;
    let imageUrl = url;

    if (!url && image) {
      imageUrl = get(image, ['media_details', 'sizes', size, 'source_url']); // Fallback sizes

      !imageUrl && (imageUrl = get(image, ['media_details', 'sizes', 'thumbnail', 'source_url']));
      !imageUrl && (imageUrl = get(image, ['media_details', 'sizes', 'full', 'source_url']));
      !imageUrl && (imageUrl = get(image, 'source_url'));
    }

    const imageSizeOptions = this.getImageSizes();
    const settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, !isEmpty(imageSizeOptions) && changeSize && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __('Image Size'),
      value: size,
      options: imageSizeOptions,
      onChange: this.updateImageSize
    }), typeof alt !== 'undefined' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
      label: __('Alt Text (Alternative Text)'),
      value: alt,
      onChange: this.updateAlt,
      help: __('Alternative text describes your image to people who can’t see it. Add a short description with its key details.')
    }));
    const toolbar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, {
      className: 'block-editor-svbk-picture__controls'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: this.onSelectImage,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: id,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
          className: "components-toolbar__control",
          label: __('Edit image'),
          icon: editImageIcon,
          onClick: open
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      className: "components-toolbar__control",
      label: __('Remove image'),
      icon: "trash",
      onClick: () => {
        this.onSelectImage();
      }
    }));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, imageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, isMain ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, toolbar) : toolbar), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: 'block-editor-svbk-picture'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageUrl,
      alt: alt
    }))), id && !image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null), !imageUrl && !id && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaPlaceholder //className={ className }
    , {
      onSelect: this.onSelectImage,
      onSelectURL: this.onSelectURL,
      accept: "image/*",
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: {
        id,
        imageUrl
      },
      labels: this.props.labels
    }), inInspector ? settings : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Image Settings')
    }, settings)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect((select, props) => {
  const {
    getMedia
  } = select('core');
  const {
    getSettings
  } = select('core/block-editor');
  const {
    id
  } = props;
  const {
    maxWidth,
    isRTL,
    imageSizes
  } = getSettings();
  return {
    image: id ? getMedia(id) : null,
    maxWidth,
    isRTL,
    imageSizes
  };
})])(ImageEdit));

/***/ }),

/***/ "./blocks/countdown/formatters.js":
/*!****************************************!*\
  !*** ./blocks/countdown/formatters.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const formatters = [{
  formatter: 'Y',
  className: 'year',
  name: 'Years left'
}, {
  formatter: 'm',
  className: 'month',
  name: 'Months left'
}, {
  formatter: 'n',
  className: 'monthdays',
  name: 'Days left until the next complete month'
}, {
  formatter: 'w',
  className: 'weeks',
  name: 'Weeks left'
}, {
  formatter: 'W',
  className: 'monthweeks',
  name: 'Weeks left until the next complete month'
}, {
  formatter: 'd',
  className: 'days',
  name: 'Days left (taking away weeks)'
}, {
  formatter: 'H',
  className: 'hours',
  name: 'Hours left'
}, {
  formatter: 'M',
  className: 'minutes',
  name: 'Minutes left'
}, {
  formatter: 'S',
  className: 'seconds',
  name: 'Seconds left'
}, {
  formatter: 'D',
  className: 'totdays',
  name: 'Total count of days till the end'
}, {
  formatter: 'I',
  className: 'tothours',
  name: 'Total count of hours thill the end'
}, {
  formatter: 'N',
  className: 'totminutes',
  name: 'Total count of minutes till the end'
}, {
  formatter: 'T',
  className: 'totseconds',
  name: 'Total count of seconds till the end'
}];
const formatters_blank = lodash.cloneDeepWith(formatters, function (value, key, object) {
  if ('formatter' == key) {
    return '-' + value;
  }

  if ('name' == key) {
    return value + ' (blank-padded)';
  }
});
/* harmony default export */ __webpack_exports__["default"] = (lodash.concat(formatters, formatters_blank));

/***/ }),

/***/ "./blocks/countdown/index.js":
/*!***********************************!*\
  !*** ./blocks/countdown/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatters */ "./blocks/countdown/formatters.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");



/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  PanelBody,
  ToggleControl,
  DateTimePicker,
  Dashicon
} = wp.components;
const {
  InspectorControls,
  RichText
} = wp.blockEditor;
const attributes = {
  expires: {
    type: 'string',
    source: 'attribute',
    selector: 'div.countdown',
    attribute: 'data-expires'
  },
  persists: {
    type: 'string',
    selector: 'div',
    attribute: 'data-persist'
  },
  format: {
    type: 'string',
    source: 'html',
    selector: 'div',
    default: __('%D days %H hours %M min %S sec', '_svbk')
  }
};

const formatterTemplate = option => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
  className: 'countdown__segment countdown__segment--' + option.className
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", {
  className: 'countdown__digit'
}, "%", option.formatter));

const autocompleters = [{
  name: 'jquery_countdown',
  // The prefix that triggers this completer
  triggerPrefix: '%',
  // The option data
  options: _formatters__WEBPACK_IMPORTED_MODULE_1__["default"],
  // Returns a label for an option like " Orange"
  getOptionLabel: option => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, "%", option.formatter), " ", option.name),
  // Declares that options should be matched by their name
  getOptionKeywords: option => [option.formatter],
  // Declares that the Grapes option is disabled
  isOptionDisabled: option => option.name === 'Grapes',
  // Declares completions should be inserted as abbreviations
  getOptionCompletion: formatterTemplate
}];
const formatters_placeholders = lodash.keyBy(_formatters__WEBPACK_IMPORTED_MODULE_1__["default"], 'formatter');
const formatters_placeholder_regex = /%(-?\w+)/gi;

const stringToFormat = formatString => formatString.replace(formatters_placeholder_regex, (match, placeholder) => {
  let formatter = formatters_placeholders[placeholder];

  if (typeof formatter !== 'undefined') {
    try {
      return react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToStaticMarkup(formatterTemplate(formatter));
    } catch (err) {
      console.error(err);
    }
  }

  return match;
});

attributes.format.default = stringToFormat(attributes.format.default);
/**
 * Internal dependencies
 */

const name = 'svbk/countdown';
const settings = {
  title: __('Countdown', '_svbk'),
  description: __('Countdown', '_svbk'),
  icon: 'backup',
  category: 'widgets',
  keywords: [__('countdown', '_svbk'), __('timer', '_svbk')],
  supports: {
    html: true
  },
  attributes,
  transforms: {
    from: [{
      type: 'shortcode',
      // Shortcode tag can also be an array of shortcode aliases
      tag: 'countdown',
      attributes: {
        // An attribute can be source from the shortcode attributes
        expires: {
          type: 'string',
          shortcode: _ref => {
            let {
              named: {
                date = ''
              }
            } = _ref;
            return new Date(date).toISOString();
          }
        },
        // An attribute can be source from the shortcode attributes
        format: {
          type: 'string',
          shortcode: _ref2 => {
            let {
              named: {
                format = attributes.format.default
              }
            } = _ref2;

            if (encodeURIComponent(format).includes('<')) {
              return format;
            }

            return stringToFormat(format);
          }
        }
      }
    }]
  },

  edit(_ref3) {
    let {
      attributes,
      setAttributes,
      className
    } = _ref3;
    const {
      expires,
      persists,
      format
    } = attributes;
    const expireDate = new Date(expires);
    return expires ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Settings', '_svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Persist', '_svbk'),
      checked: persists,
      onChange: value => {
        setAttributes({
          persists: Boolean(value)
        });
      },
      help: __('Keep the countdown remaining time on page refresh', '_svbk')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DateTimePicker, {
      currentDate: expires,
      onChange: value => {
        setAttributes({
          expires: value
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
      icon: "backup"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: format ? format : attributes.format.default,
      onChange: value => {
        setAttributes({
          format: value
        });
      },
      autocompleters: autocompleters
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'countdown__expires'
    }, 'Countdown expires at: ' + expireDate.toLocaleDateString() + ' - ' + expireDate.toLocaleTimeString()))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, __('Please choose an expire date', '_svbk')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DateTimePicker, {
      currentDate: expires,
      onChange: value => {
        setAttributes({
          expires: value
        });
      }
    }));
  },

  save(_ref4) {
    let {
      attributes
    } = _ref4;
    const {
      expires,
      format,
      persist
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      className: 'countdown',
      "data-expires": expires,
      "data-persist": persist,
      tagName: 'div',
      value: format
    });
  }

};

/***/ }),

/***/ "./blocks/flickity/flickity-options.js":
/*!*********************************************!*\
  !*** ./blocks/flickity/flickity-options.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFlickity": function() { return /* binding */ isFlickity; },
/* harmony export */   "getFlickityOptions": function() { return /* binding */ getFlickityOptions; },
/* harmony export */   "withFlickityEditor": function() { return /* binding */ withFlickityEditor; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  RangeControl,
  RadioControl,
  ToggleControl
} = wp.components;
const {
  __
} = wp.i18n;
const _ = window.lodash; // Check if Flickity is enabled on a particular block, based on attributes and optionally blockType

const isFlickity = (attributes, blockType) => {
  if (blockType && blockType.name !== 'core/gallery') {
    return false;
  }

  if (attributes && attributes.className && attributes.className.includes('is-style-flickity')) {
    return true;
  }

  return false;
}; // Extract Flickity options from block attributes

const getFlickityOptions = function (attributes) {
  let flickityOptions = {};

  if (attributes.flickity) {
    try {
      flickityOptions = JSON.parse(attributes.flickity);
    } catch (e) {
      console.error('Invalid JSON for Flickity Options');
    }
  }

  return flickityOptions;
};
/**
 * A Higher Order Component to add Flickity editor controls
 * wrapped component.
 *
 * @param {Function} mapContextToProps Function called on every context change,
 *                                     expected to return object of props to
 *                                     merge with the component's own props.
 *
 * @return {Component} Enhanced component with injected context as props.
 */

const withFlickityEditor = createHigherOrderComponent(GalleryEdit => {
  return props => {
    const {
      setAttributes,
      attributes
    } = props;

    if (!isFlickity(attributes)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GalleryEdit, props);
    }

    const flickityOptions = getFlickityOptions(attributes);

    const setFlickityOptions = options => {
      setAttributes({
        flickity: JSON.stringify(_.assign({}, flickityOptions, options))
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GalleryEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Flickity Options'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Lazy Load'),
      help: __('Loads cell images when a cell is selected.'),
      onChange: value => setFlickityOptions({
        lazyLoad: value ? 1 : 0
      }),
      checked: Boolean(flickityOptions.lazyLoad)
    }), flickityOptions.lazyLoad > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('How many images to lazyload in adjacent cells'),
      onChange: value => setFlickityOptions({
        lazyLoad: Number(value)
      }),
      value: flickityOptions.lazyLoad,
      min: 1
    }) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Wait for images to load'),
      help: __('Unloaded images have no size, which can throw off cell positions. To fix this, the this option re-positions cells once their images have loaded.'),
      onChange: value => setFlickityOptions({
        imagesLoaded: value
      }),
      checked: Boolean(flickityOptions.imagesLoaded)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Contain'),
      help: __('Contains cells to carousel element to prevent excess scroll at beginning or end. Has no effect if `wrapAround: true`'),
      onChange: value => setFlickityOptions({
        contain: value
      }),
      checked: flickityOptions.contain
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
      label: __('Cell Alignment'),
      help: __('Align cells within the carousel element.'),
      selected: flickityOptions.cellAlign || 'center',
      options: [{
        label: __('Left'),
        value: 'left'
      }, {
        label: __('Center'),
        value: 'center'
      }, {
        label: __('Right'),
        value: 'right'
      }],
      onChange: value => setFlickityOptions({
        cellAlign: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Wrap Around'),
      help: __('At the end of cells, wrap-around to the other end for infinite scrolling.'),
      onChange: value => setFlickityOptions({
        wrapAround: value
      }),
      checked: flickityOptions.wrapAround
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Prev Next Buttons'),
      help: __('Creates and enables previous & next buttons. Enabled by default'),
      onChange: value => setFlickityOptions({
        prevNextButtons: value
      }),
      checked: flickityOptions.prevNextButtons !== false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Paging Dots'),
      help: __('Creates and enables page dots.'),
      onChange: value => setFlickityOptions({
        pageDots: value
      }),
      checked: flickityOptions.pageDots !== false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Initial Index'),
      help: __('The initial selected cell.'),
      onChange: value => setAttributes({
        initialIndex: Number(value) - 1
      }),
      value: flickityOptions.initialIndex,
      initialPosition: 1,
      min: 1,
      max: attributes.images.length
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Group Cells'),
      help: __('Groups cells together in slides. Flicking, page dots, and previous/next buttons are mapped to group slides, not individual cells'),
      onChange: value => setFlickityOptions({
        groupCells: Number(value ? 2 : 0)
      }),
      checked: flickityOptions.groupCells > 0
    }), flickityOptions.groupCells > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Group Cells Number'),
      onChange: value => setFlickityOptions({
        groupCells: Number(value)
      }),
      value: flickityOptions.groupCells,
      min: 2
    }) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Autoplay'),
      help: __('Automatically advances to the next cell.'),
      onChange: value => setFlickityOptions({
        autoPlay: Number(value ? 3000 : 0)
      }),
      checked: flickityOptions.autoPlay > 0
    }), flickityOptions.autoPlay > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Autoplay Timeout'),
      help: __('Advance cells ever X milliseconds. (ex. 3000 = 3 sec)'),
      onChange: value => setFlickityOptions({
        autoPlay: Number(value)
      }),
      value: flickityOptions.autoPlay,
      min: 100,
      max: 99999
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Pause Auto Play on Hover'),
      help: __('Auto play continues when user hovers over carousel'),
      onChange: value => setFlickityOptions({
        pauseAutoPlayOnHover: Boolean(value)
      }),
      checked: flickityOptions.pauseAutoPlayOnHover !== false
    })) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Draggable'),
      help: __('Enables dragging and flicking. Enabled by default when carousel has 2 or more slides'),
      onChange: value => setFlickityOptions({
        draggable: Boolean(value)
      }),
      checked: flickityOptions.draggable !== false && attributes.images.length > 1
    }), flickityOptions.draggable !== false && attributes.images.length > 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Free Scroll'),
      help: __('Enables content to be freely scrolled and flicked without aligning cells to an end position.'),
      onChange: value => setFlickityOptions({
        freeScroll: value
      }),
      checked: flickityOptions.freeScroll
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Drag threshold'),
      help: __('The number of pixels a mouse or touch has to move before dragging begins..'),
      onChange: value => setAttributes({
        dragThreshold: Number(value) + 1
      }),
      value: flickityOptions.dragThreshold,
      min: 0,
      max: 999
    })) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Adaptive Height'),
      help: __('Changes height of carousel to fit height of selected slide.'),
      onChange: value => setFlickityOptions({
        adaptiveHeight: value
      }),
      checked: flickityOptions.adaptiveHeight
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Right to Left'),
      help: __('Enables right-to-left layout..'),
      onChange: value => setFlickityOptions({
        rightToLeft: Boolean(value)
      }),
      checked: flickityOptions.rightToLeft
    }))));
  };
}, 'withFlickityEditor');

/***/ }),

/***/ "./blocks/flickity/index.js":
/*!**********************************!*\
  !*** ./blocks/flickity/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flickity_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flickity-options */ "./blocks/flickity/flickity-options.js");


/* global wp */

/* global lodash */

/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const _ = window.lodash;
const {
  RichText
} = wp.blockEditor;

 // Register the activation block-styles for Flickity

wp.blocks.registerBlockStyle('core/gallery', {
  name: 'flickity',
  label: 'Flickity Carousel'
});
/**
 * Inject the flickity attributes in the image attributes,
 * to map something like this:
 * 
 * {
 * 	"attributes": {
 *		flickity: {
 *			type: 'string',
 *			source: 'attribute',
 *			selector: 'ul',
 *			attribute: 'data-flickity',		
 *		},
 * 	  	images: {
 * 			type: "array",
 *			default: [ ],
 *			source": "query",
 *			selector: ".blocks-gallery-item",* 
 * 			query: {
 * 				flickityLazyload: {
 *					source: 'attribute',
 *					selector: 'img',
 *					attribute: 'data-flickity-lazyload',
 *				},	
 * 				url: {
 * 					source: 'attribute',
 * 					selector: 'img',
 * 					attribute: 'src'
 * 				},
 * 				...
 *			}
 * 	 	}
 * 	}
 */
// Register new flickity options for the Gallery Block

const addFlickityToGallery = function (settings, name) {
  // Apply only to gallery block
  if (name !== 'core/gallery') {
    return settings;
  }

  _.assign(settings, {
    edit: (0,_flickity_options__WEBPACK_IMPORTED_MODULE_2__.withFlickityEditor)(settings.edit),
    keywords: lodash.union(settings.keywords, [__('flickity')]),
    attributes: _.assign({}, settings.attributes, {
      flickity: {
        type: 'string',
        source: 'attribute',
        selector: '.blocks-gallery-grid',
        attribute: 'data-flickity'
      }
    })
  }); // Inject the single image lazyLoad attribute


  settings.attributes.images.query['flickityLazyload'] = {
    source: 'attribute',
    selector: 'img',
    attribute: 'data-flickity-lazyload-src'
  };
  settings.attributes.images.query['flickityLazyloadSrcset'] = {
    source: 'attribute',
    selector: 'img',
    attribute: 'data-flickity-lazyload-srcset'
  };
  return settings;
};

wp.hooks.addFilter('blocks.registerBlockType', 'svbk/flickity/gallery-block', addFlickityToGallery); // Add Flickity options property, add flickity-image class and lazyload attributes to <img>s

const withFlickitySave = function (mainElement, blockType, attributes) {
  // Check if the gallery has flickity style
  if (!(0,_flickity_options__WEBPACK_IMPORTED_MODULE_2__.isFlickity)(attributes, blockType)) {
    return mainElement;
  }

  const {
    images,
    caption,
    linkTo
  } = attributes;
  const flickityOptions = (0,_flickity_options__WEBPACK_IMPORTED_MODULE_2__.getFlickityOptions)(attributes);
  flickityOptions.cellSelector = '.blocks-gallery-item';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: mainElement.props.className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "blocks-gallery-grid",
    "data-flickity": JSON.stringify(flickityOptions)
  }, images.map(image => {
    let href;

    switch (linkTo) {
      case 'media':
        href = image.fullUrl || image.url;
        break;

      case 'attachment':
        href = image.link;
        break;
    }

    const imageClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'flickity-lazyload-image': flickityOptions.lazyLoad,
      [`wp-image-${image.id}`]: image.id
    });
    const img = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: flickityOptions.lazyLoad ? null : image.url,
      srcSet: flickityOptions.lazyLoad ? null : image.srcset,
      alt: image.alt,
      "data-id": image.id,
      "data-full-url": image.fullUrl,
      "data-link": image.link,
      className: imageClasses,
      "data-flickity-lazyload-src": flickityOptions.lazyLoad ? image.url : null,
      "data-flickity-lazyload-srcset": flickityOptions.lazyLoad ? image.srcset : null
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: image.id || image.url,
      className: "blocks-gallery-item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: href
    }, img) : img, !RichText.isEmpty(image.caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "figcaption",
      className: "blocks-gallery-item__caption",
      value: image.caption
    })));
  })), !RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
    tagName: "figcaption",
    className: "blocks-gallery-caption",
    value: caption
  }));
};

wp.hooks.addFilter('blocks.getSaveElement', 'svbk/gallery-flickity-save', withFlickitySave); // Backfill the `url`/`srcset` image attributes from the flickity lazyload params

const backfillFlickityAttributes = function (attributes, blockType, element, type) {
  if (!(0,_flickity_options__WEBPACK_IMPORTED_MODULE_2__.isFlickity)(attributes, blockType)) {
    return attributes;
  }

  attributes.images.forEach(image => {
    if (!image.url && image.flickityLazyload) {
      image.url = image.flickityLazyload;
    }

    if (!image.srcset && image.flickityLazyloadSrcset) {
      image.srcSet = image.flickityLazyloadSrcset;
    }
  });
  return attributes;
};

wp.hooks.addFilter('blocks.getBlockAttributes', 'svbk/gallery-flickity-attributes', backfillFlickityAttributes);

/***/ }),

/***/ "./blocks/formats/highlight.js":
/*!*************************************!*\
  !*** ./blocks/formats/highlight.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlight": function() { return /* binding */ highlight; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const {
  toggleFormat
} = wp.richText;
const {
  Fragment
} = wp.element;
const {
  SVG,
  Path
} = wp.components;
const {
  RichTextToolbarButton,
  RichTextShortcut
} = wp.blockEditor;
const name = 'svbk/highlight';
const highlight = {
  name,
  title: __('Highlight'),
  tagName: 'em',
  className: 'highlight',

  edit(_ref) {
    let {
      isActive,
      value,
      onChange
    } = _ref;

    const onToggle = () => onChange(toggleFormat(value, {
      type: name
    }));

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichTextShortcut, {
      type: "primary",
      character: "h",
      onUse: onToggle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichTextToolbarButton, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
        d: "M6,5 L2,9 L3,10 L0,13 L4,13 L5,12 L5,12 L6,13 L10,9 L6,5 L6,5 Z M10.2937851,0.706214905 C10.6838168,0.316183183 11.3138733,0.313873291 11.7059121,0.705912054 L14.2940879,3.29408795 C14.6839524,3.68395241 14.6796852,4.32031476 14.2937851,4.7062149 L11,8 L7,4 L10.2937851,0.706214905 Z"
      })),
      title: __('Highlight'),
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "h",
      className: "toolbar-button-with-text toolbar-button__advanced-mark"
    }));
  }

};

/***/ }),

/***/ "./blocks/formats/index.js":
/*!*********************************!*\
  !*** ./blocks/formats/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight */ "./blocks/formats/highlight.js");
/* harmony import */ var _standout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standout */ "./blocks/formats/standout.js");
/* harmony import */ var _underline_stroke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./underline-stroke */ "./blocks/formats/underline-stroke.js");
/**
 * WordPress dependencies
 */
const {
  registerFormatType
} = wp.richText;
/**
 * Internal dependencies
 */




[_highlight__WEBPACK_IMPORTED_MODULE_0__.highlight, _standout__WEBPACK_IMPORTED_MODULE_1__.standout, _underline_stroke__WEBPACK_IMPORTED_MODULE_2__.underlineStroke].forEach(_ref => {
  let {
    name,
    ...settings
  } = _ref;
  return registerFormatType(name, settings);
});

/***/ }),

/***/ "./blocks/formats/standout.js":
/*!************************************!*\
  !*** ./blocks/formats/standout.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "standout": function() { return /* binding */ standout; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const {
  toggleFormat
} = wp.richText;
const {
  Fragment
} = wp.element;
const {
  RichTextToolbarButton,
  RichTextShortcut
} = wp.blockEditor;
const name = 'svbk/standout';
const standout = {
  name,
  title: __('Standout'),
  tagName: 'em',
  className: 'standout',

  edit(_ref) {
    let {
      isActive,
      value,
      onChange
    } = _ref;

    const onToggle = () => onChange(toggleFormat(value, {
      type: name
    }));

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichTextShortcut, {
      type: "primary",
      character: "s",
      onUse: onToggle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichTextToolbarButton, {
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        baseProfile: "tiny",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "none",
        d: "M0 0h24v24H0V0z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"
      })),
      title: __('Standout'),
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "s",
      className: "toolbar-button-with-text toolbar-button__advanced-mark"
    }));
  }

};

/***/ }),

/***/ "./blocks/formats/underline-stroke.js":
/*!********************************************!*\
  !*** ./blocks/formats/underline-stroke.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "underlineStroke": function() { return /* binding */ underlineStroke; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const {
  toggleFormat
} = wp.richText;
const {
  Fragment
} = wp.element;
const {
  RichTextToolbarButton,
  RichTextShortcut
} = wp.blockEditor;
const name = 'svbk/underline-stroke';
const underlineStroke = {
  name,
  title: __('Underline Stroke'),
  tagName: 'em',
  className: 'underline-stroke',

  edit(_ref) {
    let {
      isActive,
      value,
      onChange
    } = _ref;

    const onToggle = () => onChange(toggleFormat(value, {
      type: name
    }));

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichTextShortcut, {
      type: "primary",
      character: "h",
      onUse: onToggle
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichTextToolbarButton, {
      icon: 'admin-customizer',
      title: __('Underline Stroke'),
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "h",
      className: "toolbar-button-with-text toolbar-button__advanced-mark"
    }));
  }

};

/***/ }),

/***/ "./blocks/grid/deprecated.js":
/*!***********************************!*\
  !*** ./blocks/grid/deprecated.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const {
  getColorClassName,
  InnerBlocks
} = wp.blockEditor;
/**
 * External dependencies
 */


const deprecated = [{
  attributes: {
    columns: {
      type: 'number',
      default: 3
    },
    equalHeight: {
      type: 'boolean',
      default: true
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    align: {
      type: 'string'
    }
  },
  supports: {
    html: false
  },

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      columns,
      equalHeight,
      backgroundColor,
      customBackgroundColor,
      align
    } = attributes;
    const backgroundClass = getColorClassName('background-color', backgroundColor);
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(`has-${columns}-columns`, {
      'has-background': backgroundColor || customBackgroundColor,
      [backgroundClass]: backgroundClass,
      ['has-equal-cell-height']: equalHeight,
      [`has-align-${align}`]: align
    });
    const style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./blocks/grid/edit.js":
/*!*****************************!*\
  !*** ./blocks/grid/edit.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/* global wp */

/* global lodash */
const {
  Fragment,
  Component
} = wp.element;
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  InspectorControls,
  PanelColorSettings,
  withColors,
  InnerBlocks,
  AlignmentToolbar,
  BlockControls
} = wp.blockEditor;
const {
  PanelBody,
  ToggleControl,
  RangeControl,
  SelectControl
} = wp.components;
const {
  compose
} = wp.compose;
/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
*/

const ALLOWED_BLOCKS = ['svbk/testimonial', 'svbk/bullet', 'svbk/profile', 'svbk/card', 'svbk/stats', 'core/group', 'core/image'];

class GridEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected,
      backgroundColor,
      setBackgroundColor
    } = this.props;
    const {
      columns,
      columnsMobile,
      equalHeight,
      align
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, `has-${columns}-columns has-${columnsMobile}-columns-mobile`, {
      'is-selected': isSelected,
      [backgroundColor.class]: backgroundColor.class,
      ['has-equal-cell-height']: equalHeight
    });
    const style = {
      backgroundColor: backgroundColor.color
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Grid Settings', '_svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Columns', '_svbk'),
      value: columns,
      onChange: columns => setAttributes({
        columns
      }),
      min: 2,
      max: 6
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Mobile Columns', '_svbk'),
      value: columnsMobile,
      onChange: columnsMobile => setAttributes({
        columnsMobile
      }),
      min: 1,
      max: 3
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Equal Height', '_svbk'),
      help: equalHeight ? 'All cells have the same height' : 'Cell inherit their height from the content',
      checked: equalHeight,
      onChange: value => setAttributes({
        equalHeight: Boolean(value)
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __('Columns Alignment'),
      value: align,
      options: [{
        label: __('Center'),
        value: 'center'
      }, {
        label: __('Left'),
        value: 'left'
      }, {
        label: __('Right'),
        value: 'right'
      }],
      onChange: value => setAttributes({
        align: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Color Settings'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: __('Background Color')
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
      value: align,
      onChange: nextAlign => {
        setAttributes({
          align: nextAlign
        });
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor')])(GridEdit));

/***/ }),

/***/ "./blocks/grid/index.js":
/*!******************************!*\
  !*** ./blocks/grid/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/grid/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated */ "./blocks/grid/deprecated.js");


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  getColorClassName,
  InnerBlocks
} = wp.blockEditor;
const {
  createBlock
} = wp.blocks;
/**
 * Internal dependencies
 */


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

const name = 'svbk/grid';
const settings = {
  title: __('Grid Layout', '_svbk'),
  icon: 'grid-view',
  category: 'layout',
  keywords: [__('grid'), __('flex'), __('table')],
  attributes: {
    columns: {
      type: 'number',
      default: 3
    },
    columnsMobile: {
      type: 'number',
      default: 1
    },
    equalHeight: {
      type: 'boolean',
      default: true
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    align: {
      type: 'string'
    }
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  transforms: {
    from: [{
      type: 'block',
      blocks: ['core/group'],
      transform: function (attributes, innerBlocks) {
        return createBlock('svbk/grid', attributes, innerBlocks);
      }
    }]
  },

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      columns,
      columnsMobile,
      equalHeight,
      backgroundColor,
      customBackgroundColor,
      align
    } = attributes;
    const backgroundClass = getColorClassName('background-color', backgroundColor);
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(`has-${columns}-columns has-${columnsMobile}-columns-mobile`, {
      'has-background': backgroundColor || customBackgroundColor,
      [backgroundClass]: backgroundClass,
      ['has-equal-cell-height']: equalHeight,
      [`has-align-${align}`]: align
    });
    const style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
  }

};

/***/ }),

/***/ "./blocks/hero/edit.js":
/*!*****************************!*\
  !*** ./blocks/hero/edit.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");
/* harmony import */ var _common_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/heading */ "./blocks/common/heading.js");


/* global wp */

/* global lodash */
const {
  Fragment,
  Component
} = wp.element;
/**
 * External dependencies
 */

const {
  pick,
  mapKeys,
  capitalize
} = lodash;

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText,
  URLInput,
  InspectorControls,
  BlockControls
} = wp.blockEditor;
const {
  Dashicon,
  IconButton,
  PanelBody,
  ToggleControl,
  Toolbar
} = wp.components;
/**
 * Internal dependencies
 */




class HeroEdit extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      customStackedImage: Boolean(this.props.attributes.pictureStackedUrl)
    };
  }

  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected
    } = this.props;
    const {
      pictureUrl,
      pictureId,
      pictureSize,
      pictureStackedUrl,
      pictureStackedId,
      pictureStackedSize,
      pictureAlt,
      pretitle,
      title,
      titleLevel,
      subtitle,
      text,
      footer,
      align,
      primaryButtonUrl,
      primaryButtonText,
      secondaryButtonUrl,
      secondaryButtonText,
      bottomPadded
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-selected': isSelected,
      [`has-align-${align}`]: align,
      ['has-bottom-padding']: bottomPadded
    });

    const pictureUpdate = update => {
      const localUpdate = mapKeys(pick(update, ['id', 'url', 'alt', 'size']), function (value, key) {
        // Convert url to pictureUrl, id to pictureId, etc
        return 'picture' + capitalize(key);
      });
      setAttributes(localUpdate);
    };

    const pictureStackedUpdate = update => {
      const localUpdate = mapKeys(pick(update, ['id', 'url', 'size']), function (value, key) {
        // Convert url to pictureUrl, id to pictureId, etc
        return 'pictureStacked' + capitalize(key);
      });
      setAttributes(localUpdate);
    };

    const style = {};
    const toolbarControls = [{
      icon: 'align-pull-right',
      title: __('Show content on left'),
      isActive: align === 'left',
      onClick: () => setAttributes({
        align: 'left'
      })
    }, {
      icon: 'align-pull-left',
      title: __('Show content on right'),
      isActive: align === 'right',
      onClick: () => setAttributes({
        align: 'right'
      })
    }];
    const titleTag = titleLevel ? 'h' + titleLevel : 'h1';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setAttributes: pictureUpdate,
      url: pictureUrl,
      id: pictureId,
      alt: pictureAlt,
      size: pictureSize,
      isMain: true
    }), pictureUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-hero__content'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'p',
      value: pretitle,
      onChange: value => setAttributes({
        pretitle: value
      }),
      placeholder: __('Question: is this a new block?', '_svbk'),
      className: 'wp-block-svbk-hero__subtitle'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: titleTag,
      value: title,
      onChange: value => setAttributes({
        title: value
      }),
      placeholder: __('This is my title..', '_svbk'),
      className: 'wp-block-svbk-hero__title'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'p',
      value: subtitle,
      onChange: value => setAttributes({
        subtitle: value
      }),
      placeholder: __('Subtitle..', '_svbk'),
      className: 'wp-block-svbk-hero__subtitle'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'p',
      value: text,
      onChange: value => setAttributes({
        text: value
      }),
      placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. De ingenio eius in his disputationibus, non de moribus quaeritur.',
      className: 'wp-block-svbk-hero__text'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      placeholder: __('Primary button text…'),
      value: primaryButtonText,
      onChange: value => setAttributes({
        primaryButtonText: value
      }),
      formattingControls: ['bold', 'italic', 'strikethrough'],
      className: 'wp-block-svbk-hero__link block-library-button'
    }), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      className: "block-library-button__inline-link",
      onSubmit: event => event.preventDefault()
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
      icon: "admin-links"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLInput, {
      value: primaryButtonUrl,
      onChange: value => setAttributes({
        primaryButtonUrl: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      icon: "editor-break",
      label: __('Apply'),
      type: "submit"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      placeholder: __('Secondary button text…'),
      value: secondaryButtonText,
      onChange: value => setAttributes({
        secondaryButtonText: value
      }),
      formattingControls: ['bold', 'italic', 'strikethrough'],
      className: 'wp-block-svbk-hero__link block-library-button'
    }), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      className: "block-library-button__inline-link",
      onSubmit: event => event.preventDefault()
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
      icon: "admin-links"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLInput, {
      value: secondaryButtonUrl,
      onChange: value => setAttributes({
        secondaryButtonUrl: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      icon: "editor-break",
      label: __('Apply'),
      type: "submit"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'div',
      value: footer,
      onChange: value => setAttributes({
        footer: value
      }),
      placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. De ingenio eius in his disputationibus, non de moribus quaeritur.',
      className: 'wp-block-svbk-hero__footer'
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_heading__WEBPACK_IMPORTED_MODULE_3__.HeadingToolbar, {
      minLevel: 1,
      maxLevel: 3,
      selectedLevel: titleLevel,
      onChange: newLevel => {
        setAttributes({
          titleLevel: newLevel
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, {
      controls: toolbarControls
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Spacing')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Bottom padding', '_svbk'),
      help: bottomPadded ? 'The block has some extra bottom padding (needed by offset bullets)' : 'The block has a standard bottom padding',
      checked: bottomPadded,
      onChange: value => setAttributes({
        bottomPadded: Boolean(value)
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Background Settings')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Use custom image when stacked', '_svbk'),
      checked: this.state.customStackedImage,
      onChange: useCustom => {
        this.setState({
          customStackedImage: Boolean(useCustom)
        });
      },
      help: __('Choose another image when the image is above the text', '_svbk')
    }), this.state.customStackedImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, 'Immagine sopra-sotto'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setAttributes: pictureStackedUpdate,
      url: pictureStackedUrl,
      id: pictureStackedId,
      size: pictureStackedSize,
      inInspector: true
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HeroEdit);

/***/ }),

/***/ "./blocks/hero/index.js":
/*!******************************!*\
  !*** ./blocks/hero/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/hero/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/* global wp */

/* global lodash */

/**
 * BLOCK: hero
 *
 * Shows a  hero
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText
} = wp.blockEditor;
/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

/**
 * Internal dependencies
 */

const name = 'svbk/hero';
const settings = {
  title: __('Hero', '_svbk'),
  icon: 'welcome-view-site',
  category: 'common',
  keywords: [__('hero'), __('above'), __('intro')],
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'content-background',
    label: __('Content with Background')
  }, {
    name: 'content-card',
    label: __('Content within a Card')
  }],
  attributes: {
    pictureUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.wp-block-svbk-hero__picture img'
    },
    pictureId: {
      type: 'number'
    },
    pictureSize: {
      type: 'string'
    },
    pictureStackedUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'srcset',
      selector: '.wp-block-svbk-hero__picture source'
    },
    pictureStackedId: {
      type: 'number'
    },
    pictureStackedSize: {
      type: 'string'
    },
    pictureAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: '.wp-block-svbk-hero__picture img'
    },
    pretitle: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-hero__pretitle'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-hero__title'
    },
    titleLevel: {
      type: 'number',
      default: 1
    },
    subtitle: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-hero__subtitle'
    },
    text: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-hero__text'
    },
    primaryButtonUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: '.wp-block-svbk-hero__button--primary a'
    },
    primaryButtonText: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-hero__button--primary a'
    },
    secondaryButtonUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: '.wp-block-svbk-hero__button--secondary a'
    },
    secondaryButtonText: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-hero__button--secondary a'
    },
    footer: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-hero__footer'
    },
    align: {
      type: 'string'
    },
    bottomPadded: {
      type: 'boolean',
      default: false
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function (_ref) {
    let {
      attributes
    } = _ref;
    const {
      pictureUrl,
      pictureId,
      pictureStackedUrl,
      pictureStackedId,
      pictureAlt,
      pretitle,
      title,
      titleLevel,
      subtitle,
      text,
      align,
      primaryButtonUrl,
      primaryButtonText,
      secondaryButtonUrl,
      secondaryButtonText,
      footer,
      bottomPadded
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [`has-align-${align}`]: align,
      ['has-bottom-padding']: bottomPadded
    });
    const style = {};
    const titleTag = titleLevel ? 'h' + titleLevel : 'h1';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, pictureUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
      className: 'wp-block-svbk-hero__picture'
    }, pictureStackedUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width: 600px)",
      srcSet: pictureStackedUrl
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: pictureUrl,
      alt: pictureAlt,
      className: pictureId ? `wp-image-${pictureId}` : null
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-hero__content'
    }, pretitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'div',
      className: 'wp-block-svbk-hero__pretitle',
      value: pretitle
    }), title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: titleTag,
      className: 'wp-block-svbk-hero__title',
      value: title
    }), subtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'div',
      className: 'wp-block-svbk-hero__subtitle',
      value: subtitle
    }), text && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'div',
      className: 'wp-block-svbk-hero__text',
      value: text
    }), primaryButtonText && primaryButtonUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-hero__button wp-block-svbk-hero__button--primary wp-block-button '
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: 'wp-block-svbk-hero__link',
      href: primaryButtonUrl
    }, primaryButtonText)), secondaryButtonText && secondaryButtonUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-hero__button wp-block-svbk-hero__button--secondary wp-block-button '
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: 'wp-block-svbk-hero__link',
      href: secondaryButtonUrl
    }, secondaryButtonText)), footer && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'div',
      className: 'wp-block-svbk-hero__footer',
      value: footer
    })));
  }
};

/***/ }),

/***/ "./blocks/icon-paragraph/edit.js":
/*!***************************************!*\
  !*** ./blocks/icon-paragraph/edit.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/editor */ "./blocks/icon/editor.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);



/* global wp */

/* global lodash */

/**
 * WordPress dependencies
 */
const {
  Fragment,
  Component
} = wp.element;
const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText,
  BlockControls,
  AlignmentToolbar,
  FontSizePicker,
  withFontSizes,
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody
} = wp.components;
const {
  compose
} = wp.compose;



class IconParagraphEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      className,
      fontSize,
      setFontSize
    } = this.props;
    const {
      align,
      content
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, {
      [fontSize.class]: fontSize.class
    });
    const style = {
      textAlign: align,
      fontSize: fontSize.size ? fontSize.size + 'px' : undefined
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'wp-block-svbk-icon-paragraph'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_icon_editor__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
      className: 'wp-block-svbk-icon-paragraph__icon'
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      tagName: 'div',
      value: content,
      style: style,
      onChange: value => setAttributes({
        content: value
      }),
      placeholder: __('Content..', '_svbk'),
      className: 'wp-block-svbk-icon-paragraph__content'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(AlignmentToolbar, {
      value: align,
      onChange: nextAlign => {
        setAttributes({
          align: nextAlign
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __('Text Settings'),
      className: "blocks-font-size"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FontSizePicker, {
      value: fontSize.size,
      onChange: setFontSize
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (compose([withFontSizes('fontSize')])(IconParagraphEdit));

/***/ }),

/***/ "./blocks/icon-paragraph/index.js":
/*!****************************************!*\
  !*** ./blocks/icon-paragraph/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/icon-paragraph/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText,
  getFontSizeClass
} = wp.blockEditor;
const {
  RawHTML
} = wp.element;
/**
 * Internal dependencies
 */


/**
 * External dependencies
 */


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

const name = 'svbk/icon-paragraph';
const settings = {
  title: __('Icon Paragraph', '_svbk'),
  icon: 'analytics',
  category: 'common',
  keywords: [__('contact'), __('paragraph')],
  attributes: {
    icon: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-icon-paragraph__icon'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-icon-paragraph__content'
    },
    align: {
      type: 'string'
    },
    fontSize: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function (_ref) {
    let {
      attributes
    } = _ref;
    const {
      icon,
      content,
      align,
      fontSize,
      customFontSize
    } = attributes;
    const fontSizeClass = getFontSizeClass(fontSize);
    const style = {
      textAlign: align,
      fontSize: fontSizeClass ? undefined : customFontSize
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-svbk-icon-paragraph', {
        [fontSizeClass]: fontSizeClass
      }),
      style: style
    }, icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-icon-paragraph__icon'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, icon)), content && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-icon-paragraph__content',
      value: content
    }));
  }
};

/***/ }),

/***/ "./blocks/icon/edit.js":
/*!*****************************!*\
  !*** ./blocks/icon/edit.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor */ "./blocks/icon/editor.js");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  Component
} = wp.element;
const {
  InspectorControls,
  PanelColorSettings,
  withColors
} = wp.blockEditor;


class IconEdit extends Component {
  render() {
    const {
      setTextColor,
      textColor
    } = this.props;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-svbk-icon', {
      [textColor.class]: textColor.class
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_editor__WEBPACK_IMPORTED_MODULE_2__["default"], this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Icon Color Settings'),
      initialOpen: false,
      colorSettings: [{
        value: textColor.color,
        onChange: setTextColor,
        label: __('Text Color')
      }]
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (withColors('backgroundColor', {
  textColor: 'color'
})(IconEdit));

/***/ }),

/***/ "./blocks/icon/editor.js":
/*!*******************************!*\
  !*** ./blocks/icon/editor.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/* global wp */

/* global lodash */
const {
  __
} = wp.i18n;
const {
  Component
} = wp.element;
const {
  PlainText
} = wp.blockEditor;
const {
  Disabled,
  SandBox
} = wp.components;
/**
 * External dependencies
 */



class IconEditor extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isPreview: true
    };
    this.switchToPreview = this.switchToPreview.bind(this);
    this.switchToEditor = this.switchToEditor.bind(this);
  }

  switchToPreview() {
    this.setState({
      isPreview: true
    });
  }

  switchToEditor() {
    this.setState({
      isPreview: false
    });
  }

  render() {
    const {
      attributes,
      isSelected,
      setAttributes,
      className
    } = this.props;
    const {
      icon
    } = attributes;
    const isPreview = this.state.isPreview;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'icon-editor');
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "components-toolbar icon-editor__toolbar"
    }, icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `components-tab-button icon-editor__toolbar-button ${isPreview ? 'is-active' : ''}`,
      onClick: this.switchToPreview
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, __('View'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `components-tab-button icon-editor__toolbar-button ${!isPreview ? 'is-active' : ''}`,
      onClick: this.switchToEditor
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, __('Code')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Disabled.Consumer, null, isDisabled => isPreview || isDisabled ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'icon-editor__icon'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SandBox, {
      html: icon
    })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'icon-editor__editor'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, 'SVG Code'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      value: icon,
      onChange: code => setAttributes({
        icon: code
      }),
      placeholder: __('Paste SVG…'),
      "aria-label": __('SVG')
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IconEditor);

/***/ }),

/***/ "./blocks/icon/index.js":
/*!******************************!*\
  !*** ./blocks/icon/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/icon/edit.js");


/**
 * WordPress dependencies
 */
const {
  RawHTML
} = wp.element;
const {
  __
} = wp.i18n;
const {
  getColorClassName
} = wp.blockEditor;
/**
 * Internal dependencies
 */


const name = 'svbk/icon';
const settings = {
  title: __('Icon (SVG)'),
  description: __('Insert an SVG Icon'),
  icon: 'star-filled',
  category: 'common',
  keywords: [__('svg'), __('icon')],
  supports: {
    html: false
  },
  attributes: {
    icon: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-icon'
    },
    textColor: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      textColor
    } = attributes;
    const textClass = getColorClassName('color', textColor);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: textClass
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, attributes.icon));
  }

};

/***/ }),

/***/ "./blocks/iter/edit.js":
/*!*****************************!*\
  !*** ./blocks/iter/edit.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/editor */ "./blocks/icon/editor.js");



/* global wp */

/* global lodash */
const {
  Fragment,
  Component
} = wp.element;
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText,
  PlainText
} = wp.blockEditor;
const {
  ButtonGroup,
  Button
} = wp.components;


class IterEdit extends Component {
  constructor(props) {
    super(...arguments);
    this.updateStep = this.updateStep.bind(this);
    this.addStep = this.addStep.bind(this);
    this.removeStep = this.removeStep.bind(this);
    this.cloneStep = this.cloneStep.bind(this);
  }

  addStep() {
    const {
      attributes: {
        steps
      },
      setAttributes
    } = this.props;
    let updatedSteps = steps.slice(0);
    updatedSteps.push({
      icon: '',
      name: '',
      content: ''
    });
    setAttributes({
      steps: updatedSteps
    });
  }

  removeStep(index) {
    const {
      attributes: {
        steps
      },
      setAttributes
    } = this.props;
    steps.splice(index, 1);
    setAttributes({
      steps: steps.slice(0)
    });
  }

  cloneStep(index) {
    const {
      attributes: {
        steps
      },
      setAttributes
    } = this.props;
    steps.splice(index, 0, steps[index]);
    setAttributes({
      steps: steps.slice(0)
    });
  }

  updateStep(index, update) {
    const {
      attributes: {
        steps
      },
      setAttributes
    } = this.props;
    const updatedSteps = steps.slice(0);
    const updatedStep = Object.assign({}, steps[index], update);
    updatedSteps[index] = updatedStep;
    setAttributes({
      steps: updatedSteps
    });
  }

  render() {
    const {
      attributes,
      className,
      isSelected
    } = this.props;
    const {
      steps
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      'is-selected': isSelected
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: classNames
    }, steps.map((step, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'wp-block-svbk-iter__step',
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_icon_editor__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
      attributes: step,
      setAttributes: update => {
        this.updateStep(index, update);
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'wp-block-svbk-iter__wrapper'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PlainText, {
      value: step.name,
      onChange: value => this.updateStep(index, {
        name: value
      }),
      placeholder: __('Step ' + (index + 1) + '..', '_svbk'),
      className: 'wp-block-svbk-iter__name'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PlainText, {
      value: step.title,
      onChange: value => this.updateStep(index, {
        title: value
      }),
      placeholder: __('Title..', '_svbk'),
      className: 'wp-block-svbk-iter__title'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RichText, {
      tagName: 'div',
      value: step.content,
      onChange: value => this.updateStep(index, {
        content: value
      }),
      placeholder: __('Content..', '_svbk'),
      className: 'wp-block-svbk-bullet__content'
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ButtonGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
      isDestructive: true,
      className: 'wp-block-svbk-iter__remove',
      onClick: () => {
        this.removeStep(index);
      }
    }, __('Remove Step', '_svbk')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
      isDefault: true,
      className: 'wp-block-svbk-iter__clone',
      onClick: () => {
        this.cloneStep(index);
      }
    }, __('Clone Step', '_svbk')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Button, {
      isPrimary: true,
      className: 'wp-block-svbk-iter__add',
      onClick: this.addStep
    }, __('Add Step', '_svbk')));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IterEdit);

/***/ }),

/***/ "./blocks/iter/index.js":
/*!******************************!*\
  !*** ./blocks/iter/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/iter/edit.js");


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText
} = wp.blockEditor;
const {
  RawHTML
} = wp.element;
/**
 * Internal dependencies
 */


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

const name = 'svbk/iter';
const settings = {
  title: __('Iter', '_svbk'),
  icon: 'editor-ul',
  category: 'common',
  keywords: [__('iter', '_svbk'), __('steps', '_svbk')],
  attributes: {
    steps: {
      type: "array",
      default: [{
        icon: '',
        name: '',
        title: '',
        content: ''
      }],
      source: "query",
      selector: "div.wp-block-svbk-iter .wp-block-svbk-iter__step",
      query: {
        icon: {
          type: 'string',
          source: 'html',
          selector: '.wp-block-svbk-iter__step-icon'
        },
        name: {
          source: 'string',
          source: 'text',
          selector: '.wp-block-svbk-iter__step-name'
        },
        title: {
          source: 'string',
          source: 'text',
          selector: '.wp-block-svbk-iter__step-title'
        },
        content: {
          type: 'string',
          source: 'html',
          selector: '.wp-block-svbk-iter__step-content'
        }
      }
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function (_ref) {
    let {
      attributes
    } = _ref;
    const {
      steps
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, steps.map((step, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-iter__step',
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-iter__step-icon'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, step.icon)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'wp-block-svbk-iter__step-name'
    }, step.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: 'wp-block-svbk-iter__step-title'
    }, step.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'span',
      className: 'wp-block-svbk-iter__step-content',
      value: step.content
    }))));
  }
};

/***/ }),

/***/ "./blocks/map/edit.js":
/*!****************************!*\
  !*** ./blocks/map/edit.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/esm.js");
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");


/* global wp */

/* global lodash */
const {
  Fragment,
  Component
} = wp.element;
/**
 * External dependencies
 */



const {
  pick,
  mapKeys,
  capitalize
} = lodash;
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  RichText,
  InspectorControls
} = wp.blockEditor;
const {
  RangeControl,
  TextControl,
  SelectControl,
  PanelBody,
  Button,
  ButtonGroup
} = wp.components;
const {
  createRef
} = wp.element;


class MapEdit extends Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      editingMarker: false
    };
    this.mapRef = createRef(); // this.autocomplete = null
    // this.onAutocompleteLoad = this.onAutocompleteLoad.bind(this);
    // this.onPlaceChanged = this.onPlaceChanged.bind(this);

    this.onCenterChange = this.onCenterChange.bind(this);
    this.onZoomChange = this.onZoomChange.bind(this);
    this.onAddMarkerClick = this.onAddMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  } // onAutocompleteLoad (autocomplete) {
  // 	console.log('autocomplete: ', autocomplete)
  // 	this.autocomplete = autocomplete
  // }
  // onPlaceChanged () {
  // 	if (this.autocomplete !== null) {
  // 	  console.log(this.autocomplete.getPlace())
  // 	} else {
  // 	  console.log('Autocomplete is not loaded yet!')
  // 	}
  // }
  // markerUpdate ( update ) {
  // 	const localUpdate = mapKeys( pick( update, [ 'id', 'url' ] ) , function(value, key) {
  // 		// Convert url to pictureUrl, id to pictureId, etc
  // 		return 'marker' + capitalize(key);
  // 	});
  // 	setAttributes( localUpdate );
  // }


  onCenterChange() {
    const {
      setAttributes
    } = this.props;
    const center = this.getMapCenter();

    if (center) {
      setAttributes({
        centerLat: center.lat,
        centerLng: center.lng
      });
    }
  }

  getMapCenter() {
    const mapRef = this.mapRef.current;
    if (!mapRef) return;
    return {
      lat: mapRef.state.map.center.lat().toFixed(7),
      lng: mapRef.state.map.center.lng().toFixed(7)
    };
  }

  onZoomChange() {
    const {
      setAttributes
    } = this.props;
    const mapRef = this.mapRef.current;

    if (mapRef) {
      setAttributes({
        zoom: mapRef.state.map.zoom
      });
    }
  }

  onMapClick() {
    this.setState({
      editingMarker: false
    });
  }

  onAddMarkerClick() {
    const mapCenter = this.getMapCenter();
    this.addMarker(mapCenter);
  }

  addMarker(marker) {
    const {
      attributes,
      setAttributes
    } = this.props;
    let {
      markers
    } = attributes;

    if (!markers) {
      markers = [];
    }

    markers.push(marker);
    setAttributes({
      markers
    });
    this.forceUpdate();
  }

  removeMarker(index) {
    const {
      attributes,
      setAttributes
    } = this.props;
    let {
      markers
    } = attributes;

    if (!markers) {
      return;
    }

    markers.splice(index, 1);
    setAttributes({
      markers: markers.slice(0)
    });
  }

  onEditMarker(index) {
    this.setState({
      editingMarker: index
    });
  }

  updateMarker(index, markerUpdate) {
    const {
      attributes,
      setAttributes
    } = this.props;
    const {
      markers
    } = attributes;
    Object.assign(markers[index], markerUpdate);
    setAttributes({
      markers
    });
    this.forceUpdate();
  }

  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected
    } = this.props;
    const {
      centerLat,
      centerLng,
      markers,
      zoom,
      type
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-selected': isSelected
    });
    const editableMarker = this.state.editingMarker !== false ? markers[this.state.editingMarker] : false;

    const markerIconUpdate = (index, update) => {
      const localUpdate = mapKeys(pick(update, ['id', 'url']), function (value, key) {
        // Convert url to pictureUrl, id to pictureId, etc
        return 'icon' + capitalize(key);
      });
      this.updateMarker(index, localUpdate);
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.GoogleMap, {
      zoom: Number(zoom),
      center: {
        lat: Number(centerLat),
        lng: Number(centerLng)
      },
      onCenterChanged: this.onCenterChange,
      onZoomChanged: this.onZoomChange,
      mapTypeId: type ? type : 'roadmap',
      mapContainerStyle: {
        height: "400px",
        width: "600px"
      },
      options: {
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        scrollwheel: false
      },
      onClick: this.onMapClick,
      ref: this.mapRef
    }, markers && markers.map((marker, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Marker, {
      key: index,
      position: {
        lat: Number(marker.lat),
        lng: Number(marker.lng)
      },
      onDragEnd: event => {
        this.updateMarker(index, {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        });
      },
      draggable: true,
      icon: marker.iconUrl,
      opacity: !editableMarker || editableMarker == marker ? 1 : 0.5,
      onClick: () => {
        this.onEditMarker(index);
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isPrimary: true,
      className: 'wp-block-svbk-map__add-marker',
      onClick: this.onAddMarkerClick
    }, __('Add new Marker', '_svbk'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Map Settings', '_svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Latitude', '_svbk'),
      value: centerLat,
      onChange: value => setAttributes({
        centerLat: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Longitude', '_svbk'),
      value: centerLng,
      onChange: value => setAttributes({
        centerLng: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Zoom', '_svbk'),
      value: zoom,
      onChange: zoom => setAttributes({
        zoom: Number(zoom)
      }),
      min: 1,
      max: 22
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __('Type', '_svbk'),
      value: type,
      selected: type,
      options: [{
        label: __('Roadmap', '_svbk'),
        value: 'roadmap'
      }, {
        label: __('Satellite', '_svbk'),
        value: 'satellite'
      }, {
        label: __('Hybrid', '_svbk'),
        value: 'hybrid'
      }, {
        label: __('Terrain', '_svbk'),
        value: 'terrain'
      }],
      onChange: value => setAttributes({
        type: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Marker Settings', '_svbk')
    }, editableMarker !== false ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Latitude', '_svbk'),
      value: editableMarker.lat,
      onChange: value => this.updateMarker(this.state.editingMarker, {
        lat: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Longitude', '_svbk'),
      value: editableMarker.lng,
      onChange: value => this.updateMarker(this.state.editingMarker, {
        lng: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setAttributes: update => {
        markerIconUpdate(this.state.editingMarker, update);
      },
      url: editableMarker.iconUrl
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDefault: true,
      isDestructive: true,
      className: 'wp-block-svbk-map__remove-marker',
      onClick: () => {
        this.setState({
          editingMarker: false
        });
        this.removeMarker(this.state.editingMarker);
      }
    }, __('Remove Marker', '_svbk')))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('Please click on a marker to edit or', '_svbk')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isPrimary: true,
      className: 'wp-block-svbk-map__add-marker',
      onClick: this.onAddMarkerClick
    }, __('Add new Marker', '_svbk'))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MapEdit);

/***/ }),

/***/ "./blocks/map/index.js":
/*!*****************************!*\
  !*** ./blocks/map/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/map/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

/**
 * Internal dependencies
 */

const name = 'svbk/map';
const settings = {
  title: __('Map', '_svbk'),
  icon: 'location-alt',
  category: 'common',
  keywords: [__('map'), __('google map'), __('location')],
  attributes: {
    centerLat: {
      type: 'string',
      source: 'attribute',
      attribute: 'data-center-lat',
      selector: '.wp-block-svbk-map__map',
      default: 38
    },
    centerLng: {
      type: 'string',
      source: 'attribute',
      attribute: 'data-center-lng',
      selector: '.wp-block-svbk-map__map',
      default: -41
    },
    zoom: {
      type: 'string',
      source: 'attribute',
      attribute: 'data-zoom',
      selector: '.wp-block-svbk-map__map',
      default: 10
    },
    type: {
      type: 'string',
      source: 'attribute',
      attribute: 'data-type',
      selector: '.wp-block-svbk-map__map',
      default: 'roadmap'
    },
    markers: {
      type: 'array',
      source: 'query',
      selector: '.wp-block-svbk-map__marker',
      default: [],
      query: {
        lat: {
          type: 'string',
          source: 'attribute',
          attribute: 'data-lat'
        },
        lng: {
          type: 'string',
          source: 'attribute',
          attribute: 'data-lng'
        },
        iconUrl: {
          type: 'string',
          source: 'attribute',
          attribute: 'data-icon-url'
        },
        iconId: {
          type: 'number',
          source: 'attribute',
          attribute: 'data-icon-id'
        }
      }
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function (_ref) {
    let {
      attributes,
      className
    } = _ref;
    const {
      centerLat,
      centerLng,
      markers,
      zoom,
      type
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-map__map',
      "data-center-lat": centerLat,
      "data-center-lng": centerLng,
      "data-zoom": zoom,
      "data-type": type
    }, 'Map loading...'), markers.map((marker, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: 'wp-block-svbk-map__marker',
      "data-lng": marker.lng,
      "data-lat": marker.lat,
      "data-icon-url": marker.iconUrl,
      "data-icon-id": marker.iconId
    })));
  }
};

/***/ }),

/***/ "./blocks/product/addtocart.js":
/*!*************************************!*\
  !*** ./blocks/product/addtocart.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  PanelBody,
  RangeControl,
  ToggleControl,
  TextControl
} = wp.components;
const {
  InspectorControls
} = wp.blockEditor;
/**
 * Internal dependencies
 */

const name = 'svbk/addtocart';
const settings = {
  title: __('Product Add To Cart', '_svbk'),
  description: __('Display the product add to cart button', '_svbk'),
  icon: 'products',
  category: 'widgets',
  keywords: [__('add to cart', '_svbk'), __('cart', '_svbk')],
  supports: {
    html: false
  },
  attributes: {
    product_id: {
      type: 'number'
    },
    quantity: {
      type: 'number',
      default: 1
    },
    sku: {
      type: 'string'
    },
    show_price: {
      type: 'boolean',
      default: false
    }
  },

  edit(_ref) {
    let {
      attributes,
      setAttributes,
      className
    } = _ref;
    const {
      product_id,
      quantity,
      sku,
      show_price
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Rating', '_svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Product ID', '_svbk'),
      value: product_id,
      onChange: value => {
        setAttributes({
          product_id: Number(value)
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('SKU', '_svbk'),
      value: sku,
      onChange: value => {
        setAttributes({
          sku: Number(value)
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Quantity', '_svbk'),
      value: quantity,
      onChange: value => {
        setAttributes({
          quantity: Number(value)
        });
      },
      min: 1,
      max: 10
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Show price', '_svbk'),
      checked: show_price,
      onChange: value => {
        setAttributes({
          show_price: Boolean(value)
        });
      }
    }))), show_price ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'price'
    }, "9999 \u20AC") : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: className
    }, __('Add To Cart', '_svbk') + ' (' + quantity + ' ' + __('Products', '_svbk') + ')'));
  },

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    return null;
  }

};

/***/ }),

/***/ "./blocks/product/price.js":
/*!*********************************!*\
  !*** ./blocks/product/price.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
/**
 * Internal dependencies
 */

const name = 'svbk/price';
const settings = {
  title: __('Product Price', '_svbk'),
  description: __('Display the price of a product', '_svbk'),
  icon: 'tag',
  category: 'widgets',
  keywords: [__('price', '_svbk')],
  supports: {
    html: false
  },
  attributes: {
    product_id: {
      type: 'number'
    }
  },

  edit(_ref) {
    let {
      attributes,
      setAttributes,
      className
    } = _ref;
    const {
      product_id
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, '9999 €'));
  },

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    return null;
  }

};

/***/ }),

/***/ "./blocks/product/rating.js":
/*!**********************************!*\
  !*** ./blocks/product/rating.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  PanelBody,
  TextControl,
  Dashicon
} = wp.components;
const {
  InspectorControls
} = wp.blockEditor;
/**
 * Internal dependencies
 */

const name = 'svbk/product-rating';
const settings = {
  title: __('Product Rating', '_svbk'),
  description: __('Display the rating of a product', '_svbk'),
  icon: 'star-half',
  category: 'widgets',
  keywords: [__('rating', '_svbk'), __('product', '_svbk')],
  supports: {
    html: false
  },
  attributes: {
    product_id: {
      type: 'number'
    }
  },

  edit(_ref) {
    let {
      attributes,
      setAttributes,
      className
    } = _ref;
    const {
      product_id
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Settings', '_svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Product ID', '_svbk'),
      value: product_id,
      onChange: value => {
        setAttributes({
          product_id: Number(value)
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
      icon: "star-half"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, 'Product Rating'));
  },

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    return null;
  }

};

/***/ }),

/***/ "./blocks/product/stock.js":
/*!*********************************!*\
  !*** ./blocks/product/stock.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  PanelBody,
  TextControl
} = wp.components;
const {
  InspectorControls
} = wp.blockEditor;
/**
 * Internal dependencies
 */

const name = 'svbk/stock';
const settings = {
  title: __('Product Stock', '_svbk'),
  description: __('Display the remaining stock product', '_svbk'),
  icon: 'sort',
  category: 'widgets',
  keywords: [__('stock', 'product')],
  supports: {
    html: false
  },
  attributes: {
    product_id: {
      type: 'number'
    }
  },

  edit(_ref) {
    let {
      attributes,
      setAttributes,
      className
    } = _ref;
    const {
      product_id
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Product Availability', '_svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Product ID', '_svbk'),
      value: product_id,
      onChange: value => {
        setAttributes({
          product_id: Number(value)
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, 'XX stock items'));
  },

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    return null;
  }

};

/***/ }),

/***/ "./blocks/profile/edit.js":
/*!********************************!*\
  !*** ./blocks/profile/edit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");


/* global wp */

/* global lodash */
const {
  Fragment,
  Component
} = wp.element;
/**
 * External dependencies
 */

const {
  pick,
  mapKeys,
  capitalize
} = lodash;

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  RichText,
  URLInput,
  InspectorControls,
  BlockControls,
  ContrastChecker,
  PanelColorSettings,
  AlignmentToolbar,
  withColors
} = wp.blockEditor;
const {
  Dashicon,
  IconButton
} = wp.components;
const {
  compose
} = wp.compose;
/**
 * Internal dependencies
 */



class ProfileEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected,
      backgroundColor,
      textColor,
      setBackgroundColor,
      setTextColor
    } = this.props;
    const {
      align,
      pictureUrl,
      pictureAlt,
      pictureId,
      pictureSize,
      name,
      role,
      content,
      buttonUrl,
      buttonText
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-selected': isSelected,
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class
    });
    const style = {
      backgroundColor: backgroundColor.color,
      color: textColor.color,
      textAlign: align
    };
    const titleTag = 'h3';

    const pictureUpdate = update => {
      const localUpdate = mapKeys(pick(update, ['id', 'url', 'alt', 'size']), function (value, key) {
        // Convert url to pictureUrl, id to pictureId, etc
        return 'picture' + capitalize(key);
      });
      setAttributes(localUpdate);
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setAttributes: pictureUpdate,
      url: pictureUrl,
      id: pictureId,
      alt: pictureAlt,
      size: pictureSize
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: titleTag,
      value: name,
      onChange: value => setAttributes({
        name: value
      }),
      placeholder: __('This is my title..', '_svbk'),
      className: 'wp-block-svbk-profile__name'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'div',
      value: role,
      onChange: value => setAttributes({
        role: value
      }),
      placeholder: __('Role..', '_svbk'),
      className: 'wp-block-svbk-profile__role'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'div',
      value: content,
      onChange: value => setAttributes({
        content: value
      }),
      placeholder: __('Content..', '_svbk'),
      className: 'wp-block-svbk-profile__content'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      placeholder: __('Button text…'),
      value: buttonText,
      onChange: value => setAttributes({
        buttonText: value
      }),
      formattingControls: ['bold', 'italic', 'strikethrough'],
      className: 'wp-block-svbk-profile__button block-library-button'
    }), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      className: "block-library-button__inline-link",
      onSubmit: event => event.preventDefault()
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
      icon: "admin-links"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLInput, {
      value: buttonUrl,
      onChange: value => setAttributes({
        buttonUrl: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      icon: "editor-break",
      label: __('Apply'),
      type: "submit"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
      value: align,
      onChange: nextAlign => {
        setAttributes({
          align: nextAlign
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Color Settings'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: __('Background Color')
      }, {
        value: textColor.color,
        onChange: setTextColor,
        label: __('Text Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContrastChecker, {
      textColor: textColor.color,
      backgroundColor: backgroundColor.color
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
})])(ProfileEdit));

/***/ }),

/***/ "./blocks/profile/index.js":
/*!*********************************!*\
  !*** ./blocks/profile/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/profile/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a card
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  RichText,
  getColorClassName
} = wp.blockEditor;
/**
 * Internal dependencies
 */

/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

const name = 'svbk/profile';
const settings = {
  title: __('Profile', '_svbk'),
  icon: 'id',
  category: 'common',
  keywords: [__('profile'), __('team'), __('member')],
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'featured',
    label: __('Featured')
  }],
  attributes: {
    pictureUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.wp-block-svbk-profile__picture img'
    },
    pictureAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: '.wp-block-svbk-profile__picture img'
    },
    pictureId: {
      type: 'number'
    },
    pictureSize: {
      type: 'string'
    },
    name: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-profile__name'
    },
    role: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-profile__role'
    },
    content: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-profile__content'
    },
    buttonUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: '.wp-block-svbk-profile__link'
    },
    buttonText: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-profile__link'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    align: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function (_ref) {
    let {
      attributes
    } = _ref;
    const {
      pictureUrl,
      pictureAlt,
      pictureId,
      name,
      role,
      content,
      buttonUrl,
      buttonText,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor,
      align
    } = attributes;
    const titleTag = 'h3';
    const backgroundClass = getColorClassName('background-color', backgroundColor);
    const textClass = getColorClassName('color', textColor);
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor,
      [textClass]: textClass,
      [backgroundClass]: backgroundClass
    });
    const style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      textAlign: align
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, pictureUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: 'wp-block-svbk-profile__picture'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: pictureUrl,
      alt: pictureAlt,
      className: pictureId ? `wp-image-${pictureId}` : null
    })), name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: titleTag,
      className: 'wp-block-svbk-profile__name',
      value: name
    }), role && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: 'wp-block-svbk-profile__role'
    }, role), content && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-profile__content',
      value: content
    }), buttonText && buttonUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-button wp-block-svbk-profile__button'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: 'wp-block-button__link wp-block-svbk-profile__link',
      href: buttonUrl
    }, buttonText, " ")));
  }
};

/***/ }),

/***/ "./blocks/publication/edit.js":
/*!************************************!*\
  !*** ./blocks/publication/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");


/* global wp */

/* global lodash */
const {
  Fragment,
  Component
} = wp.element;
/**
 * External dependencies
 */

const {
  pick,
  mapKeys,
  capitalize
} = lodash;

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  RichText,
  PlainText,
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  TextControl
} = wp.components;
/**
 * Internal dependencies
 */



class PublicationEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected
    } = this.props;
    const {
      pictureUrl,
      pictureAlt,
      pictureId,
      pictureSize,
      title,
      author,
      meta,
      url
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-selected': isSelected
    });

    const pictureUpdate = update => {
      const localUpdate = mapKeys(pick(update, ['id', 'url', 'alt', 'size']), function (value, key) {
        // Convert url to pictureUrl, id to pictureId, etc
        return 'picture' + capitalize(key);
      });
      setAttributes(localUpdate);
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setAttributes: pictureUpdate,
      url: pictureUrl,
      id: pictureId,
      alt: pictureAlt,
      size: pictureSize,
      isMain: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-publication__content'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      value: author,
      onChange: value => setAttributes({
        author: value
      }),
      placeholder: __('Author Name..', '_svbk'),
      className: 'wp-block-svbk-publication__author'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'div',
      value: title,
      onChange: value => setAttributes({
        title: value
      }),
      placeholder: __('This is my title..', '_svbk'),
      className: 'wp-block-svbk-publication__title'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'div',
      value: meta,
      onChange: value => setAttributes({
        meta: value
      }),
      placeholder: __('Publisher, Year, ..', '_svbk'),
      className: 'wp-block-svbk-publication__meta'
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Publication Settings', '_svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: 'URL',
      value: url,
      onChange: value => setAttributes({
        url: value
      })
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PublicationEdit);

/***/ }),

/***/ "./blocks/publication/index.js":
/*!*************************************!*\
  !*** ./blocks/publication/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/publication/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a card
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  Fragment
} = wp.element;
const {
  __
} = wp.i18n;
const {
  RichText
} = wp.blockEditor;
/**
 * Internal dependencies
 */

/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

const name = 'svbk/publication';
const settings = {
  title: __('Publication', '_svbk'),
  icon: 'book-alt',
  category: 'widgets',
  keywords: [__('book', '_svbk'), __('publication', '_svbk')],
  attributes: {
    pictureUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.wp-block-svbk-publication__picture img'
    },
    pictureId: {
      type: 'number'
    },
    pictureAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: '.wp-block-svbk-publication__picture img'
    },
    pictureSize: {
      type: 'string'
    },
    author: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-publication__author'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-publication__title'
    },
    meta: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-publication__meta'
    },
    url: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: '.wp-block-svbk-publication__link'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function (_ref) {
    let {
      attributes
    } = _ref;
    const {
      pictureUrl,
      pictureAlt,
      pictureId,
      title,
      author,
      meta,
      url
    } = attributes;
    const blockContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, pictureUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: 'wp-block-svbk-publication__picture'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: pictureUrl,
      alt: pictureAlt,
      className: pictureId ? `wp-image-${pictureId}` : null
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-publication__content'
    }, author && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: 'wp-block-svbk-publication__author'
    }, author), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'div',
      className: 'wp-block-svbk-publication__title',
      value: title
    }), meta && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-publication__meta',
      value: meta
    })));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", null, url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: url,
      rel: "external noopener noreferrer",
      target: "_blank",
      className: "wp-block-svbk-publication__link"
    }, blockContent) : blockContent);
  }
};

/***/ }),

/***/ "./blocks/stats/edit.js":
/*!******************************!*\
  !*** ./blocks/stats/edit.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/editor */ "./blocks/icon/editor.js");


/* global wp */

/* global lodash */
const {
  Fragment,
  Component
} = wp.element;
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  RichText,
  InspectorControls,
  PanelColorSettings,
  withColors
} = wp.blockEditor;
const {
  compose
} = wp.compose;


class StatsEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected,
      textColor,
      setTextColor
    } = this.props;
    const {
      align,
      metric,
      description
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-selected': isSelected,
      [textColor.class]: textColor.class
    });
    const style = {
      color: textColor.color,
      textAlign: align
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon_editor__WEBPACK_IMPORTED_MODULE_2__["default"], this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'div',
      value: metric,
      onChange: value => setAttributes({
        metric: value
      }),
      placeholder: __('40M subscribers..', '_svbk'),
      className: 'wp-block-svbk-stats__metric'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'div',
      value: description,
      onChange: value => setAttributes({
        description: value
      }),
      placeholder: __('Description..', '_svbk'),
      className: 'wp-block-svbk-stats__description'
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Color Settings'),
      initialOpen: false,
      colorSettings: [{
        value: textColor.color,
        onChange: setTextColor,
        label: __('Text Color')
      }]
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
})])(StatsEdit));

/***/ }),

/***/ "./blocks/stats/index.js":
/*!*******************************!*\
  !*** ./blocks/stats/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/stats/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  getColorClassName
} = wp.blockEditor;
const {
  RawHTML
} = wp.element;
/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

/**
 * Internal dependencies
 */

const name = 'svbk/stats';
const settings = {
  title: __('Stats', '_svbk'),
  icon: 'chart-pie',
  category: 'common',
  keywords: [__('stats'), __('number'), __('counter')],
  attributes: {
    icon: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-stats__icon'
    },
    metric: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-stats__metric'
    },
    description: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-stats__description'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function (_ref) {
    let {
      attributes
    } = _ref;
    const {
      icon,
      metric,
      description,
      textColor,
      customTextColor
    } = attributes;
    const textClass = getColorClassName('color', textColor);
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'has-text-color': textColor || customTextColor,
      [textClass]: textClass
    });
    const style = {
      color: textClass ? undefined : customTextColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-stats__icon'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RawHTML, null, icon)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: 'wp-block-svbk-stats__metric'
    }, metric), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: 'wp-block-svbk-stats__description'
    }, description));
  }
};

/***/ }),

/***/ "./blocks/styles/index.js":
/*!********************************!*\
  !*** ./blocks/styles/index.js ***!
  \********************************/
/***/ (function() {

// Register Custom Styles
wp.blocks.registerBlockStyle('core/paragraph', {
  name: 'subtitle',
  label: 'Subtitle'
});
wp.blocks.registerBlockStyle('core/paragraph', {
  name: 'standout',
  label: 'Standout'
});
wp.blocks.registerBlockStyle('core/list', {
  name: 'bullets',
  label: 'Bullets'
});
wp.blocks.registerBlockStyle('core/button', {
  name: 'text-button',
  label: 'Text button'
});
wp.blocks.registerBlockStyle('core/button', {
  name: 'phone',
  label: 'Phone icon'
});
wp.blocks.registerBlockStyle('core/group', {
  name: 'no-padding',
  label: 'No Padding'
});
wp.blocks.registerBlockStyle('core/group', {
  name: 'raised',
  label: 'Raised'
});
wp.blocks.registerBlockStyle('core/group', {
  name: 'inset',
  label: 'Inset'
});
wp.blocks.registerBlockStyle('core/columns', {
  name: 'split',
  label: 'Split'
});
wp.blocks.registerBlockStyle('core/columns', {
  name: 'split-inverted',
  label: 'Split Inverted'
});

/***/ }),

/***/ "./blocks/testimonial/author.js":
/*!**************************************!*\
  !*** ./blocks/testimonial/author.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {} = wp.components;
const {
  RichText
} = wp.blockEditor;
/**
 * Internal dependencies
 */

const name = 'svbk/author';
const settings = {
  title: __('Author', '_svbk'),
  description: __('Display the author of a post', '_svbk'),
  icon: 'admin-users',
  category: 'widgets',
  keywords: [__('author', '_svbk')],
  supports: {
    html: false
  },
  multiple: false,
  attributes: {
    author_name: {
      type: 'string',
      meta: 'author_name',
      source: 'text',
      selector: '.author__name'
    },
    author_role: {
      type: 'string',
      meta: 'author_role',
      source: 'text',
      selector: '.author__role'
    }
  },

  edit(_ref) {
    let {
      attributes,
      setAttributes,
      className
    } = _ref;
    const {
      author_name,
      author_role
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      identifier: "author-name",
      wrapperClassName: "wp-feedback-author-name",
      tagName: 'div',
      value: author_name,
      onChange: value => setAttributes({
        author_name: value
      }),
      className: className,
      placeholder: __('Author Name…', '_svbk')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      identifier: "author-role",
      wrapperClassName: "wp-feedback-author-role",
      tagName: 'cite',
      value: author_role,
      onChange: value => setAttributes({
        author_role: value
      }),
      className: className,
      placeholder: __('Author Role…', '_svbk')
    }));
  },

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    const {
      author_name,
      author_role,
      className
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "author__name"
    }, author_name), author_role ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("cite", {
      className: "author__role"
    }, author_role) : null);
  }

};

/***/ }),

/***/ "./blocks/testimonial/edit.js":
/*!************************************!*\
  !*** ./blocks/testimonial/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");


/* global wp */

/* global lodash */
const {
  Component
} = wp.element;
/**
 * External dependencies
 */


const {
  pick,
  mapKeys,
  capitalize
} = lodash;
/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  PlainText,
  InspectorControls,
  ContrastChecker,
  PanelColorSettings,
  withColors,
  InnerBlocks
} = wp.blockEditor;
const {
  compose
} = wp.compose;
const {
  RangeControl,
  ButtonGroup,
  IconButton,
  PanelBody
} = wp.components;
/**
 * Internal dependencies
 */


/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
*/

const ALLOWED_BLOCKS = ['core/paragraph', 'core/list', 'core/more', 'core/html', 'core/button'];
/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/

const TEMPLATE = [['core/paragraph', {
  content: 'This text should be shown in the preview..'
}], ['core/more', {}], ['core/paragraph', {
  content: 'This text should be shown in the single testimonial.'
}]];

class TestimonialEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected,
      backgroundColor,
      textColor,
      setBackgroundColor,
      setTextColor
    } = this.props;
    const {
      avatarUrl,
      avatarId,
      authorName,
      authorRole,
      rating,
      companyLogoUrl,
      companyLogoId,
      source,
      date
    } = attributes;

    const avatarUpdate = update => {
      const localUpdate = mapKeys(pick(update, ['id', 'url']), function (value, key) {
        return 'avatar' + capitalize(key);
      });
      setAttributes(localUpdate);
    };

    const companyLogoUpdate = update => {
      const localUpdate = mapKeys(pick(update, ['id', 'url']), function (value, key) {
        return 'companyLogo' + capitalize(key);
      });
      setAttributes(localUpdate);
    };

    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-selected': isSelected,
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class
    });
    const style = {
      backgroundColor: backgroundColor.color,
      color: textColor.color
    };
    const isStyle = RegExp(/is-style-/);
    const styleName = isStyle.test(attributes.className) ? attributes.className.replace(isStyle, '') : null;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-testimonial__header'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setAttributes: avatarUpdate,
      url: avatarUrl,
      id: avatarId,
      size: 'medium',
      className: 'wp-block-svbk-testimonial__author',
      labels: {
        title: __('Author Avatar', '_svbk')
      },
      changeSize: false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      value: authorName,
      onChange: value => setAttributes({
        authorName: value
      }),
      placeholder: __('Name Surname..', '_svbk'),
      className: 'wp-block-svbk-testimonial__author-name'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      value: authorRole,
      onChange: value => setAttributes({
        authorRole: value
      }),
      placeholder: __('Role..', '_svbk'),
      className: 'wp-block-svbk-testimonial__role-name'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-editor-rating', {
        [`rating-${rating}`]: rating
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
      className: 'block-editor-rating__stars'
    }, [1, 2, 3, 4, 5].map(rate => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      key: rate,
      icon: rating >= rate ? 'star-filled' : 'star-empty',
      onClick: () => {
        setAttributes({
          rating: rate,
          ratingMeta: rate
        });
      },
      label: rate
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-testimonial__meta'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      value: date,
      onChange: value => setAttributes({
        date: value
      }),
      placeholder: __('Date..', '_svbk'),
      className: 'wp-block-svbk-testimonial__date'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      value: source,
      onChange: value => setAttributes({
        source: value
      }),
      placeholder: __('Source..', '_svbk'),
      className: 'wp-block-svbk-testimonial__source'
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setAttributes: companyLogoUpdate,
      url: companyLogoUrl,
      id: companyLogoId,
      size: 'medium',
      className: 'wp-block-svbk-testimonial__company-logo',
      labels: {
        title: __('Company Logo', '_svbk')
      },
      changeSize: false
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-testimonial__content'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS,
      template: TEMPLATE
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Testimonial Settings', '_svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Rating', '_svbk'),
      value: rating,
      onChange: value => {
        setAttributes({
          rating: Number(value)
        });
      },
      min: 0,
      max: 5
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Color Settings'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: __('Background Color')
      }, {
        value: textColor.color,
        onChange: setTextColor,
        label: __('Text Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContrastChecker, {
      textColor: textColor.color,
      backgroundColor: backgroundColor.color
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
})])(TestimonialEdit));

/***/ }),

/***/ "./blocks/testimonial/embed.js":
/*!*************************************!*\
  !*** ./blocks/testimonial/embed.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_PostEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/PostEdit */ "./blocks/common/PostEdit.js");



/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
/**
 * Internal dependencies
 */


const name = 'svbk/testimonial-embed';
const settings = {
  title: __('Testimonial Embed', '_svbk'),
  description: __('Embeds a tesitmonial', '_svbk'),
  icon: 'thumbs-up',
  category: 'widgets',
  keywords: [__('testimonial', '_svbk')],
  supports: {
    html: false
  },
  styles: [// Mark style as default.
  {
    name: 'full',
    label: __('Full', '_svbk'),
    isDefault: true
  }, {
    name: 'inline',
    label: __('Inline', '_svbk')
  }],
  attributes: {
    align: {
      type: "string"
    },
    id: {
      type: "number"
    },
    display: {
      type: "string",
      default: "excerpt"
    }
  },

  edit(attrs) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_common_PostEdit__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      postType: "testimonial"
    }, attrs));
  },

  save(attributes) {
    const {
      className
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: className
    });
  }

};

/***/ }),

/***/ "./blocks/testimonial/index.js":
/*!*************************************!*\
  !*** ./blocks/testimonial/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/testimonial/edit.js");


/* global wp */

/* global lodash */

/**
 * BLOCK: testimonial
 *
 * Shows a  testimonial
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  getColorClassName,
  InnerBlocks
} = wp.blockEditor;
/**
 * Internal dependencies
 */


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

const name = 'svbk/testimonial';
const settings = {
  title: __('Testimonial', '_svbk'),
  icon: 'thumbs-up',
  category: 'widgets',
  keywords: [__('testimonial'), __('feedback')],
  supports: {
    inserter: false,
    reusable: false,
    multiple: false
  },
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Standard'),
    isDefault: true
  }, {
    name: 'vip',
    label: __('VIP', '_svbk')
  }, {
    name: 'press',
    label: __('Press', '_svbk')
  }],
  attributes: {
    avatarUrl: {
      type: 'string',
      source: 'attribute',
      selector: '.wp-block-svbk-testimonial__avatar img',
      attribute: 'src'
    },
    avatarId: {
      type: 'number'
    },
    authorName: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-testimonial__author-name'
    },
    authorRole: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-testimonial__author-role'
    },
    companyLogoUrl: {
      type: 'string',
      source: 'attribute',
      selector: '.wp-block-svbk-testimonial__company-logo img',
      attribute: 'src'
    },
    companyLogoId: {
      type: 'number'
    },
    rating: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-testimonial__rating .rating__value'
    },
    ratingMeta: {
      type: 'number',
      source: 'meta',
      meta: 'rating'
    },
    date: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-testimonial__date'
    },
    source: {
      type: 'string',
      source: 'text',
      selector: '.wp-block-svbk-testimonial__source'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function (_ref) {
    let {
      attributes
    } = _ref;
    const {
      avatarUrl,
      avatarId,
      authorName,
      authorRole,
      rating,
      companyLogoUrl,
      companyLogoId,
      source,
      date,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor
    } = attributes;
    const backgroundClass = getColorClassName('background-color', backgroundColor);
    const textClass = getColorClassName('color', textColor);
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'has-avatar': avatarUrl,
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor,
      [textClass]: textClass,
      [backgroundClass]: backgroundClass
    });
    const style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-testimonial__header'
    }, avatarUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: 'wp-block-svbk-testimonial__avatar'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: avatarUrl,
      alt: 'Profile Image',
      className: avatarId ? `wp-image-${avatarId}` : null
    })), authorName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-testimonial__author'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-testimonial__author-name'
    }, authorName), authorRole && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-testimonial__author-role'
    }, authorRole)), rating && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-svbk-testimonial__rating', 'rating', {
        [`rating--${rating}`]: rating
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'rating__label'
    }, "Rating:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'rating__value'
    }, rating)), (date || source) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-testimonial__meta'
    }, date && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'wp-block-svbk-testimonial__date'
    }, date), source && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'wp-block-svbk-testimonial__source'
    }, " ", source)), companyLogoUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: 'wp-block-svbk-testimonial__company-logo'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: companyLogoUrl,
      alt: 'Company Logo',
      className: companyLogoId ? `wp-image-${companyLogoId}` : null
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-testimonial__content'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)));
  }
};

/***/ }),

/***/ "./blocks/testimonial/list/index.js":
/*!******************************************!*\
  !*** ./blocks/testimonial/list/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_PostListEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/PostListEdit */ "./blocks/common/PostListEdit.js");



/**
 * WordPress dependencies
 */
const {
  __
} = wp.i18n;
/**
 * Internal dependencies
 */


const name = 'svbk/testimonials';
const settings = {
  title: __('Testimonials', '_svbk'),
  description: __('Display a list of testimonials.', '_svbk'),
  icon: 'thumbs-up',
  category: 'widgets',
  keywords: [__('testimonials', '_svbk')],
  supports: {
    html: false
  },
  styles: [// Mark style as default.
  {
    name: 'full',
    label: __('Full', '_svbk'),
    isDefault: true
  }, {
    name: 'small',
    label: __('Small', '_svbk')
  }, {
    name: 'grid',
    label: __('Grid', '_svbk')
  }],
  attributes: {
    align: {
      type: "string"
    },
    categories: {
      type: "string"
    },
    className: {
      type: "string"
    },
    columns: {
      type: "number",
      default: 3
    },
    order: {
      type: "string",
      default: "desc"
    },
    orderBy: {
      type: "string",
      default: "date"
    },
    display: {
      type: "string",
      default: "excerpt"
    },
    postLayout: {
      type: "string",
      default: "list"
    },
    postsToShow: {
      type: "number",
      default: 5
    },
    offset: {
      type: "number",
      default: 5
    },
    loadMore: {
      type: "boolean",
      default: false
    }
  },

  getEditWrapperProps(attributes) {
    const {
      align
    } = attributes;

    if (['left', 'center', 'right', 'wide', 'full'].includes(align)) {
      return {
        'data-align': align
      };
    }
  },

  edit(attrs) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_common_PostListEdit__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      postType: "testimonial",
      taxonomy: "testimonial_category"
    }, attrs));
  },

  save(attributes) {
    const {
      className
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: className
    });
  }

};

/***/ }),

/***/ "./blocks/testimonial/rating.js":
/*!**************************************!*\
  !*** ./blocks/testimonial/rating.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  PanelBody,
  RangeControl,
  ToggleControl,
  ButtonGroup,
  IconButton
} = wp.components;
const {
  InspectorControls
} = wp.blockEditor;
/**
 * Internal dependencies
 */

const name = 'svbk/rating';
const settings = {
  title: __('Rating', '_svbk'),
  description: __('Display a list of stars', '_svbk'),
  icon: 'star-filled',
  category: 'widgets',
  keywords: [__('rating', '_svbk')],
  supports: {
    html: false
  },
  attributes: {
    rating: {
      type: 'string',
      source: 'text',
      selector: '.rating__value',
      default: 5
    },
    ratingMeta: {
      type: 'string',
      meta: 'rating'
    }
  },
  deprecated: [{
    attributes: {
      rating: {
        type: 'string',
        meta: 'rating',
        default: 5
      }
    },
    supports: {
      html: false
    },

    save(_ref) {
      let {
        attributes
      } = _ref;
      const {
        rating,
        className
      } = attributes;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([className], {
          [`rating-${rating}`]: rating
        })
      }, "Rating: ", rating);
    }

  }],

  edit(_ref2) {
    let {
      attributes,
      setAttributes,
      className
    } = _ref2;
    const {
      rating
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Rating', '_svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Rating', '_svbk'),
      value: rating,
      onChange: value => {
        setAttributes({
          rating: Number(value),
          ratingMeta: Number(value)
        });
      },
      min: 0,
      max: 5
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-editor-rating', {
        [`rating-${rating}`]: rating
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
      className: 'block-editor-rating__stars'
    }, [1, 2, 3, 4, 5].map(rate => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      key: rate,
      icon: rating >= rate ? 'star-filled' : 'star-empty',
      onClick: () => {
        setAttributes({
          rating: rate
        });
      },
      label: rate
    })))));
  },

  save(_ref3) {
    let {
      attributes
    } = _ref3;
    const {
      rating
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        [`rating-${rating}`]: rating
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'wp-block-svbk-rating__label rating__label'
    }, "Rating:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: 'wp-block-svbk-rating__value rating__value'
    }, rating));
  }

};

/***/ }),

/***/ "./blocks/trust/edit.js":
/*!******************************!*\
  !*** ./blocks/trust/edit.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/heading */ "./blocks/common/heading.js");


/* global wp */

/* global lodash */
const {
  Fragment,
  Component
} = wp.element;
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText,
  InspectorControls,
  BlockControls,
  ContrastChecker,
  PanelColorSettings,
  withColors,
  InnerBlocks
} = wp.blockEditor;
const {
  compose
} = wp.compose;
/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
*/

const ALLOWED_BLOCKS = ['core/image'];
/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/

const TEMPLATE = [['core/image', {}], ['core/image', {}]];


class TrustEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected,
      backgroundColor,
      textColor,
      ribbonColor,
      setBackgroundColor,
      setTextColor,
      setRibbonColor
    } = this.props;
    const {
      ribbon,
      titleLevel
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-selected': isSelected,
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class,
      [ribbonColor.class]: ribbonColor.class
    });
    const titleTag = titleLevel ? 'h' + titleLevel : 'h2';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: titleTag,
      value: ribbon,
      onChange: value => setAttributes({
        ribbon: value
      }),
      placeholder: __('Ribbon content...', '_svbk'),
      className: 'wp-block-svbk-trust__ribbon'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS,
      template: TEMPLATE
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_heading__WEBPACK_IMPORTED_MODULE_2__.HeadingToolbar, {
      minLevel: 2,
      maxLevel: 5,
      selectedLevel: titleLevel,
      onChange: newLevel => {
        setAttributes({
          titleLevel: newLevel
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Color Settings'),
      initialOpen: false,
      disableCustomColors: true,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: __('Background Color')
      }, {
        value: ribbonColor.color,
        onChange: setRibbonColor,
        label: __('Ribbon Color')
      }, {
        value: textColor.color,
        onChange: setTextColor,
        label: __('Text Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContrastChecker, {
      ribbonColor: ribbonColor.color,
      backgroundColor: backgroundColor.color
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContrastChecker, {
      ribbonColor: ribbonColor.color,
      textColor: textColor.color
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
}, 'ribbonColor')])(TrustEdit));

/***/ }),

/***/ "./blocks/trust/index.js":
/*!*******************************!*\
  !*** ./blocks/trust/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/trust/edit.js");


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Block for customers logos 
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText,
  getColorClassName,
  InnerBlocks
} = wp.blockEditor;
/**
 * Internal dependencies
 */


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

const name = 'svbk/trust';
const settings = {
  title: __('Autorevolezza', '_svbk'),
  icon: 'buddicons-buddypress-logo',
  category: 'common',
  keywords: [__('trust', '_svbk'), __('autorevolezza', '_svbk'), __('logo', '_svbk')],
  styles: [],
  attributes: {
    ribbon: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-trust__ribbon'
    },
    titleLevel: {
      type: 'number',
      default: 2
    },
    backgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    ribbonColor: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function (_ref) {
    let {
      attributes
    } = _ref;
    const {
      ribbon,
      titleLevel,
      backgroundColor,
      textColor,
      ribbonColor
    } = attributes;
    const titleTag = titleLevel ? 'h' + titleLevel : 'h2';
    const backgroundClass = getColorClassName('background-color', backgroundColor);
    const textClass = getColorClassName('color', textColor);
    const ribbonClass = getColorClassName('ribbon-color', ribbonColor);
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'has-background': backgroundColor,
      [backgroundClass]: backgroundClass,
      'has-ribbon': ribbon
    });
    const ribbonClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'wp-block-svbk-trust__ribbon': true,
      'has-text-color': textColor,
      'has-ribbon-color': textColor,
      [textClass]: textClass,
      [ribbonClass]: ribbonClass
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames
    }, ribbon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: titleTag,
      className: ribbonClasses,
      value: ribbon
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-trust__content'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)));
  }
};

/***/ }),

/***/ "./blocks/warranty/deprecated.js":
/*!***************************************!*\
  !*** ./blocks/warranty/deprecated.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  RichText,
  getColorClassName,
  InnerBlocks
} = wp.blockEditor;
const deprecated = [{
  attributes: {
    sealUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.wp-block-svbk-warranty__seal img'
    },
    sealId: {
      type: 'number'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__title'
    },
    subtitle: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__subtitle'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__content'
    },
    footer: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__footer'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    backgroundImageUrl: {
      type: 'string'
    },
    backgroundImageId: {
      type: 'number'
    }
  },

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      sealUrl,
      sealId,
      title,
      subtitle,
      content,
      footer,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor,
      backgroundImageUrl,
      backgroundImageId
    } = attributes;
    const backgroundClass = getColorClassName('background-color', backgroundColor);
    const textClass = getColorClassName('color', textColor);
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-svbk-warranty__content', {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor,
      [textClass]: textClass,
      [backgroundClass]: backgroundClass
    });
    const style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'has-background-image': backgroundImageUrl
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, sealUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: 'wp-block-svbk-warranty__seal'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: sealUrl,
      alt: "Warranty Seal",
      className: sealId ? `wp-image-${sealId}` : null
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      className: 'wp-block-svbk-warranty__header'
    }, title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'h3',
      className: 'wp-block-svbk-warranty__title',
      value: title
    }), subtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-warranty__subtitle',
      value: subtitle
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-warranty__content'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)), footer && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'footer',
      className: 'wp-block-svbk-warranty__footer',
      value: footer
    })), backgroundImageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: 'wp-block-svbk-warranty__background' + (backgroundImageId ? `wp-image-${backgroundImageId}` : null),
      alt: '',
      "aria-hidden": true,
      src: backgroundImageUrl
    }));
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./blocks/warranty/edit.js":
/*!*********************************!*\
  !*** ./blocks/warranty/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/image */ "./blocks/common/image.js");


/* global wp */

/* global lodash */
const {
  Fragment,
  Component
} = wp.element;
/**
 * External dependencies
 */


const {
  pick,
  mapKeys,
  capitalize
} = lodash;
/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText,
  InspectorControls,
  BlockControls,
  ContrastChecker,
  PanelColorSettings,
  withColors,
  InnerBlocks
} = wp.blockEditor;
const {
  PanelBody,
  Button,
  ButtonGroup
} = wp.components;
const {
  compose
} = wp.compose;

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
*/

const ALLOWED_BLOCKS = ['core/paragraph', 'core/list'];
/**
 * Default block template
 * 
 * @constant
 * @type {string[]}
*/

const TEMPLATE = [['core/paragraph', {
  content: 'Lorem ipsum sit amet...'
}]];

class WarrantyEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      className,
      isSelected,
      backgroundColor,
      textColor,
      setBackgroundColor,
      setTextColor
    } = this.props;
    const {
      sealUrl,
      sealId,
      sealSize,
      title,
      subtitle,
      footer,
      backgroundImageUrl,
      backgroundImageId,
      backgroundImageSize
    } = attributes;
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-selected': isSelected,
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class
    });
    const containerStyle = backgroundImageUrl ? {
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover'
    } : {};
    const contentStyle = {
      backgroundColor: backgroundColor.color,
      color: textColor.color
    };

    const sealUpdate = update => {
      const localUpdate = mapKeys(pick(update, ['id', 'url', 'size']), function (value, key) {
        // Convert url to pictureUrl, id to pictureId, etc
        return 'seal' + capitalize(key);
      });
      setAttributes(localUpdate);
    };

    const backgroundImageUpdate = update => {
      const localUpdate = mapKeys(pick(update, ['id', 'url', 'size']), function (value, key) {
        // Convert url to pictureUrl, id to pictureId, etc
        return 'backgroundImage' + capitalize(key);
      });
      setAttributes(localUpdate);
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: containerStyle
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-warranty__content',
      style: contentStyle
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setAttributes: sealUpdate,
      url: sealUrl,
      id: sealId,
      size: sealSize,
      labels: {
        title: 'Seal'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      className: 'wp-block-svbk-warranty__header'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'h3',
      value: title,
      onChange: value => setAttributes({
        title: value
      }),
      placeholder: __('This is my title..', '_svbk'),
      className: 'wp-block-svbk-warranty__title'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'p',
      value: subtitle,
      onChange: value => setAttributes({
        subtitle: value
      }),
      placeholder: __('Subtitle..', '_svbk'),
      className: 'wp-block-svbk-warranty__subtitle'
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      templateLock: false,
      allowedBlocks: ALLOWED_BLOCKS,
      template: TEMPLATE
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'footer',
      value: footer,
      onChange: value => {
        setAttributes({
          footer: value
        });
      },
      placeholder: __('Footer content..', '_svbk'),
      className: 'wp-block-svbk-warranty__footer'
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Background Settings', '__svbk')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setAttributes: backgroundImageUpdate,
      url: backgroundImageUrl,
      id: backgroundImageId,
      size: backgroundImageSize,
      labels: {
        title: 'Background Image'
      },
      inInspector: true
    }), backgroundImageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isDestructive: true,
      className: 'wp-block-svbk-warranty__bg-remove',
      onClick: () => {
        setAttributes({
          backgroundImageUrl: '',
          backgroundImageId: null
        });
      }
    }, __('Remove', '_svbk'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Color Settings'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: __('Background Color')
      }, {
        value: textColor.color,
        onChange: setTextColor,
        label: __('Text Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContrastChecker, {
      textColor: textColor.color,
      backgroundColor: backgroundColor.color
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('backgroundColor', {
  textColor: 'color'
})])(WarrantyEdit));

/***/ }),

/***/ "./blocks/warranty/index.js":
/*!**********************************!*\
  !*** ./blocks/warranty/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./blocks/warranty/edit.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated */ "./blocks/warranty/deprecated.js");


/* global wp */

/* global lodash */

/**
 * BLOCK: card
 *
 * Shows a  card
 * @author: Silverback Studio <webmaster@silverbackstudio.it>
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  RichText,
  getColorClassName,
  InnerBlocks
} = wp.blockEditor;
/**
 * Internal dependencies
 */



/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

const name = 'svbk/warranty';
const settings = {
  title: __('Warranty', '_svbk'),
  icon: 'awards',
  category: 'common',
  keywords: [__('warranty', '_svbk'), __('assurance', '_svbk'), __('guarantee', '_svbk')],
  styles: [// Mark style as default.
  {
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'small',
    label: __('Small', '_svbk')
  }],
  supports: {
    anchor: true
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_3__["default"],
  attributes: {
    sealUrl: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: '.wp-block-svbk-warranty__seal img'
    },
    sealId: {
      type: 'number'
    },
    sealSize: {
      type: 'string'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__title'
    },
    subtitle: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__subtitle'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__text'
    },
    footer: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-svbk-warranty__footer'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    backgroundImageUrl: {
      type: 'string'
    },
    backgroundImageId: {
      type: 'number'
    },
    backgroundImageSise: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      sealUrl,
      sealId,
      title,
      subtitle,
      content,
      footer,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor,
      backgroundImageUrl,
      backgroundImageId
    } = attributes;
    const backgroundClass = getColorClassName('background-color', backgroundColor);
    const textClass = getColorClassName('color', textColor);
    const classNames = classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-svbk-warranty__content', {
      'has-text-color': textColor || customTextColor,
      'has-background': backgroundColor || customBackgroundColor,
      [textClass]: textClass,
      [backgroundClass]: backgroundClass
    });
    const style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'has-background-image': backgroundImageUrl
      })
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classNames,
      style: style
    }, sealUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: 'wp-block-svbk-warranty__seal'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: sealUrl,
      alt: "Warranty Seal",
      className: sealId ? `wp-image-${sealId}` : null
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      className: 'wp-block-svbk-warranty__header'
    }, title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'h3',
      className: 'wp-block-svbk-warranty__title',
      value: title
    }), subtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'p',
      className: 'wp-block-svbk-warranty__subtitle',
      value: subtitle
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'wp-block-svbk-warranty__text'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)), footer && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: 'footer',
      className: 'wp-block-svbk-warranty__footer',
      value: footer
    })), backgroundImageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: 'wp-block-svbk-warranty__background' + (backgroundImageId ? `wp-image-${backgroundImageId}` : null),
      alt: '',
      "aria-hidden": true,
      src: backgroundImageUrl
    }));
  }

};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.
function formatProdErrorMessage(code) {
  var url = 'https://reactjs.org/docs/error-decoder.html?invariant=' + code;

  for (var i = 1; i < arguments.length; i++) {
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return "Minified React error #" + code + "; visit " + url + " for the full message or " + 'use the non-minified dev environment for full errors and additional ' + 'helpful warnings.';
}

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableSuspenseServerRenderer = false;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var didWarnAboutInvalidateContextType;

{
  didWarnAboutInvalidateContextType = new Set();
}

var emptyObject = {};

{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;

  if (!contextTypes) {
    return emptyObject;
  }

  var maskedContext = {};

  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }

  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component');
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
  for (var i = context._threadCount | 0; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}
function processContext(type, context, threadID, isClass) {
  if (isClass) {
    var contextType = type.contextType;

    {
      if ('contextType' in type) {
        var isValid = // Allow null for conditional declaration
        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

        if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
          didWarnAboutInvalidateContextType.add(type);
          var addendum = '';

          if (contextType === undefined) {
            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
          } else if (typeof contextType !== 'object') {
            addendum = ' However, it is set to a ' + typeof contextType + '.';
          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
            addendum = ' Did you accidentally pass the Context.Provider instead?';
          } else if (contextType._context !== undefined) {
            // <Context.Consumer>
            addendum = ' Did you accidentally pass the Context.Consumer instead?';
          } else {
            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
          }

          error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
        }
      }
    }

    if (typeof contextType === 'object' && contextType !== null) {
      validateContextBounds(contextType, threadID);
      return contextType[threadID];
    }

    {
      var maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, maskedContext, 'context');
        }
      }

      return maskedContext;
    }
  } else {
    {
      var _maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, _maskedContext, 'context');
        }
      }

      return _maskedContext;
    }
  }
}

var nextAvailableThreadIDs = new Uint16Array(16);

for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}

nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;

  if (!(newSize <= 0x10000)) {
    {
      throw Error( "Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic." );
    }
  }

  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;

  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }

  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];

  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }

  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}
function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    error('Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (propertyInfo !== null) {

    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */

var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  {
    if (!didWarn && isJavaScriptProtocol.test(url)) {
      didWarn = true;

      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
    }
  }
}

// code copied and modified from escape-html

/**
 * Module variables.
 * @private
 */
var matchHtmlRegExp = /["'&<>]/;
/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */


function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }

  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */

function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}
/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */

function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);

  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }

  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }

  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      if (propertyInfo.sanitizeURL) {
        value = '' + value;
        sanitizeURL(value);
      }

      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }

  return '';
}
/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */

function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }

  return name + '=' + quoteAttributeValueForBrowser(value);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

var renderPhaseUpdates = null; // Counter to prevent infinite loops.

var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;
var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev;

function resolveCurrentlyRenderingComponent() {
  if (!(currentlyRenderingComponent !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  {
    if (isInHookUserCodeInDev) {
      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://reactjs.org/link/rules-of-hooks');
    }
  }

  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    {
      {
        throw Error( "Rendered more hooks than during the previous render" );
      }
    }
  }

  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false; // Append to the end of the list

      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }

  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  {
    isInHookUserCodeInDev = false;
  } // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

}
function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.
  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1; // Start over from the beginning of the list

    workInProgressHook = null;
    children = Component(props, refOrContext);
  }

  resetHooksState();
  return children;
} // Reset the internal hooks state if an error occurs while rendering a component

function resetHooksState() {
  {
    isInHookUserCodeInDev = false;
  }

  currentlyRenderingComponent = null;
  didScheduleRenderPhaseUpdate = false;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;
}

function readContext(context, observedBits) {
  var threadID = currentPartialRenderer.threadID;
  validateContextBounds(context, threadID);

  {
    if (isInHookUserCodeInDev) {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    }
  }

  return context[threadID];
}

function useContext(context, observedBits) {
  {
    currentHookNameInDev = 'useContext';
  }

  resolveCurrentlyRenderingComponent();
  var threadID = currentPartialRenderer.threadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  // $FlowFixMe: Flow doesn't like mixed types
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }

  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
  initialState);
}
function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }

  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    var queue = workInProgressHook.queue;
    var dispatch = queue.dispatch;

    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;

        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var action = update.action;

          {
            isInHookUserCodeInDev = true;
          }

          newState = reducer(newState, action);

          {
            isInHookUserCodeInDev = false;
          }

          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;
        return [newState, dispatch];
      }
    }

    return [workInProgressHook.memoizedState, dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }

    var initialState;

    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }

    {
      isInHookUserCodeInDev = false;
    }

    workInProgressHook.memoizedState = initialState;

    var _queue = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };

    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

    return [workInProgressHook.memoizedState, _dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }

  var nextValue = nextCreate();

  {
    isInHookUserCodeInDev = false;
  }

  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;

  if (previousRef === null) {
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';

    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://reactjs.org/link/uselayouteffect-ssr for common fixes.');
  }
}

function dispatchAction(componentIdentity, queue, action) {
  if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
    {
      throw Error( "Too many re-renders. React limits the number of renders to prevent an infinite loop." );
    }
  }

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };

    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }

    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }

      lastRenderPhaseUpdate.next = update;
    }
  }
}

function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
} // TODO Decide on how to implement this hook for server rendering.
// If a mutation occurs during render, consider triggering a Suspense boundary
// and falling back to client rendering.

function useMutableSource(source, getSnapshot, subscribe) {
  resolveCurrentlyRenderingComponent();
  return getSnapshot(source._source);
}

function useDeferredValue(value) {
  resolveCurrentlyRenderingComponent();
  return value;
}

function useTransition() {
  resolveCurrentlyRenderingComponent();

  var startTransition = function (callback) {
    callback();
  };

  return [startTransition, false];
}

function useOpaqueIdentifier() {
  return (currentPartialRenderer.identifierPrefix || '') + 'R:' + (currentPartialRenderer.uniqueID++).toString(36);
}

function noop() {}

var currentPartialRenderer = null;
function setCurrentPartialRenderer(renderer) {
  currentPartialRenderer = renderer;
}
var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useDeferredValue: useDeferredValue,
  useTransition: useTransition,
  useOpaqueIdentifier: useOpaqueIdentifier,
  // Subscriptions are not setup in a server environment.
  useMutableSource: useMutableSource
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
}; // Assumes there is no parent namespace.

function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;

    case 'math':
      return MATH_NAMESPACE;

    default:
      return HTML_NAMESPACE;
  }
}
function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }

  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  } // By default, pass namespace below.


  return parentNamespace;
}

var hasReadOnlyValue = {
  button: true,
  checkbox: true,
  image: true,
  hidden: true,
  radio: true,
  reset: true,
  submit: true
};
function checkControlledValueProps(tagName, props) {
  {
    if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
      error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }

    if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
      error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  }
}

// For HTML, certain tags should omit their close tag. We keep a list for
// those special-case tags.
var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

};

// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

var HTML = '__html';

function assertValidProps(tag, props) {
  if (!props) {
    return;
  } // Note the use of `==` which checks for null or undefined.


  if (voidElementTags[tag]) {
    if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
      {
        throw Error( tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." );
      }
    }
  }

  if (props.dangerouslySetInnerHTML != null) {
    if (!(props.children == null)) {
      {
        throw Error( "Can only set one of `children` or `props.dangerouslySetInnerHTML`." );
      }
    }

    if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
      {
        throw Error( "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information." );
      }
    }
  }

  {
    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
    }
  }

  if (!(props.style == null || typeof props.style === 'object')) {
    {
      throw Error( "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." );
    }
  }
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */

function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this list too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;

    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;

    error('`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;

    error('`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  {
    if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
      return true;
    }

    if (rARIACamel.test(name)) {
      var ariaName = 'aria-' + name.slice(4).toLowerCase();
      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (correctName == null) {
        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

        warnedProperties[name] = true;
        return true;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== correctName) {
        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

        warnedProperties[name] = true;
        return true;
      }
    }

    if (rARIA.test(name)) {
      var lowerCasedName = name.toLowerCase();
      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (standardName == null) {
        warnedProperties[name] = true;
        return false;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== standardName) {
        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties[name] = true;
        return true;
      }
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  {
    var invalidProps = [];

    for (var key in props) {
      var isValid = validateProperty(type, key);

      if (!isValid) {
        invalidProps.push(key);
      }
    }

    var unknownPropString = invalidProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (invalidProps.length === 1) {
      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    } else if (invalidProps.length > 1) {
      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    }
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  {
    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
      return;
    }

    if (props != null && props.value === null && !didWarnValueNull) {
      didWarnValueNull = true;

      if (type === 'select' && props.multiple) {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
      } else {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
      }
    }
  }
}

// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  disableremoteplayback: 'disableRemotePlayback',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  enterkeyhint: 'enterKeyHint',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, eventRegistry) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (eventRegistry != null) {
      var registrationNameDependencies = eventRegistry.registrationNameDependencies,
          possibleRegistrationNames = eventRegistry.possibleRegistrationNames;

      if (registrationNameDependencies.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        error('Unknown event handler property `%s`. It will be ignored.', name);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, eventRegistry) {
  {
    var unknownProps = [];

    for (var key in props) {
      var isValid = validateProperty$1(type, key, props[key], eventRegistry);

      if (!isValid) {
        unknownProps.push(key);
      }
    }

    var unknownPropString = unknownProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (unknownProps.length === 1) {
      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    } else if (unknownProps.length > 1) {
      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    }
  }
};

function validateProperties$2(type, props, eventRegistry) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, eventRegistry);
}

var toArray = React.Children.toArray; // This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.

var currentDebugStacks = [];
var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame$1;
var prevGetCurrentStackImpl = null;

var getCurrentServerStackImpl = function () {
  return '';
};

var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};

var pushCurrentDebugStack = function (stack) {};

var pushElementToDebugStack = function (element) {};

var popCurrentDebugStack = function () {};

var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, null);
  };

  describeStackFrame = function (element) {
    return describeUnknownElementTypeFrameInDEV(element.type, element._source, null);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
      ReactDebugCurrentFrame$1.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

    var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

    frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.


    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = ''; // Go through every frame in the stack from the innermost one.

    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.

      var debugElementStack = frame.debugElementStack;

      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(debugElementStack[ii]);
      }
    }

    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
}; // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

var validatedTagCache = {};

function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    if (!VALID_TAG_REGEX.test(tag)) {
      {
        throw Error( "Invalid tag: " + tag );
      }
    }

    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};

var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }

  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];

    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }

    if (styleValue != null) {
      serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
      delimiter = ';';
    }
  }

  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;

    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct$1(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;

  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;

    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }

  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }

  var element = children;

  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }

  var fragmentChildren = element.props.children;

  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }

  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }

  var content = ''; // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.

  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child;

    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;

        error('Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;
  var isCustomComponent$1 = isCustomComponent(tagLowercase, props);

  for (var propKey in props) {
    if (!hasOwnProperty$2.call(props, propKey)) {
      continue;
    }

    var propValue = props[propKey];

    if (propValue == null) {
      continue;
    }

    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }

    var markup = null;

    if (isCustomComponent$1) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }

    if (markup) {
      ret += ' ' + markup;
    }
  } // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.


  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }

  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    {
      {
        throw Error( (getComponentName(type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null." );
      }
    }
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;

    {
      pushElementToDebugStack(element);
    }

    if (typeof Component !== 'function') {
      break;
    }

    processChild(element, Component);
  } // Extra closure so queue and replace can be captured properly


  function processChild(element, Component) {
    var isClass = shouldConstruct$1(Component);
    var publicContext = processContext(Component, context, threadID, isClass);
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }

        queue.push(currentPartialState);
      }
    };
    var inst;

    if (isClass) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUninitializedState[componentName]) {
              error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);

              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);

              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);

            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }

      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      {
        // Support for module components is deprecated and is removed behind a flag.
        // Whether or not it would crash later, we want to show a good message in DEV first.
        if (inst != null && inst.render != null) {
          var _componentName3 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutModulePatternComponent[_componentName3]) {
            error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);

            didWarnAboutModulePatternComponent[_componentName3] = true;
          }
        }
      } // If the flag is on, everything is assumed to be a function component.
      // Otherwise, we also do the unfortunate dynamic checks.


      if ( inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;
    var initialState = inst.state;

    if (initialState === undefined) {
      inst.state = initialState = null;
    }

    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if ( inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName4 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
              warn( // keep this warning in sync with ReactStrictModeWarning.js
              'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);

              didWarnAboutDeprecatedWillMount[_componentName4] = true;
            }
          }
        } // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.


        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }

      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }

      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;

          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];

            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }

          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }

    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }

    validateRenderResult(child, Component);
    var childContext;

    {
      if (typeof inst.getChildContext === 'function') {
        var _childContextTypes = Component.childContextTypes;

        if (typeof _childContextTypes === 'object') {
          childContext = inst.getChildContext();

          for (var contextKey in childContext) {
            if (!(contextKey in _childContextTypes)) {
              {
                throw Error( (getComponentName(Component) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes." );
              }
            }
          }
        } else {
          {
            error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
          }
        }
      }

      if (childContext) {
        context = _assign({}, context, childContext);
      }
    }
  }

  return {
    child: child,
    context: context
  };
}

var ReactDOMServerRenderer = /*#__PURE__*/function () {
  // TODO: type this more strictly:
  // DEV-only
  function ReactDOMServerRenderer(children, makeStaticMarkup, options) {
    var flatChildren = flattenTopLevelChildren(children);
    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };

    {
      topFrame.debugElementStack = [];
    }

    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0; // Context (new API)

    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = []; // useOpaqueIdentifier ID

    this.uniqueID = 0;
    this.identifierPrefix = options && options.identifierPrefix || '';

    {
      this.contextProviderStack = [];
    }
  }

  var _proto = ReactDOMServerRenderer.prototype;

  _proto.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      freeThreadID(this.threadID);
    }
  }
  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */
  ;

  _proto.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;

    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    } // Mutate the current value.


    context[threadID] = provider.props.value;
  };

  _proto.popProvider = function popProvider(provider) {
    var index = this.contextIndex;

    {
      if (index < 0 || provider !== this.contextProviderStack[index]) {
        error('Unexpected pop.');
      }
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.

    this.contextStack[index] = null;
    this.contextValueStack[index] = null;

    {
      this.contextProviderStack[index] = null;
    }

    this.contextIndex--; // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.

    context[this.threadID] = previousValue;
  };

  _proto.clearProviders = function clearProviders() {
    // Restore any remaining providers on the stack to previous values
    for (var index = this.contextIndex; index >= 0; index--) {
      var context = this.contextStack[index];
      var previousValue = this.contextValueStack[index];
      context[this.threadID] = previousValue;
    }
  };

  _proto.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevPartialRenderer = currentPartialRenderer;
    setCurrentPartialRenderer(this);
    var prevDispatcher = ReactCurrentDispatcher$1.current;
    ReactCurrentDispatcher$1.current = Dispatcher;

    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;

      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }

        var frame = this.stack[this.stack.length - 1];

        if (suspended || frame.childIndex >= frame.children.length) {
          var footer = frame.footer;

          if (footer !== '') {
            this.previousWasTextNode = false;
          }

          this.stack.pop();

          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

              var fallbackFrame = frame.fallbackFrame;

              if (!fallbackFrame) {
                {
                  throw Error( true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : 0);
                }
              }

              this.stack.push(fallbackFrame);
              out[this.suspenseDepth] += '<!--$!-->'; // Skip flushing output since we're switching to the fallback

              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          } // Flush output


          out[this.suspenseDepth] += footer;
          continue;
        }

        var child = frame.children[frame.childIndex++];
        var outBuffer = '';

        if (true) {
          pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

          frame.debugElementStack.length = 0;
        }

        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (err != null && typeof err.then === 'function') {
            if (enableSuspenseServerRenderer) {
              if (!(this.suspenseDepth > 0)) {
                {
                  throw Error( true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : 0);
                }
              }

              suspended = true;
            } else {
              if (true) {
                {
                  throw Error( true ? "ReactDOMServer does not yet support Suspense." : 0);
                }
              }
            }
          } else {
            throw err;
          }
        } finally {
          if (true) {
            popCurrentDebugStack();
          }
        }

        if (out.length <= this.suspenseDepth) {
          out.push('');
        }

        out[this.suspenseDepth] += outBuffer;
      }

      return out[0];
    } finally {
      ReactCurrentDispatcher$1.current = prevDispatcher;
      setCurrentPartialRenderer(prevPartialRenderer);
      resetHooksState();
    }
  };

  _proto.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;

      if (text === '') {
        return '';
      }

      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }

      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }

      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;

          if (!($$typeof !== REACT_PORTAL_TYPE)) {
            {
              throw Error( "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." );
            }
          } // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.


          {
            {
              throw Error( "Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue." );
            }
          }
        }

        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };

        {
          frame.debugElementStack = [];
        }

        this.stack.push(frame);
        return '';
      } // Safe because we just checked it's an element.


      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        // TODO: LegacyHidden acts the same as a fragment. This only works
        // because we currently assume that every instance of LegacyHidden is
        // accompanied by a host component wrapper. In the hidden mode, the host
        // component is given a `hidden` attribute, which ensures that the
        // initial HTML is not visible. To support the use of LegacyHidden as a
        // true fragment, without an extra DOM node, we would have to hide the
        // initial HTML in some other way.
        case REACT_LEGACY_HIDDEN_TYPE:
        case REACT_DEBUG_TRACING_MODE_TYPE:
        case REACT_STRICT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_SUSPENSE_LIST_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);

            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };

            {
              _frame.debugElementStack = [];
            }

            this.stack.push(_frame);
            return '';
          }

        case REACT_SUSPENSE_TYPE:
          {
            {
              {
                {
                  throw Error( "ReactDOMServer does not yet support Suspense." );
                }
              }
            }
          }
        // eslint-disable-next-line-no-fallthrough

        case REACT_SCOPE_TYPE:
          {

            {
              {
                throw Error( "ReactDOMServer does not yet support scope components." );
              }
            }
          }
      }

      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;

              var _nextChildren5;

              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren5 = elementType.render(element.props, element.ref);
              _nextChildren5 = finishHooks(elementType.render, element.props, _nextChildren5, element.ref);
              _nextChildren5 = toArray(_nextChildren5);
              var _frame5 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame5.debugElementStack = [];
              }

              this.stack.push(_frame5);
              return '';
            }

          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren6 = [React.createElement(elementType.type, _assign({
                ref: _element.ref
              }, _element.props))];
              var _frame6 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame6.debugElementStack = [];
              }

              this.stack.push(_frame6);
              return '';
            }

          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;

              var _nextChildren7 = toArray(nextProps.children);

              var _frame7 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren7,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame7.debugElementStack = [];
              }

              this.pushProvider(provider);
              this.stack.push(_frame7);
              return '';
            }

          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.

              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;

                      error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }

              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren8 = toArray(_nextProps.children(nextValue));

              var _frame8 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren8,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame8.debugElementStack = [];
              }

              this.stack.push(_frame8);
              return '';
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_FUNDAMENTAL_TYPE:
            {

              {
                {
                  throw Error( "ReactDOMServer does not yet support the fundamental API." );
                }
              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_LAZY_TYPE:
            {
              var _element2 = nextChild;
              var lazyComponent = nextChild.type; // Attempt to initialize lazy component regardless of whether the
              // suspense server-side renderer is enabled so synchronously
              // resolved constructors are supported.

              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              var result = init(payload);
              var _nextChildren10 = [React.createElement(result, _assign({
                ref: _element2.ref
              }, _element2.props))];
              var _frame10 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren10,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame10.debugElementStack = [];
              }

              this.stack.push(_frame10);
              return '';
            }
        }
      }

      var info = '';

      {
        var owner = nextElement._owner;

        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }

        var ownerName = owner ? getComponentName(owner) : null;

        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }

      {
        {
          throw Error( "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info );
        }
      }
    }
  };

  _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();
    var namespace = parentNamespace;

    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        if (tag !== element.type) {
          error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type);
        }
      }
    }

    validateDangerousTag(tag);
    var props = element.props;

    if (tag === 'input') {
      {
        checkControlledValueProps('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

          didWarnDefaultChecked = true;
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        checkControlledValueProps('textarea', props);

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;

      if (initialValue == null) {
        var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

        var textareaChildren = props.children;

        if (textareaChildren != null) {
          {
            error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }

          if (!(defaultValue == null)) {
            {
              throw Error( "If you supply `defaultValue` on a <textarea>, do not pass children." );
            }
          }

          if (Array.isArray(textareaChildren)) {
            if (!(textareaChildren.length <= 1)) {
              {
                throw Error( "<textarea> can only have at most one child." );
              }
            }

            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }

        if (defaultValue == null) {
          defaultValue = '';
        }

        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        checkControlledValueProps('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];

          if (props[propName] == null) {
            continue;
          }

          var isArray = Array.isArray(props[propName]);

          if (props.multiple && !isArray) {
            error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

          didWarnDefaultSelectValue = true;
        }
      }

      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);

      if (selectValue != null) {
        var value;

        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }

        selected = false;

        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);
    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';

    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }

    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);

    if (innerMarkup != null) {
      children = [];

      if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }

      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }

    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };

    {
      frame.debugElementStack = [];
    }

    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */

function renderToString(element, options) {
  var renderer = new ReactDOMServerRenderer(element, false, options);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}
/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */

function renderToStaticMarkup(element, options) {
  var renderer = new ReactDOMServerRenderer(element, true, options);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead." );
    }
  }
}

function renderToStaticNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead." );
    }
  }
}

exports.renderToNodeStream = renderToNodeStream;
exports.renderToStaticMarkup = renderToStaticMarkup;
exports.renderToStaticNodeStream = renderToStaticNodeStream;
exports.renderToString = renderToString;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/server.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dom/server.browser.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./blocks/blocks.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formats */ "./blocks/formats/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./blocks/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flickity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flickity */ "./blocks/flickity/index.js");
/* harmony import */ var _common_appearance_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/appearance-controls */ "./blocks/common/appearance-controls.js");
/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonial */ "./blocks/testimonial/index.js");
/* harmony import */ var _testimonial_list_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testimonial/list/index */ "./blocks/testimonial/list/index.js");
/* harmony import */ var _testimonial_embed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonial/embed */ "./blocks/testimonial/embed.js");
/* harmony import */ var _testimonial_author__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./testimonial/author */ "./blocks/testimonial/author.js");
/* harmony import */ var _testimonial_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testimonial/rating */ "./blocks/testimonial/rating.js");
/* harmony import */ var _product_price__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/price */ "./blocks/product/price.js");
/* harmony import */ var _product_addtocart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/addtocart */ "./blocks/product/addtocart.js");
/* harmony import */ var _product_stock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/stock */ "./blocks/product/stock.js");
/* harmony import */ var _product_rating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/rating */ "./blocks/product/rating.js");
/* harmony import */ var _call_us__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./call-us */ "./blocks/call-us/index.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./card */ "./blocks/card/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icon */ "./blocks/icon/index.js");
/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bullet */ "./blocks/bullet/index.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile */ "./blocks/profile/index.js");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stats */ "./blocks/stats/index.js");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./collapse */ "./blocks/collapse/index.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./map */ "./blocks/map/index.js");
/* harmony import */ var _iter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./iter */ "./blocks/iter/index.js");
/* harmony import */ var _warranty__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./warranty */ "./blocks/warranty/index.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./hero */ "./blocks/hero/index.js");
/* harmony import */ var _publication__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./publication */ "./blocks/publication/index.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./grid */ "./blocks/grid/index.js");
/* harmony import */ var _icon_paragraph__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./icon-paragraph */ "./blocks/icon-paragraph/index.js");
/* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./countdown */ "./blocks/countdown/index.js");
/* harmony import */ var _trust__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./trust */ "./blocks/trust/index.js");
/* global wp */

/* global lodash */

/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

/**
 * WordPress dependencies
 */
const {
  registerBlockType
} = wp.blocks;
/**
 * Internal dependencies
 */






























wp.hooks.addFilter('blocks.registerBlockType', 'svbk/appearance-controls', _common_appearance_controls__WEBPACK_IMPORTED_MODULE_3__["default"], 100);
[// Common blocks are grouped at the top to prioritize their display
// in various contexts — like the inserter and auto-complete components.
_testimonial__WEBPACK_IMPORTED_MODULE_4__, _testimonial_embed__WEBPACK_IMPORTED_MODULE_6__, _testimonial_list_index__WEBPACK_IMPORTED_MODULE_5__, _testimonial_rating__WEBPACK_IMPORTED_MODULE_8__, _testimonial_author__WEBPACK_IMPORTED_MODULE_7__, _product_price__WEBPACK_IMPORTED_MODULE_9__, _product_addtocart__WEBPACK_IMPORTED_MODULE_10__, _product_rating__WEBPACK_IMPORTED_MODULE_12__, _product_stock__WEBPACK_IMPORTED_MODULE_11__, _call_us__WEBPACK_IMPORTED_MODULE_13__, _card__WEBPACK_IMPORTED_MODULE_14__, _icon__WEBPACK_IMPORTED_MODULE_15__, _bullet__WEBPACK_IMPORTED_MODULE_16__, _profile__WEBPACK_IMPORTED_MODULE_17__, _stats__WEBPACK_IMPORTED_MODULE_18__, _collapse__WEBPACK_IMPORTED_MODULE_19__, _map__WEBPACK_IMPORTED_MODULE_20__, _iter__WEBPACK_IMPORTED_MODULE_21__, _warranty__WEBPACK_IMPORTED_MODULE_22__, _hero__WEBPACK_IMPORTED_MODULE_23__, _publication__WEBPACK_IMPORTED_MODULE_24__, _grid__WEBPACK_IMPORTED_MODULE_25__, _icon_paragraph__WEBPACK_IMPORTED_MODULE_26__, _countdown__WEBPACK_IMPORTED_MODULE_27__, _trust__WEBPACK_IMPORTED_MODULE_28__].forEach(block => {
  if (!block) {
    return;
  }

  const {
    name,
    settings
  } = block;
  registerBlockType(name, settings);
});
}();
/******/ })()
;
//# sourceMappingURL=blocks.js.map