;(function(window, document, undefined) {

  var Map = function(id) {
    this.id = id;
    this.map = null;

    this.init();
  };

  Map.prototype.init = function() {
    this.map = L.map(this.id, {
        center: [-33.3324011, -60.23065519999999],
        zoom: 13
    });
  };

  Map.prototype.addLayer = function(layer) {
    L.tileLayer(layer).addTo(this.map);
  };

  window.Map = Map;

})(window, document);