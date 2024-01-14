Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-examples/ace-captopril.mol2").then(function (o) {
       o.setRotation([2.0, 1.5, 0])
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0',color:'element'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})