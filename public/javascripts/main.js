var app = {};

$('document').ready(onDocumentReady);

function onDocumentReady() {
  app.map = new Map('map');
  app.map.addLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
}