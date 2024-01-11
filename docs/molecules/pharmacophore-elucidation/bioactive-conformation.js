Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/bioactive-conformation.mol2").then(function (o) {
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0',color:'orange'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/1',color:'blue'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})

