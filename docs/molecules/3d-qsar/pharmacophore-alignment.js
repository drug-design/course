Promise.all([
    stage.loadFile("./../../molecules/3d-qsar/pharmacophore-alignment.mol2").then(function (o) {
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/0 and not hydrogen',color:'blue'})
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/1 and not hydrogen',color:'green'})
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/2 and not hydrogen',color:'yellow'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
