Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/nicotinic-agonists.mol2").then(function (o) {
      o.setRotation([ 0, 0, 2.0])
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/0',color:'element'})
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/1',color:'element'})
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/2',color:'element'})
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/3',color:'element'})
       o.addRepresentation('surface', {colorScheme: 'electrostatic',sele: '/1 or /2 or /3',surfaceType: 'av',lazy: true, opacity: 0.3, color: 'green' })
       o.addRepresentation('surface', {colorScheme: 'electrostatic',sele: '1:A.O8/0 or 1:A.H12/0',surfaceType: 'av',lazy: true, opacity: 0.2, color: 'red' })
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})






