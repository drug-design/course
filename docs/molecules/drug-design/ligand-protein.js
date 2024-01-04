Promise.all([
    stage.loadFile("./../../molecules/drug-design/ligand-protein.mol2").then(function (o) {
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'not hydrogen',color:'blue'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'ligand',color:'white'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
