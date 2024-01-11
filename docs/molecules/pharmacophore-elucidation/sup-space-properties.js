Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/sup-space-properties.mol2").then(function (o) {
      o.setRotation([ 0, 3, 0])
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0',color:'element'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/1',color:'element'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.5)
})