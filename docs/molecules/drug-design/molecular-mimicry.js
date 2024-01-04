Promise.all([
    stage.loadFile("./../../molecules/drug-design/molecular-mimicry.mol2").then(function (o) {
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0 and not hydrogen',color:'white'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/1 and not hydrogen',color:'skyblue'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
