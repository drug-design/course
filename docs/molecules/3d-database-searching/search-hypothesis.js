Promise.all([
    stage.loadFile("./../../molecules/3d-database-searching/search-hypothesis.mol2").then(function (o) {
       o.addRepresentation('licorice', {multipleBond: 'symetric',color:'element', sele:'not Hydrogen or 1:A.H71'})
       o.addRepresentation('hyperball', {multipleBond: 'symetric',color:'yellow',sele: '1:A.C1',radiusScale:0.3})
       o.addRepresentation('hyperball', {multipleBond: 'symetric',color:'yellow',sele: '1:A.C2',radiusScale:0.3})
       o.addRepresentation('hyperball', {multipleBond: 'symetric',color:'yellow',sele: '1:A.C3',radiusScale:0.3})
       o.addRepresentation('hyperball', {multipleBond: 'symetric',color:'yellow',sele: '1:A.C4',radiusScale:0.3})
       o.addRepresentation('hyperball', {multipleBond: 'symetric',color:'yellow',sele: '1:A.C5',radiusScale:0.3})
       o.addRepresentation('hyperball', {multipleBond: 'symetric',color:'yellow',sele: '1:A.C6',radiusScale:0.3})
       o.addRepresentation('hyperball', {multipleBond: 'symetric',color:'blue',sele: '1:A.N9',radiusScale:0.4})
      return o
    }),
  ]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.6)
})
