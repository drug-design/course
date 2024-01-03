Promise.all([
    stage.loadFile("./../../molecules/3d-database-searching/corina.sd").then(function (o) {
       o.addRepresentation('licorice', {color:'skyblue',sele:'/0 and not hydrogen'})
       o.addRepresentation('licorice', {color:'white',sele:'/1 and not hydrogen'})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.3)
})
