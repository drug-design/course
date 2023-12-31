Promise.all([
    stage.loadFile("./../../molecules/3d-database-searching/3d-db-sup.sd").then(function (o) {
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/0',color:'element'})
       o.addRepresentation('line', {multipleBond: 'symetric',sele:'/1',color:'element'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
