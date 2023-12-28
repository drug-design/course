Promise.all([
  stage.loadFile("./../../molecules/peptidomimetics/aim.sd").then(function (o) {
    // in degree radian 90 degrees is equivalent to approximately 1.5708 radians
    o.setRotation([ 0.09, 0, 1.5 ])
    o.addRepresentation("licorice", {sele:"* and not hydrogen"})
    return o
  })
]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
