Promise.all([
  stage.loadFile("./../../molecules/molecular-similarity/receptor-conformational-change-renin-1.pdb",{name: 'renin-red'}).then(function (o) {
    o.addRepresentation("backbone",{color:"red"})
    o.addRepresentation("licorice",{color:'pink',sele: 'TYR and 75'})
        return o
  }),

  stage.loadFile("./../../molecules/molecular-similarity/receptor-conformational-change-renin-2.pdb",{name: 'renin-blue'}).then(function (o) {
    o.addRepresentation("backbone",{color:"blue"})
    o.addRepresentation("licorice",{color:'skyblue',sele: 'TYR and 83'})
    return o
  }),

  stage.loadFile("./../../molecules/molecular-similarity/receptor-conformational-change-renin-ligand.sd",{name: 'lig'}).then(function (o) {
    o.addRepresentation("licorice",{color:"yellow"})
    return o
  })
]).then(function (ol) {
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
