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

  setTimeout(() => {
    // Calculate the center of the bounding box of the superimposed structures
    let box = ol[0].structure.getBoundingBox();
    let center = box.getCenter().clone();
    stage.animationControls.move(center, 0); // Instantly move the center of rotation to the new center
    setTimeout(() => {
      let currentPosition = stage.viewer.camera.position;
      let zoomFactor = 0.3; 
      let newPosition = currentPosition.multiplyScalar(zoomFactor);
      stage.viewer.camera.position.copy(newPosition);
      stage.viewer.requestRender();
    }, 100); 
  }, 100);
})
