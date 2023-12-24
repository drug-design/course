
Promise.all([
    stage.loadFile("./../../molecules/molecular-similarity/peptidomimetics-1.sd").then(function (o) {
        o.addRepresentation('licorice', {colorScheme: 'element'})
        return o;
    }),
    stage.loadFile("./../../molecules/molecular-similarity/peptidomimetics-2.sd").then(function (o) {
      o.addRepresentation('licorice', {colorScheme: 'element'})
        return o;
    })
]).then(function (ol) {
    stage.autoView();
    setTimeout(() => {
      let currentPosition = stage.viewer.camera.position;
      let zoomFactor = 0.6; 
      let newPosition = currentPosition.multiplyScalar(zoomFactor);
      stage.viewer.camera.position.copy(newPosition);
      stage.viewer.requestRender();
  }, 100); 
});
