function addMarkersAndSetViewBounds() {
  var group = new H.map.Group();
  var pngIcon = new H.map.Icon("../pin.png",{size:{w:48,h:48}});

  // add markers to the group
  coords.forEach((el)=> {
    group.addObjects([new H.map.Marker({lat:el[0],lng:el[1]},{icon:pngIcon})]);
  })
  map.addObject(group);

  // get geo bounding box for the group and set it to the map
  map.getViewModel().setLookAtData({
    bounds: group.getBoundingBox()
  });
}

// Initialize communication with the platform
var platform = new H.service.Platform({
  apikey: window.apikey
});
var defaultLayers = platform.createDefaultLayers();

//Initialize a map
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:-33.8696, lng:151.20691},
  zoom: 5,
  pixelRatio: window.devicePixelRatio || 1
});

// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

// Make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
//behavior.disable(H.mapevents.Behavior.WHEELZOOM);
//behavior.disable(H.mapevents.Behavior.PINCH_ZOOM);
//behavior.disable(H.mapevents.Behavior.DBL_TAP_ZOOM);
//behavior.disable(H.mapevents.Behavior.DRAGGING);

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map
addMarkersAndSetViewBounds(map);
