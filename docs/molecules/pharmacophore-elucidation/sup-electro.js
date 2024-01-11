Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/sup-electro.mol2").then(function (o) {
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/0',color:'element'})
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/1',color:'element'})
       o.addRepresentation('surface', {colorScheme: 'electrostatic',surfaceType: 'av',lazy: true, opacity: 0.3, color: 'element',sele:'/0' })
       o.addRepresentation('surface', {colorScheme: 'electrostatic',surfaceType: 'av',lazy: true, opacity: 0.3, color: 'element',sele:'/1' })
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
