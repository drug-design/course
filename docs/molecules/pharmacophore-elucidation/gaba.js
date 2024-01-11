Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/gaba.mol2").then(function (o) {
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0 and not hydrogen',color:'white'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/1 and not hydrogen',color:'skyblue'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/2 and not hydrogen',color:'orange'})

      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})