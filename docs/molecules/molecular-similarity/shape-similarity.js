//file = "./../../molecules/molecular-similarity/shape-similarity.sd"

// Code for example: test/superposition
Promise.all([
    stage.loadFile("./../../molecules/molecular-similarity/shape-similarity-treloxinate.sd").then(function (o) {
      o.addRepresentation("licorice")
      o.setPosition([5 * 1.54, 0, 0]);
        o.addRepresentation("surface", {
            surfaceType: "ms",
            smooth: 2,
            probeRadius: 1.4,
            scaleFactor: 2.0,
            flatShaded: false,
            opacity: 0.7,
            lowResolution: false,
            colorScheme: "element"
          })
      return o
    }),
  
    stage.loadFile("./../../molecules/molecular-similarity/shape-similarity-ru25961.sd").then(function (o) {
      o.addRepresentation("licorice")
      o.addRepresentation("surface", {
        surfaceType: "ms",
        smooth: 2,
        probeRadius: 1.4,
        scaleFactor: 2.0,
        flatShaded: false,
        opacity: 0.3,
        lowResolution: false,
        colorScheme: "element"
      })
      return o
    })
  ]).then(function (ol) {
    stage.autoView();
    stage.viewerControls.zoom(0.4)
  })
