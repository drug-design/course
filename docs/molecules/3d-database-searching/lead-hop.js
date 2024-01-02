Promise.all([
  stage.loadFile("./../../molecules/3d-database-searching/lead-hop.sd").then(function (o) {
     o.addRepresentation('ball+stick', {multipleBond: 'symetric',color:'yellow', sele:'/0 and not hydrogen'})
     o.addRepresentation('ball+stick', {multipleBond: 'symetric',color:'element',sele: '/1 and not hydrogen'})
    return o
  }),
]).then(function (ol) {
stage.autoView();
stage.viewerControls.zoom(0.4)
})
