Promise.all([
    stage.loadFile("./../../molecules/drug-design/mimicry.mol2").then(function (o) {
      o.setRotation([ 1.5, -0.1, 2.9])
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0 and not hydrogen',color:'blue'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/1 and not hydrogen',color:'element'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
