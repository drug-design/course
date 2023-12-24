Promise.all([
  stage.loadFile("./../../molecules/molecular-similarity/shape-similarity-treloxinate.sd").then(function (o) {
    o.addRepresentation("licorice")
    return o
  }),

  stage.loadFile("./../../molecules/molecular-similarity/shape-similarity-ru25961.sd").then(function (o) {
    o.addRepresentation("licorice")
    return o
  })
]).then(function (ol) {
  var sp = new NGL.Superposition(ol[0].structure, ol[1].structure)
  sp.transform(ol[0].structure)
  ol[0].updateRepresentations({ "position": true })
  console.log(sp)
  //ol[1].autoView()
  stage.autoView();
  stage.viewerControls.zoom(0.4)
})
