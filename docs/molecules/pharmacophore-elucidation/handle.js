Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/handle.mol2").then(function (o) {
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/0',color:'element'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})

