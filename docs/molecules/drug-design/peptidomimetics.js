Promise.all([
    stage.loadFile("./../../molecules/drug-design/peptidomimetics.mol2").then(function (o) {
       o.setRotation([ 0.09, -0.2, 1.6 ])
       o.addRepresentation('ball+stick', {multipleBond: 'symetric',sele:'not hydrogen',color:'element'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
