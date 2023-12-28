Promise.all([
  stage.loadFile("./../../molecules/3d-qsar/ele-contour-map-analysis-1.sd").then(function (o) {
    o.addRepresentation("licorice",{color: 'skyblue'})
    return o
  }),
  stage.loadFile("./../../molecules/3d-qsar/ele-contour-map-analysis-2.sd").then(function (o) {
    o.addRepresentation("licorice",{color: 'element'})
    return o
  }),
  stage.loadFile("./../../molecules/3d-qsar/ele-contour-map-analysis-3.sd").then(function (o) {
    o.addRepresentation("licorice",{color: 'red'})
    return o
  })
]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
