Promise.all([
    stage.loadFile("./../../molecules/pharmacophore-elucidation/sup-result.mol2").then(function (o) {
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
       o.addRepresentation('hyperball', {multipleBond: 'symetric',color:'yellow',sele: '1:A.N8/0 or 1:A.C7/0 or 1:A.C6/0',radiusScale:0.2})
       o.addRepresentation('hyperball', {multipleBond: 'symetric',color:'yellow',sele: '1:A.N18/1 or 1:A.C6/1 or 1:A.C2/1',radiusScale:0.2})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})

//o.setRotation([ 1.5, -0.1, 2.9])
//o.addRepresentation('ball+stick', {multipleBond: 'symetric',color:'element', sele:'/0 and not hydrogen'})
//o.addRepresentation('ball+stick', {multipleBond: 'symetric',color:'orange',sele: '/1 and not hydrogen'})
//o.addRepresentation('surface', {colorScheme: 'electrostatic',surfaceType: 'av',lazy: true, opacity: 0.3, color: 'white' })
//o.addRepresentation('licorice', {color:'skyblue',sele:'/0 and not hydrogen'})
//o.addRepresentation('licorice', {color:'white',sele:'/1 and not hydrogen'})
//o.addRepresentation('hyperball', {multipleBond: 'symetric',color:'yellow',sele: '1:A.C1',radiusScale:0.3})
//o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'/0 and not hydrogen',color:'rgb(169, 154, 122)'})
//o.addRepresentation('licorice', {multipleBond: 'symmetric',sele: '/1 and (not hydrogen or 1:A.H38/1)',color: 'lime'});
//o.addRepresentation('licorice', {multipleBond: 'symetric',sele:'ligand',color:'white'})


// var atomPair = [      
//   ['1:A.H1/3','1:A.N3/4'],
//   ['1:A.N1/1','4:D.OH/0'],
//   [ '1:A.H38/1', '1:A.L1/5']
// ]

// o.addRepresentation('distance', {
//   atomPair: atomPair,
//   color: 'white',
//   labelUnit: 'angstrom',
//   labelVisible: false,
// })


//center issue
// setTimeout(() => {
//   // Calculate the center of the bounding box of the superimposed structures
//   let box = ol[0].structure.getBoundingBox();
//   let center = box.getCenter().clone();
//   stage.animationControls.move(center, 0); // Instantly move the center of rotation to the new center
//   stage.viewerControls.zoom(0.5)
// }, 50);


// setTimeout(() => {
//   let currentPosition = stage.viewer.camera.position;
//   let zoomFactor = 0.7; 
//   let newPosition = currentPosition.multiplyScalar(zoomFactor);
//   stage.viewer.camera.position.copy(newPosition);
//   stage.viewer.requestRender();
// }, 100);