Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/misuse-sup.mol2").then(function (o) {
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0',color:'element'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/1',color:'element'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
