Promise.all([
  stage.loadFile("./../../molecules/3d-qsar/steric-contour-map-analysis-1.sd").then(function (o) {
    o.addRepresentation("licorice",{color: 'green'})
    return o
  }),
  stage.loadFile("./../../molecules/3d-qsar/steric-contour-map-analysis-2.sd").then(function (o) {
    o.addRepresentation("licorice",{color: 'element'})
    return o
  }),
  stage.loadFile("./../../molecules/3d-qsar/steric-contour-map-analysis-3.sd").then(function (o) {
    o.addRepresentation("licorice",{color: 'yellow'})
    return o
  })
]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
