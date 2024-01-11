Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/reference-mimic.sd").then(function (o) {
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0',color:'white'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/1',color:'skyblue'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
