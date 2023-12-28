Promise.all([
  stage.loadFile("./../../molecules/3d-qsar/shape-alignment-1.sd").then(function (o) {
    o.addRepresentation("licorice",{color: 'skyblue'})
    o.addRepresentation("surface", {
        colorScheme: 'electrostatic',
        surfaceType: 'av',
        lazy: true,
        opacity: 0.5,
        color: 'skyblue'
      })
    return o
  }),
  stage.loadFile("./../../molecules/3d-qsar/shape-alignment-2.sd").then(function (o) {
    o.addRepresentation("licorice",{color: 'yellow'})
    o.addRepresentation("surface", {
      colorScheme: 'electrostatic',
      surfaceType: 'av',
      lazy: true,
      opacity: 0.5,
      color: 'yellow'
    })
    return o
  }),
]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
