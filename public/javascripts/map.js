;(function(window, document, $, undefined) {

  var Map = function(id) {
    this.id = id;
    this.map = null;

    this.init();

    //events
    this.map.on('locationfound', this.onLocationFound.bind(this));
    this.map.on('click', this.onMapClick.bind(this));
  };

  Map.prototype.init = function() {
    this.map = L.map(this.id, {
        center: [-33.3324011, -60.23065519999999],
        zoom: 15
    });
  };

  Map.prototype.addTileLayer = function(layer) {
    L.tileLayer(layer).addTo(this.map);
  };

  Map.prototype.geolocate = function() {
    this.map.locate();
  };

  Map.prototype.onLocationFound = function(e) {
    var position = e.latlng;
    var marker = L.marker([position.lat, position.lng]).addTo(this.map);
  };

  Map.prototype.onMapClick = function(e) {
    var position = e.latlng;
    var marker = L.marker([position.lat, position.lng]);
    $('#newdon-modal').modal();
  };

  window.Map = Map;

})(window, document, jQuery);