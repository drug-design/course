Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/nicotinic-agonists.mol2").then(function (o) {
       o.setRotation([ 0, 0, 2.0])
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/0',color:'element'})
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/1',color:'element'})
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/2',color:'element'})
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/3',color:'element'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})

