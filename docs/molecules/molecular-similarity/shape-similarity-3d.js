Promise.all([
  stage.loadFile("./../../molecules/molecular-similarity/shape-similarity-treloxinate.sd").then(function (o) {
    o.addRepresentation("licorice")
    return o
  }),

  stage.loadFile("./../../molecules/molecular-similarity/shape-similarity-ru25961.sd").then(function (o) {
    o.addRepresentation("licorice")
    return o
  })
]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
