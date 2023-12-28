Promise.all([
    stage.loadFile("./../../molecules/3d-qsar/imidazole.sd").then(function (o) {

      var atomPair = [      
        [ '1.L69/2', '1.N1/1' ],
        [ '1.N4/1', '1.L1/2' ]
      ]

      o.addRepresentation("line",{color: 'red',sele:'/0'})
      o.addRepresentation("line",{color: 'element',sele:'/1 and not hydrogen'})
      o.addRepresentation("line",{color: 'green',sele:'/2 and not hydrogen'})
      o.addRepresentation("line",{color: 'blue',sele:'/3'})
      o.addRepresentation("line",{color: 'orange',sele:'/4'})
      o.addRepresentation("line",{color: 'grey',sele:'/5'})
      o.addRepresentation('distance', {
        atomPair: atomPair,
        color: 'skyblue',
        labelUnit: 'angstrom',
        labelVisible: false,
      })

      return o
    })]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})


// Promise.all([
//   stage.loadFile("./../../molecules/3d-qsar/imidazole-1.sd").then(function (o) {
//     o.addRepresentation("licorice",{color: 'skyblue',sele:'* and not hydrogen'})
//     return o
//   }),
//   stage.loadFile("./../../molecules/3d-qsar/imidazole-2.sd").then(function (o) {
//     o.addRepresentation("licorice",{color: 'green',sele:'* and not hydrogen'})
//     return o
//   }),
//   stage.loadFile("./../../molecules/3d-qsar/imidazole-4.sd").then(function (o) {
//     o.addRepresentation("licorice",{color: 'red',sele:'* and not hydrogen'})
//     return o
//   }),
//   //cata
//   stage.loadFile("./../../molecules/3d-qsar/imidazole-3.sd").then(function (o) {
//     o.addRepresentation("line",{color: 'element'})
//     return o
//   }),
//   //heme
//   stage.loadFile("./../../molecules/3d-qsar/imidazole-5.sd").then(function (o) {
//     o.addRepresentation("line",{color: 'element'})
//     return o
//   }),      
// ]).then(function (ol) {
//   stage.autoView();
//   stage.viewerControls.zoom(0.4)
// })
