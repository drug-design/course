Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/super-technique.mol2").then(function (o) {

      o.setRotation([ 1.0, -0.1, 1.9])
      var atomPair = [      
        ['1:A.N8/0','1:A.N18/1'],
        ['1:A.C7/0','1:A.C6/1'],
        ['1:A.C6/0','1:A.C2/1'],
      ]
      o.addRepresentation('distance', {
        atomPair: atomPair,
        color: 'white',
        labelUnit: 'angstrom',
        labelVisible: false,
      })
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0 and not hydrogen',color:'element'})
       o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/1 and not hydrogen',color:'element'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
