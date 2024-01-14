Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-examples/dopamine-d1-agonist.mol2").then(function (o) {
       o.addRepresentation('line', {name: 'dopamine', multipleBond: 'symetric',sele:'/0',color:'element'})
       o.addRepresentation('line', {name: 'SKF75670',multipleBond: 'symetric',sele:'/1',color:'element'})
       o.addRepresentation('line', {name: 'fenoldopam',multipleBond: 'symetric',sele:'/2',color:'element'})
       o.addRepresentation('line', {name: 'A68930', multipleBond: 'symetric',sele:'/3',color:'element'})
       o.addRepresentation('line', {name: 'CY208243', multipleBond: 'symetric',sele:'/4',color:'element'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})