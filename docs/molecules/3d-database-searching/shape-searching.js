Promise.all([
    stage.loadFile("./../../molecules/3d-database-searching/shape-searching.mol2").then(function (o) {
       o.addRepresentation('licorice', {multipleBond: 'symetric',color:'element'})
       o.addRepresentation('surface', {colorScheme: 'electrostatic',surfaceType: 'av',lazy: true, opacity: 0.3, color: 'white' })
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.3)
})
