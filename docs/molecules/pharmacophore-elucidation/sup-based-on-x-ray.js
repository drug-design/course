Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/sup-based-on-x-ray.mol2").then(function (o) {
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0',color:'red'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/1',color:'white'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})

