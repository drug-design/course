Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-examples/mdl-72832.mol2").then(function (o) {
       o.setRotation([0, 0, 1])
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0',color:'element'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.5)
})
