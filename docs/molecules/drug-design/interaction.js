Promise.all([
    stage.loadFile("./../../molecules/drug-design/interaction.pdb").then(function (o) {
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0 and not hydrogen',color:'white'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/1',color:'orange'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/2',color:'skyblue'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
