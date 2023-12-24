Promise.all([
  stage.loadFile("./../../molecules/molecular-similarity/maximizing-similarity-after-1.sd").then(function (o) {
    o.addRepresentation("ball+stick",{color:'green'})
    return o
  }),

  stage.loadFile("./../../molecules/molecular-similarity/maximizing-similarity-after-2.sd").then(function (o) {
    o.addRepresentation("ball+stick",{color:'red'})
    return o
  })
]).then(function (ol) {
  stage.autoView();
  setTimeout(() => {
    let currentPosition = stage.viewer.camera.position;
    let zoomFactor = 0.7; 
    let newPosition = currentPosition.multiplyScalar(zoomFactor);
    stage.viewer.camera.position.copy(newPosition);
    stage.viewer.requestRender();
}, 100); 
})
