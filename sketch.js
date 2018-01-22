var MAIN = 1;
var PREVIEW = 2;
var PREVIEW_CAMERA_CLASS = "preview-camera";
var PREVIEW_CONTAINER_ID = "preview-container";
var FIGURE_ID_PREFIX = "camera-";
var CANVAS_ID_PREFIX = "canvas-";
var ITEM_CLASS = "preview-item";
var LABEL_CLASS = "preview-label";

var canvases = [];

//type of 1 is main, type of 2 is preview
function setup() {

  // Create main canvas
  var s = createSketch('main-canvas', MAIN);
  canvases.push(s);

  // Create preview canvases
  for(i in FILTERS) {
    s = createPreview(i);
    canvases.push(s);
  }
}

function draw() {

}

function createPreview(filterNum) {

  var filterClass   = FILTERS[filterNum].class;
  var filterName   = FILTERS[filterNum].name;
  var figureClasses = PREVIEW_CAMERA_CLASS + " " + filterClass;
  var figureId      = FIGURE_ID_PREFIX + filterClass;
  var canvasId      = CANVAS_ID_PREFIX + filterClass;

  // Create item element
  var item = document.createElement("div");
  item.setAttribute("class", ITEM_CLASS);

  // Create label element
  var label = document.createElement("div");
  label.setAttribute("class", LABEL_CLASS);
  label.setAttribute("data-content", filterName);

  // Create figure element
  var fig = document.createElement("figure");
  fig.setAttribute("class", figureClasses);
  fig.setAttribute("id", figureId);
  fig.setAttribute("data-filter", filterClass);

  // Create canvas element
  var canvasElement = document.createElement("div");
  canvasElement.setAttribute("id", canvasId);

  // Add the canvas element as a child to the figure element
  fig.appendChild(canvasElement);

  // Add the figure element as a child to the item element
  item.appendChild(fig);

  // Add the label element as a child to the item element
  item.appendChild(label);

  // Add the figure as a child to the preview container
  var previewContainer = document.getElementById(PREVIEW_CONTAINER_ID);
  previewContainer.appendChild(item);

  // Create the sketch
  return createSketch(canvasId, PREVIEW);
}
