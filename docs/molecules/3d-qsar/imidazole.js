Promise.all([
    stage.loadFile("./../../molecules/3d-qsar/imidazole.mol2").then(function (o) {

       var atomPair = [      
         ['1:A.H1/3','1:A.N3/4'],
         ['1:A.N1/1','4:D.OH/0'],
         [ '1:A.H38/1', '1:A.L1/5']
       ]
      o.addRepresentation('line', {multipleBond: 'symetric',sele:'/0 and not hydrogen',color:'gray'})
      o.addRepresentation('line', {multipleBond: 'symetric',color:'element',sele:'/5'})      
      o.addRepresentation('line', {multipleBond: 'symetric',sele:'/3 and (not hydrogen or 1:A.H1/3)',color:'element'})
      o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/2 and not hydrogen',color:'red'})
      o.addRepresentation('licorice', {multipleBond: 'symmetric',sele: '/1 and (not hydrogen or 1:A.H38/1)',color: 'lime'});
      o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/4 and not hydrogen',color:'skyblue'})
      o.addRepresentation('distance', {
        atomPair: atomPair,
        color: 'white',
        labelUnit: 'angstrom',
        labelVisible: false,
      })

      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
