Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-examples/new-ace-inhibitors.mol2").then(function (o) {
       o.setRotation([ 3.1, 0.5, 1.7])
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0 and not hydrogen',color:'element'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/1 and not hydrogen',color:'element'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.5)
})