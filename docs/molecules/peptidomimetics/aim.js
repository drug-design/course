Promise.all([
  stage.loadFile("./../../molecules/peptidomimetics/aim.sd").then(function (o) {
    o.addRepresentation("licorice")
    return o
  })
]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
